import os
import datetime
from flask import Flask, jsonify
from pymongo import MongoClient


app = Flask(__name__)
client = MongoClient('mongodb+srv://bonacina:211002@happy-flowers.bcypn.mongodb.net/happy-flowers?retryWrites=true&w=majority')
DB = client['happy-flowers']


#   -> MENSAGENS DE RETOTONO <-
INSERT_SUCCESSFUL = "<h1>HappyFlowers: Insert</h1><p>A data foi inserida com sucesso no banco de dados!</p>"
INSERT_ERROR = "<h1>HappyFlowers: Insert</h1><p>Ocorreu um erro ao inserir os dados no banco de dados!</p>"
FIND_ERROR = "<h1>HappyFlowers: Insert</h1><p>Ocorreu um erro ao obter os dados do banco de dados!</p>"


#   ->  PÁGINA INICIAL <-
@app.route('/')
def main():
    return "<h1>HappyFlowers</h1><p>Seja bem-vindo a página inicial da API do HappyFlowers.</p>"


#=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-INSERT-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-#  


#   -> INSERT - CULTURE <-
@app.route('/insert/culture/<string:popularName>/<string:scientificName>/<int:intensity>/<int:time>')
def insert_culture(popularName, scientificName, intensity, time):
    try:
        data = {
            'nome_popular': popularName,
            'nome_cientifico': scientificName,
            'luminosidade_recomendada': intensity,
            'tempo_exposicao': time
        }
        DB.culture.insert_one(data)
        return INSERT_SUCCESSFUL
    except:
        return INSERT_ERROR


#   -> INSERT - SENSOR
@app.route('/insert/sensor/<int:luminosity>/<int:time>')
def insert_sensor( luminosity, time):
    try:
        data = {
            'nome_sensor': DB.config.find_one()['nome_sensor'],
            'cultura': DB.config.find_one()['cultura'],
            'luminosidade_captada': luminosity,
            'tempo_exposicao': time,
            'data_e_hora': datetime.datetime.today()
        }
        DB.sensor.insert_one(data)
        return INSERT_SUCCESSFUL
    except:
        return INSERT_ERROR


#   -> INSERT - CONFIG <-
@app.route('/insert/config/<string:sensorName>/<string:culture>')
def insert_config(sensorName, culture):
    try:
        data = {
            'nome_sensor': sensorName,
            'cultura': culture
        }

        if DB.config.count() == 0:
            DB.config.insert_one(data)
            return INSERT_SUCCESSFUL
        else:  
            DB.config.replace_one({}, data)
            return INSERT_SUCCESSFUL
    except:
        INSERT_ERROR


#=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=FIND=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-#  


#   -> FIND - CULTURE   <-
@app.route('/find/infos')
def find_culture():
    try:
        dataValue = []
        for x in DB.sensor.find().limit(1).sort("$natural",-1):
            dataValue.append(x['luminosidade_captada'])
            dataValue.append(x['tempo_exposicao'])

        dataConfig = DB.culture.find_one({'nome_popular':DB.config.find_one()['cultura']})
        data = {
            'nome_popular': dataConfig['nome_popular'],
            'nome_cientifico': dataConfig['nome_cientifico'],
            'valor_captado': dataValue[0],
            'tempo_exposicao': dataValue[1]
        }
        return jsonify(data)
    except:
        return FIND_ERROR


#   -> START FLASK PROGRAM <-
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)