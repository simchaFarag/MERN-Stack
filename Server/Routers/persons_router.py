from flask import Blueprint, jsonify, request
from BLL.users_bl import PersonBL

persons = Blueprint('persons', __name__)

person_bl = PersonBL()

#GET ALL
@persons.route("/", methods=["GET"])
def get_all_persons():
    persons = person_bl.get_all_persons()
    return jsonify(persons)

#GET ONE
@persons.route("/<id>", methods=["GET"])
def get_person(id):
    person = person_bl.get_person(id)
    return jsonify(person)


@persons.route("/", methods=["POST"])
def add_person():
    
    obj = request.json
    result = person_bl.add_person(obj)
    return jsonify(result)
    
   

@persons.route("/<id>", methods=["PUT"])
def update_person(id):
    obj = request.json
    result = person_bl.update_person(id, obj)
    return jsonify(result)

@persons.route("/<id>", methods=["DELETE"])
def delete_person(id):
  
    result = person_bl.delete_person(id)
    return jsonify(result)

