from flask import request, jsonify, Response
from sqlalchemy import *
from flask_cors import CORS

from classes.armors import armors
from classes.characters import characters
from classes.classe import classe as Classes
from classes.passives import passives
from classes.skills import skills
from classes.statuses import statuses
from classes.types import types
from classes.users import users
from classes.weapons import weapons
from constants import get_app, get_db
from fonctions import get_user_id, get_role_id, verify_token

#region Constants
app = get_app()
db = get_db()
CORS_ALLOW_ORIGIN="*,*"
CORS_EXPOSE_HEADERS="*,*"
CORS_ALLOW_HEADERS="content-type,*"
cors = CORS(app, origins=CORS_ALLOW_ORIGIN.split(","), allow_headers=CORS_ALLOW_HEADERS.split(",") , expose_headers= CORS_EXPOSE_HEADERS.split(","),   supports_credentials = True)
#endregion

#region Routes
@app.before_request
def before_request():
  if request.method.lower() == 'options':
    return Response()

@app.route("/type/get", methods=['GET'])
def get_route():
    if verify_token(request.headers.get('Authorization')):
        list_types = types.query.all()
        list = []
        type: types
        for type in list_types:
            list.append(type.get())
        return jsonify(list)
    else: 
        return jsonify({ 'status': 'failure', 'message': 'Permission denied...' })

@app.route("/status/get", methods=['GET'])
def get_status():
    if verify_token(request.headers.get('Authorization')):
        list_status = statuses.query.all()
        list = []
        status: statuses
        for status in list_status:
            list.append(status.get())
        return jsonify(list)
    else: 
        return jsonify({ 'status': 'failure', 'message': 'Permission denied...' })

@app.route("/passive/get", methods=['GET'])
def get_passive():
    if verify_token(request.headers.get('Authorization')):
        list_passives = passives.query.all()
        list = []
        passive: passives
        for passive in list_passives:
            list.append(passive.get())
        return jsonify(list)
    else: 
        return jsonify({ 'status': 'failure', 'message': 'Permission denied...' })

@app.route("/armor/get", methods=['GET'])
def get_armor():
    if verify_token(request.headers.get('Authorization')):
        list = []
        armor: armors
        for armor in armors.query.join(passives, armors.passives, isouter=True).all():        
            list.append(armor.get())
        return jsonify(list)
    else: 
        return jsonify({ 'status': 'failure', 'message': 'Permission denied...' })

@app.route("/weapon/get", methods=['GET'])
def get_weapon():
    if verify_token(request.headers.get('Authorization')):
        list = []
        weapon: weapons
        for weapon in weapons.query.join(passives, weapons.passives, isouter=True).all():
            list.append(weapon.get())
        return jsonify(list)
    else: 
        return jsonify({ 'status': 'failure', 'message': 'Permission denied...' })

@app.route("/class/get", methods=['GET'])
def get_class():
    if verify_token(request.headers.get('Authorization')):
        list = []
        classe: Classes
        for classe in Classes.query.join(passives, Classes.passives, isouter=True).all():
            list.append(classe.get())
        return jsonify(list)
    else: 
        return jsonify({ 'status': 'failure', 'message': 'Permission denied...' })

@app.route("/class/get_basic", methods=['GET'])
def get_classic_class():
    if verify_token(request.headers.get('Authorization')):
        list = []
        classe: Classes
        for classe in Classes.query.filter(Classes.predecessor == 'None').join(passives, Classes.passives, isouter=True).all():
            list.append(classe.get_simplified())
        return jsonify(list)
    else: 
        return jsonify({ 'status': 'failure', 'message': 'Permission denied...' })

@app.route("/skill/get", methods=['GET'])
def get_skill():
    if verify_token(request.headers.get('Authorization')):
        list = []
        skill: skills
        for skill in skills.query.join(passives, skills.passives, isouter=True).all():
            list.append(skill.get())
        return jsonify(list)
    else: 
        return jsonify({ 'status': 'failure', 'message': 'Permission denied...' })

@app.route("/character/get", methods=['GET'])
def get_characters():
    token = request.headers.get('Authorization')
    if verify_token(token):
        list_characters = characters.query.join(types, characters.types, isouter=True).join(statuses, characters.statuses, isouter=True).join(skills, characters.skills, isouter=True).join(passives, characters.passives, isouter=True).all()
        list = []
        character: characters
        for character in list_characters:
            list.append(character.get())
        response = jsonify(list)
        return response
    else:
        return jsonify({ 'status': 'failure', 'message': 'Permission denied...' })
@app.route("/character/get_single/<int:id>", methods=['GET'])
def get_character(id: int):
    token = request.headers.get('Authorization')
    if verify_token(token):
        if get_role_id(token) == 1:    
            return jsonify(characters.query.filter(characters.id == id).join(types, characters.types, isouter=True).join(statuses, characters.statuses, isouter=True).join(skills, characters.skills, isouter=True).join(passives, characters.passives, isouter=True).one().get())
        else:
            return jsonify(characters.query.filter(characters.id == id and characters.id == get_user_id(token)).join(types, characters.types, isouter=True).join(statuses, characters.statuses, isouter=True).join(skills, characters.skills, isouter=True).join(passives, characters.passives, isouter=True).one().get())
    else:
        return jsonify({ 'status': 'failure', 'message': 'Permission denied...' })
@app.route("/character/create", methods=['POST'])
def create_character():
    token = request.headers.get('Authorization')
    if verify_token(token):
        data = request.get_json(force=True)
        character = characters(data['name'], data['race'], data['class_id'], int(get_user_id(token)), data['img'])
        type: int
        for type in str(data['types']).split(';'):
            character.types.append(types.query.filter(types.id == type).first())
        get_db().session.add(character)
        get_db().session.commit()
        name = data['name']
        obj = {
            'status': 'success',
            'message': f'{name} successfully created'
        }
        return jsonify(obj)
    else:
        return jsonify({ 'status': 'failure', 'message': 'Permission denied...' })
@app.route("/character/delete", methods=['POST'])
def delete_character():
    token = request.headers.get('Authorization')
    if verify_token(token):
        data = request.get_json(force=True)
        character = characters.query.filter(characters.id == data['character_id']).one()
        db.session.delete(character)
        db.session.commit()
        name = data['character_id']
        obj = {
            'status': 'success',
            'message': f'{name} successfully deleted'
        }
        return jsonify(obj)
    else:
        print('Permission denied...')
        return jsonify({ 'status': 'failure', 'message': 'Permission denied...' })

@app.route("/register", methods=['POST'])
def register():
    try:
        data = request.get_json(force=True)
        user = users(data["username"], data["email"], data["password"], 2, data["profilePicture"])
        db.session.add(user)
        db.session.commit()
        obj = {
            'status': 'success',
            'message': 'Successfully registered...'
        }
        response = jsonify(obj)
        return response
    except Exception as e:
        obj = {
            'status': 'failure',
            'message': str(e)
        }
        return jsonify(obj)
@app.route("/login", methods=['POST'])
def login():
    data = request.get_json(force=True)
    user: users
    user = users.query.filter(users.email == data['email']).one()
    if user.verify_password(data['password']):
        auth_token: bytes
        auth_token = user.encode_auth_token(user.id, user.role)
        if auth_token:
            obj = {
                'status': 'success',
                'message': 'Successfully logged in...',
                'auth_token': auth_token,
                'role': user.role
            }
            return jsonify(obj)
    return jsonify({
        'status': 'failure',
        'message': 'Some error occured. Please try again.'
    })
#endregion

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
        app.run(host="0.0.0.0", port=6361)
