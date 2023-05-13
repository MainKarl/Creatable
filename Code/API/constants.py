from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Table, Column, PrimaryKeyConstraint, Integer, ForeignKey
import os

__basedir = os.path.abspath(os.path.dirname(__name__))

__app = Flask(__name__)
__app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(__basedir, 'Creatable.db')
__app.secret_key = "Tjaf3MEr8i6xEm4VxQxlLNx4uCAN5tbxr0sle9GUKciebWEtpcb0NTvbXmoeoI82cuEnu50KTsMynupfApFucYCL4JgRHD15fwJLecJwZIRtOlNgc9AiIoqwr7CPQag2HC7t8b6PAk90MvugEnpPDVf9iaW3upGKFPQbdtNtgKQn3iQD4gXC8SzHW5riKPsghyuiEcIlDHV5E82rTQQ5L7LccILJ2XkF4w2kbjJS1rCzDQRTvmqmrBa3O4dnnYzWo8EteXWerdhyp1vnvLPWC6KJoiLDwWoJ4PU8e5tglCAa6awX5AtErLcgX6SMcPe3EnseNozvfoUDiqjCSInSlAI84LCxAIxlqiixeOPxISAVm3nID9km5j1F3j2vcMCLg9PK28qli94TAVaR"

__db = SQLAlchemy()
__db.init_app(__app)

__armors_passives_table = __db.Table('ArmorPassives',
                                Column('armor_id', Integer, ForeignKey('armors.armor_id'), nullable = False),
                                Column('passive_id', Integer, ForeignKey('passives.passive_id'), nullable = False),
                                PrimaryKeyConstraint('armor_id', 'passive_id')
                            )
__weapons_passives_table = __db.Table('WeaponPassives',
                                Column('weapon_id', Integer, ForeignKey('weapons.weapon_id'), nullable = False),
                                Column('passive_id', Integer, ForeignKey('passives.passive_id'), nullable = False),
                                PrimaryKeyConstraint('weapon_id', 'passive_id'),
                            )
__classes_passives_tables = __db.Table('ClassPassives',
                                Column('class_id', Integer, ForeignKey('classes.class_id'), nullable = False),
                                Column('passive_id', Integer, ForeignKey('passives.passive_id'), nullable = False),
                                PrimaryKeyConstraint('class_id', 'passive_id')
                            )
__skills_passives_table = __db.Table('SkillPassives',
                                Column('skill_id', Integer, ForeignKey('skills.skill_id'), nullable = False),
                                Column('passive_id', Integer, ForeignKey('passives.passive_id'), nullable = False),
                                PrimaryKeyConstraint('skill_id', 'passive_id'),
                            )
__characters_passives_table = __db.Table('CharacterPassives', 
                                    Column('character_id', Integer, ForeignKey('characters.character_id'), nullable = False),
                                    Column('passive_id', Integer, ForeignKey('passives.passive_id'), nullable = False),
                                    PrimaryKeyConstraint('character_id', 'passive_id'),
                                )
__characters_types_table = __db.Table('CharacterTypes',
                                Column('character_id', Integer, ForeignKey('characters.character_id'), nullable = False),
                                Column('type_id', Integer, ForeignKey('types.type_id'), nullable = False),
                                PrimaryKeyConstraint('character_id', 'type_id'),
                            )
__characters_status_table = __db.Table('CharacterStatus',
                                Column('character_id', Integer, ForeignKey('characters.character_id'), nullable = False),
                                Column('status_id', Integer, ForeignKey('status.status_id'), nullable = False),
                                PrimaryKeyConstraint('character_id', 'status_id'),
                            )
__characters_skills_table = __db.Table('CharacterSkills',
                                Column('character_id', Integer, ForeignKey('characters.character_id'), nullable = False),
                                Column('skill_id', Integer, ForeignKey('skills.skill_id'), nullable = False),
                                PrimaryKeyConstraint('character_id', 'skill_id'),
                            )

#region Fonctions
def get_app() -> Flask:
    return __app

def get_db() -> SQLAlchemy:
    return __db

def get_armor_passive_table() -> Table:
    return __armors_passives_table

def get_weapon_passive_table() -> Table:
    return __weapons_passives_table

def get_classe_passive_table() -> Table:
    return __classes_passives_tables

def get_skill_passive_table() -> Table:
    return __skills_passives_table

def get_character_passive_table() -> Table:
    return __characters_passives_table

def get_character_type_table() -> Table:
    return __characters_types_table

def get_character_status_table() -> Table:
    return __characters_status_table

def get_character_skill_table() -> Table:
    return __characters_skills_table
#endregion

