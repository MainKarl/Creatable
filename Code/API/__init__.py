from flask import Flask, request, jsonify, make_response, Response
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import *
import jwt
from flask_cors import CORS, cross_origin
from hmac import compare_digest
import urllib.request
import random as rnd
import datetime
import bcrypt
import glob
import os

#region Constants
basedir = os.path.abspath(os.path.dirname(__name__))

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'Creatable.db')
app.secret_key = "Tjaf3MEr8i6xEm4VxQxlLNx4uCAN5tbxr0sle9GUKciebWEtpcb0NTvbXmoeoI82cuEnu50KTsMynupfApFucYCL4JgRHD15fwJLecJwZIRtOlNgc9AiIoqwr7CPQag2HC7t8b6PAk90MvugEnpPDVf9iaW3upGKFPQbdtNtgKQn3iQD4gXC8SzHW5riKPsghyuiEcIlDHV5E82rTQQ5L7LccILJ2XkF4w2kbjJS1rCzDQRTvmqmrBa3O4dnnYzWo8EteXWerdhyp1vnvLPWC6KJoiLDwWoJ4PU8e5tglCAa6awX5AtErLcgX6SMcPe3EnseNozvfoUDiqjCSInSlAI84LCxAIxlqiixeOPxISAVm3nID9km5j1F3j2vcMCLg9PK28qli94TAVaR"

CORS_ALLOW_ORIGIN="*,*"
CORS_EXPOSE_HEADERS="*,*"
CORS_ALLOW_HEADERS="content-type,*"
cors = CORS(app, origins=CORS_ALLOW_ORIGIN.split(","), allow_headers=CORS_ALLOW_HEADERS.split(",") , expose_headers= CORS_EXPOSE_HEADERS.split(","),   supports_credentials = True)

db = SQLAlchemy()
db.init_app(app)
#endregion

#region Class
armors_passives_table = db.Table('ArmorPassives', 
                                db.Column('armor_id', db.Integer, db.ForeignKey('armors.armor_id'), nullable = False),
                                db.Column('passive_id', db.Integer, db.ForeignKey('passives.passive_id'), nullable = False),
                                db.PrimaryKeyConstraint('armor_id', 'passive_id'))
weapons_passives_table = db.Table('WeaponPassives',
                                db.Column('weapon_id', db.Integer, db.ForeignKey('weapons.weapon_id'), nullable = False),
                                db.Column('passive_id', db.Integer, db.ForeignKey('passives.passive_id'), nullable = False),
                                db.PrimaryKeyConstraint('weapon_id', 'passive_id'))
classes_passives_tables = db.Table('ClassPassives',
                                db.Column('class_id', db.Integer, db.ForeignKey('classes.class_id'), nullable = False),
                                db.Column('passive_id', db.Integer, db.ForeignKey('passives.passive_id'), nullable = False),
                                db.PrimaryKeyConstraint('class_id', 'passive_id'))
skills_passives_table = db.Table('SkillPassives',
                                db.Column('skill_id', db.Integer, db.ForeignKey('skills.skill_id'), nullable = False),
                                db.Column('passive_id', db.Integer, db.ForeignKey('passives.passive_id'), nullable = False),
                                db.PrimaryKeyConstraint('skill_id', 'passive_id'))
characters_passives_table = db.Table('CharacterPassives', 
                                    db.Column('character_id', db.Integer, db.ForeignKey('characters.character_id'), nullable = False),
                                    db.Column('passive_id', db.Integer, db.ForeignKey('passives.passive_id'), nullable = False),
                                    db.PrimaryKeyConstraint('character_id', 'passive_id'))
characters_types_table = db.Table('CharacterTypes',
                                db.Column('character_id', db.Integer, db.ForeignKey('characters.character_id'), nullable = False),
                                db.Column('type_id', db.Integer, db.ForeignKey('types.type_id'), nullable = False),
                                db.PrimaryKeyConstraint('character_id', 'type_id'))
characters_status_table = db.Table('CharacterStatus',
                                db.Column('character_id', db.Integer, db.ForeignKey('characters.character_id'), nullable = False),
                                db.Column('status_id', db.Integer, db.ForeignKey('status.status_id'), nullable = False),
                                db.PrimaryKeyConstraint('character_id', 'status_id'))
