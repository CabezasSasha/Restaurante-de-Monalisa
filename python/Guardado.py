from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector
from datetime import datetime

app = Flask(__name__)
CORS(app)  # Permitir solicitudes desde otros orígenes

# Configuración de la conexión a la base de datos
db = mysql.connector.connect(
    host="localhost",
    user="root",     # Cambia esto si tu usuario es diferente
    password="",  # Cambia esto si tu contraseña es diferente
    database="comentarios_restaurante"
)

@app.route('/comentarios', methods=['POST'])
def add_comentario():
    try:
        data = request.json
        nombre = data['nombre']
        comentario = data['comentario']
        valoracion = data['valoracion']
        fecha = data['fecha']

        cursor = db.cursor()
        query = "INSERT INTO comentarios (nombre, comentario, valoracion, fecha) VALUES (%s, %s, %s, %s)"
        cursor.execute(query, (nombre, comentario, valoracion, fecha))
        db.commit()
        cursor.close()

        return jsonify({"message": "Comentario agregado exitosamente"}), 201
    except Exception as e:
        return jsonify({"message": str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
