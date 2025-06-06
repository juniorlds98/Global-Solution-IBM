import requests
import xml.etree.ElementTree as ET
from unidecode import unidecode

import sys
from selenium import webdriver
from selenium.common.exceptions import UnexpectedAlertPresentException, WebDriverException
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC

from bs4 import BeautifulSoup
import pandas as pd
import re
import json


from datetime import datetime, timedelta
import json
import os

DATA_FILE = os.path.join("Back End", "docs", "sensor_data.json")
DIST_THRESHOLD = 1.0
TIME_THRESHOLD = timedelta(minutes=5)
HISTORY_LIMIT = timedelta(hours=24)

def load_data():
    os.makedirs(os.path.dirname(DATA_FILE), exist_ok=True)
    if not os.path.exists(DATA_FILE):
        return []
    with open(DATA_FILE, "r") as f:
        return json.load(f)

def save_data(data):
    with open(DATA_FILE, "w") as f:
        json.dump(data, f, indent=4)

def process_sensor_data(distancia: float) -> dict:
    now = datetime.utcnow()
    data = load_data()

    # Filtrar apenas dados das últimas 24h
    data = [
        entry for entry in data
        if datetime.fromisoformat(entry["timestamp"]) >= now - HISTORY_LIMIT
    ]

    if data:
        last_entry = data[-1]
        last_time = datetime.fromisoformat(last_entry["timestamp"])
        last_dist = last_entry["distancia_cm"]
        last_dist = last_entry["distancia_cm"]

        if now - last_time < TIME_THRESHOLD and abs(distancia - last_dist) < DIST_THRESHOLD:
            return {"message": "Sem alteração significativa"}

        if now - last_time < TIME_THRESHOLD:
            data[-1] = {"timestamp": now.isoformat(), "distancia_cm": distancia, "localidade":  "sp"}
        else:
            data.append({"timestamp": now.isoformat(), "distancia_cm": distancia, "localidade":  "sp"})
    else:
        data.append({"timestamp": now.isoformat(), "distancia_cm": distancia, "localidade":  "sp"})

    save_data(data)
    return {"message": "Registrado com sucesso"}
    
def normalizar_nome(nome):
    return unidecode(nome.strip().lower())
def obter_clima_cptec_por_cidade(cidade):
    print('service')
    cidade_norm = normalizar_nome(cidade)

    url_lista = f"http://servicos.cptec.inpe.br/XML/listaCidades?city={cidade}"
    response = requests.get(url_lista)

    if response.status_code != 200:
        print("❌ Erro ao acessar a lista de cidades CPTEC.")
        print(response.text)
        return {"erro": "Falha ao buscar lista de cidades"}

    try:
        root = ET.fromstring(response.content)
    except ET.ParseError as e:
        print("❌ Erro ao parsear XML da lista de cidades.")
        print(response.text)
        return {"erro": "XML inválido"}

    codigo = None
    for cidade_xml in root.findall('cidade'):
        nome = normalizar_nome(cidade_xml.find('nome').text)
        if nome == cidade_norm:
            codigo = cidade_xml.find('id').text
            break

    if not codigo:
        return {"erro": f"Cidade '{cidade}' não encontrada na base CPTEC"}

    url_previsao = f"http://servicos.cptec.inpe.br/XML/cidade/{codigo}/previsao.xml"
    response = requests.get(url_previsao)

    if response.status_code != 200:
        return {"erro": "Erro ao buscar previsão"}

    try:
        root = ET.fromstring(response.content)
    except ET.ParseError:
        return {"erro": "XML de previsão inválido"}

    previsao = root.find('previsao')
    if previsao is None:
        return {"erro": "Previsão não encontrada"}
    sensor_data = []
    if os.path.exists("sensor_data.json"):
        with open("sensor_data.json", "r") as f:
            all_data = json.load(f)
            if all_data:
                sensor_data = all_data[-1] 
    clima = {
        "cidade": cidade,
        "estado": root.findtext('uf'),
        "data": previsao.findtext('dia'),
        "tempo": previsao.findtext('tempo'),
        "min": previsao.findtext('minima'),
        "max": previsao.findtext('maxima'),
        "iuv": previsao.findtext('iuv'),
        "sensor": sensor_data
    }
    return clima

def formatar_coluna(col):
    if isinstance(col, tuple):
        return '_'.join(
            re.sub(r"[^\w]", "", str(parte).strip().lower().replace(" ", "_"))
            for parte in col if parte and "unnamed" not in str(parte).lower()
        )
    else:
        return re.sub(r"[^\w]", "", str(col).strip().lower().replace(" ", "_"))
def obter_clima_inmet(cod):
    print('service')
    import sys
    from selenium import webdriver
    from selenium.webdriver.common.by import By
    from selenium.webdriver.support.ui import WebDriverWait
    from selenium.webdriver.support import expected_conditions as EC
    from selenium.common.exceptions import WebDriverException, UnexpectedAlertPresentException
    from bs4 import BeautifulSoup
    import pandas as pd
    import json
    import time

    sys.path.insert(0, '/usr/lib/chromium-browser/chromedriver')

    chrome_options = webdriver.ChromeOptions()
    #chrome_options.add_argument('--headless')
    chrome_options.add_argument('--no-sandbox')
    chrome_options.add_argument('--disable-dev-shm-usage')

    html_table = None  # Previne erro de variável não inicializada

    try:
        driver = webdriver.Chrome(options=chrome_options)
        driver.get(f"https://tempo.inmet.gov.br/TabelaEstacoes/{cod}")
        print("página aberta")
        try:
            time.sleep(8)
            print("pós espera")
            tabela = WebDriverWait(driver, 10).until(
                EC.visibility_of_element_located((By.CSS_SELECTOR, "table"))
            )
            print("✅ Conteúdo da tabela coletado")
            html_table = tabela.get_attribute('outerHTML')

        except UnexpectedAlertPresentException:
            print("⚠️ Alerta inesperado na página, não foi possível capturar a tabela.")
        except Exception as e:
            print(f"⚠️ Erro inesperado ao capturar a tabela: {e}")

    except WebDriverException as e:
        print(f"❌ Erro no WebDriver: {e}")

    finally:
        try:
            page_source = driver.page_source
            driver.quit()
        except:
            pass

        if not html_table:
            soup = BeautifulSoup(page_source, 'html.parser')
            table = soup.find('table')
            if table == None:
               return {"erro": "Não foi possível obter a tabela do site do INMET."}
        else:
            soup = BeautifulSoup(html_table, 'html.parser')
            table = soup.find('table')

        df = pd.read_html(str(table), header=[0, 1])[0]

        # Renomeia colunas conforme função `formatar_coluna`
        df.columns = [formatar_coluna(col) for col in df.columns]

        # Converte para JSON
        json_result = df.to_json(orient='records', force_ascii=False)
        return json.loads(json_result)