characters_skills_table = db.Table('CharacterSkills',
                                db.Column('character_id', db.Integer, db.ForeignKey('characters.character_id'), nullable = False),
                                db.Column('skill_id', db.Integer, db.ForeignKey('skills.skill_id'), nullable = False),
                                db.PrimaryKeyConstraint('character_id', 'skill_id'))

class types(db.Model):
    __tablename__ = "types"
    id = db.Column('type_id', db.Integer, primary_key = True)
    name = db.Column(db.String)
    characters = db.relationship('characters', secondary = characters_types_table, back_populates = 'types')

    def get(self):
        return {
            'type_id': self.id,
            'name': self.name
        }

    def __init__(self, name):
        self.name = name

class statuses(db.Model):
    __tablename__ = "status"
    id = db.Column('status_id', db.Integer, primary_key = True)
    name = db.Column(db.String)
    characters = db.relationship('characters', secondary = characters_status_table, back_populates = 'statuses')

    def get(self):
        return {
            'status_id': self.id,
            'name': self.name
        }

    def __init__(self, name):
        self.name = name

class passives(db.Model):
    __tablename__ = "passives"
    id = db.Column('passive_id', db.Integer, primary_key = True)
    name = db.Column(db.String)
    description = db.Column(db.String)
    passive_type = db.Column(db.String)
    armors = db.relationship('armors', secondary = armors_passives_table, back_populates = 'passives')
    weapons = db.relationship('weapons', secondary = weapons_passives_table, back_populates = 'passives')
    classes = db.relationship('classes', secondary = classes_passives_tables, back_populates = 'passives')
    skills = db.relationship('skills', secondary = skills_passives_table, back_populates = 'passives')
    characters = db.relationship('characters', secondary = characters_passives_table, back_populates = 'passives')

    def get(self):
        return {
            'passive_id': self.id,
            'name': self.description,
            'description': self.description,
            'passive_type': self.passive_type
        }

    def __init__(self, name, description, passive_type):
        self.name = name
        self.description = description
        self.passive_type = passive_type

class users(db.Model):
    __tablename__ = "users"
    id = db.Column('user_id', db.Integer, primary_key = True)
    username = db.Column(db.String)
    email = db.Column(db.String, nullable=False)
    password = db.Column(db.String, nullable=False)
    role = db.Column(db.Integer, nullable=False)

    def __init__(self, username, email, password, role):
        self.username = username
        self.email = email
        self.password = bcrypt.hashpw(password.encode('utf8'), bcrypt.gensalt()).decode()
        self.role = role

    def verify_password(self, password):
        return bcrypt.checkpw(password.encode('utf8'), self.password.encode('utf8'))

    def encode_auth_token(self, user_id, role):
        try:
            payload = {
                'exp': datetime.datetime.utcnow() + datetime.timedelta(days=5),
                'iat': datetime.datetime.utcnow(),
                'sub': user_id
            }
            return jwt.encode(
                payload,
                app.secret_key,
                algorithm='HS256'
            )
        except Exception as e:
            return e
    
    def decode_auth_token(auth_token):
        try:
            payload = jwt.decode(auth_token, app.secret_key, algorithms='HS256')
            return payload['sub']
        except jwt.ExpiredSignatureError:
            return 'Signature expired. Please log in again.'
        except jwt.InvalidTokenError:
            return 'Invalid token. Please log in again.'

class armors(db.Model):
    __tablename__ = "armors"
    id = db.Column("armor_id", db.Integer, primary_key = True)
    name = db.Column(db.String)
    power = db.Column(db.Integer)
    img = db.Column(db.String)
    characters = db.relationship('characters', backref='armors', lazy=True)
    passives = db.relationship('passives', secondary = armors_passives_table, back_populates = 'armors')

    def get(self):
        return {
            'armor_id': self.id,
            'name': self.name,
            'power': self.power,
            'img': self.img,
            'passives': get_join_passive(self.passives)
        }

    def __init__(self, name, power, img):
        self.name = name
        self.power = power
        if (img != ''):
            self.img = download_image(img, name, get_extension(img))
        else:
            self.img = "http:////144.217.14.182//img//notFound.jpg"

