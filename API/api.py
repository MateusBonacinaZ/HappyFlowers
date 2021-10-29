import os
import datetime
from flask_cors import CORS
from flask import Flask, jsonify
from pymongo import MongoClient


app = Flask(__name__)
CORS(app)
client = MongoClient('mongodb+srv://bonacina:211002@happy-flowers.bcypn.mongodb.net/happy-flowers?retryWrites=true&w=majority')
DB = client['happy-flowers']


#   -> MENSAGENS DE RETOTONO <-
INSERT_SUCCESSFUL = "<h1>HappyFlowers: Insert</h1><p>A data foi inserida com sucesso no banco de dados!</p>"
INSERT_ERROR = "<h1>HappyFlowers: Insert</h1><p>Ocorreu um erro ao inserir os dados no banco de dados!</p>"
FIND_ERROR = "<h1>HappyFlowers: Find</h1><p>Ocorreu um erro ao obter os dados do banco de dados!</p>"


#   ->  PÁGINA INICIAL <-
@app.route('/')
def main():
    return "<h1>HappyFlowers</h1><p>Seja bem-vindo a página inicial da API do HappyFlowers.</p>"


#=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-INSERT-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-#  


#   -> INSERT - CULTURE <-
@app.route('/insert/culture/<string:popularName>/<string:scientificName>/<int:minimumLuminosity>/<int:maximumLuminosity>/<int:time>')
def insert_culture(popularName, scientificName, minimumLuminosity, maximumLuminosity, time):
    try:
        data = {
            'nome_popular': popularName,
            'nome_cientifico': scientificName,
            'luminosidade_minima': minimumLuminosity,
            'luminosidade_maxima': maximumLuminosity,
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

#   -> FIND - GRÁFICO   <-
@app.route('/find/graphic')
def find_graphic():
    fullList =[]
    for x in range(0,24):
        data_atual = datetime.datetime.now()
        data_inicial = datetime.datetime(
            data_atual.year,
            data_atual.month,
            data_atual.day,
            x,
            0
        )   

        data_final = datetime.datetime(
            data_atual.year,
            data_atual.month,
            data_atual.day,
            x,
            59
        )

        loopValue = []
        sendValue = 0.0
        for y in DB.sensor.find({'data_e_hora':{'$lt':data_final, '$gt':data_inicial}, 'cultura': DB.config.find_one()['cultura']}):
            loopValue.append(y['luminosidade_captada'])
        
        if len(loopValue) > 0:
            sendValue = sum(loopValue)/len(loopValue)
        else:
            sendValue = 0
        fullList.append(sendValue)

    return jsonify(fullList)


#   -> FIND - INFOS   <-
@app.route('/find/infos')
def find_infos():
    dataValue = []
    for x in DB.sensor.find({'cultura': DB.config.find_one()['cultura']}).limit(1).sort("$natural",-1):
        dataValue.append(x['luminosidade_captada'])
       
    if len(dataValue) == 0:
        dataValue.append(0)

    dataConfig = DB.culture.find_one({'nome_popular':DB.config.find_one()['cultura']})
    data = {
        'nome_sensor': DB.config.find_one({})['nome_sensor'],
        'nome_popular': dataConfig['nome_popular'],
        'nome_cientifico': dataConfig['nome_cientifico'],
        'valor_captado': dataValue[0],
        'tempo_exposicao': calcular_exposicao()
    }
    return jsonify(data)



def calcular_exposicao():
    somaExposicao=0

    data_atual = datetime.datetime.now()
    data_inicial = datetime.datetime(
	    data_atual.year,
	    data_atual.month,
	    data_atual.day,
    )   

    data_final = datetime.datetime(
	    data_atual.year,
        data_atual.month,
        data_atual.day,
        23,
        59
    )
    
    for x in DB.sensor.find({'data_e_hora':{'$lt':data_final, '$gt':data_inicial}, 'cultura': DB.config.find_one()['cultura']}):
        somaExposicao = somaExposicao+x['tempo_exposicao']

    # Retornar os minutos que faltam para satisfazer a planta;
    if somaExposicao < DB.culture.find_one({'nome_popular':DB.config.find_one()['cultura']})['tempo_exposicao']:
        remainingMinutes = DB.culture.find_one({'nome_popular':DB.config.find_one()['cultura']})['tempo_exposicao'] - somaExposicao
        return f'Faltam {remainingMinutes} minutos de sol!'
    elif somaExposicao >= DB.culture.find_one({'nome_popular':DB.config.find_one()['cultura']})['tempo_exposicao']:
        return 'Sol satisfeito!'


#   -> START FLASK PROGRAM <-
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)