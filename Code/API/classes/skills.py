from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship

from constants import get_skill_passive_table, get_character_skill_table, get_db
import fonctions

class skills(get_db().Model):
    __tablename__ = "skills"
    id = Column('skill_id', Integer, primary_key=True)
    name = Column(String)
    power = Column(Integer)
    power_gain = Column(Integer)
    accuracy = Column(Integer)
    accuracy_gain = Column(Integer)
    crit = Column(Integer)
    crit_gain = Column(Integer)
    mana_usage = Column(Integer)
    skill_type = Column(String)
    skill_purpose = Column(String)
    damage_type = Column(String)
    characters = relationship('characters', secondary = get_character_skill_table(), back_populates = 'skills')
    passives = relationship('passives', secondary = get_skill_passive_table(), back_populates = 'skills')

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
            'passives': fonctions.get_join_passive(self.passives)
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