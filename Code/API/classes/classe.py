from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship

from constants import get_classe_passive_table, get_db
from fonctions import get_join_passive

class classe(get_db().Model):
    __tablename__ = "classes"
    id = Column('class_id', Integer, primary_key = True)
    name = Column(String)
    hp_growth = Column(Integer)
    strength_growth = Column(Integer)
    defense_growth = Column(Integer)
    magic_growth = Column(Integer)
    resistance_growth = Column(Integer)
    speed_growth = Column(Integer)
    skill_growth = Column(Integer)
    luck_growth = Column(Integer)
    mana_growth = Column(Integer)
    class_serie = Column(String)
    predecessor = Column(String)
    characters = relationship('characters', backref='classes', lazy=True)
    passives = relationship('passives', secondary = get_classe_passive_table(), back_populates = 'classes')

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