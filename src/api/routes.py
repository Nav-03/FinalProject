"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Character, Planet
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


@app.route('/user', methods=['GET'])
def create_user():
    user = User(email="my_super@email.com", password="my_super@email.com", gender="male")
    db.session.add(user)
    db.session.commit()
    return jsonify(user.serialize())



@app.route('/planets', methods=['GET'])
def create_planet():
    planet = Planet(name="", climate="", rotation_period="", orbital_period="", diameter="", terrain="", population="")
    db.session.add(planet)
    db.session.commit()
    return jsonify(planet.serialize())



@app.route('/characters', methods=['GET'])
def create_character():
    character = Character(name="", height="", hair_color="", eye_color="", birth_year="", gender="")
    db.session.add(character)
    db.session.commit()
    return jsonify(character.serialize())