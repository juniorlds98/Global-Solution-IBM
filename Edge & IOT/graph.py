import json
import os
import pandas as pd
import matplotlib.pyplot as plt
import matplotlib.dates as mdates
from matplotlib.animation import FuncAnimation
from datetime import datetime

# Caminho do JSON
json_path = os.path.join("Back End","docs", "sensor_data.json")

fig, ax = plt.subplots(figsize=(12, 6))

def update(frame):
    ax.clear()
    try:
        with open(json_path, "r") as f:
            data = json.load(f)

        if not data:
            return

        df = pd.DataFrame(data)
        df = df.sort_values("localidade")

        ax.plot(df["localidade"], df["distancia_cm"], marker='o', linestyle='-', color='blue', label="Distância (cm)")

        ax.axhspan(0, 80, color='red', alpha=0.3, label='RISCO')
        ax.axhspan(80, 120, color='yellow', alpha=0.3, label='ATENÇÃO')
        ax.axhspan(120, 300, color='green', alpha=0.3, label='SEGURO')

        ax.set_title("Monitoramento em Tempo Real do Nível da Água")
        ax.set_xlabel("Position")
        ax.set_ylabel("Distância até a água (cm)")
        ax.legend(loc='upper right')
        ax.grid(True)
    except Exception as e:
        print(f"Erro ao atualizar gráfico: {e}")

# Atualiza a cada 2000ms (2 segundos)
ani = FuncAnimation(fig, update, interval=2000)

plt.tight_layout()
plt.show()
