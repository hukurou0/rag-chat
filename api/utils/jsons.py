import flask
import json

def get_json(request):
    if request.headers['Content-Type'] != 'application/json':
        return flask.jsonify(res='error'), -1
    data = request.data.decode('utf-8')
    return json.loads(data), 0