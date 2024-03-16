from flask import Flask, request, jsonify
from flask_cors import CORS
from utils.jsons import get_json

app = Flask(__name__)
CORS(app)

@app.route("/", methods=['GET','POST'])
def hello_world():
    if request.method ==  "GET":
        return "Hello, GET"
    data, err_code = get_json(request)
    if err_code: return data
    return jsonify({"title": data["title"]})

if __name__ == "__main__":
    app.run(debug=True)