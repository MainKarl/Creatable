from classes.characters import characters as chr
from classes.weapons import weapons as weap
from classes.armors import armors

#region Checking Number of Attack
def __get_character_number_of_attack(attacker: chr,\
                                   defender: chr) -> int:
    num = 1
    if attacker.combat_speed > (defender.combat_speed*2):
            num *= 2
    if not defender.has_passive_immunity():
        if attacker.has_passive('Fast Hitter'):
            num *= 2
    return num

def __get_weapon_number_of_attack(attacker: chr,\
                                  defender: chr):
    number = 1
    if weap.query.filter(weap.id == attacker.weapon_id).one().is_double() and not defender.has_passive_immunity():
        number *= 2
    return number
#endregion

#region Checking Damage
def __get_character_damage(attacker: chr,\
                           defender: chr,\
                           attacker_is_initiating: bool,\
                           is_outdoor: bool,\
                           tile_away: int,\
                           attack_is_magic: bool) -> int:
    damage = 0
    if attack_is_magic:
        damage = attacker.combat_magic
    else:
        damage = attacker.combat_strength
    
    if not defender.has_passive_immunity():
        if attacker.has_passive('Elbow Room') and is_outdoor:
            damage += 3
        if attacker.has_passive('Mount Bane') and defender.has_type('Mounted'):
            damage += 5
        if attacker.has_passive('Aggressor') and attacker_is_initiating:
            damage += 10
        if attacker.has_passive('Life and Death'):
            damage += 10
        if attacker.has_passive('Ranged'):
            damage += tile_away
        if attacker.has_passive('No Mercy') and attacker.level > defender.level:
            damage += 15
        if attacker.has_passive('Quick Draw') and attacker_is_initiating:
            damage += 4
        if attacker.has_passive('Witch Hunt'):
            damage += defender.dark_lvl*0.2
        if attacker.has_passive('Holy Crusade') and not defender.has_type('Religious'):
            damage += 20
        if attacker.has_passive('Malefic Aura'):
            damage += 2
        if attacker.has_passive('Body of Fire') and attacker.combat_hp < attacker.hp:
            damage += 5
        if attacker.has_passive('Vengeance'):
            damage += (attacker.hp-attacker.combat_hp/2)
        if attacker.has_passive('Trample') and not defender.has_type('Mounted'):
            damage += 10
    return damage
def __get_character_bonus_damage_weapon(attacker: chr,\
                                        defender:chr) -> int:
    damage = 0
    if not defender.has_passive_immunity():
        if attacker.has_passive('Lancefaire') and attacker.get_weapon_type() == 'Spear':
            damage += 5
        if attacker.has_passive('Axefaire') and attacker.get_weapon_type() == 'Axe':
            damage += 5
        if attacker.has_passive('Swordfaire') and attacker.get_weapon_type() == 'Sword':
            damage += 5
        if attacker.has_passive('Bowfaire') and attacker.get_weapon_type() == 'Bow':
            damage += 5
        if attacker.has_passive('Bowfaire+') and attacker.get_weapon_type() == 'Bow':
            damage += 10
        if attacker.has_passive('Fistfaire') and attacker.get_weapon_type() == 'Fist':
            damage += 10
    return damage
def __get_character_damage_reduction(attacker:chr,\
                                     defender:chr,\
                                     attacker_is_initiating:bool,\
                                     attack_is_magic: bool):
    res = 0
    if not defender.has_defensive_immunity():
        if attack_is_magic:
            res = attacker.combat_resistance
        else:
            res = attacker.combat_defense
    if not defender.has_passive_immunity():
        if attacker.has_passive('Great Armor'):
            res += 4
        if attacker.has_passive('Armored Blow'):
            res += 10
        if attacker.has_passive('Life and Death'):
            res -= 10
        if attacker.has_passive('Warding Blow') and attacker_is_initiating and attack_is_magic:
            res += 10
    res += armors.query.filter(armors.id == attacker.armor_id).one().power

    

    return res
def __get_character_effectiveness(attacker: chr,\
                                  defender: chr) -> float:
    multiplier = 1
    if not defender.has_effective_immunity() and not defender.has_passive_immunity():
        if attacker.has_passive('Beastbane') and defender.has_type('Beast'):
            multiplier += .5
        if attacker.has_passive('Wrymsbane') and defender.has_type('Dragonoid'):
            multiplier += .5
    if not defender.has_passive_immunity():
        if attacker.has_passive('Hero of Heroes Godric') and defender.has_type('Demonoid') or defender.has_type('Monster') or defender.has_type('Undead'):
            multiplier += 1
        if attacker.has_passive('Great Liberator Xeno') and defender.has_type('Humanoid'):
            multiplier += 1
    return multiplier
