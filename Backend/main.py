from flask import Flask, request, send_file
from flask_cors import CORS, cross_origin
from werkzeug.utils import secure_filename
import ml

app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/api/upload', methods=['POST'])
@cross_origin()
def question():
    if request.method == 'POST':
        f = request.files['file']
        f.save(secure_filename(f.filename))
        ml.imputeValues(f.filename)
        return send_file("comets_final.csv")


if __name__ == '__main__':
    app.run(debug=True)


app.run()
