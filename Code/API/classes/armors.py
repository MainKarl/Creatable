from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship

from constants import get_db
from constants import get_armor_passive_table
from fonctions import get_join_passive, download_image, get_extension

class armors(get_db().Model):
    __tablename__ = "armors"
    id = Column("armor_id", Integer, primary_key = True)
    name = Column(String)
    power = Column(Integer)
    img = Column(String)
    characters = relationship('characters', backref='armors', lazy=True)
    passives = relationship('passives', secondary = get_armor_passive_table(), back_populates = 'armors')

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
    