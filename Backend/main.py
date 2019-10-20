from flask import Flask, request, render_template
from flask import json

app = Flask(__name__)


@app.route('/api/upload', methods=['POST'])
def question():
    if request.method == 'POST':
        print(request.files)
    return request.files.json


app.run()
