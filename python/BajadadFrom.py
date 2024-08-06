from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector
from datetime import datetime

app = Flask(__name__)
CORS(app)

# Configuración de la base de datos
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="comentarios_restaurante"
)

@app.route('/comentarios', methods=['GET'])
def obtener_comentarios():
    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM comentarios")
    comentarios = cursor.fetchall()
    cursor.close()
    return jsonify(comentarios)

@app.route('/comentarios', methods=['POST'])
def agregar_comentario():
    data = request.get_json()
    nombre = data.get('nombre')
    comentario = data.get('comentario')
    valoracion = data.get('valoracion')
    fecha = datetime.now().strftime('%Y-%m-%d')

    cursor = db.cursor()
    cursor.execute(
        "INSERT INTO comentarios (nombre, comentario, valoracion, fecha) VALUES (%s, %s, %s, %s)",
        (nombre, comentario, valoracion, fecha)
    )
    db.commit()
    cursor.close()
    return jsonify({"message": "Comentario agregado"}), 201

if __name__ == '__main__':
    app.run(port=5001, debug=True)
