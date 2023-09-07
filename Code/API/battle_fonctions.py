from classes.characters import characters as chr
from classes.weapons import weapons as weap
from classes.armors import armors

def __get_character_number_of_attack(attacker: chr,\
                                   defender: chr) -> int:
    num = 1
    if attacker.combat_speed > (defender.combat_speed*2):
            num *= 2
    if not defender.has_passive_immunity():
        if attacker.has_passive('Fast Hitter'):
            num *= 2        
    return num
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
def __get_character_damage_resistance(attacker:chr,\
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

def get_character_ba_number_of_attack(attacker: chr,\
                                      defender: chr) -> int:
    number = __get_character_number_of_attack(attacker, defender)
    if weap.query.filter(weap.id == attacker.weapon_id).one().has_passive('Two Attack'):
        number *= 2
    if defender.has_double_immunity():
        number = 1
    return int(number)

def get_character_ba_damage(attacker: chr,\
                            defender: chr,\
                            attacker_is_initiating: bool,\
                            is_outdoor: bool,\
                            tile_away: int,\
                            attack_is_magic: bool) -> int:
    damage = __get_character_damage(attacker, defender, attacker_is_initiating, is_outdoor, tile_away, attack_is_magic)
    damage -= __get_character_damage_resistance(defender, attacker, not attacker_is_initiating, attack_is_magic)
    damage += __get_character_bonus_damage_weapon(attacker, defender)
    damage += weap.query.filter(weap.id == attacker.weapon_id).one().damage + attacker.get_weapon_rank_damage_bonus()
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
    accuracy += weap.query.filter(weap.id == attacker.weapon_id).one().accuracy + attacker.get_weapon_rank_hit_bonus()
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
    crit += weap.query.filter(weap.id == attacker.weapon_id).one().crit
    if crit < 0:
        crit = 0
    return int(crit)
