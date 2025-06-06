# 🚨 Projeto Alerta Rios

O projeto Alerta Rios é uma interface web focada em prever e anunciar alagamentos de acordo com sensores colocados em locais estratégicos de rios. Desenvolvida com Vite + Node.js, foi utilizado também o Bootstrap para componentes específicos e o TailwindCSS para estilizar as páginas web. O front ele permite tanto o controle visual e a gestão de itens como a Quantidade de Sensores, nível da água, clima, status dos sensores principais e muitas coisas mais.
# 🏁 Objetivo

Fornecer uma oportunidade fácil, responsiva e dinâmica para que as pessoas recebam alertas em seu celular e em qualquer plataforma sobre se a sua residência corre risco de alagamento e quando isso pode acontecer.
## Front End
### 🛰️ Tecnologias utilizadas

⚡ Vite - Build Tool moderna para front-end

🧵 TailwindCSS — Utilitários de estilização rápidos e reativos

🎨 Bootstrap — Componentes visuais pré-estilizados

🧠 React — Biblioteca para criação de interfaces

📁 React Router — Navegação entre páginas

### 📁 Estrutura de Diretórios

csharp/Copiar/Editar

```
├── public/                   # Assets públicos
├── src/
│   ├── assets/               # Imagens e ícones
│   ├── components/           # Componentes reutilizáveis (Header, Sidebar, etc.)
│   │   ├── cards/            # Informações reutilizáveis para gráficos de sessões específicas
│   │   ├── errors/           # Mennsagens de erro (Erro 401, 404)
│   ├── pages/                # Páginas principais do sistema
│   ├── App.css               # Estilização em todas as telas
│   ├── App.jsx               # Componente raiz
│   └── main.jsx              # Ponto de entrada Vite
├── index.html                # HTML principal
├── vite.config.js            # Configuração Vite
└── package.json              # Dependências e scripts
```
### 🚱 Funcionalidades do Front-end

🔐 Cadastro administrativo

🔐 Login administrativo com perfil e permissões

🚦 Dashboard com registro de sensores e da API do tempo

🗺️ Mapa para marcação e sinalização de novos pontos

### 🖥️ Responsividade

A interface do Projeto Alerta Rios foi feito para garantir que as pessoas receberiam e conseguiriam entender como está os rios em sua volta, por isso ele foi projetado para ser funcional em todos os tipos de sistema e telas, garantindo uma clareza visual e respeitando regras de Design em tablets, computadores e celular.

### 📌 Resumo da responsividade:

✅ Dashboard, Sensores, Mapa e a Tela de Login totalmente responsivos (mobile-first)

❌ Há página de erro caso entre em funções específicas ou não projetadas

### 📦 Instalação dos pacotes
```bash
npm install
```

### 🚀 Executar o programa com Vite

```bash
npm run dev
```
Acesse o front-end em:
http://localhost:5173

## ESP32

### 📌 Funcionalidades principais

- 🚨 Detectar niveis de água alarmantes

---
### ⚙️ Requisitos e Instalação

### Fisicamente:
#### - ESP 32 
#### - Sensor Ultrasonico

### Simulação:
https://wokwi.com/projects/433053185604931585
## Back End
### 📌 Funcionalidades principais

- ☀️ Fiscalizar o clima
- 🌐 API RESTful com documentação interativa

---

### ⚙️ Requisitos e Instalação

**Versão recomendada do Python:** 3.9

#### 📦 Instalação dos pacotes

```bash
pip install fastapi
pip install pandas
pip install selenium
pip install uvicorn
```

---
## 🛢 Banco de Dados
### [Modelo pronto para rodar no docker](https://drive.google.com/drive/folders/1mLNyrJprF_lPm-jrlBFLvafd8gqKT574?usp=drive_link)  **executar com o bash**
```bash
docker-compose up -d
```
---
### ▶️ Como iniciar o sistema

### 🔥 Permissão no firewall (Windows)

```bash
netsh advfirewall firewall add rule name="FastAPI" dir=in action=allow protocol=TCP localport=8000
```

### 🚀 Executar o programa

```bash
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

---

## 📡 Endpoints da API

Acesse a documentação interativa em:

[http://127.0.0.8:8000/docs](http://127.0.0.8:8000/docs)


# 🆘 Esclarecimentos sobre o projeto
Nós não desenvolvemos a página Home por não acreditar que traria algo a mais para o nosso projeto, mas, em compensação caprichamos no desenvolvimento de outras páginas com alguns itens a mais, espero que gostem e supra a expectativa!

# 🚀 Instalação
1. Clonar o projeto
bash
Copiar
Editar
git clone [git@github.com:juniorlds98/Global-Solution.git]((https://github.com/juniorlds98/Global-Solution-IBM))
cd Global-Solution-IBM
2. Instalar as dependências desejadas


# 👨‍💻 Grupo
```
Rm: 560753 Caio Martinez Saes
Rm: 559680 José Claudio da Silva Junior
```