def __get_character_resistance(attacker: chr,\
                               defender: chr,\
                               attack_is_magic: bool,\
                               type_damage: str):
    resistance = 1
    if not defender.has_passive_immunity() and not defender.has_resistance_immunity():
        if attacker.has_passive('Ancient Resistance') and attack_is_magic:
            resistance /= 2
        if attacker.has_passive('Dark Art Protection') and type_damage == 'Dark':
            resistance /= 2
        if attacker.has_passive('Defensive Scale') and type_damage == 'Physical':
            resistance /= 2
        if attacker.has_passive('Magic Armor') and attack_is_magic:
            resistance /= 2
    if not defender.has_resistance_immunity():
        if attacker.has_passive('God of Happiness Saraphiel'):
            resistance /= 3
    return resistance

def __get_weapon_damage(attacker: chr,\
                        defender: chr,\
                        attack_is_magic: bool) -> int:
    weapon = weap.query.filter(weap.id == attacker.weapon_id).one()
    damage = weapon.damage
    damage += attacker.get_weapon_rank_damage_bonus()
    if attack_is_magic:
        damage += weapon.get_magic_damage()
    return int(damage)
def __get_weapon_effectiveness(attacker: chr,\
                               defender: chr) -> float:
    weapon = weap.query.filter(weap.id == attacker.weapon_id).one()
    multiplier = 1
    if not defender.has_effective_immunity() and not defender.has_passive_immunity():
        if weapon.has_passive('Effective Armored') and defender.has_type('Armored'):
            multiplier += .5
        if weapon.has_passive('Effective Beast') and defender.has_type('Beast'):
            multiplier += .5
        if weapon.has_passive('Effective Demonoid') and defender.has_type('Demonoid'):
            multiplier += .5
        if weapon.has_passive('Effective Dragonoid') and defender.has_type('Dragonoid'):
            multiplier += .5
        if weapon.has_passive('Effective Flying') and defender.has_type('Flying'):
            multiplier += .5
        if weapon.has_passive('Effective Humanoid') and defender.has_type('Humanoid'):
            multiplier += .5
        if weapon.has_passive('Effective Monster') and defender.has_type('Monster'):
            multiplier += .5
        if weapon.has_passive('Effective Mounted') and defender.has_type('Mounted'):
            multiplier += .5
        if weapon.has_passive('Effective Undead') and defender.has_type('Undead'):
            multiplier += .5
        if weapon.has_passive('Effective Void') and defender.has_type('Void'):
            multiplier += .5
    return multiplier

def __get_natural_effectiveness(defender: chr,\
                                type_damage: str) -> float:
    multiplier = 1
    if type_damage == 'Chaos' and defender.has_type('Humanoid'):
        multiplier += .25
    if type_damage == 'Holy' and defender.has_type('Monster'):
        multiplier += .25
    if type_damage == 'Holy' and defender.has_type('Demonoid'):
        multiplier += .25
    if type_damage == 'Holy' and defender.has_type('Undead'):
        multiplier += .25
    if type_damage == 'Curse' and defender.has_type('Void'):
        multiplier += .25
    if type_damage == 'Lightning' and defender.has_type('Dragonoid'):
        multiplier += .25
    if type_damage == 'Wind' and defender.has_type('Beast'):
        multiplier += .25
    if type_damage == 'Heat' and defender.has_type('Armored'):
        multiplier += .25
    if type_damage == 'Lightning' and defender.has_type('Flying'):
        multiplier += .25
    if type_damage == 'Void' or type_damage == 'Corrupted Holy' and defender.has_type('Holy'):
        multiplier += .25
    return multiplier
#endregion