class weapons(db.Model):
    __tablename__ = "weapons"
    id = db.Column("weapon_id", db.Integer, primary_key = True)
    name = db.Column(db.String)
    damage = db.Column(db.Integer)
    accuracy = db.Column(db.Integer)
    crit = db.Column(db.Integer)
    price = db.Column(db.Float)
    rank = db.Column(db.String)
    damage_type = db.Column(db.String)
    weapon_type = db.Column(db.String)
    img = db.Column(db.String)
    characters = db.relationship('characters', backref='weapons', lazy=True)
    passives = db.relationship('passives', secondary = weapons_passives_table, back_populates = 'weapons')

    def get(self):
        return {
            'weapon_id': self.id,
            'name': self.name,
            'damage': self.damage,
            'accuracy': self.accuracy,
            'crit': self.crit,
            'price': self.price,
            'rank': self.rank,
            'damage_type': self.damage_type,
            'weapon_type': self.weapon_type,
            'img': self.img,
            'passives': get_join_passive(self.passives)
        }

    def __init__(self, name, damage, accuracy, crit, price, rank, damage_type, weapon_type, img):
        self.name = name
        self.damage = damage
        self.accuracy = accuracy
        self.crit = crit
        self.price = price
        self.rank = rank
        self.damage_type = damage_type
        self.weapon_type = weapon_type
        if (img != ''):
            self.img = download_image(img, name, get_extension(img))
        else:
            self.img = "http:////144.217.14.182//img//notFound.jpg"

class classes(db.Model):
    __tablename__ = "classes"
    id = db.Column('class_id', db.Integer, primary_key = True)
    name = db.Column(db.String)
    hp_growth = db.Column(db.Integer)
    strength_growth = db.Column(db.Integer)
    defense_growth = db.Column(db.Integer)
    magic_growth = db.Column(db.Integer)
    resistance_growth = db.Column(db.Integer)
    speed_growth = db.Column(db.Integer)
    skill_growth = db.Column(db.Integer)
    luck_growth = db.Column(db.Integer)
    mana_growth = db.Column(db.Integer)
    class_serie = db.Column(db.String)
    predecessor = db.Column(db.String)
    characters = db.relationship('characters', backref='classes', lazy=True)
    passives = db.relationship('passives', secondary = classes_passives_tables, back_populates = 'classes')

    def get(self):
        return {
            'class_id': self.id,
            'name': self.name,
            'hp_growth': self.hp_growth,
            'strength_growth': self.strength_growth,
            'defense_growth': self.defense_growth,
            'magic_growth': self.magic_growth,
            'resistance_growth': self.resistance_growth,
            'speed_growth': self.speed_growth,
            'skill_growth': self.skill_growth,
            'luck_growth': self.luck_growth,
            'mana_growth': self.mana_growth,
            'class_serie': self.class_serie,
            'predecessor': self.predecessor,
            'passives': get_join_passive(self.passives)
        }

    def __init__(self, name, hp_g, strength_g, defense_g, magic_g, resistance_g, speed_g, skill_g, luck_g, mana_g, class_serie, predecessor):
        self.name = name
        self.hp_growth = hp_g
        self.strength_growth = strength_g
        self.defense_growth = defense_g
        self.magic_growth = magic_g
        self.resistance_growth = resistance_g
        self.speed_growth = speed_g
        self.skill_growth = skill_g
        self.luck_growth = luck_g
        self.mana_growth = mana_g
        self.class_serie = class_serie
        self.predecessor = predecessor

