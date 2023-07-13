from flask import request, jsonify, Response
from sqlalchemy import *
from flask_cors import CORS
import logging
logging.basicConfig(
    level=logging.ERROR,
    handlers=[
        logging.FileHandler('api.log'),
        logging.StreamHandler()
    ],
    format="%(asctime)s [%(levelname)-5.5s]  %(message)s")

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
@app.route("/passive/get_weapon", methods=['GET'])
def get_weapon_passive():
    if verify_token(request.headers.get('Authorization')):
        list_passives = passives.query.filter(passives.passive_type == 'Weapon').all()
        list = []
        passive: passives
        for passive in list_passives:
            list.append(passive.get_passive())
        return jsonify(list)
    else:
        return jsonify({ 'status': 'failure', 'message': 'Permission denied...' })
@app.route("/passive/get_armor", methods=['GET'])
def get_armor_passive():
    if verify_token(request.headers.get('Authorization')):
        list_passives = passives.query.filter(passives.passive_type == 'Armor').all()
        list = []
        passive: passives
        for passive in list_passives:
            list.append(passive.get_passive())
        return jsonify(list)
    else:
        return jsonify({ 'status': 'failure', 'message': 'Permission denied...' })
@app.route("/passive/get_class", methods=['GET'])
def get_class_passive():
    if verify_token(request.headers.get('Authorization')):
        list_passives = passives.query.filter(passives.passive_type == 'Class').all()
        list = []
        passive: passives
        for passive in list_passives:
            list.append(passive.get_passive())
        return jsonify(list)
    else:
        return jsonify({ 'status': 'failure', 'message': 'Permission denied...' })
@app.route("/passive/get_skill", methods=['GET'])
def get_skill_passive():
    if verify_token(request.headers.get('Authorization')):
        list_passives = passives.query.filter(passives.passive_type == 'Skill').all()
        list = []
        passive: passives
        for passive in list_passives:
            list.append(passive.get_passive())
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
@app.route("/armor/get_list", methods=['GET'])
def get_list_armor():
    if verify_token(request.headers.get('Authorization')):
        list = []
        armor: armors
        for armor in armors.query.all():
            list.append(armor.get_simplified())
        return jsonify(list)
    else: 
        return jsonify({ 'status': 'failure', 'message': 'Permission denied...' })
@app.route('/armor/create', methods=['POST'])
def create_armor():
    if verify_token(request.headers.get('Authorization')):
        try:
            data = request.get_json(force=True)
            armor = armors(data['name'], data['power'], data['img'])
            if data['passives'] != '':
                passive: int
                for passive in str(data['passives']).split(';'):
                    armor.add_passive(passive)
            db.session.add(armor)
            db.session.commit()
            name = data['name']
            return jsonify({
                'status': 'success',
                'message': f'{name} successfully created'
            })
        except Exception:
            logging.exception('')
    else: 
        return jsonify({ 'status': 'failure', 'message': 'Permission denied...' })
@app.route('/armor/delete', methods=['POST'])
def delete_armor():
    token = request.headers.get('Authorization')
    if verify_token(token) and get_role_id(token) == 1:
        data = request.get_json(force=True)
        armor = armors.query.filter(armors.id == data['id']).one()
        db.session.delete(armor)
        db.session.commit()
        return jsonify({
            'status': 'success',
            'message': 'Armor successfully deleted'
        })
    else: 
        return jsonify({ 'status': 'failure', 'message': 'Permission denied...' })  
@app.route('/armor/modify', methods=['POST'])
def modify_armor():
    token = request.headers.get('Authorization')
    if verify_token(token) and get_role_id(token) == 1:
        data = request.get_json(force=True)
        armor: armors
        armor = armors.query.filter(armors.id == data['id']).one()
        armor.name = data['name']
        armor.power = data['power']
        armor.passives.clear()
        if data['passives'] != '':
            passive: int
            for passive in str(data['passives']).split(';'):
                armor.add_passive(passive)
        db.session.commit()
        return jsonify({
            'status': 'success',
            'message': 'Armor successfully modified'
        })
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
@app.route("/weapon/get_list", methods=['GET'])
def get_list_weapon():
    if verify_token(request.headers.get('Authorization')):
        list = []
        weapon: weapons
        for weapon in weapons.query.all():
            list.append(weapon.get_simplified())
        return jsonify(list)
    else: 
        return jsonify({ 'status': 'failure', 'message': 'Permission denied...' })    
