from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship

from constants import get_armor_passive_table, get_skill_passive_table, get_classe_passive_table, get_weapon_passive_table, get_character_passive_table, get_db

class passives(get_db().Model):
    __tablename__ = "passives"
    id = Column('passive_id', Integer, primary_key = True)
    name = Column(String)
    description = Column(String)
    passive_type = Column(String)
    armors = relationship('armors', secondary = get_armor_passive_table(), back_populates = 'passives')
    weapons = relationship('weapons', secondary = get_weapon_passive_table(), back_populates = 'passives')
    classes = relationship('classe', secondary = get_classe_passive_table(), back_populates = 'passives')
    skills = relationship('skills', secondary = get_skill_passive_table(), back_populates = 'passives')
    characters = relationship('characters', secondary = get_character_passive_table(), back_populates = 'passives')

    def __init__(self, name, description, passive_type):
        self.name = name
        self.description = description
        self.passive_type = passive_type
    def get(self):
        return {
            'passive_id': self.id,
            'name': self.name,
            'description': self.description,
            'passive_type': self.passive_type
        }
    def get_passive(self):
        return {
            'id': self.id,
            'value': self.name,
            'selected': False
        }