class skills(db.Model):
    __tablename__ = "skills"
    id = db.Column('skill_id', db.Integer, primary_key=True)
    name = db.Column(db.String)
    power = db.Column(db.Integer)
    power_gain = db.Column(db.Integer)
    accuracy = db.Column(db.Integer)
    accuracy_gain = db.Column(db.Integer)
    crit = db.Column(db.Integer)
    crit_gain = db.Column(db.Integer)
    mana_usage = db.Column(db.Integer)
    skill_type = db.Column(db.String)
    skill_purpose = db.Column(db.String)
    damage_type = db.Column(db.String)
    characters = db.relationship('characters', secondary = characters_skills_table, back_populates = 'skills')
    passives = db.relationship('passives', secondary = skills_passives_table, back_populates = 'skills')

    def get(self):
        return {
            'skill_id': self.id,
            'name': self.name,
            'power': self.power,
            'power_gain': self.power_gain,
            'accuracy': self.accuracy,
            'accuracy_gain': self.accuracy_gain,
            'crit': self.crit,
            'crit_gain': self.crit_gain,
            'mana_usage': self.mana_usage,
            'skill_type': self.skill_type,
            'skill_purpose': self.skill_purpose,
            'damage_type': self.damage_type,
            'passives': get_join_passive(self.passives)
        }

    def __init__(self, name, power ,power_g, accuracy, accuracy_g, crit, crit_g, mana_usage, skill_type, skill_purpose, damage_type):
        self.name = name
        self.power = power
        self.power_gain = power_g
        self.accuracy = accuracy
        self.accuracy_gain = accuracy_g
        self.crit = crit
        self.crit_gain = crit_g
        self.mana_usage = mana_usage
        self.skill_type = skill_type
        self.skill_purpose = skill_purpose
        self.damage_type = damage_type

