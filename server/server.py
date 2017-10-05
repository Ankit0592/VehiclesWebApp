from flask import Flask, jsonify
from flask_cors import CORS
import json

app = Flask(__name__, static_folder="../static/dist", template_folder="../static")
CORS(app)

@app.route("/cars")
def index():
    data = json.loads(open('./generated.json').read())
    return jsonify(
        data
    )


if __name__ == "__main__":
    app.run()