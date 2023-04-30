from sqlalchemy import Column, Integer, String, Float
from sqlalchemy.orm import relationship

from classes.base import Base
from constants import get_weapon_passive_table
from fonctions import get_join_passive, download_image, get_extension

class weapons(Base):
    __tablename__ = "weapons"
    id = Column("weapon_id", Integer, primary_key = True)
    name = Column(String)
    damage = Column(Integer)
    accuracy = Column(Integer)
    crit = Column(Integer)
    price = Column(Float)
    rank = Column(String)
    damage_type = Column(String)
    weapon_type = Column(String)
    img = Column(String)
    characters = relationship('characters', backref='weapons', lazy=True)
    passives = relationship('passives', secondary = get_weapon_passive_table(), back_populates = 'weapons')

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