class characters(db.Model):
    id = db.Column('character_id', db.Integer, primary_key = True)
    name = db.Column(db.String)
    race = db.Column(db.String)
    level = db.Column(db.Integer)
    hp = db.Column(db.Integer)
    combat_hp = db.Column(db.Integer)
    hp_growth = db.Column(db.Integer)
    strength = db.Column(db.Integer)
    combat_strength = db.Column(db.Integer)
    strength_growth = db.Column(db.Integer)
    defense = db.Column(db.Integer)
    combat_defense = db.Column(db.Integer)
    defense_growth = db.Column(db.Integer)
    magic = db.Column(db.Integer)
    combat_magic = db.Column(db.Integer)
    magic_growth = db.Column(db.Integer)
    resistance = db.Column(db.Integer)
    combat_resistance = db.Column(db.Integer)
    resistance_growth = db.Column(db.Integer)
    speed = db.Column(db.Integer)
    combat_speed = db.Column(db.Integer)
    speed_growth = db.Column(db.Integer)
    skill = db.Column(db.Integer)
    combat_skill = db.Column(db.Integer)
    skill_growth = db.Column(db.Integer)
    luck = db.Column(db.Integer)
    combat_luck = db.Column(db.Integer)
    luck_growth = db.Column(db.Integer)
    mana = db.Column(db.Integer)
    combat_mana = db.Column(db.Integer)
    mana_growth = db.Column(db.Integer)
    arcane_lvl = db.Column(db.Integer)
    illusion_lvl = db.Column(db.Integer)
    mind_lvl = db.Column(db.Integer)
    fire_lvl = db.Column(db.Integer)
    heat_lvl = db.Column(db.Integer)
    lava_lvl = db.Column(db.Integer)
    water_lvl = db.Column(db.Integer)
    liquid_lvl = db.Column(db.Integer)
    ice_lvl = db.Column(db.Integer)
    air_lvl = db.Column(db.Integer)
    wind_lvl = db.Column(db.Integer)
    lightning_lvl = db.Column(db.Integer)
    earth_lvl = db.Column(db.Integer)
    nature_lvl = db.Column(db.Integer)
    poison_lvl = db.Column(db.Integer)
    light_lvl = db.Column(db.Integer)
    holy_lvl = db.Column(db.Integer)
    space_lvl = db.Column(db.Integer)
    dark_lvl = db.Column(db.Integer)
    curse_lvl = db.Column(db.Integer)
    necromancy_lvl = db.Column(db.Integer)
    fist_lvl = db.Column(db.String)
    sword_lvl = db.Column(db.String)
    spear_lvl = db.Column(db.String)
    axe_lvl = db.Column(db.String)
    dagger_lvl = db.Column(db.String)
    staff_lvl = db.Column(db.String)
    bow_lvl = db.Column(db.String)
    other_lvl = db.Column(db.String)
    stat_rk = db.Column(db.String)
    magic_rk = db.Column(db.String)
    spirit_rk = db.Column(db.String)
    armor_id = db.Column(db.Integer, db.ForeignKey('armors.armor_id'), nullable = False)
    weapon_id = db.Column(db.Integer, db.ForeignKey('weapons.weapon_id'), nullable = False)
    class_id = db.Column(db.Integer, db.ForeignKey('classes.class_id'), nullable = False)
    types = db.relationship('types', secondary = characters_types_table, back_populates = 'characters')
    statuses = db.relationship('statuses', secondary = characters_status_table, back_populates = 'characters')
    skills = db.relationship('skills', secondary = characters_skills_table, back_populates = 'characters')
    passives = db.relationship('passives', secondary = characters_passives_table, back_populates = 'characters')
    img = db.Column(db.String)

    def calculate_stat_rank(self):
        total = self.hp + self.strength + self.defense + self.magic + self.resistance + self.speed + self.skill + self.luck + self.mana
        if total <= 150:
            self.stat_rk = 'Basic'
        elif total <= 200:
            self.stat_rk = 'Expert'
        elif total <= 300:
            self.stat_rk = 'Sage'
        elif total <= 600:
            self.stat_rk = 'Dragon'
        elif total > 600:
            self.stat_rk = 'God'
    def rest(self):
        self.combat_hp = self.hp
        self.combat_strength = self.strength
        self.combat_defense = self.defense
        self.combat_magic = self.magic
        self.combat_resistance = self.resistance
        self.combat_speed = self.speed
        self.combat_skill = self.skill
        self.combat_luck = self.luck
        self.combat_mana = self.mana

    def define_default_stat(self, class_id):
        classe = classes.query.filter(classes.id == class_id).one()
        
        self.hp = rnd.randrange(10, 20)
        self.combat_hp = self.hp
        self.hp_growth = (rnd.randrange(1,4)*5)+classe.hp_growth
        self.strength = rnd.randrange(5, 12)
        self.combat_strength = self.strength
        self.strength_growth = (rnd.randrange(1,4)*5)+classe.strength_growth
        self.defense = rnd.randrange(5, 12)
        self.combat_defense = self.defense
        self.defense_growth = (rnd.randrange(1,4)*5)+classe.defense_growth
        self.magic = rnd.randrange(5, 12)
        self.combat_magic = self.magic
        self.magic_growth = (rnd.randrange(1,4)*5)+classe.magic_growth
        self.resistance = rnd.randrange(5, 12)
        self.combat_resistance = self.resistance
        self.resistance_growth = (rnd.randrange(1,4)*5)+classe.resistance_growth
        self.speed = rnd.randrange(5, 12)
        self.combat_speed = self.speed
        self.speed_growth = (rnd.randrange(1,4)*5)+classe.speed_growth
        self.skill = rnd.randrange(5, 12)
        self.combat_skill = self.skill
        self.skill_growth = (rnd.randrange(1,4)*5)+classe.skill_growth
        self.luck = rnd.randrange(5, 12)
        self.combat_luck = self.luck
        self.luck_growth = (rnd.randrange(1,4)*5)+classe.luck_growth
        self.mana = rnd.randrange(10, 20)
        self.combat_mana = self.mana
        self.mana_growth = (rnd.randrange(1,4)*5)+classe.mana_growth
        self.calculate_stat_rank()
    def define_default_magic(self):
        self.arcane_lvl = 0
        self.mind_lvl = 0
        self.illusion_lvl = 0
        self.fire_lvl = 0
        self.lava_lvl = 0
        self.heat_lvl = 0
        self.water_lvl = 0
        self.liquid_lvl = 0
        self.ice_lvl = 0
        self.air_lvl = 0
        self.wind_lvl = 0
        self.lightning_lvl = 0
        self.earth_lvl = 0
        self.nature_lvl = 0
        self.poison_lvl = 0
        self.light_lvl = 0
        self.holy_lvl = 0
        self.space_lvl = 0
        self.dark_lvl = 0
        self.curse_lvl = 0
        self.necromancy_lvl = 0
        self.magic_rk = 'Basic'
    def define_default_weapon_rank(self):
        self.fist_lvl = 'E'
        self.sword_lvl = 'E'
        self.spear_lvl = 'E'
        self.axe_lvl = 'E'
        self.dagger_lvl = 'E'
        self.staff_lvl = 'E'
        self.bow_lvl = 'E'
        self.other_lvl = 'E'
    def define_magic_rank(self, magic_rank):
        self.magic_rk = magic_rank
        self.rest()
    def define_spirit_rank(self, spirit_rank):
        self.spirit_rk = spirit_rank
        self.rest()
    def define_weapon_rank(self, sword_rank, spear_rank, axe_rank, dagger_rank, staff_rank, bow_rank, other_rank):
        self.sword_lvl = sword_rank
        self.spear_lvl = spear_rank
        self.axe_lvl = axe_rank
        self.dagger_lvl = dagger_rank
        self.staff_lvl = staff_rank
        self.bow_lvl = bow_rank
        self.other_lvl = other_rank
        self.rest()
    def define_type(self, ctypes):
        self.types.clear()
        for type in str(ctypes).split(';'):
            self.types.append(types.query.filter(types.id == type).first())
        self.rest()
    def define_status(self, cstatus):
        self.statuses.clear()
        for status in str(cstatus).split(';'):
            self.statuses.append(statuses.query.filter(statuses.id == status).first())
        self.rest()
    def define_skill(self, cskills):
        self.skills.clear()
        for skill in str(cskills).split(';'):
            self.skills.append(skills.query.filter(skills.id == skill).first())
        self.rest()
    def define_passive(self, cpassives):
        self.passives.clear()
        for passive in str(cpassives).split(';'):
            self.passives.append(passives.query.filter(passives.id == passive).first())
        self.rest()

    def change_class(self, class_id):
        oClass = classes.query.filter(classes.id == self.class_id).one()
        nClass = classes.query.filter(classes.id == class_id).one()
        self.hp_growth -= oClass.hp_growth - nClass.hp_growth
        self.strength_growth -= oClass.strength_growth - nClass.strength_growth
        self.defense_growth -= oClass.defense_growth - nClass.defense_growth
        self.magic_growth -= oClass.magic_growth - nClass.magic_growth
        self.resistance_growth -= oClass.resistance_growth - nClass.resistance_growth
        self.speed_growth -= oClass.speed_growth - nClass.speed_growth
        self.skill_growth -= oClass.skill_growth - nClass.skill_growth
        self.luck_growth -= oClass.luck_growth - nClass.luck_growth
        self.mana_growth -= oClass.mana_growth - nClass.mana_growth
        self.class_id = nClass.id
        self.rest()
    def change_weapon(self, weapon_id):
        weapon = weapons.query.filter(weapons.id == weapon_id).one()
        self.weapon_id = weapon.id
        self.rest()  
    def change_armor(self, armor_id):
        armor = armors.query.filter(armors.id == armor_id).one()
        self.armor_id = armor.id
        self.rest()
    def change_magic(self, hp, strength, defense, magic, resistance, speed, skill, luck, mana):
        self.hp += hp
        self.strength += strength
        self.defense += defense
        self.magic += magic
        self.resistance += resistance
        self.speed += speed
        self.skill += skill
        self.luck += luck
        self.mana += mana
        self.rest()
    def change_magic_growth(self, hp, strength, defense, magic, resistance, speed, skill, luck, mana):
        self.hp_growth += hp
        self.strength_growth += strength
        self.defense_growth += defense
        self.magic_growth += magic
        self.resistance_growth += resistance
        self.speed_growth += speed
        self.skill_growth += skill
        self.luck_growth += luck
        self.mana_growth += mana
        self.rest()

    def get(self):
        return {
            'character_id': self.id,
            'name': self.name,
            'race': self.race,
            'level': self.level,
            'hp': self.hp,
            'combat_hp': self.combat_hp,
            'hp_growth': self.hp_growth,
            'strength': self.strength,
            'combat_strength': self.combat_strength,
            'strength_growth': self.strength_growth,
            'defense': self.defense,
            'combat_defense': self.combat_defense,
            'defense_growth': self.defense_growth,
            'magic': self.magic,
            'combat_magic': self.combat_magic,
            'magic_growth': self.magic_growth,
            'resistance': self.resistance,
            'combat_resistance': self.combat_resistance,
            'resistance_growth': self.resistance_growth,
            'speed': self.speed,
            'combat_speed': self.combat_speed,
            'speed_growth': self.speed_growth,
            'skill': self.skill,
            'combat_skill': self.combat_skill,
            'skill_growth': self.skill_growth,
            'luck': self.luck,
            'combat_luck': self.combat_luck,
            'luck_growth': self.luck_growth,
            'mana': self.mana,
            'combat_mana': self.combat_mana,
            'mana_growth': self.mana_growth,
            'arcane_lvl': self.arcane_lvl,
            'illusion_lvl': self.illusion_lvl,
            'mind_lvl': self.mind_lvl,
            'fire_lvl': self.fire_lvl,
            'lava_lvl': self.lava_lvl,
            'heat_lvl': self.heat_lvl,
            'water_lvl': self.water_lvl,
            'liquid_lvl': self.liquid_lvl,
            'ice_lvl': self.ice_lvl,
            'air_lvl': self.air_lvl,
            'wind_lvl': self.wind_lvl,
            'lightning_lvl': self.lightning_lvl,
            'earth_lvl': self.earth_lvl,
            'nature_lvl': self.nature_lvl,
            'poison_lvl': self.poison_lvl,
            'light_lvl': self.light_lvl,
            'holy_lvl': self.holy_lvl,
            'space_lvl': self.space_lvl,
            'dark_lvl': self.dark_lvl,
            'curse_lvl': self.curse_lvl,
            'necromancy_lvl': self.necromancy_lvl,
            'fist_lvl': self.fist_lvl,
            'sword_lvl': self.sword_lvl,
            'spear_lvl': self.spear_lvl,
            'axe_lvl': self.axe_lvl,
            'dagger_lvl': self.dagger_lvl,
            'staff_lvl': self.staff_lvl,
            'bow_lvl': self.bow_lvl,
            'other_lvl': self.other_lvl,
            'stat_rk': self.stat_rk,
            'magic_rk': self.magic_rk,
            'spirit_rk': self.spirit_rk,
            'armor': armors.query.filter(armors.id == self.armor_id).one().get(),
            'weapon': weapons.query.filter(weapons.id == self.weapon_id).one().get(),
            'class': classes.query.filter(classes.id == self.class_id).one().get(),
            'types': get_join_type(self.types),
            'status': get_join_status(self.statuses),
            'skills': get_join_skill(self.skills),
            'passives': get_join_passive(self.passives),
            'img': self.img,
        }
    def __init__(self, name, race, class_id, img):
        self.name = name
        self.race = race
        self.level = 1
        self.define_default_magic()
        self.define_default_stat(class_id)
        self.define_default_weapon_rank()
        self.spirit_rk = 'Basic'
        self.armor_id = 1
        self.weapon_id = 1
        self.class_id = class_id
        if (img != ''):
            self.img = download_image(img, name, get_extension(img))
        else:
            self.img = "http:////144.217.14.182//img//notFound.jpg"


    