@app.route("/weapon/create", methods=['POST'])
def create_weapon():
    if verify_token(request.headers.get('Authorization')):
        try:
            data = request.get_json(force=True)
            weapon = weapons(data['name'], data['damage'], data['accuracy'], data['crit'], data['price'], data['rank'], data['damage_type'], data['weapon_type'], data['img'])
            if data['passives'] != '':
                passive: int
                for passive in str(data['passives']).split(';'):
                    weapon.add_passive(passive)
            db.session.add(weapon)
            db.session.commit()
            name = data['name']
            return jsonify({
                'status': 'success',
                'message': f'{name} successfully created'
            })
        except Exception:
            logging.exception('')
    else: 
        return jsonify({ 'status': 'failure', 'message': 'Permission denied...' })
@app.route("/weapon/delete", methods=['POST'])
def delete_weapon():
    token = request.headers.get('Authorization')
    if verify_token(token) and get_role_id(token) == 1:
        data = request.get_json(force=True)
        weapon = weapons.query.filter(weapons.id == data['id']).one()
        db.session.delete(weapon)
        db.session.commit()
        return jsonify({
            'status': 'success',
            'message': 'Weapon successfully deleted'
        })
    else: 
        return jsonify({ 'status': 'failure', 'message': 'Permission denied...' })  
@app.route("/weapon/modify", methods=['POST'])
def modify_weapon():
    token = request.headers.get('Authorization')
    if verify_token(token) and get_role_id(token) == 1:
        data = request.get_json(force=True)
        weapon: weapons
        weapon = weapons.query.filter(weapons.id == data['id']).one()
        weapon.name = data['name']
        weapon.damage = data['damage']
        weapon.accuracy = data['accuracy']
        weapon.crit = data['crit']
        weapon.price = data['price']
        weapon.rank = data['rank']
        weapon.damage_type = data['damage_type']
        weapon.weapon_type = data['weapon_type']
        weapon.passives.clear()
        if data['passives'] != '':
            passive: int
            for passive in str(data['passives']).split(';'):
                weapon.add_passive(passive)
        db.session.commit()
        return jsonify({
            'status': 'success',
            'message': 'Weapon successfully modified'
        })
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
@app.route("/class/get_list", methods=['GET'])
def get_list_class():
    if verify_token(request.headers.get('Authorization')):
        list = []
        classe: Classes
        for classe in Classes.query.join(passives, Classes.passives, isouter=True).all():
            list.append(classe.get_simplified())
        return jsonify(list)
    else: 
        return jsonify({ 'status': 'failure', 'message': 'Permission denied...' })
@app.route("/class/get_basic", methods=['GET'])
def get_basic_class():
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
        tuser_id = get_user_id(token)
        trole_id = get_role_id(token)
        if trole_id != 1:
            list_characters = characters.query.filter(characters.user_id == tuser_id).join(types, characters.types, isouter=True).join(statuses, characters.statuses, isouter=True).join(skills, characters.skills, isouter=True).join(passives, characters.passives, isouter=True).all()
        else:
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
@app.route("/character/get_passive/<int:id>", methods=['GET'])
def get_passive_character(id: int):
    token = request.headers.get('Authorization')
    if verify_token(token):
        list_passives = passives.query.filter(passives.passive_type == 'Other').all()
        character: characters
        character = characters.query.filter(characters.id == id).one()
        list = []
        passive: passives
        for passive in list_passives:
            if character.has_passive(passive) == False:
                list.append(passive.get_passive())
        return jsonify(list)
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

@app.route("/character/rest", methods=['POST'])
def rest_character():
    token = request.headers.get('Authorization')
    if verify_token(token):
        data = request.get_json(force=True)
        character: characters
        character = characters.query.filter(characters.id == data['id']).one()
        character.rest()
        get_db().session.commit()
        return jsonify({
            'status': 'success',
            'message': 'Rest successful'
        })
    else: 
        return jsonify({ 'status': 'failure', 'message': 'Permission denied...' })
@app.route("/character/levelup/<int:id>", methods=['POST'])
def levelup_character(id: int):
    token = request.headers.get('Authorization')
    if verify_token(token):
        character: characters
        character = characters.query.filter(characters.id == id).one()
        character.level_up()
        get_db().session.commit()
        return jsonify({
            'status': 'success',
            'message': 'Level up successful'
        })
    else: 
        return jsonify({ 'status': 'failure', 'message': 'Permission denied...' })
@app.route("/character/change_type", methods=['POST'])
def change_type_character():
    token = request.headers.get('Authorization')
    if verify_token(token):
        data = request.get_json(force=True)

        character: characters
        character = characters.query.filter(characters.id == data['id']).one()
        character.types.clear()

        type: int
        for type in str(data['types']).split(';'):
            character.types.append(types.query.filter(types.id == type).first())
        get_db().session.commit()
        return jsonify({
            'status': 'success',
            'message': 'Types successfully changed'
        })
    else: 
        return jsonify({ 'status': 'failure', 'message': 'Permission denied...' })
