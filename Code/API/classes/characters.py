from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship, Mapped
import random as rnd

from classes.classe import classe as Classes
from classes.statuses import statuses
from classes.types import types
from classes.skills import skills
from classes.weapons import weapons
from classes.armors import armors
from classes.passives import passives as Passives
from constants import get_character_skill_table, get_character_passive_table, get_character_status_table, get_character_type_table, get_db
from fonctions import get_extension, download_image, get_join_type, get_join_status, get_join_passive, get_join_skill

class characters(get_db().Model):
    __tablename__ = "characters"
    # General
    id = Column('character_id', Integer, primary_key = True)
    name = Column(String)
    race = Column(String)
    level = Column(Integer)

    # Stats
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

    # Magic
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

    # Weapons
    fist_lvl = Column(String)
    sword_lvl = Column(String)
    spear_lvl = Column(String)
    axe_lvl = Column(String)
    dagger_lvl = Column(String)
    staff_lvl = Column(String)
    bow_lvl = Column(String)
    other_lvl = Column(String)

    # Ranks
    stat_rk = Column(String)
    magic_rk = Column(String)
    spirit_rk = Column(String)

    # Others
    armor_id = Column(Integer, ForeignKey('armors.armor_id'), nullable = False)
    weapon_id = Column(Integer, ForeignKey('weapons.weapon_id'), nullable = False)
    class_id = Column(Integer, ForeignKey('classes.class_id'), nullable = False)
    user_id = Column(Integer, ForeignKey('users.user_id'), nullable = False)
    types = relationship('types', secondary = get_character_type_table(), back_populates = 'characters')
    statuses = relationship('statuses', secondary = get_character_status_table(), back_populates = 'characters')
    skills = relationship('skills', secondary = get_character_skill_table(), back_populates = 'characters')
    passives: Mapped[list[Passives]] =  relationship('passives', secondary = get_character_passive_table(), back_populates = 'characters')
    img = Column(String)

    def __init__(self, \
                 name: str, \
                 race: str, \
                 class_id: int, \
                 user_id: int, \
                 img: str):
        self.name = name
        self.race = race
        self.level = 1
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
        self.fist_lvl = 'E'
        self.sword_lvl = 'E'
        self.spear_lvl = 'E'
        self.axe_lvl = 'E'
        self.dagger_lvl = 'E'
        self.staff_lvl = 'E'
        self.bow_lvl = 'E'
        self.other_lvl = 'E'
        self.spirit_rk = 'Basic'
        self.armor_id = 1
        self.weapon_id = 1
        self.class_id = class_id
        self.user_id = user_id
        self.define_default_stat(class_id)
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
    def get_simplified(self):
        return {
            'id': self.id,
            'value': self.name
        }
    def get_weapon_type(self):
        weapon: weapons
        weapon = weapons.query.filter(weapons.id == self.weapon_id).one()
        return weapon.weapon_type
    def get_weapon_rank_hit_bonus(self):
        match (self.get_weapon_type()):
            case 'Sword':
                match self.sword_lvl:
                    case 'E':
                        return 0
                    case 'D':
                        return 10
                    case 'C':
                        return 10
                    case 'B':
                        return 20
                    case 'A':
                        return 20
                    case 'S':
                        return 30
            case 'Spear':
                match self.spear_lvl:
                    case 'E':
                        return 0
                    case 'D':
                        return 10
                    case 'C':
                        return 10
                    case 'B':
                        return 20
                    case 'A':
                        return 20
                    case 'S':
                        return 30
            case 'Axe':
                match self.axe_lvl:
                    case 'E':
                        return 0
                    case 'D':
                        return 10
                    case 'C':
                        return 10
                    case 'B':
                        return 20
                    case 'A':
                        return 20
                    case 'S':
                        return 30
            case 'Dagger':
                match self.dagger_lvl:
                    case 'E':
                        return 0
                    case 'D':
                        return 10
                    case 'C':
                        return 10
                    case 'B':
                        return 20
                    case 'A':
                        return 20
                    case 'S':
                        return 30
            case 'Staff':
                match self.staff_lvl:
                    case 'E':
                        return 0
                    case 'D':
                        return 10
                    case 'C':
                        return 10
                    case 'B':
                        return 20
                    case 'A':
                        return 20
                    case 'S':
                        return 30
            case 'Bow':
                match self.bow_lvl:
                    case 'E':
                        return 0
                    case 'D':
                        return 10
                    case 'C':
                        return 10
                    case 'B':
                        return 20
                    case 'A':
                        return 20
                    case 'S':
                        return 30
            case 'Fist':
                match self.fist_lvl:
                    case 'E':
                        return 0
                    case 'D':
                        return 10
                    case 'C':
                        return 10
                    case 'B':
                        return 20
                    case 'A':
                        return 20
                    case 'S':
                        return 30
            case 'Other':
                match self.other_lvl:
                    case 'E':
                        return 0
                    case 'D':
                        return 10
                    case 'C':
                        return 10
                    case 'B':
                        return 20
                    case 'A':
                        return 20
                    case 'S':
                        return 30                      
    def get_weapon_rank_damage_bonus(self):
        match (self.get_weapon_type()):
            case 'Sword':
                match self.sword_lvl:
                    case 'E':
                        return 0
                    case 'D':
                        return 5
                    case 'C':
                        return 5
                    case 'B':
                        return 10
                    case 'A':
                        return 10
                    case 'S':
                        return 15
            case 'Spear':
                match self.spear_lvl:
                    case 'E':
                        return 0
                    case 'D':
                        return 5
                    case 'C':
                        return 5
                    case 'B':
                        return 10
                    case 'A':
                        return 10
                    case 'S':
                        return 15
            case 'Axe':
                match self.axe_lvl:
                    case 'E':
                        return 0
                    case 'D':
                        return 5
                    case 'C':
                        return 5
                    case 'B':
                        return 10
                    case 'A':
                        return 10
                    case 'S':
                        return 15
            case 'Dagger':
                match self.dagger_lvl:
                    case 'E':
                        return 0
                    case 'D':
                        return 5
                    case 'C':
                        return 5
                    case 'B':
                        return 10
                    case 'A':
                        return 10
                    case 'S':
                        return 15
            case 'Staff':
                match self.staff_lvl:
                    case 'E':
                        return 0
                    case 'D':
                        return 5
                    case 'C':
                        return 5
                    case 'B':
                        return 10
                    case 'A':
                        return 10
                    case 'S':
                        return 15
            case 'Bow':
                match self.bow_lvl:
                    case 'E':
                        return 0
                    case 'D':
                        return 5
                    case 'C':
                        return 5
                    case 'B':
                        return 10
                    case 'A':
                        return 10
                    case 'S':
                        return 15
            case 'Fist':
                match self.fist_lvl:
                    case 'E':
                        return 0
                    case 'D':
                        return 5
                    case 'C':
                        return 5
                    case 'B':
                        return 10
                    case 'A':
                        return 10
                    case 'S':
                        return 15
            case 'Other':
                match self.other_lvl:
                    case 'E':
                        return 0
                    case 'D':
                        return 5
                    case 'C':
                        return 5
                    case 'B':
                        return 10
                    case 'A':
                        return 10
                    case 'S':
                        return 15

    def has_passive(self, \
                    vpassive: str) -> bool:
        passive: Passives
        passive = Passives.query.filter(Passives.name == vpassive).first()
        if passive in self.passives:
            return True
        return False
    def has_type(self, \
                 name: str) -> bool:
        type: types
        type = types.query.filter(types.name == name).first()
        if type in self.types:
            return True
        return False
    def has_passive_immunity(self) -> bool:
        return self.has_passive('Great Corruption Ythil')
    def has_active_immunity(self) -> bool:
        return self.has_passive('Creator of Skills Tirmis')
    def has_effective_immunity(self) -> bool:
        return self.has_passive('Conquest')
    def has_resistance_immunity(self) -> bool:
        return self.has_passive('God-Slayer Yuuki')
    def has_defensive_immunity(self) -> bool:
        return self.has_passive('True Dragon of Power Byleth')
    def has_double_immunity(self) -> bool:
        return self.has_passive('Wary Fighter')
    def has_illusion_immunity(self) -> bool:
        return self.has_passive('Protected Dream')
    def has_mind_immunity(self) -> bool:
        return self.has_passive('Souless')

    def activate_arcane_burst(self) -> bool:
        if self.has_passive('Arcane Burst') and rnd.randrange(0, 100) <= self.combat_skill:
            return True
        return False
    def activate_lifetaker(self) -> bool:
        if self.has_passive('Lifetaker') and rnd.randrange(0, 100) <= self.combat_luck:
            return True
        return False
    def activate_sol(self) -> bool:
        if self.has_passive('Sol') and rnd.randrange(0, 100) <= (self.combat_skill/3):
            return True
        return False
    def activate_luna(self) -> bool:
        if self.has_passive('Luna') and rnd.randrange(0, 100) <= (self.combat_skill/3):
            return True
        return False
    def activate_aether(self) -> bool:
        if self.has_passive('Aether') and rnd.randrange(0, 100) <= (self.combat_skill/6):
            return True
        return False
    def activate_perfect_attack(self) -> bool:
        if self.has_passive('Perfect Attack') and rnd.randrange(0, 100) <= self.combat_skill*1.25:
            return True
        return False
    def activate_raikiri(self) -> bool:
        if self.has_passive('Raikiri') and rnd.randrange(0, 100) <= (self.combat_skill/2):
            return True
        return False
    def activate_astra(self) -> bool:
        if self.has_passive('Astra') and rnd.randrange(0, 100) <= (self.combat_skill/4):
            return True
        return False
    def activate_reminiscence_of_battle(self) -> bool:
        if self.has_passive('Reminiscence of Battle') and rnd.randrange(0, 100) <= (self.combat_skill/2):
            return True
        return False
    def activate_death_touch(self) -> bool:
        if self.has_passive('Death Touch') and rnd.randrange(0, 100) <= (self.combat_skill/3):
            return True
        return False
    def activate_ignis(self) -> bool:
        if self.has_passive('Ignis') and rnd.randrange(0, 100) <= self.combat_skill:
            return True
        return False
    def activate_lethality(self) -> bool:
        if self.has_passive('Lethality') and rnd.randrange(0, 100) <= (self.combat_skill/8):
            return True
        return False
    def activate_parry(self) -> bool:
        if self.has_passive('Parry') and rnd.randrange(0, 100) <= (self.combat_skill/3):
            return True
        return False
    def activate_miracle(self) -> bool:
        if self.has_passive('Miracle') and rnd.randrange(0, 100) <= self.combat_luck:
            return True
        return False
    def activate_aegis(self) -> bool:
        if self.has_passive('Aegis') and rnd.randrange(0, 100) <= (self.combat_skill/3):
            return True
        return False
    def activate_pavise(self) -> bool:
        if self.has_passive('Pavise') and rnd.randrange(0, 100) <= (self.combat_skill/3):
            return True
        return False
    def activate_instinct_of_survival(self) -> bool:
        if self.has_passive('Instinct of Survival') and rnd.randrange(0, 100) <= self.combat_luck:
            return True
        return False
    def activate_strike_back(self) -> bool:
        if self.has_passive('Strike & Back') and rnd.randrange(0, 100) <= self.combat_speed:
            return True
        return False

    def get_character_magic_resistance(self, \
                                       magic: str) -> int:
        match magic:
            case 'Illusion':
                return 1-(self.illusion_lvl*0.2/100)
            case 'Mind':
                return 1-(self.mind_lvl*0.2/100)
            case 'Heat':
                return 1-(self.heat_lvl*0.2/100)
            case 'Lava':
                return 1-(self.lava_lvl*0.2/100)
            case 'Liquid':
                return 1-(self.liquid_lvl*0.2/100)
            case 'Ice':
                return 1-(self.ice_lvl*0.2/100)
            case 'Wind':
                return 1-(self.wind_lvl*0.2/100)
            case 'Lightning':
                return 1-(self.lightning_lvl*0.2/100)
            case 'Nature':
                return 1-(self.nature_lvl*0.2/100)
            case 'Poison':
                return 1-(self.poison_lvl*0.2/100)
            case 'Holy':
                return 1-(self.holy_lvl*0.2/100)
            case 'Space':
                return 1-(self.space_lvl*0.2/100)
            case 'Curse':
                return 1-(self.curse_lvl*0.2/100)
            case 'Necromancy':
                return 1-(self.necromancy_lvl*0.2/100)
            case _:
                return 1
    def get_character_magic_bonus(self, \
                                  magic: str) -> int:
            match magic:
                case 'Illusion':
                    return 1+(self.illusion_lvl/100)
                case 'Mind':
                    return 1+(self.mind_lvl/100)
                case 'Heat':
                    return 1+(self.heat_lvl/100)
                case 'Lava':
                    return 1+(self.lava_lvl/100)
                case 'Liquid':
                    return 1+(self.liquid_lvl/100)
                case 'Ice':
                    return 1+(self.ice_lvl/100)
                case 'Wind':
                    return 1+(self.wind_lvl/100)
                case 'Lightning':
                    return 1+(self.lightning_lvl/100)
                case 'Nature':
                    return 1+(self.nature_lvl/100)
                case 'Poison':
                    return 1+(self.poison_lvl/100)
                case 'Holy':
                    return 1+(self.holy_lvl/100)
                case 'Space':
                    return 1+(self.space_lvl/100)
                case 'Curse':
                    return 1+(self.curse_lvl/100)
                case 'Necromancy':
                    return 1+(self.necromancy_lvl/100)
                case _:
                    return 1

    def define_default_stat(self, \
                            class_id):
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

        self.define_stat_rank()
    def define_stat_rank(self):
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
        self.rest()
    def define_magic_rank(self, \
                          magic_rank):
        self.magic_rk = magic_rank
        self.rest()
    def define_spirit_rank(self, \
                           spirit_rank):
        self.spirit_rk = spirit_rank
        self.rest()
    def define_status(self, \
                      cstatus):
        status: int
        for status in str(cstatus).split(';'):
            self.add_status_effect(status)

    def add_status_effect(self, \
                          status_id: int):
        new_status = statuses.query.filter(statuses.id == status_id).first()
        self.statuses.append(new_status)
        if new_status.name == 'Curse_HP':
            self.combat_hp = self.combat_hp/1.5
        elif new_status.name == 'Great_Curse_HP':
            self.combat_hp = self.combat_hp/2
        elif new_status.name == 'Curse_Strength':
            self.combat_strength = self.combat_strength/1.5
        elif new_status.name == 'Great_Curse_Strength':
            self.combat_strength = self.combat_strength/2
        elif new_status.name == 'Curse_Defense':
            self.combat_defense = self.combat_defense/1.5
        elif new_status.name == 'Great_Curse_Defense':
            self.combat_defense = self.combat_defense/2
        elif new_status.name == 'Curse_Magic':
            self.combat_magic = self.combat_magic/1.5
        elif new_status.name == 'Great_Curse_Magic':
            self.combat_magic = self.combat_magic/2
        elif new_status.name == 'Curse_Resistance':
            self.combat_resistance = self.combat_resistance/1.5
        elif new_status.name == 'Great_Curse_Resistance':
            self.combat_resistance = self.combat_resistance/2
        elif new_status.name == 'Curse_Speed':
            self.combat_speed = self.combat_speed/1.5
        elif new_status.name == 'Great_Curse_Speed':
            self.combat_speed = self.combat_speed/2
        elif new_status.name == 'Curse_Skill':
            self.combat_skill = self.combat_skill/1.5
        elif new_status.name == 'Great_Curse_Skill':
            self.combat_skill = self.combat_skill/2
        elif new_status.name == 'Curse_Luck':
            self.combat_luck = self.combat_luck/1.5
        elif new_status.name == 'Great_Curse_Luck':
            self.combat_luck = self.combat_luck/2
        elif new_status.name == 'Curse_Mana':
            self.combat_mana = self.combat_mana/1.5
        elif new_status.name == 'Great_Curse_Mana':
            self.combat_mana = self.combat_mana/2
        elif new_status.name == 'Bless_HP':
            self.combat_hp = self.combat_hp*1.5
        elif new_status.name == 'Great_Bless_HP':
            self.combat_hp = self.combat_hp*2
        elif new_status.name == 'Bless_Strength':
            self.combat_strength = self.combat_strength*1.5
        elif new_status.name == 'Great_Bless_Strength':
            self.combat_strength = self.combat_strength*2
        elif new_status.name == 'Bless_Defense':
            self.combat_defense = self.combat_defense*1.5
        elif new_status.name == 'Great_Bless__Defense':
            self.combat_defense = self.combat_defense*2
        elif new_status.name == 'Bless_Magic':
            self.combat_magic = self.combat_magic*1.5
        elif new_status.name == 'Great_Bless_Magic':
            self.combat_magic = self.combat_magic*2
        elif new_status.name == 'Bless_Resistance':
            self.combat_resistance = self.combat_resistance*1.5
        elif new_status.name == 'Great_Bless_Resistance':
            self.combat_resistance = self.combat_resistance*2
        elif new_status.name == 'Bless_Speed':
            self.combat_speed = self.combat_speed*1.5
        elif new_status.name == 'Great_Bless_Speed':
            self.combat_speed = self.combat_speed*2
        elif new_status.name == 'Bless_Skill':
            self.combat_skill = self.combat_skill*1.5
        elif new_status.name == 'Great_Bless_Skill':
            self.combat_skill = self.combat_skill*2
        elif new_status.name == 'Bless_Luck':
            self.combat_luck = self.combat_luck*1.5
        elif new_status.name == 'Great_Bless_Luck':
            self.combat_luck = self.combat_luck*2
        elif new_status.name == 'Bless_Mana':
            self.combat_mana = self.combat_mana*1.5
        elif new_status.name == 'Great_Bless_Mana':
            self.combat_mana = self.combat_mana*2
        elif new_status.name == 'Spirit_Limit':
            multiplier = 0
            if self.spirit_rk == 'Basic':
                multiplier = 1.5
            elif self.spirit_rk == 'Expert':
                multiplier = 2
            elif self.spirit_rk == 'Sage':
                multiplier = 5
            elif self.spirit_rk == 'Dragon':
                multiplier = 10
            elif self.spirit_rk == 'God':
                multiplier = 20

            self.combat_strength = self.combat_strength*multiplier
            self.combat_defense = self.combat_defense/2
            self.combat_magic = self.combat_magic*multiplier
            self.combat_resistance = self.combat_resistance/2
            self.combat_speed = self.combat_speed*multiplier
            self.combat_skill = self.combat_skill*multiplier
            self.combat_mana = self.combat_mana*multiplier
    def add_passives(self, \
                     passives: str):
        passive: int
        for passive in str(passives).split(';'):
            self.add_passive(passive)
        self.rest()
    def add_passive(self, \
                    passive: int):
        new_passive = Passives.query.filter(Passives.id == passive).first()
        self.passives.append(new_passive)
        if new_passive.name == 'Heroic Desire':
            self.hp_growth += 5
            self.strength_growth += 5
            self.defense_growth += 5
            self.magic_growth += 5
            self.resistance_growth += 5
            self.speed_growth += 5
            self.skill_growth += 5
            self.luck_growth += 5
            self.mana_growth += 5
        elif new_passive.name == 'Mage Prodigy':
            self.magic_growth += 15
            self.mana_growth += 15
        elif new_passive.name == 'Perseverant':
            self.hp_growth += 10
        elif new_passive.name == 'Strong':
            self.strength_growth += 10
        elif new_passive.name == 'Intelligent':
            self.magic_growth += 10
        elif new_passive.name == 'Tanky':
            self.defense_growth += 10
        elif new_passive.name == 'Resilient':
            self.resistance_growth += 10
        elif new_passive.name == 'Skilled':
            self.skill_growth += 10
        elif new_passive.name == 'Fast':
            self.speed_growth += 10
        elif new_passive.name == 'Lucky':
            self.luck_growth += 10
        elif new_passive.name == 'Adept':
            self.mana_growth += 10
        elif new_passive.name == 'Unkillable':
            self.hp_growth += 100
            self.hp *= 2
        elif new_passive.name == 'Powerful':
            self.strength_growth += 100
            self.strength *= 2
        elif new_passive.name == 'Mastermind':
            self.magic_growth += 100
            self.magic *= 2
        elif new_passive.name == 'Defender':
            self.defense_growth += 100
            self.defense *= 2
        elif new_passive.name == 'Robust':
            self.resistance_growth += 100
            self.resistance *= 2
        elif new_passive.name == 'Swift':
            self.speed_growth += 100
            self.speed *= 2
        elif new_passive.name == 'Talented':
            self.skill_growth += 100
            self.skill *= 2
        elif new_passive.name == 'Fortunate':
            self.luck_growth += 100
            self.luck *= 2
        elif new_passive.name == 'Gifted':
            self.mana_growth += 100
            self.mana *= 2
        elif new_passive.name == 'Trash':
            self.hp_growth -= 5
            self.strength_growth -= 5
            self.defense_growth -= 5
            self.magic_growth -= 5
            self.resistance_growth -= 5
            self.speed_growth -= 5
            self.skill_growth -= 5
            self.luck_growth -= 5
            self.mana_growth -= 5
        elif new_passive.name == 'Ascended God of Humanity Arkath':
            self.hp_growth += 100
            self.strength_growth += 100
            self.defense_growth += 100
            self.magic_growth += 100
            self.resistance_growth += 100
            self.speed_growth += 100
            self.skill_growth += 100
            self.luck_growth += 100
            self.mana_growth += 100
        elif new_passive.name == 'Magicless Asta':
            self.strength_growth += 200
            self.magic = 0
            self.magic_growth = 0
            self.mana = 0
            self.mana_growth = 0
        elif new_passive.name == 'Defense+':
            self.defense += 2
        elif new_passive.name == 'Heavy Blade':
            self.strength += 3
            self.speed -= 1
        elif new_passive.name == 'Strength+':
            self.strength += 2
        elif new_passive.name == 'Skill+':
            self.skill += 2
        elif new_passive.name == 'Dancing Blade':
            self.speed += 3
            self.defense -= 1
        elif new_passive.name == 'Resistance+':
            self.resistance += 2
        elif new_passive.name == 'Holy Proficiency':
            self.holy_lvl += 10
        elif new_passive.name == 'Holy Mage':
            self.holy_lvl += 25
        elif new_passive.name == 'Creature of Light':
            self.light_lvl += 25
        elif new_passive.name == 'Sorcery':
            self.dark_lvl += 50
            self.curse_lvl += 50
        elif new_passive.name == 'Darkness':
            self.dark_lvl += 50
        elif new_passive.name == 'Magic Proficiency':
            self.arcane_lvl += 5
            self.illusion_lvl += 5
            self.mind_lvl += 5
            self.fire_lvl += 5
            self.heat_lvl += 5
            self.lava_lvl += 5
            self.water_lvl += 5
            self.liquid_lvl += 5
            self.ice_lvl += 5
            self.air_lvl += 5
            self.wind_lvl += 5
            self.lightning_lvl += 5
            self.earth_lvl += 5
            self.nature_lvl += 5
            self.poison_lvl += 5
            self.light_lvl += 5
            self.holy_lvl += 5
            self.space_lvl += 5
            self.dark_lvl += 5
            self.curse_lvl += 5
            self.necromancy_lvl += 5
        elif new_passive.name == 'Magic+':
            self.magic += 2
        elif new_passive.name == 'Arcane Mastery':
            self.arcane_lvl += 25
        elif new_passive.name == 'Illusion Master':
            self.illusion_lvl += 100
        elif new_passive.name == 'Aeromancy':
            self.air_lvl += 60
        elif new_passive.name == 'Hydromancy':
            self.water_lvl += 60
        elif new_passive.name == 'Elemental Mage':
            self.fire_lvl += 25
            self.water_lvl += 25
            self.air_lvl += 25
            self.earth_lvl += 25
        elif new_passive.name == 'Pyromancy':
            self.fire_lvl += 60
        elif new_passive.name == 'Geomancy':
            self.earth_lvl += 60
        elif new_passive.name == 'Aptitude':
            self.hp_growth += 10
            self.strength_growth += 10
            self.defense_growth += 10
            self.magic_growth += 10
            self.resistance_growth += 10
            self.speed_growth += 10
            self.skill_growth += 10
            self.luck_growth += 10
            self.mana_growth += 10
        elif new_passive.name == 'Mind Master':
            self.mind_lvl += 50
        elif new_passive.name == 'King of Blood Giovanni':
            self.curse_lvl += 100
            self.mind_lvl += 100
        elif new_passive.name == 'Magic User':
            self.arcane_lvl += 30
            self.dark_lvl += 30
        elif new_passive.name == 'Dark Artist':
            self.dark_lvl += 80
        elif new_passive.name == 'Necromancy':
            self.dark_lvl += 50
            self.necromancy_lvl += 100
        elif new_passive.name == 'Creature of Magic':
            self.mana *= 2
            self.mana_growth += 100
        elif new_passive.name == 'All rounder mage':
            self.arcane_lvl += 25
            self.illusion_lvl += 25
            self.mind_lvl += 25
            self.fire_lvl += 25
            self.heat_lvl += 25
            self.lava_lvl += 25
            self.water_lvl += 25
            self.liquid_lvl += 25
            self.ice_lvl += 25
            self.air_lvl += 25
            self.wind_lvl += 25
            self.lightning_lvl += 25
            self.earth_lvl += 25
            self.nature_lvl += 25
            self.poison_lvl += 25
            self.light_lvl += 25
            self.holy_lvl += 25
            self.space_lvl += 25
            self.dark_lvl += 25
            self.curse_lvl += 25
            self.necromancy_lvl += 25
        elif new_passive.name == 'God of Chaos Urgash':
            self.strength *= 2
            self.strength_growth += 100
            self.magic *= 2
            self.magic_growth += 100
        elif new_passive.name == 'Primordial Chaos':
            self.dark_lvl += 150
        elif new_passive.name == 'Strength++':
            self.strength += 5
        elif new_passive.name == 'Fire Mastery':
            self.fire_lvl += 50
        elif new_passive.name == 'Destroyer of World':
            self.strength += 15
        elif new_passive.name == 'Magic Affinity':
            self.arcane_lvl += 25
            self.illusion_lvl += 25
            self.mind_lvl += 25
            self.fire_lvl += 25
            self.heat_lvl += 25
            self.lava_lvl += 25
            self.water_lvl += 25
            self.liquid_lvl += 25
            self.ice_lvl += 25
            self.air_lvl += 25
            self.wind_lvl += 25
            self.lightning_lvl += 25
            self.earth_lvl += 25
            self.nature_lvl += 25
            self.poison_lvl += 25
            self.light_lvl += 25
            self.holy_lvl += 25
            self.space_lvl += 25
            self.dark_lvl += 25
            self.curse_lvl += 25
            self.necromancy_lvl += 25
        elif new_passive.name == 'Draconic Gift':
            self.hp += 5
            self.strength += 5
            self.defense += 5
            self.magic += 5
            self.resistance += 5
            self.speed += 5
            self.skill += 5
            self.luck += 5
            self.mana += 5
        elif new_passive.name == 'Magic Mastery':
            self.arcane_lvl += 100
            self.illusion_lvl += 100
            self.mind_lvl += 100
            self.fire_lvl += 100
            self.heat_lvl += 100
            self.lava_lvl += 100
            self.water_lvl += 100
            self.liquid_lvl += 100
            self.ice_lvl += 100
            self.air_lvl += 100
            self.wind_lvl += 100
            self.lightning_lvl += 100
            self.earth_lvl += 100
            self.nature_lvl += 100
            self.poison_lvl += 100
            self.light_lvl += 100
            self.holy_lvl += 100
            self.space_lvl += 100
            self.dark_lvl += 100
            self.curse_lvl += 100
            self.necromancy_lvl += 100
        elif new_passive.name == 'Draconic Ancestry':
            self.mana_growth += 400
            self.mana *= 4
    def add_magic(self, \
                  arcane, \
                  illusion,\
                  mind, \
                  fire, \
                  heat, \
                  lava, \
                  water, \
                  liquid, \
                  ice, \
                  air, \
                  wind, \
                  lightning, \
                  earth, \
                  poison, \
                  nature, \
                  light, \
                  space, \
                  holy, \
                  dark, \
                  necromancy, \
                  curse):
        self.arcane_lvl = arcane
        self.illusion_lvl = illusion
        self.mind_lvl = mind
        self.fire_lvl = fire
        self.heat_lvl = heat
        self.lava_lvl = lava
        self.water_lvl = water
        self.liquid_lvl = liquid
        self.ice_lvl = ice
        self.air_lvl = air
        self.wind_lvl = wind
        self.lightning_lvl = lightning
        self.earth_lvl = earth
        self.poison_lvl = poison
        self.nature_lvl = nature
        self.light_lvl = light
        self.space_lvl = space
        self.holy_lvl = holy
        self.dark_lvl = dark
        self.necromancy_lvl = necromancy
        self.curse_lvl = curse
        self.rest()

    def change_stat(self, \
                    hp: int, \
                    hp_growth: int, \
                    strength: int, \
                    strength_growth: int, \
                    defense: int, \
                    defense_growth: int, \
                    magic: int, \
                    magic_growth: int, \
                    resistance: int, \
                    resistance_growth: int, \
                    speed: int, speed_growth: int, \
                    skill: int, \
                    skill_growth: int, \
                    luck: int, \
                    luck_growth: int, \
                    mana: int, \
                    mana_growth: int):
        self.hp = hp
        self.hp_growth = hp_growth
        self.strength = strength
        self.strength_growth = strength_growth
        self.defense = defense
        self.defense_growth = defense_growth
        self.magic = magic
        self.magic_growth = magic_growth
        self.resistance = resistance
        self.resistance_growth = resistance_growth
        self.speed = speed
        self.speed_growth = speed_growth
        self.skill = skill
        self.skill_growth = skill_growth
        self.luck = luck
        self.luck_growth = luck_growth
        self.mana = mana
        self.mana_growth = mana_growth
        self.rest()
        self.define_stat_rank()
    def change_class(self, \
                     class_id):
        oClass = Classes.query.filter(Classes.id == self.class_id).one()
        nClass = Classes.query.filter(Classes.id == class_id).one()
        self.hp_growth -= oClass.hp_growth - nClass.hp_growth
        self.strength_growth -= oClass.strength_growth - nClass.strength_growth
        self.defense_growth -= oClass.defense_growth - nClass.defense_growth
        self.resistance_growth -= oClass.resistance_growth - nClass.resistance_growth
        self.speed_growth -= oClass.speed_growth - nClass.speed_growth
        self.skill_growth -= oClass.skill_growth - nClass.skill_growth
        self.luck_growth -= oClass.luck_growth - nClass.luck_growth
        if self.has_passive('Magicless Asta'):
            self.magic_growth = 0
            self.mana_growth = 0
        else:
            self.magic_growth -= oClass.magic_growth - nClass.magic_growth
            self.mana_growth -= oClass.mana_growth - nClass.mana_growth
        self.class_id = nClass.id
        self.level = 1
        self.rest()
    def change_weapon(self, \
                      weapon_id):
        oa = weapons.query.filter(weapons.id == self.weapon_id).one()
        na = weapons.query.filter(weapons.id == weapon_id).one()
        self.strength += na.add_strength() - oa.add_strength()
        self.defense += na.add_defense() - oa.add_defense()
        self.magic += na.add_magic() - oa.add_magic()
        self.resistance += na.add_resistance() - oa.add_resistance()
        self.speed += na.add_speed() - oa.add_speed()
        self.skill += na.add_skill() - oa.add_skill()
        self.luck += na.add_luck() - oa.add_luck()
        self.weapon_id = na.id
        self.rest()
    def change_armor(self, \
                     armor_id):
        oa = armors.query.filter(armors.id == self.armor_id).one()
        na = armors.query.filter(armors.id == armor_id).one()
        self.defense += na.add_defense() - oa.add_defense()
        self.resistance += na.add_resistance() - oa.add_resistance()
        self.speed += na.add_speed() - oa.add_speed()
        self.armor_id = na.id
        self.rest()
    def change_weapon_rank(self, \
                           sword_rank, \
                           spear_rank, \
                           axe_rank, \
                           dagger_rank, \
                           staff_rank, \
                           bow_rank, \
                           fist_rank, \
                           other_rank):
        self.sword_lvl = sword_rank
        self.spear_lvl = spear_rank
        self.axe_lvl = axe_rank
        self.dagger_lvl = dagger_rank
        self.staff_lvl = staff_rank
        self.bow_lvl = bow_rank
        self.fist_lvl = fist_rank
        self.other_lvl = other_rank
        self.rest()

    def rest(self):
        self.statuses.clear()
        self.combat_hp = self.hp
        self.combat_strength = self.strength
        self.combat_defense = self.defense
        self.combat_magic = self.magic
        self.combat_resistance = self.resistance
        self.combat_speed = self.speed
        self.combat_skill = self.skill
        self.combat_luck = self.luck
        self.combat_mana = self.mana
    def level_up(self):
        self.level += 1
        if self.level == 10:
            classe: Classes
            classe = Classes.query.filter(Classes.id == self.class_id).one()
            self.add_passive(classe.passives[0].id)
        elif self.level == 20:
            classe: Classes
            classe = Classes.query.filter(Classes.id == self.class_id).one()
            self.add_passive(classe.passives[1].id)
        hp_up = 0
        real_hp_growth = self.hp_growth%100
        if self.hp_growth >= 100:
            hp_up = (self.hp_growth-(self.hp_growth%100))/100
        strength_up = 0
        real_strength_growth = self.strength_growth%100
        if self.strength_growth >= 100:
            strength_up = (self.strength_growth-(self.strength_growth%100))/100
        defense_up = 0
        real_defense_growth = self.defense_growth%100
        if self.defense_growth >= 100:
            defense_up = (self.defense_growth-(self.defense_growth%100))/100
        magic_up = 0
        real_magic_growth = self.magic_growth%100
        if self.magic_growth >= 100:
            magic_up = (self.magic_growth-(self.magic_growth%100))/100
        resistance_up = 0
        real_resistance_growth = self.resistance_growth%100
        if self.resistance_growth >= 100:
            resistance_up = (self.resistance_growth-(self.resistance_growth%100))/100        
        speed_up = 0
        real_speed_growth = self.speed_growth%100
        if self.speed_growth >= 100:
            speed_up = (self.speed_growth-(self.speed_growth%100))/100   
        skill_up = 0
        real_skill_growth = self.skill_growth%100
        if self.skill_growth >= 100:
            skill_up = (self.skill_growth-(self.skill_growth%100))/100   
        luck_up = 0
        real_luck_growth = self.luck_growth%100
        if self.luck_growth >= 100:
            luck_up = (self.luck_growth-(self.luck_growth%100))/100   
        mana_up = 0
        real_mana_growth = self.mana_growth%100
        if self.mana_growth >= 100:
            mana_up = (self.mana_growth-(self.mana_growth%100))/100
        if rnd.randrange(0, 101) <= real_hp_growth:
            hp_up += 1
        if rnd.randrange(0, 101) <= real_strength_growth:
            strength_up += 1
        if rnd.randrange(0, 101) <= real_defense_growth:
            defense_up += 1
        if rnd.randrange(0, 101) <= real_magic_growth:
            magic_up += 1
        if rnd.randrange(0, 101) <= real_resistance_growth:
            resistance_up += 1
        if rnd.randrange(0, 101) <= real_speed_growth:
            speed_up += 1
        if rnd.randrange(0, 101) <= real_skill_growth:
            skill_up += 1
        if rnd.randrange(0, 101) <= real_luck_growth:
            luck_up += 1
        if rnd.randrange(0, 101) <= real_mana_growth:
            mana_up += 1   
        self.hp += hp_up
        self.strength += strength_up
        self.defense += defense_up
        self.magic += magic_up
        self.resistance += resistance_up
        self.speed += speed_up
        self.skill += skill_up
        self.luck += luck_up
        self.mana += mana_up
        self.define_stat_rank()
