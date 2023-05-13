from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship

from classes.passives import passives

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

    def __init__(self, name, power, img):
        self.name = name
        self.power = power
        if (img != ''):
            self.img = download_image(img, name, get_extension(img))
        else:
            self.img = "http:////144.217.14.182//img//notFound.jpg"
    def get(self):
        return {
            'armor_id': self.id,
            'name': self.name,
            'power': self.power,
            'img': self.img,
            'passives': get_join_passive(self.passives)
        }

    def add_defense(self):
        passive: passives
        for passive in self.passives:
            match passive.name:
                case 'Defense+I':
                    return 1
                case 'Defense+II':
                    return 2
                case 'Defense+III':
                    return 3
                case 'Defense+IV':
                    return 4
                case 'Defense+V':
                    return 5
                case 'Defense+VI':
                    return 6
                case 'Defense+VII':
                    return 7
                case 'Defense+VIII':
                    return 8
                case 'Defense+IX':
                    return 9
                case 'Defense+X':
                    return 10
        return 0                 
    def add_resistance(self):
        passive: passives
        for passive in self.passives:
            match passive.name:
                case 'Resistance+I':
                    return 1
                case 'Resistance+II':
                    return 2
                case 'Resistance+III':
                    return 3
                case 'Resistance+IV':
                    return 4
                case 'Resistance+V':
                    return 5
                case 'Resistance+VI':
                    return 6
                case 'Resistance+VII':
                    return 7
                case 'Resistance+VIII':
                    return 8
                case 'Resistance+IX':
                    return 9
                case 'Resistance+X':
                    return 10
        return 0
    def add_speed(self):
        passive: passives
        for passive in self.passives:
            match passive.name:
                case 'Speed-I':
                    return -1
                case 'Speed-II':
                    return -2
                case 'Speed-III':
                    return -3
                case 'Speed-IV':
                    return -4
                case 'Speed-V':
                    return -5
                case 'Speed-VI':
                    return -6
                case 'Speed-VII':
                    return -7
                case 'Speed-VIII':
                    return -8
                case 'Speed-IX':
                    return -9
                case 'Speed-X':
                    return -10
        return 0