@app.route("/character/change_status", methods=['POST'])
def change_status_character():
    token = request.headers.get('Authorization')
    if verify_token(token):
        data = request.get_json(force=True)
        character: characters
        character = characters.query.filter(characters.id == data['id']).one()
        character.rest()
        if data['status'] != '':
            character.define_status(data['status'])
        get_db().session.commit()
        return jsonify({
            'status': 'success',
            'message': 'Status successfully changed'
        })
    else: 
        return jsonify({ 'status': 'failure', 'message': 'Permission denied...' })
@app.route("/character/change_stat", methods=['POST'])
def change_stat_character():
    token = request.headers.get('Authorization')
    if verify_token(token):
        data = request.get_json(force=True)
        character: characters
        character = characters.query.filter(characters.id == data['id']).one()
        character.change_stat(data['hp'], data['hp_growth'], data['strength'], data['strength_growth'], data['defense'], data['defense_growth'], data['magic'], data['magic_growth'], data['resistance'], data['resistance_growth'], data['speed'], data['speed_growth'], data['skill'], data['skill_growth'], data['luck'], data['luck_growth'], data['mana'], data['mana_growth'])
        get_db().session.commit()
        return jsonify({
            'status': 'success',
            'message': 'Stats successfully changed'
        })
    else: 
        return jsonify({ 'status': 'failure', 'message': 'Permission denied...' })
@app.route("/character/change_magic", methods=['POST'])
def change_magic_character():
    token = request.headers.get('Authorization')
    if verify_token(token):
        data = request.get_json(force=True)
        character: characters
        character = characters.query.filter(characters.id == data['id']).one()
        character.add_magic(data['arcane'], data['illusion'], data['mind'], data['fire'], data['heat'], data['lava'], data['water'], data['liquid'], data['ice'], data['air'], data['wind'], data['lightning'], data['earth'], data['poison'], data['nature'], data['light'], data['space'], data['holy'], data['dark'], data['necromancy'], data['curse'])
        get_db().session.commit()
        return jsonify({
            'status': 'success',
            'message': 'Magic successfully changed'
        })
    else: 
        return jsonify({ 'status': 'failure', 'message': 'Permission denied...' })
@app.route("/character/change_weapon_rank", methods=['POST'])
def change_weapon_rank_character():
    token = request.headers.get('Authorization')
    if verify_token(token):
        data = request.get_json(force=True)
        character: characters
        character = characters.query.filter(characters.id == data['id']).one()
        character.change_weapon_rank(data['sword'], data['spear'], data['axe'], data['dagger'], data['staff'], data['bow'], data['fist'], data['other'])
        get_db().session.commit()
        return jsonify({
            'status': 'success',
            'message': 'Weapon Rank successfully changed'
        })
    else: 
        return jsonify({ 'status': 'failure', 'message': 'Permission denied...' })
@app.route("/character/change_rank", methods=['POST'])
def change_rank_character():
    token = request.headers.get('Authorization')
    if verify_token(token):
        data = request.get_json(force=True)
        character: characters
        character = characters.query.filter(characters.id == data['id']).one()
        character.define_magic_rank(data['magic'])
        character.define_spirit_rank(data['spirit'])
        get_db().session.commit()
        return jsonify({
            'status': 'success',
            'message': 'Weapon Rank successfully changed'
        })
    else: 
        return jsonify({ 'status': 'failure', 'message': 'Permission denied...' })
@app.route("/character/change_class", methods=['POST'])
def change_class():
    token = request.headers.get('Authorization')
    if verify_token(token):
        data = request.get_json(force=True)
        character: characters
        character = characters.query.filter(characters.id == data['id']).one()
        character.change_class(data['class'])
        get_db().session.commit()
        return jsonify({
            'status': 'success',
            'message': 'Weapon Rank successfully changed'
        })
    else: 
        return jsonify({ 'status': 'failure', 'message': 'Permission denied...' })        
@app.route("/character/change_item", methods=['POST'])
def change_item():
    token = request.headers.get('Authorization')
    if verify_token(token):
        data = request.get_json(force=True)
        character: characters
        character = characters.query.filter(characters.id == data['id']).one()
        character.change_weapon(data['weapon'])
        character.change_armor(data['armor'])
        get_db().session.commit()
        return jsonify({
            'status': 'success',
            'message': 'Item successfully changed'
        })
    else: 
        return jsonify({ 'status': 'failure', 'message': 'Permission denied...' })   
@app.route("/character/add_passive", methods=['POST'])
def add_passive():
    token = request.headers.get('Authorization')
    if verify_token(token):
        data = request.get_json(force=True)
        character: characters
        character = characters.query.filter(characters.id == data['id']).one()
        character.add_passives(data['passive'])
        get_db().session.commit()
        return jsonify({
            'status': 'success',
            'message': 'Passives successfully changed'
        })
    else:
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
        app.run(host="0.0.0.0", port=6362)