#endregion

#region function
def get_join_passive(passives):
    list = []
    for passive in passives:
        list.append(passive.get())
    return list
def get_join_type(types):
    list = []
    for type in types:
        list.append(type.get())
    return list
def get_join_status(statuses):
    list = []
    for status in statuses:
        list.append(status.get())
    return list
def get_join_skill(skills):
    list = []
    for skill in skills:
        list.append()
    return list

def verify_image(file_name, extension):
    verification = True
    index = 1
    image_name = file_name + extension
    image_name = image_name.replace(' ', '_')
    while verification:
        if (glob.glob("/var/www/html/img/" + image_name)):
            if (index != 1):
                image_name = str(index) + image_name[1:]
            else:
                image_name = str(index) + image_name
        else:
            verification = False
        index += 1

    return image_name
def download_image(url, file_name, extension):
    urlLink = "/var/www/html/img/" + verify_image(file_name, extension)
    url_path = "http://144.217.14.182/img/" + verify_image(file_name, extension)
    urllib.request.urlretrieve(url, urlLink)
    return url_path.replace("/", "//")
def get_extension(url):
    file_name = url[url.rfind("/"):]
    return file_name[file_name.rfind("."):]

def verify_token(token):
    if token:
        resp = users.decode_auth_token(token)
        if not isinstance(resp, str):
            return True
        else:
            return False
    else:
        return False
def get_user_id(token):
    if token:
        resp = users.decode_auth_token(token)
        if not isinstance(resp, str):
            return resp
        else:
            return 0
    else:
        return 0
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
    list_classes = classes.query.join(passives, classes.passives, isouter=True).all()
    list = []
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
    list_classes = classes.query.filter(classes.predecessor == 'None').join(passives, classes.passives, isouter=True).all()
    list = []
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