#region Checking Accuracy
def __get_character_avoid(attacker: chr,\
                        defender: chr,\
                        attacker_close_to_ally: bool,\
                        is_outdoor: bool,\
                        is_night: bool,\
                        attacker_is_initiating: bool,\
                        attacker_is_inspired: bool,\
                        attack_is_magic: bool,\
                        tile_away: int) -> int:
    avoid = (attacker.speed * 3 + attacker.luck) / 2
    if not defender.has_passive_immunity():
        if attacker.has_passive('SwordBreaker') and defender.get_weapon_type() == 'Sword':
            avoid += 50
        if attacker_is_inspired:
            avoid += 10
        if attacker.has_passive('Inspiration') and attacker_close_to_ally:
            avoid += 15
        if attacker.has_passive('Air superiority') and defender.has_type('Flying'):
            avoid += 30
        if attacker.has_passive('Outdoor Fighter') and is_outdoor:
            avoid += 10
        if attacker.has_passive('Slayer') and not defender.has_type('Humanoid'):
            avoid += 15
        if attacker.has_passive('Duelist Blow') and attacker_is_initiating:
            avoid += 10
        if attacker.has_passive('Avoid+'):
            avoid += 10
        if attacker.has_passive('Beast Killer') and defender.has_type('Mounted'):
            avoid += 25
        if attacker.has_passive('Quick Burn'):
            avoid += 15
        if attacker.has_passive('Fly Breaker') and defender.has_type('Flying'):
            avoid += 10
        if attacker.has_passive('Dagger Breaker') and defender.get_weapon_type() == 'Dagger':
            avoid += 50
        if attacker.has_passive('Magic Breaker') and attack_is_magic:
            avoid += 20
        if attacker.has_passive('Underdog') and defender.level > attacker.level:
            avoid += 10
        if attacker.has_passive('Dead Creature') and defender.has_type('Voidoid'):
            avoid += 20
        if attacker.has_passive('Dead Creature') and defender.has_type('Holy'):
            avoid -= 20
        if attacker.has_passive('Untouchable') and not attack_is_magic:
            avoid += 50
        if attacker.has_passive('Creature of the Void') and defender.has_type('Holy'):
            avoid += 20
        if attacker.has_passive('Creature of the Void') and (defender.has_type('Monster') or defender.has_type('Undead') or defender.has_type('Demonoid')):
            avoid -= 20
        if attacker.has_passive('Fly Mobility'):
            avoid += 15
        if attacker.has_passive('Nocture Creature') and is_night:
            avoid += 10
    if not attacker.has_passive_immunity():
        if defender.has_passive('Heartseeker') and tile_away <= 5:
            avoid -= 20
        if defender.has_passive('Angel Blessing'):
            avoid -= .5*attacker.dark_lvl
        if defender.has_passive('Fear of the Void'):
            avoid -= 15
    return avoid
def __get_character_accuracy(attacker: chr,\
                           defender: chr,\
                           attacker_is_inspired:bool,\
                           attacker_close_to_ally:bool,\
                           attacker_is_initiating:bool,\
                           attack_is_magic:bool,\
                           is_outdoor:bool,\
                           is_night:bool) -> int:
    hit = attacker.skill * 3 + attacker.luck / 2
    if not defender.has_passive_immunity():
        if attacker.has_passive('SwordBreaker') and defender.get_weapon_type() == 'Sword':
            hit += 50
        if attacker.has_passive('Inspiring') and attacker_is_inspired:
            hit += 10
        if attacker.has_passive('Inspiration') and attacker_close_to_ally:
            hit += 15
        if attacker.has_passive('Gamble'):
            hit -= 5
        if attacker.has_passive('Air superiority') and defender.has_type('Flying'):
            hit += 30
        if attacker.has_passive('Outdoor Fighter') and is_outdoor:
            hit += 10
        if attacker.has_passive('Slayer') and not defender.has_type('Humanoid'):
            hit += 15
        if attacker.has_passive('No Honor') and attacker_close_to_ally:
            hit += 15
        if attacker.has_passive('Prescience') and attacker_is_initiating:
            hit += 10
        if attacker.has_passive('Beast Killer') and defender.has_type('Mounted'):
            hit += 25
        if attacker.has_passive('Quick Burn'):
            hit += 15
        if attacker.has_passive('Fly Breaker') and defender.has_type('Flying'):
            hit += 30
        if attacker.has_passive('Certain Blow') and attacker_is_initiating:
            hit += 40
        if attacker.has_passive('Dagger Breaker') and defender.get_weapon_type() == 'Dagger':
            hit += 50
        if attacker.has_passive('Magic Breaker') and attack_is_magic:
            hit += 20
        if attacker.has_passive('Underdog') and defender.level > attacker.level:
            hit += 10
        if attacker.has_passive('Dead Creature') and defender.has_type('Voidoid'):
            hit += 20
        if attacker.has_passive('Dead Creature') and defender.has_type('Holy'):
            hit -= 20
        if attacker.has_passive('Creature of the Void') and defender.has_type('Holy'):
            hit += 20
        if attacker.has_passive('Creature of the Void') and (defender.has_type('Monster') or defender.has_type('Undead') or defender.has_type('Demonoid')):
            hit -= 20
        if attacker.has_passive('Nocture Creature') and is_night:
            hit += 10
    if not attacker.has_passive_immunity():
        if defender.has_passive('Angel Blessing'):
            hit -= .5*attacker.dark_lvl
        if defender.has_passive('Fear of the Void'):
            hit -= 15
    return hit

