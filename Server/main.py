from Routers.persons_router import persons
from flask import Flask
from flask_cors import CORS
from bson import ObjectId
import json


# Parse the objectId (unknown JSON type) to a string (a known JSON type)
class JSONEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, ObjectId):
            return str(obj)
        return json.JSONEncoder.default(self,obj)




app = Flask(__name__)
CORS(app)

# remove strict slashes (to prevent cors issues on the client)
app.url_map.strict_slashes = False

app.json_encoder = JSONEncoder

app.register_blueprint(persons, url_prefix='/persons')

app.run()