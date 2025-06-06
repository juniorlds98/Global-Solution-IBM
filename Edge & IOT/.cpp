#include <WiFi.h>
#include <HTTPClient.h>

// Wi-Fi
const char *ssid = "MP2C_ROT";
const char *password = "MP2c2927";
int dist = 0;

const char *serverName = "http://192.168.5.161:8000/clima/sensor";

const int triggerPin = 5;
const int echoPin = 18;

void setup()
{
    Serial.begin(115200);
    pinMode(triggerPin, OUTPUT);
    pinMode(echoPin, INPUT);

    // Conecta no Wi-Fi
    WiFi.begin(ssid, password);
    Serial.print("Conectando-se ao WiFi...");
    while (WiFi.status() != WL_CONNECTED)
    {
        delay(500);
        Serial.print(".");
    }
    Serial.println("\nConectado ao WiFi");
}

void loop()
{
    float distancia = medirDistanciaCM();

    // JSON com os dados
    String json = "{\"localidade\":\"sp\",\"id\":1,\"distancia\":" + String(distancia, 2) + "}";

    if (WiFi.status() == WL_CONNECTED)
    {
        HTTPClient http;
        http.begin(serverName);
        http.addHeader("Content-Type", "application/json");

        int httpResponseCode = http.POST(json);
        Serial.print(json);
        Serial.println(httpResponseCode);

        http.end();
    }
    else
    {
        Serial.println("WiFi desconectado");
    }

    delay(5000); // Espera 5 segundos
}

float medirDistanciaCM()
{
    digitalWrite(triggerPin, LOW);
    delayMicroseconds(5);
    digitalWrite(triggerPin, HIGH);
    delayMicroseconds(10);
    digitalWrite(triggerPin, LOW);

    dist = pulseIn(echoPin, HIGH);
    dist = dist / 58;
    return dist;
}
