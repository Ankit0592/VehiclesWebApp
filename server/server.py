from flask import Flask, jsonify, request
from flask_cors import CORS
import json

app = Flask(__name__, static_folder="../static/dist", template_folder="../static")
CORS(app)

@app.route("/cars")
def index():
    offset = request.args.get('offset')
    start = int(offset)
    end = start+250
    data = json.loads(open('./generated.json').read())
    return jsonify(
        data[start:end]
    )


if __name__ == "__main__":
    app.run()