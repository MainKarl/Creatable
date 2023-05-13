from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
import random as rnd

from classes.base import Base
from classes.classe import classe as Classes
from classes.statuses import statuses
from classes.types import types
from classes.skills import skills
from classes.weapons import weapons
from classes.armors import armors
from classes.passives import passives
from constants import get_character_skill_table, get_character_passive_table, get_character_status_table, get_character_type_table
from fonctions import get_extension, download_image, get_join_type, get_join_status, get_join_passive, get_join_skill

class characters(Base):
    __tablename__ = "characters"
    id = Column('character_id', Integer, primary_key = True)
    name = Column(String)
    race = Column(String)
    level = Column(Integer)
    hp = Column(Integer)
    combat_hp = Column(Integer)
    hp_growth = Column(Integer)
    strength = Column(Integer)
    combat_strength = Column(Integer)
    strength_growth = Column(Integer)
    defense = Column(Integer)
    combat_defense = Column(Integer)
    defense_growth = Column(Integer)
    magic = Column(Integer)
    combat_magic = Column(Integer)
    magic_growth = Column(Integer)
    resistance = Column(Integer)
    combat_resistance = Column(Integer)
    resistance_growth = Column(Integer)
    speed = Column(Integer)
    combat_speed = Column(Integer)
    speed_growth = Column(Integer)
    skill = Column(Integer)
    combat_skill = Column(Integer)
    skill_growth = Column(Integer)
    luck = Column(Integer)
    combat_luck = Column(Integer)
    luck_growth = Column(Integer)
    mana = Column(Integer)
    combat_mana = Column(Integer)
    mana_growth = Column(Integer)
    arcane_lvl = Column(Integer)
    illusion_lvl = Column(Integer)
    mind_lvl = Column(Integer)
    fire_lvl = Column(Integer)
    heat_lvl = Column(Integer)
    lava_lvl = Column(Integer)
    water_lvl = Column(Integer)
    liquid_lvl = Column(Integer)
    ice_lvl = Column(Integer)
    air_lvl = Column(Integer)
    wind_lvl = Column(Integer)
    lightning_lvl = Column(Integer)
    earth_lvl = Column(Integer)
    nature_lvl = Column(Integer)
    poison_lvl = Column(Integer)
    light_lvl = Column(Integer)
    holy_lvl = Column(Integer)
    space_lvl = Column(Integer)
    dark_lvl = Column(Integer)
    curse_lvl = Column(Integer)
    necromancy_lvl = Column(Integer)
    fist_lvl = Column(String)
    sword_lvl = Column(String)
    spear_lvl = Column(String)
    axe_lvl = Column(String)
    dagger_lvl = Column(String)
    staff_lvl = Column(String)
    bow_lvl = Column(String)
    other_lvl = Column(String)
    stat_rk = Column(String)
    magic_rk = Column(String)
    spirit_rk = Column(String)
    armor_id = Column(Integer, ForeignKey('armors.armor_id'), nullable = False)
    weapon_id = Column(Integer, ForeignKey('weapons.weapon_id'), nullable = False)
    class_id = Column(Integer, ForeignKey('classes.class_id'), nullable = False)
    user_id = Column(Integer, ForeignKey('users.user_id'), nullable = False)
    types = relationship('types', secondary = get_character_type_table(), back_populates = 'characters')
    statuses = relationship('statuses', secondary = get_character_status_table(), back_populates = 'characters')
    skills = relationship('skills', secondary = get_character_skill_table(), back_populates = 'characters')
    passives = relationship('passives', secondary = get_character_passive_table(), back_populates = 'characters')
    img = Column(String)

    def __init__(self, name, race, class_id, user_id, img):
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
        self.user_id = user_id
        if (img != ''):
            self.img = download_image(img, name, get_extension(img))
        else:
            self.img = "http:////144.217.14.182//img//notFound.jpg"
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
            'class': Classes.query.filter(Classes.id == self.class_id).one().get(),
            'types': get_join_type(self.types),
            'status': get_join_status(self.statuses),
            'skills': get_join_skill(self.skills),
            'passives': get_join_passive(self.passives),
            'img': self.img,
        }

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
        classe = Classes.query.filter(Classes.id == class_id).one()
        
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
        oClass = Classes.query.filter(Classes.id == self.class_id).one()
        nClass = Classes.query.filter(Classes.id == class_id).one()
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
