from sqlalchemy import Column, Integer, String, Float
from sqlalchemy.orm import relationship

from classes.passives import passives as Passives
from constants import get_weapon_passive_table, get_db
from fonctions import get_join_passive, download_image, get_extension

class weapons(get_db().Model):
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
    def get_simplified(self):
        return {
            'id': self.id,
            'value': self.name,
            'selected': False
        }

    def add_strength(self):
        passive: Passives
        for passive in self.passives:
            match passive.name:
                case 'Strength+I':
                    return 1
                case 'Strength+II':
                    return 2
                case 'Strength+III':
                    return 3
                case 'Strength+IV':
                    return 4
                case 'Strength+V':
                    return 5
                case 'Strength+VI':
                    return 6
                case 'Strength+VII':
                    return 7
                case 'Strength+VIII':
                    return 8
                case 'Strength+IX':
                    return 9
                case 'Strength+X':
                    return 10
        return 0
    def add_defense(self):
        passive: Passives
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
    def add_magic(self):
        passive: Passives
        for passive in self.passives:
            match passive.name:
                case 'Magic+I':
                    return 1
                case 'Magic+II':
                    return 2
                case 'Magic+III':
                    return 3
                case 'Magic+IV':
                    return 4
                case 'Magic+V':
                    return 5
                case 'Magic+VI':
                    return 6
                case 'Magic+VII':
                    return 7
                case 'Magic+VIII':
                    return 8
                case 'Magic+IX':
                    return 9
                case 'Magic+X':
                    return 10
        return 0
    def add_resistance(self):
        passive: Passives
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
        passive: Passives
        for passive in self.passives:
            match passive.name:
                case 'Speed+I':
                    return 1
                case 'Speed+II':
                    return 2
                case 'Speed+III':
                    return 3
                case 'Speed+IV':
                    return 4
                case 'Speed+V':
                    return 5
                case 'Speed+VI':
                    return 6
                case 'Speed+VII':
                    return 7
                case 'Speed+VIII':
                    return 8
                case 'Speed+IX':
                    return 9
                case 'Speed+X':
                    return 10
        return 0
    def add_skill(self):
        passive: Passives
        for passive in self.passives:
            match passive.name:
                case 'Skill+I':
                    return 1
                case 'Skill+II':
                    return 2
                case 'Skill+III':
                    return 3
                case 'Skill+IV':
                    return 4
                case 'Skill+V':
                    return 5
                case 'Skill+VI':
                    return 6
                case 'Skill+VII':
                    return 7
                case 'Skill+VIII':
                    return 8
                case 'Skill+IX':
                    return 9
                case 'Skill+X':
                    return 10
        return 0
    def add_luck(self):
        passive: Passives
        for passive in self.passives:
            match passive.name:
                case 'Luck+I':
                    return 1
                case 'Luck+II':
                    return 2
                case 'Luck+III':
                    return 3
                case 'Luck+IV':
                    return 4
                case 'Luck+V':
                    return 5
                case 'Luck+VI':
                    return 6
                case 'Luck+VII':
                    return 7
                case 'Luck+VIII':
                    return 8
                case 'Luck+IX':
                    return 9
                case 'Luck+X':
                    return 10
        return 0
    def add_magic_damage(self):
        passive: Passives
        for passive in self.passives:
            match passive.name:
                case 'Magic Damage+I':
                    return 1
                case 'Magic Damage+II':
                    return 2
                case 'Magic Damage+III':
                    return 3
                case 'Magic Damage+IV':
                    return 4
                case 'Magic Damage+V':
                    return 5
                case 'Magic Damage+VI':
                    return 6
                case 'Magic Damage+VII':
                    return 7
                case 'Magic Damage+VIII':
                    return 8
                case 'Magic Damage+IX':
                    return 9
                case 'Magic Damage+X':
                    return 10
        return 0
    def add_passive(self, passive: int):
        self.passives.append(Passives.query.filter(Passives.id == passive).first())
        
    def can_crit(self):
        if self.passives.has(name='Cannot Crit'):
            return False
        else:
            return True


