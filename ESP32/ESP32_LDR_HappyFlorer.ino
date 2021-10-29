/*******************************************************************************
  Projeto HappyFlowers (v1.0)

** Copyright 2021 PaccaTech.
  Escrito por Ricardo SS (29/10/2021).

*******************************************************************************/
#include <WiFi.h>
#include <HTTPClient.h>

//#define sensor_LDR 27 // for ESP32 microcontroller (ADCs de 12 bits)
#define sensorPin_LDR 33 //GPIO usado para captura analógica
int LDR_value = 0;
int tempoExposicao = 0;

//Put your SSID & Password
//const char* ssid = "HUAWEI P30 Pro";
//const char* password = "Jesus Cristo";
const char* ssid = "Cristo Salva";
const char* password = "4736351761";




void setup() {
  Serial.begin(9600);  //Iniciciando a porta serial somente para debug
  delay(100);

  pinMode(sensorPin_LDR, INPUT); //Pino utilizado para captura analógica
  adcAttachPin(sensorPin_LDR);
  analogReadResolution(10); //para limitar o ADC de 12 bits para 10 bits
  //analogSetAttenuation(ADC_6db);

  // Connect to Wi-Fi

  Serial.println("Connecting to ");
  Serial.println(ssid);

  //connect to your local wi-fi network
  WiFi.begin(ssid, password);

  //check wi-fi is connected to wi-fi network
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi connected..!");
  Serial.print("Got IP: ");  Serial.println(WiFi.localIP());

}

void loop() {
  //Leitura do Sensor LDR
  LDR_value = analogRead(sensorPin_LDR);

  Serial.print("LDR: ");
  Serial.print(LDR_value);
  float tensaoR10k = 0.0;
  tensaoR10k = (LDR_value * (3.3 / 4095));
  Serial.print(" e Tensão sobre R10K: ");
  Serial.println(tensaoR10k);



  String insert_API = "https://happyflowers-api.herokuapp.com/insert/sensor/";
  insert_API = insert_API + LDR_value + "/" + tempoExposicao;

  if ((WiFi.status() == WL_CONNECTED)) { //Check the current connection status

    HTTPClient http;

    //http.begin("http://jsonplaceholder.typicode.com/comments?id=10"); //Specify the URL
    Serial.println(insert_API);
    //http.begin("https://happyflowers-api.herokuapp.com/insert/sensor/27600/10");
    http.begin(insert_API);
    int httpCode = http.GET();                                        //Make the request

    if (httpCode > 0) { //Check for the returning code

      String payload = http.getString();
      Serial.println(httpCode);
      Serial.println(payload);
    }

    else {
      Serial.println("Error on HTTP request");
    }

    http.end(); //Free the resources
  }

  delay(60000);

}
