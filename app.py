import os
from flask import Flask, send_from_directory, request
app = Flask(__name__, static_folder='web/explorer/build')

@app.route('/search', methods=['POST'])
def searchFiles():
    search = request.get_json()
    return search

@app.route('/', defaults={'path': 'index.html'})
@app.route('/<path:path>')
def reactApp(path):
    if path != '' and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)

