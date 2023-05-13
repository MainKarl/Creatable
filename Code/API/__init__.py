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
from fonctions import get_join_passive, verify_token

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
    id = request.args.get('type_id', None, type=int)

    list_types = types.query.all()
    list = []
    type: types
    for type in list_types:
        list.append({
            'type_id': type.id,
            'name': type.name
        })
    
    response = jsonify(list)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route("/status/get", methods=['GET'])
def get_status():
    id = request.args.get('status_id', None, type=int)

    list_status = statuses.query.all()
    list = []
    status: statuses
    for status in list_status:
        list.append({
            'status_id': status.id,
            'name': status.name
        })
    
    response = jsonify(list)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route("/passive/get", methods=['GET'])
def get_passive():
    list_passives = passives.query.all()
    list = []
    passive: passives
    for passive in list_passives:
        list.append({
            'passive_id': passive.id,
            'name': passive.name,
            'description': passive.description,
            'passive_type': passive.passive_type
        })
    
    response = jsonify(list)
    return response

@app.route("/armor/get", methods=['GET'])
def get_armor():
    list_armors = armors.query.join(passives, armors.passives, isouter=True).all()
    list = []
    armor: armors
    for armor in list_armors:        
        list.append({
            'armor_id': armor.id,
            'name': armor.name,
            'power': armor.power,
            'passives': get_join_passive(armor.passives)
        })
    
    response = jsonify(list)
    return response

@app.route("/weapon/get", methods=['GET'])
def get_weapon():
    list_weapons = weapons.query.join(passives, weapons.passives, isouter=True).all()
    list = []
    weapon: weapons
    for weapon in list_weapons:
        list.append({
            'weapon_id': weapon.id,
            'name': weapon.name,
            'damage': weapon.damage,
            'accuracy': weapon.accuracy,
            'crit': weapon.crit,
            'price': weapon.price,
            'rank': weapon.rank,
            'damage_type': weapon.damage_type,
            'weapon_type': weapon.weapon_type,
            'passives': get_join_passive(weapon.passives)
        })
    
    response = jsonify(list)
    return response

@app.route("/class/get", methods=['GET'])
def get_class():
    list_classes = Classes.query.join(passives, Classes.passives, isouter=True).all()
    list = []
    classe: Classes
    for classe in list_classes:
        list.append({
            'class_id': classe.id,
            'name': classe.name,
            'hp_growth': classe.hp_growth,
            'strength_growth': classe.strength_growth,
            'defense_growth': classe.defense_growth,
            'magic_growth': classe.magic_growth,
            'resistance_growth': classe.resistance_growth,
            'speed_growth': classe.speed_growth,
            'skill_growth': classe.skill_growth,
            'luck_growth': classe.luck_growth,
            'mana_growth': classe.mana_growth,
            'class_serie': classe.class_serie,
            'predecessor': classe.predecessor,
            'passives': get_join_passive(classe.passives)
        })

    response = jsonify(list)
    return response
@app.route("/class/get_basic", methods=['GET'])
def get_classic_class():
    list_classes = Classes.query.filter(Classes.predecessor == 'None').join(passives, Classes.passives, isouter=True).all()
    list = []
    classe: Classes
    for classe in list_classes:
        list.append({
            'class_id': classe.id,
            'name': classe.name,
            'hp_growth': classe.hp_growth,
            'strength_growth': classe.strength_growth,
            'defense_growth': classe.defense_growth,
            'magic_growth': classe.magic_growth,
            'resistance_growth': classe.resistance_growth,
            'speed_growth': classe.speed_growth,
            'skill_growth': classe.skill_growth,
            'luck_growth': classe.luck_growth,
            'mana_growth': classe.mana_growth,
            'class_serie': classe.class_serie,
            'predecessor': classe.predecessor,
            'passives': get_join_passive(classe.passives)
        })

    response = jsonify(list)
    return response

@app.route("/skill/get", methods=['GET'])
def get_skill():
    list_skills = skills.query.join(passives, skills.passives, isouter=True).all()
    list = []
    skill: skills
    for skill in list_skills:
        list.append({
            'skill_id': skill.id,
            'name': skill.name,
            'power': skill.power,
            'power_gain': skill.power_gain,
            'accuracy': skill.accuracy,
            'accuracy_gain': skill.accuracy_gain,
            'crit': skill.crit,
            'crit_gain': skill.crit_gain,
            'mana_usage': skill.mana_usage,
            'skill_type': skill.skill_type,
            'skill_purpose': skill.skill_type,
            'damage_type': skill.damage_type,
            'passives': get_join_passive(skill.passives)
        })
    
    response = jsonify(list)
    return response

@app.route("/character/get", methods=['GET'])
def get_characters():
    token = request.headers.get('Authorization')
    if verify_token(token):
        list_characters = characters.query.join(types, characters.types, isouter=True).join(statuses, characters.statuses, isouter=True).join(skills, characters.skills, isouter=True).join(passives, characters.passives, isouter=True).all()
        print(list_characters)
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
        print(id)
        return jsonify(characters.query.filter(characters.id == id).join(types, characters.types, isouter=True).join(statuses, characters.statuses, isouter=True).join(skills, characters.skills, isouter=True).join(passives, characters.passives, isouter=True).one().get())
    else:
        return jsonify({ 'status': 'failure', 'message': 'Permission denied...' })
@app.route("/character/create", methods=['POST'])
def create_character():
    token = request.headers.get('Authorization')
    print(token)
    if verify_token(token):
        data = request.get_json(force=True)

        character = characters(data['name'], data['race'], data['class_id'], data['img'])
        type: int
        for type in str(data['types']).split(';'):
            character.types.append(types.query.filter(types.id == type).first())
        db.session.add(character)
        db.session.commit()

        name = data['name']

        obj = {
            'status': 'success',
            'message': f'{name} successfully created'
        }
        response = jsonify(obj)
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response
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
        response = jsonify(obj)
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response
    else:
        print('Permission denied...')
        return jsonify({ 'status': 'failure', 'message': 'Permission denied...' })

@app.route("/register", methods=['POST'])
def register():
    try:
        data = request.get_json(force=True)
        user = users(data["username"], data["email"], data["password"], 1)
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
        response = jsonify(obj)
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response
@app.route("/login", methods=['POST'])
def login():
    data = request.get_json(force=True)
    user = users.query.filter(users.email == data['email']).one()
    if user.verify_password(data['password']):
        auth_token = user.encode_auth_token(user.id, user.role)
        if auth_token:
            obj = {
                'status': 'success',
                'message': 'Successfully logged in...',
                'auth_token': auth_token.decode('utf8'),
                'role': user.role
            }
            response = jsonify(obj)
            return response
    return jsonify({
        'status': 'failure',
        'message': 'Some error occured. Please try again.'
    })
#endregion

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
        app.run(host="0.0.0.0", port=6361)