def __get_weapon_accuracy(attacker: chr):
    accuracy = 0
    accuracy += weap.query.filter(weap.id == attacker.weapon_id).one().accuracy 
    accuracy += attacker.get_weapon_rank_hit_bonus()
    return accuracy
#endregion

#region Checking Crit
def __get_character_crit_avoid(attacker: chr,\
                             defender: chr) -> int:
    crit_avoid = attacker.luck
    if not defender.has_passive_immunity():
        if attacker.has_passive('Veteran Intuition'):
            crit_avoid += 15
    return crit_avoid
def __get_character_crit(attacker: chr,\
                       defender: chr,\
                       attacker_close_to_ally: bool,\
                       attacker_is_initiating:bool,\
                       attack_is_magic:bool) -> int:
    crit = attacker.skill / 2
    if not defender.has_passive_immunity():
        if attacker.has_passive('Exemple'):
            crit += 10
        if attacker.has_passive('Gamble'):
            crit += 10
        if attacker.has_passive('Focus') and not attacker_close_to_ally:
            crit += 10
        if attacker.has_passive('Zeal'):
            crit += 5
        if attacker.has_passive('Enrage') and attacker.combat_hp <= attacker.hp:
            crit += 10
        if attacker.has_passive('Prescience') and attacker_is_initiating:
            crit += 10
        if attacker.has_passive('Demonic Luck') and attacker.combat_hp >= attacker.hp:
            crit *= 1.5
    if attacker.has_passive('God of Magic Asha') and attack_is_magic:
        crit += 15
    return crit

def __get_weapon_crit(attacker: chr):
    crit = 0
    crit += weap.query.filter(weap.id == attacker.weapon_id).one().crit
    if not weap.query.filter(weap.id == attacker.weapon_id).one().can_crit():
        crit = 0
    return crit
#endregion

def get_character_ba_number_of_attack(attacker: chr,\
                                      defender: chr) -> int:
    number = __get_character_number_of_attack(attacker, defender)
    number = __get_weapon_number_of_attack(attacker, defender)
    if defender.has_double_immunity() or attacker.has_double_immunity():
        number = 1
    return int(number)

def get_character_ba_damage(attacker: chr,\
                            defender: chr,\
                            attacker_is_initiating: bool,\
                            is_outdoor: bool,\
                            tile_away: int,\
                            attack_is_magic: bool) -> int:
    damage = __get_character_damage(attacker, defender, attacker_is_initiating, is_outdoor, tile_away, attack_is_magic)
    damage -= __get_character_damage_reduction(defender, attacker, not attacker_is_initiating, attack_is_magic)
    damage += __get_character_bonus_damage_weapon(attacker, defender)
    damage += __get_weapon_damage(attacker, defender, attack_is_magic)
    damage *= __get_natural_effectiveness(defender, weap.query.filter(weap.id == attacker.weapon_id).one().damage_type)
    damage *= __get_weapon_effectiveness(attacker, defender)
    damage *= __get_character_effectiveness(attacker, defender)
    damage *= __get_character_resistance(defender, attacker, attack_is_magic, weap.query.filter(weap.id == attacker.weapon_id).one().damage_type)
    if damage < 0:
        damage = 0
    return int(damage)

def get_character_ba_accuracy(attacker: chr,\
                              defender:chr,\
                              attacker_is_inspired:bool,\
                              defender_is_inspired:bool,\
                              attacker_close_to_ally:bool,\
                              defender_close_to_ally:bool,\
                              attacker_is_initiating:bool,\
                              attack_is_magic:bool,\
                              is_outdoor:bool,\
                              is_night:bool,\
                              tile_away: int) -> int:
    accuracy = __get_character_accuracy(attacker, defender, attacker_is_inspired, attacker_close_to_ally, attacker_is_initiating, attack_is_magic, is_outdoor, is_night)
    accuracy -= __get_character_avoid(defender, attacker, defender_close_to_ally, is_outdoor, is_night, not attacker_is_initiating, defender_is_inspired, attack_is_magic, tile_away)
    accuracy += __get_weapon_accuracy(attacker)
    if accuracy < 0:
        accuracy = 0
    if accuracy > 100:
        accuracy = 100
    return int(accuracy)

def get_character_ba_crit(attacker: chr,\
                          defender:chr,\
                          attacker_close_to_ally: bool,\
                          attacker_is_initiating:bool,\
                          attack_is_magic:bool) -> int:
    crit = __get_character_crit(attacker, defender, attacker_close_to_ally, attacker_is_initiating, attack_is_magic)
    crit -= __get_character_crit_avoid(defender, attacker)
    crit += __get_weapon_crit(attacker)
    if crit < 0:
        crit = 0
    return int(crit)
