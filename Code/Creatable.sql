-- sqlite3 Creatable.db .dump > Creatable.sql

-- Users
CREATE TABLE IF NOT EXISTS Users (
    user_id INTEGER PRIMARY KEY,
    username TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL,
    role INTEGER NOT NULL,
    img TEXT
);

-- Passives
CREATE TABLE IF NOT EXISTS Passives (
    passive_id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    passive_type TEXT NOT NULL
);
INSERT INTO Passives (name, description, passive_type)
VALUES
    ('Seal Defense', 'After a attack, enemy Defense is reduced', 'Class'), -- 1
    ('Defense+', 'User defense +2', 'Class'), -- 2
    ('Great Armor', 'Damage Taken -4', 'Class'), -- 3
    ('Patience', 'Waiting boost Defense', 'Class'), -- 4
    ('Armored Blow', 'Damage Taken -10', 'Class'), -- 5
    ('Wary Fighter', 'Neither of the fighter can double attack', 'Class'), -- 6
    ('Heavy Blade', 'Strength +3, Speed -1', 'Class'),           -- 7 => 4
    ('StrengthTaker', 'Gain Strength after attacking', 'Class'), -- 8 => 4
    ('Mounted Soldier', 'Speed on the battlefield is greatly increased', 'Class'), -- 9
    ('Elbow Room', 'Damage +3 when fighting outdoors', 'Class'), -- 10
    ('Protector', 'Defense/Resistance/Strength is boosted with a ally', 'Class'), -- 11
    ('Luna', '(Skill)% - Negate enemy Defense/Resistance', 'Class'), -- 12
    ('Lunge', 'Switch place with the enemy after a attack', 'Class'), -- 13
    ('SwordBreaker', 'Hit/Avoid +50 against sword', 'Class'), -- 14
    ('Inspiring', 'All ally unit have Hit/Avoid +10', 'Class'), -- 15
    ('All Seing-Eye', 'You can see the stats', 'Class'), -- 16
    ('Good Instruction', 'Defense/Resistance is boosted with a ally', 'Class'), -- 17
    ('Perfect Execution', 'Strength/Magic is boosted with a ally', 'Class'), -- 18
    ('Exemple', 'Crit Rate +10', 'Class'), -- 19
    ('Inspiration', 'Hit/Avoid +15 with a ally', 'Class'), -- 20
    ('Strength+', 'User Strength +2', 'Class'), -- 21
    ('Gamble', 'Hit -5, Crit Rate +10', 'Class'), -- 22
    ('Seal Strength', 'After a attack, enemy Strength is reduced', 'Class'), -- 23
    ('Mount Bane', 'Damage +5 when attacking a Mounted unit', 'Class'), -- 24
    ('Lancefaire', 'Damage +5 when using a spear', 'Class'), -- 25
    ('Seal Speed', 'After a attack, enemy Speed is reduced', 'Class'), -- 26
    ('Air superiority', 'Hit/Avoid +30 when fighting a Flying unit', 'Class'), -- 27
    ('Aggressor', 'Damage +10 when initiating', 'Class'), -- 28
    ('Outdoor Fighter', 'Hit/Avoid +10 when fighting outdoors', 'Class'), -- 29
    ('Great Movement', 'You can move freely after a attack', 'Class'), -- 30
    ('Focus', 'Crit Rate +10 when alone', 'Class'), -- 31
    ('SpeedTaker', 'Gain Speed after attacking', 'Class'), -- 32
    ('Bond', 'Restore 10 HP with a ally', 'Class'), -- 33
    ('Zeal', 'Crit Rate +5', 'Class'), -- 34
    ('Enrage', 'Crit Rate +10 when user hp < 50%', 'Class'), -- 35
    ('Savage Blow', 'After a attack, enemy hp is reduced', 'Class'), -- 36
    ('Axefaire', 'Damage +15 when using a Axe', 'Class'), -- 37
    ('Aether', '(skill/2)% - Use Sol + Luna', 'Class'), -- 38
    ('Slayer', 'Hit/Avoid +15 against non-human', 'Class'), -- 39
    ('Perfect Attack', '(Skill/2)% - Do 1.25 time the damage', 'Class'), -- 40
    ('Skill+', 'User Skill +2', 'Class'), -- 41
    ('Swordfaire', 'Damage +5 when using a sword', 'Class'), -- 42
    ('Duelist Blow', 'Avoid +10 when initiating', 'Class'), -- 43
    ('Raikiri', '(Skill)% - Do 1.5 time the damage', 'Class'), -- 44
    ('Astra', '(Skill/2)% - Make 5 consecutive attack', 'Class'), -- 45
    ('Vantage', 'The user always attack first', 'Class'), -- 46
    ('Life and Death', 'Damage Given and Taken +10', 'Class'), -- 47
    ('Steal', 'Make stealing easier', 'Class'),               -- 48
    ('Shadow Step', 'Make the user step soundless', 'Class'), -- 49
    ('Dancing Blade', 'Speed +3, Defense -1', 'Class'), -- 50
    ('Parry', '(Skill/3)% - Change to redirect damage receive', 'Class'), -- 51
    ('Lethality', '(Skill/4)% - One shot the target', 'Class'), -- 52
    ('Pass', 'Allow to pass through enemies and allies', 'Class'), -- 53
    ('Avoid+', 'User Avoid +10', 'Class'), -- 54
    ('No Honor', 'Hit +15 when attacking with ally', 'Class'), -- 55
    ('Duelist', 'Skill Activation +15%', 'Class'), -- 56
    ('Sol', '(Skill)% - Restore HP equal to the damage dealt', 'Class'), -- 57
    ('Poison Weapon', 'Your weapon does +5% of enemy HP', 'Class'), -- 58
    ('Galeforce', 'Killing a enemy regive the action to the user', 'Class'), -- 59
    ('Skill+', 'User Skill +2', 'Class'), -- 60
    ('Ranged', '+1 Damage per tile away', 'Class'), -- 61
    ('Bowfaire', 'Damage +5 when using bow', 'Class'), -- 62
    ('Prescience', 'Hit/Crit Rate +10 when initiating', 'Class'), -- 63
    ('Great Bow', 'Distant Weapon range +1', 'Class'), -- 64
    ('Beast Killer', 'Hit/Avoid +25 against Mounted unit', 'Class'), -- 65
    ('Quick Burn', 'Hit/Avoid +15', 'Class'), -- 66
    ('No Mercy', 'Damage +15 against weaker foes', 'Class'), -- 67
    ('Quick Draw', 'Damage +4 when initiating', 'Class'), -- 68
    ('Fly Breaker', 'Hit +30, avoid +10 against Flying unit', 'Class'), -- 69
    ('Certain Blow', 'Hit +40 when initiating', 'Class'), -- 70
    ('Bowfaire+', 'Damage +10 when using a bow', 'Class'), -- 71
    ('Movement+', 'User Movement +1', 'Class'), -- 72
    ('Dagger Breaker', 'Hit/Avoid +50 against dagger', 'Class'), -- 73
    ('Resistance+', 'User Resistance +2', 'Class'), -- 74
    ('Holy Proficiency', 'Holy Magic Level +10', 'Class'), -- 75
    ('Holy Mage', 'Holy Magic Level +25', 'Class'), -- 76
    ('Live to Serve', 'The user recover the same amount of healing when healing', 'Class'), -- 77
    ('Creature of Light', 'Light Magic Level +25', 'Class'), -- 78
    ('Miracle', '(Luck)% - Survive to 1 HP a fatal blow', 'Class'), -- 79
    ('Witch Hunt', '+.1 Damage per Dark Magic Level of the enemy', 'Class'), -- 80
    ('Holy Crusade', 'Damage +20 against non-religious', 'Class'), -- 81
    ('Heartseeker', 'If enemy is close, enemy avoid -20', 'Class'), -- 82
    ('Malefic Aura', 'Enemy damage taken +2', 'Class'), -- 83
    ('Sorcery', 'Curse Magic Level +50', 'Class'), -- 84
    ('Lifetaker', '(Luck)% - Gain half the damage dealt as HP', 'Class'), -- 85
    ('Darkness', 'Dark Magic Level +50', 'Class'), -- 86
    ('Malevolent Prayer', 'You can summon dark entities', 'Class'), -- 87
    ('Heroic Deeds', 'Defense/Resistance is boosted after healing', 'Class'), -- 88
    ('Mounted Healer', 'You can move after healing', 'Class'), -- 89
    ('Veteran Intuition', 'Crit Avoid +15', 'Class'), -- 90
    ('Angel Blessing', 'enemy Hit/Avoid -.5 per Dark Magic Level', 'Class'), -- 91
    ('Relief', 'Recover 20% HP if alone', 'Class'), -- 92
    ('Warding Blow', 'Magic damage received -10 when initiating', 'Class'), -- 93
    ('Magic Proficiency', 'Magic Level +5', 'Class'), -- 94
    ('Magic+', 'User Magic +2', 'Class'), -- 95
    ('Magic Sense', 'Sense the magicule around the user', 'Class'), -- 96
    ('Arcane Mastery', 'Arcane Magic Level +25', 'Class'), -- 97
    ('Arcane Control', 'You can take control of the arcane spell of others', 'Class'), -- 98
    ('Arcane Burst', '(Skill)% - add Magic to Damage', 'Class'), -- 99
    ('Illusion Master', 'Illusion Magic Level +100', 'Class'), -- 100
    ('Protected Dream', 'You are immune to illusion magic', 'Class'), -- 101
    ('Seal Magic', 'After a attack, enemy Magic is reduced', 'Class'), -- 102
    ('Magic Breaker', 'Hit/Avoid +20 against Magic', 'Class'), -- 103
    ('Aeromancy', 'Air Magic Level +60', 'Class'), -- 104
    ('Aegis', '(Skill)% - Take half the magical damage', 'Class'), -- 105
    ('Hydromancy', 'Water Magic Level +60', 'Class'), -- 106
    ('Pavise', '(Skill)% - Take half the physical damage', 'Class'), -- 107
    ('Elemental Mage', 'Elemental Magic Level +25', 'Class'), -- 108
    ('Future Sight', 'You have vision of the near futur', 'Class'), -- 109
    ('Pyromancy', 'Fire Magic Level +60', 'Class'), -- 110
    ('Body of Fire', 'When HP is not full, Damage +5', 'Class'), -- 111
    ('Geomancy', 'Earth Magic Level +60', 'Class'), -- 112
    ('Nature Blessing', 'Restore 20% HP if waiting', 'Class'), -- 113
    ('Aptitude', 'All Stat Growth +10', 'Class'), -- 114
    ('Underdog', 'Hit/Avoid +10 if enemy is stronger', 'Class'), -- 115
    ('Mind Master', 'Mind Magic Level +50', 'Class'), -- 116
    ('Life Drain', 'Gain 10% HP after a attack', 'Class'), -- 117
    ('Conquest', 'The user is immune to effective attack', 'Class'), -- 118
    ('King of Blood Giovanni', 'Curse Magic Level +100, Mind Magic Level +100, Immunity to Curse + Mind Magic', 'Class'), -- 119
    ('The Death', 'Immunity to Poison damage', 'Class'), -- 120
    ('Dead Creature', 'Avoid/Hit +20 against Void, Avoid/Hit -20 against Holy', 'Class'), -- 121
    ('Magic User', 'Arcane + Dark Magic Level +30', 'Class'), -- 122
    ('Lifesteal', 'Recover 60% HP after killing a enemy', 'Class'), -- 123
    ('Dark Artist', 'Dark Magic Level +80', 'Class'), -- 124
    ('Souless', 'Become immune to Mind magic', 'Class'), -- 125
    ('Necromancy', 'Necromancy Magic Level +100, Dark Magic Level +50', 'Class'), -- 126
    ('Dark Art Protection', 'Become Resistant to Dark Damage', 'Class'), -- 127
    ('Reminiscence of Battle', '(Skill/2)% - Make the attack effective', 'Class'), -- 128
    ('Instinct of Survival', '(Luck)% - Dodge the attack', 'Class'), -- 129
    ('Death Touch', '(Skill/3)% - Release 50% of the target HP', 'Class'), -- 130
    ('Magic Armor', 'Become resistant to magic damage', 'Class'), -- 131
    ('Ghost Body', 'Allow the user to pass through wall and others', 'Class'), -- 132
    ('Untouchable', 'Avoid +50 when attacked by physical means', 'Class'), -- 133
    ('Void Mastery', 'Void Magic Level +50', 'Class'), -- 134
    ('Creature of the Void', 'Hit/Avoid +20 against Holy, Hit/Avoid -20 against Dark', 'Class'), -- 135
    ('Fear of the Void', 'enemy Hit/Avoid -15', 'Class'), -- 136
    ('Fistfaire', 'Damage +10 when using Fist', 'Class'), -- 137
    ('Voidmancy', 'Void Magic Level +50', 'Class'), -- 138
    ('Vengeance', 'Add half of the user lost healt to damage', 'Class'), -- 139
    ('Creature of Magic', 'Mana is double', 'Class'), -- 140
    ('Magic Control', 'Can control the surronding magicules', 'Class'), -- 141
    ('Magic Overload', 'You can control your own magicules perfectly', 'Class'), -- 142
    ('All rounder mage', 'Magic Level +25', 'Class'), -- 143
    ('Lord of Wisdow Azathoth', 'You know and sense everything', 'Class'), -- 144
    ('God of Magic Asha', 'Crit Rate on Magic +15, Crit Damage on Magic is Triple', 'Class'), -- 145
    ('Merciless', 'Allow the user to instantly kill any enemy who doesnt have the will to fight', 'Class'), -- 146
    ('Lord of Pride Lucifer', 'Allow the user to copy other people passive, skill and magic (not ultimate)', 'Class'), -- 147
    ('Ancient Resistance', 'You are resistant to Magic', 'Class'), -- 148
    ('Seal Stat', 'After a attack, enemy stats are reduced', 'Class'), -- 149
    ('Lord of Tempter Azazel', 'Allow the user to dominate and control the mind of the weak', 'Class'), -- 150
    ('Reality Domination', 'Allow the user to send people into his imaginary world and this reality can affect the reality', 'Class'), -- 151
    ('God of Chaos Urgash', 'Strength and Magic is double, Chaos Magic Level +200', 'Class'), -- 152
    ('Primordial Chaos', 'Immunity to Dark Magic, Dark Magic Level +150', 'Class'), -- 153
    ('Strength++', 'User Strength +5', 'Class'), -- 154
    ('Fire Mastery', 'Fire Magic Level +50', 'Class'), -- 155
    ('Rightful Lord', 'Skill Activation +10', 'Class'), -- 156
    ('Ignis', '(Skill/2)% - Add half Strength and Magic to damage', 'Class'), -- 157
    ('Destroyer of World', 'When full HP, Strength is increased by 15', 'Class'), -- 158
    ('Demonic Luck', 'When full HP, Crit Rate is 1.5 stronger', 'Class'), -- 159
    ('Nocture Creature', 'Hit/Avoid +10 if it is the night', 'Class'), -- 160
    ('Nocture Hunter', 'Recover 10% HP if it is the night', 'Class'), -- 161
    ('Wolf transformation', 'You can transform into a wolf', 'Class'), -- 162
    ('Beastbane', 'Deals effective damage against Beast unit', 'Class'), -- 163
    ('Werewolf transformation', 'You can transform into a werewolf', 'Class'), -- 164
    ('Gisly Wound', 'After a attack, enemy HP is reduced', 'Class'), -- 165
    ('Fox transformation', 'You can transform into a fox', 'Class'), -- 166
    ('Nine-Tails transformation', 'You can transform into a nine-tails', 'Class'), -- 167
    ('Magic Affinity', 'Magic Level +25', 'Class'), -- 168
    ('Fly Mobility', 'Avoid +15', 'Class'), -- 169
    ('Draconic Gift', 'All Stat +5', 'Class'), -- 170
    ('Wrymsbane', 'Deals effective damage against dragonoid', 'Class'), -- 171
    ('Defensive Scale', 'You are resistant to physical damage', 'Class'), -- 172
    ('Trample', 'If the enemy is not mounted, damage +10', 'Class'), -- 173
    ('Magic Mastery', 'Magic Level +100', 'Class'), -- 174
    ('Draconic Ancestry', 'Mana is quadruple', 'Class'), -- 175
    ('Defense+I', 'User Defense +1', 'Armor'), -- 176
    ('Defense+II', 'User Defense +2', 'Armor'), -- 177
    ('Defense+III', 'User Defense +3', 'Armor'), -- 178
    ('Defense+IV', 'User Defense +4', 'Armor'), -- 179
    ('Defense+V', 'User Defense +5', 'Armor'), -- 180
    ('Defense+VI', 'User Defense +6', 'Armor'), -- 181
    ('Defense+VII', 'User Defense +7', 'Armor'), -- 182
    ('Defense+VIII', 'User Defense +8', 'Armor'), -- 183
    ('Defense+IX', 'User Defense +9', 'Armor'), -- 184
    ('Defense+X', 'User Defense +10', 'Armor'), -- 185
    ('Resistance+I', 'User Resistance +1', 'Armor'), -- 186
    ('Resistance+II', 'User Resistance +2', 'Armor'), -- 187
    ('Resistance+III', 'User Resistance +3', 'Armor'), -- 188
    ('Resistance+IV', 'User Resistance +4', 'Armor'), -- 189
    ('Resistance+V', 'User Resistance +5', 'Armor'), -- 190
    ('Resistance+VI', 'User Resistance +6', 'Armor'), -- 191
    ('Resistance+VII', 'User Resistance +7', 'Armor'), -- 192
    ('Resistance+VIII', 'User Resistance +8', 'Armor'), -- 193
    ('Resistance+IX', 'User Resistance +9', 'Armor'), -- 194
    ('Resistance+X', 'User Resistance +10', 'Armor'), -- 195
    ('Speed-I', 'User Speed -1', 'Armor'), -- 196
    ('Speed-II', 'User Speed -2', 'Armor'), -- 197
    ('Speed-III', 'User Speed -3', 'Armor'), -- 198
    ('Speed-IV', 'User Speed -4', 'Armor'), -- 199
    ('Speed-V', 'User Speed -5', 'Armor'), -- 200
    ('Speed-VI', 'User Speed -6', 'Armor'), -- 201
    ('Speed-VII', 'User Speed -7', 'Armor'), -- 202
    ('Speed-VIII', 'User Speed -8', 'Armor'), -- 203
    ('Speed-IX', 'User Speed -9', 'Armor'), -- 204
    ('Speed-X', 'User Speed -10', 'Armor'), -- 205
    ('Strength+I', 'User Strength +1', 'Weapon'), -- 206
    ('Strength+II', 'User Strength +2', 'Weapon'), -- 207
    ('Strength+III', 'User Strength +3', 'Weapon'), -- 208
    ('Strength+IV', 'User Strength +4', 'Weapon'), -- 209
    ('Strength+V', 'User Strength +5', 'Weapon'), -- 210
    ('Strength+VI', 'User Strength +6', 'Weapon'), -- 211
    ('Strength+VII', 'User Strength +7', 'Weapon'), -- 212
    ('Strength+VIII', 'User Strength +8', 'Weapon'), -- 213
    ('Strength+IX', 'User Strength +9', 'Weapon'), -- 214
    ('Strength+X', 'User Strength +10', 'Weapon'), -- 215
    ('Defense+I', 'User Defense +1', 'Weapon'), -- 216
    ('Defense+II', 'User Defense +2', 'Weapon'), -- 217
    ('Defense+III', 'User Defense +3', 'Weapon'), -- 218
    ('Defense+IV', 'User Defense +4', 'Weapon'), -- 219
    ('Defense+V', 'User Defense +5', 'Weapon'), -- 220
    ('Defense+VI', 'User Defense +6', 'Weapon'), -- 221
    ('Defense+VII', 'User Defense +7', 'Weapon'), -- 222
    ('Defense+VIII', 'User Defense +8', 'Weapon'), -- 223
    ('Defense+IX', 'User Defense +9', 'Weapon'), -- 224
    ('Defense+X', 'User Defense +10', 'Weapon'), -- 225
    ('Magic+I', 'User Magic +1', 'Weapon'), -- 226
    ('Magic+II', 'User Magic +2', 'Weapon'), -- 227
    ('Magic+III', 'User Magic +3', 'Weapon'), -- 228
    ('Magic+IV', 'User Magic +4', 'Weapon'), -- 229
    ('Magic+V', 'User Magic +5', 'Weapon'), -- 230
    ('Magic+VI', 'User Magic +6', 'Weapon'), -- 231
    ('Magic+VII', 'User Magic +7', 'Weapon'), -- 232
    ('Magic+VIII', 'User Magic +8', 'Weapon'), -- 233
    ('Magic+IX', 'User Magic +9', 'Weapon'), -- 234
    ('Magic+X', 'User Magic +10', 'Weapon'), -- 235
    ('Resistance+I', 'User Resistance +1', 'Weapon'), -- 236
    ('Resistance+II', 'User Resistance +2', 'Weapon'), -- 237
    ('Resistance+III', 'User Resistance +3', 'Weapon'), -- 238
    ('Resistance+IV', 'User Resistance +4', 'Weapon'), -- 239
    ('Resistance+V', 'User Resistance +5', 'Weapon'), -- 240
    ('Resistance+VI', 'User Resistance +6', 'Weapon'), -- 241
    ('Resistance+VII', 'User Resistance +7', 'Weapon'), -- 242
    ('Resistance+VIII', 'User Resistance +8', 'Weapon'), -- 243
    ('Resistance+IX', 'User Resistance +9', 'Weapon'), -- 244
    ('Resistance+X', 'User Resistance +10', 'Weapon'), -- 245
    ('Speed+I', 'User Speed +1', 'Weapon'), -- 246
    ('Speed+II', 'User Speed +2', 'Weapon'), -- 247
    ('Speed+III', 'User Speed +3', 'Weapon'), -- 248
    ('Speed+IV', 'User Speed +4', 'Weapon'), -- 249
    ('Speed+V', 'User Speed +5', 'Weapon'), -- 250
    ('Speed+VI', 'User Speed +6', 'Weapon'), -- 251
    ('Speed+VII', 'User Speed +7', 'Weapon'), -- 252
    ('Speed+VIII', 'User Speed +8', 'Weapon'), -- 253
    ('Speed+IX', 'User Speed +9', 'Weapon'), -- 254
    ('Speed+X', 'User Speed +10', 'Weapon'), -- 255
    ('Skill+I', 'User Skill +1', 'Weapon'), -- 256
    ('Skill+II', 'User Skill +2', 'Weapon'), -- 257
    ('Skill+III', 'User Skill +3', 'Weapon'), -- 258
    ('Skill+IV', 'User Skill +4', 'Weapon'), -- 259
    ('Skill+V', 'User Skill +5', 'Weapon'), -- 260
    ('Skill+VI', 'User Skill +6', 'Weapon'), -- 261
    ('Skill+VII', 'User Skill +7', 'Weapon'), -- 262
    ('Skill+VIII', 'User Skill +8', 'Weapon'), -- 263
    ('Skill+IX', 'User Skill +9', 'Weapon'), -- 264
    ('Skill+X', 'User Skill +10', 'Weapon'), -- 265
    ('Luck+I', 'User Luck +1', 'Weapon'), -- 266
    ('Luck+II', 'User Luck +2', 'Weapon'), -- 267
    ('Luck+III', 'User Luck +3', 'Weapon'), -- 268
    ('Luck+IV', 'User Luck +4', 'Weapon'), -- 269
    ('Luck+V', 'User Luck +5', 'Weapon'), -- 270
    ('Luck+VI', 'User Luck +6', 'Weapon'), -- 271
    ('Luck+VII', 'User Luck +7', 'Weapon'), -- 272
    ('Luck+VIII', 'User Luck +8', 'Weapon'), -- 273
    ('Luck+IX', 'User Luck +9', 'Weapon'), -- 274
    ('Luck+X', 'User Luck +10', 'Weapon'), -- 275
    ('Magic Damage+I', 'User Magic Damage +1', 'Weapon'), -- 276
    ('Magic Damage+II', 'User Magic Damage +2', 'Weapon'), -- 277
    ('Magic Damage+III', 'User Magic Damage +3', 'Weapon'), -- 278
    ('Magic Damage+IV', 'User Magic Damage +4', 'Weapon'), -- 279
    ('Magic Damage+V', 'User Magic Damage +5', 'Weapon'), -- 280
    ('Magic Damage+VI', 'User Magic Damage +6', 'Weapon'), -- 281
    ('Magic Damage+VII', 'User Magic Damage +7', 'Weapon'), -- 282
    ('Magic Damage+VIII', 'User Magic Damage +8', 'Weapon'), -- 283
    ('Magic Damage+IX', 'User Magic Damage +9', 'Weapon'), -- 284
    ('Magic Damage+X', 'User Magic Damage +10', 'Weapon'), -- 285
	('Effective Armored', 'The weapon is effective against Armored unit', 'Weapon'), -- 286
	('Effective Flying', 'The weapon is effective against Flying unit', 'Weapon'), -- 287
	('Effective Mounted', 'The weapon is effective against Mounted unit', 'Weapon'), -- 288
	('Effective Beast', 'The weapon is effective against Beast unit', 'Weapon'), -- 289
	('Effective Dragonoid', 'The weapon is effective against Dragonoid unit', 'Weapon'), -- 290
	('Effective Void', 'The weapon is effective against Void unit', 'Weapon'), -- 291
	('Effective Undead', 'The weapon is effective against Undead unit', 'Weapon'), -- 292
	('Effective Demonoid', 'The weapon is effective against Demonoid unit', 'Weapon'), -- 293
	('Effective Monster', 'The weapon is effective against Monster unit', 'Weapon'), -- 294
	('Effective Humanoid', 'The weapon is effective against Humanoid unit', 'Weapon'), -- 295
	('50 Lifesteal', 'The weapon has 50% lifesteal on damage', 'Weapon'), -- 296
	('100 Lifesteal', 'The weapon has 100% lifesteal on damage', 'Weapon'), -- 297
	('50 Crit Lifesteal', 'The weapon has 50% lifesteal on crit damage', 'Weapon'), -- 298
	('100 Crit Lifesteal', 'The weapon has 100% lifesteal on crit damage', 'Weapon'), -- 299
	('Cannot Crit', 'The weapon cannot make critical hit', 'Weapon'), -- 300
	('Two Attack', 'The weapon does double the attack', 'Weapon'), -- 301
    ('Magical Weapon', 'The weapon does Magic Damage (scale on Magic)', 'Weapon'), -- 302
	('Armor Pen 10', 'The skill has 10% armor penetration on damage', 'Skill'), -- 303
	('Armor Pen 20', 'The skill has 20% armor penetration on damage', 'Skill'), -- 304
	('Armor Pen 25', 'The skill has 25% armor penetration on damage', 'Skill'), -- 305
	('Armor Pen 50', 'The skill has 50% armor penetration on damage', 'Skill'), -- 306
	('Armor Pen 75', 'The skill has 75% armor penetration on damage', 'Skill'), -- 307
	('Burn', 'The skill Burn the target', 'Skill'), -- 308
	('Paralyse', 'The skill Paralyse the target', 'Skill'), -- 309
	('Freeze', 'The skill Freeze the target', 'Skill'), -- 310
	('Wet', 'The skill Wet the target', 'Skill'), -- 311
	('Poison', 'The skill Poison the target', 'Skill'), -- 312
	('Petrify', 'The skill Petrify the target', 'Skill'), -- 313
	('Bleeding', 'The skill Bleed the targets', 'Skill'), -- 314
	('Curse HP', 'The skill curse the HP of the target', 'Skill'), -- 315
	('Great Curse HP', 'The skill greatly curse the HP of the target', 'Skill'), -- 316
	('Curse Strength', 'The skill curse the Strength of the target', 'Skill'), -- 317
	('Great Curse Strength', 'The skill greatly curse the Strength of the target', 'Skill'), -- 318
	('Curse Defense', 'The skill curse the Defense of the target', 'Skill'), -- 319
	('Great Curse Defense', 'The skill greatly curse the Defense of the target', 'Skill'), -- 320
	('Curse Magic', 'The skill curse the Magic of the target', 'Skill'), -- 321
	('Great Curse Magic', 'The skill greatly curse the Magic of the target', 'Skill'), -- 322
	('Curse Resistance', 'The skill curse the Resistance of the target', 'Skill'), -- 323
	('Great Curse Resistance', 'The skill greatly curse the Resistance of the target', 'Skill'), -- 324
	('Curse Speed', 'The skill curse the Speed of the target', 'Skill'), -- 325
	('Great Curse Speed', 'The skill greatly curse the Speed of the target', 'Skill'), -- 326
	('Curse Skill', 'The skill curse the Skill of the target', 'Skill'), -- 327
	('Great Curse Skill', 'The skill greatly curse the Skill of the target', 'Skill'), -- 328
	('Curse Luck', 'The skill curse the Luck of the target', 'Skill'), -- 329
	('Great Curse Luck', 'The skill greatly curse the Luck of the target', 'Skill'), -- 330
	('Curse Mana', 'The skill curse the Mana of the target', 'Skill'), -- 331
	('Great Curse Mana', 'The skill greatly curse the Mana of the target', 'Skill'), -- 332
	('Bless HP', 'The skill bless the HP of the target', 'Skill'), -- 333
	('Great Bless HP', 'The skill greatly bless the HP of the target', 'Skill'), -- 334
	('Bless Strength', 'The skill bless the Strength of the target', 'Skill'), -- 335
	('Great Bless Strength', 'The skill greatly bless the Strength of the target', 'Skill'), -- 336
	('Bless Defense', 'The skill bless the Defense of the target', 'Skill'), -- 337
	('Great Bless Defense', 'The skill greatly bless the Defense of the target', 'Skill'), -- 338
	('Bless Magic', 'The skill bless the Magic of the target', 'Skill'), -- 339
	('Great Bless Magic', 'The skill greatly bless the Magic of the target', 'Skill'), -- 340
	('Bless Resistance', 'The skill bless the Resistance of the target', 'Skill'), -- 341
	('Great Bless Resistance', 'The skill greatly bless the Resistance of the target', 'Skill'), -- 342
	('Bless Speed', 'The skill bless the Speed of the target', 'Skill'), -- 343
	('Great Bless Speed', 'The skill greatly bless the Speed of the target', 'Skill'), -- 344
	('Bless Skill', 'The skill bless the Skill of the target', 'Skill'), -- 345
	('Great Bless Skill', 'The skill greatly bless the Skill of the target', 'Skill'), -- 346
	('Bless Luck', 'The skill bless the Luck of the target', 'Skill'), -- 347
	('Great Bless Luck', 'The skill greatly bless the Luck of the target', 'Skill'), -- 348
	('Bless Mana', 'The skill bless the Mana of the target', 'Skill'), -- 349
	('Great Bless Mana', 'The skill greatly bless the Mana of the target', 'Skill'), -- 350
	('Effective Armored', 'The skill is effective against Armored unit', 'Skill'), -- 351
	('Effective Flying', 'The skill is effective against Flying unit', 'Skill'), -- 352
	('Effective Mounted', 'The skill is effective against Mounted unit', 'Skill'), -- 353
	('Effective Beast', 'The skill is effective against Beast unit', 'Skill'), -- 354
	('Effective Dragonoid', 'The skill is effective against Dragonoid unit', 'Skill'), -- 355
	('Effective Void', 'The skill is effective against Void unit', 'Skill'), -- 356
	('Effective Undead', 'The skill is effective against Undead unit', 'Skill'), -- 357
	('Effective Demonoid', 'The skill is effective against Demonoid unit', 'Skill'), -- 358
	('Effective Monster', 'The skill is effective against Monster unit', 'Skill'), -- 359
	('Effective Humanoid', 'The skill is effective against Humanoid unit', 'Skill'), -- 360
	('Defense Piercer', 'The skill ignore Defense', 'Skill'), -- 361
	('Resistance Piercer', 'The skill ignore Resistance', 'Skill'), -- 362
	('Double Attack', 'Attack 2 times', 'Skill'), -- 363
	('Double Attack', 'Attack 3 times', 'Skill'), -- 364
	('Triple Attack', 'Attack 4 times', 'Skill'), -- 365
	('Quadruple Attack', 'Attack 5 times', 'Skill'), -- 366
	('Quintuple Attack', 'Attack 6 times', 'Skill'), -- 367
	('Sextuple Attack', 'Attack 7 times', 'Skill'), -- 368
	('Septuple Attack', 'Attack 8 times', 'Skill'), -- 369
	('Eightuple Attack', 'Attack 9 times', 'Skill'), -- 370
	('Ninefold Attack', 'Attack 10 times', 'Skill'), -- 371
	('Tenfold Attack', 'Attack 15 times', 'Skill'), -- 372
	('Fifteenfold Attack', 'Attack 20 times', 'Skill'), -- 373
	('Thirtyfold Attack', 'Attack 30 times', 'Skill'), -- 374
	('Lifesteal', 'The skill lifesteal the damage dealt', 'Skill'), -- 375
    ('Defense Rating', 'The skill take Defense/Resistance and add it to the damage dealt', 'Skill'), -- 376
    ('Though Acceleration', 'The character can stop time to think', 'Other'), -- 377
    ('Though Creation/Manipulation', 'The character can create and manipulation matter', 'Other'), -- 378
    ('Heroic Desire', 'The character stat growth are increased by 5', 'Other'), -- 379
    ('Mage Prodigy', 'The characer magic and spirit growth by 15', 'Other'), -- 380
    ('Manipulator', 'The character can easily trick and manipulate other people', 'Other'), -- 381
    ('Royal', 'The character experience gain is 1.2 time higher', 'Other'), -- 382
    ('Perseverant', 'The character HP Growth is increased by 10', 'Other'), -- 383
    ('Strong', 'The character Strength Growth is increased by 10', 'Other'), -- 384
    ('Intelligent', 'The character Magic Growth is increased by 10', 'Other'), -- 385
    ('Tanky', 'The character Defense Growth is increased by 10', 'Other'), -- 386
    ('Resilient', 'The character Resistance Growth is increased by 10', 'Other'), -- 387
    ('Skilled', 'The character Skill Growth is increased by 10', 'Other'), -- 388
    ('Fast', 'The character Speed Growth is increased by 10', 'Other'), -- 389
    ('Lucky', 'The character Luck Growth is increased by 10', 'Other'), -- 390
    ('Adept', 'The character Mana Growth is increased by 10', 'Other'), -- 391
    ('Generosity', 'The character healing done is 1.5 time stronger', 'Other'), -- 392
    ('Knightly Will', 'The character Defense and Strength is increased when fighting monster and demon', 'Other'), -- 393
    ('Unkillable', 'The character HP is double', 'Other'), -- 394
    ('Powerful', 'The character strength is double', 'Other'), -- 395
    ('Mastermind', 'The character magic is double', 'Other'), -- 396
    ('Defender', 'The character defense is double', 'Other'), -- 397
    ('Robust', 'The character resistance is double', 'Other'), -- 398
    ('Swift', 'The character speed is double', 'Other'), -- 399
    ('Talented', 'The character skill is double', 'Other'), -- 400
    ('Fortunate', 'The character Luck is double', 'Other'), -- 401
    ('Gifted', 'The character Mana is double', 'Other'), -- 402
    ('Trash', 'The character stats growth is reduced by 5', 'Other'), -- 403
    ('Spirit Gift', 'You are gifted with spirit', 'Other'), -- 404
    ('Skilled Artist', 'The character skills damage are 1.5 time higher', 'Other'), -- 405
    ('Lord of Despair Abaddon', 'The character have access to infinite magicules', 'Other'), -- 406
    ('God of Justice Elrath', 'The character have divine might when fighting to what the character consider right', 'Other'), -- 407
    ('God of Nature Sylvanna', 'The character can create and use the nature as he please', 'Other'), -- 408
    ('Ascended God of Humanity Arkath', 'The character stat growth rate are increased by 100', 'Other'), -- 409
    ('Forgotten God Ylath', 'The character gain access to forbidden magic', 'Other'), -- 410
    ('Goddess of Success Elira', 'The character have divine luck', 'Other'), -- 411
    ('God of Hope Sariel', 'The character never loss hope', 'Other'), -- 412
    ('God of Happiness Saraphiel', 'The character have divine protection', 'Other'), -- 413
    ('Hero of Heroes Godric', 'The character have divine might against demon and monster', 'Other'), -- 414
    ('God-Slayer Yuuki', 'The character ignore divine protection and resistant', 'Other'), -- 415
    ('Limit-Breaker Yami', 'The character have unlimited stamina, limit break is less dangerous for him', 'Other'), -- 416
    ('Conqueror of Space-Time Gehrman', 'The character gain access to time & space magic', 'Other'), -- 417
    ('Magicless Asta', 'The character dont have magicules, his strength is limitless (Strength growth +200)', 'Other'), -- 418
    ('Great Liberator Xeno', 'The character have divine might against humanoid', 'Other'), -- 419
    ('Supreme Nine-Tails Kurama', 'The character have control over every magicules that exists', 'Other'), -- 420
    ('Supreme Wolfssegner Keaton', 'The character can control very Wolfssegner that exists', 'Other'), -- 421
    ('True Dragon of Wrath Arthan', 'The character crit rate is increased by 15, his crit damage is triple', 'Other'), -- 422
    ('True Dragon of Weather Silvanus', 'The character gain access to weather manipulation', 'Other'), -- 423
    ('True Dragon of Skill Yuimoji', 'The character talent are limitless', 'Other'), -- 424
    ('True Dragon of Power Byleth', 'The character attack ignore defense and resistance', 'Other'), -- 425
    ('True Dragon of Existance Corrin', 'The character gain access to existance manipulation', 'Other'), -- 426
    ('True Dragon of Fate Nantharu', 'The character gain access to law manipulation', 'Other'), -- 427
    ('True Dragon of Faith Rhea', 'The character stats are double if someone believe in him', 'Other'), -- 428
    ('Creator of Skills Tirmis', 'The character is immune to active', 'Other'), -- 429
    ('Great Corruption Ythil', 'The character is immune to passive', 'Other'), -- 430
    ('Master of Though Adelia', 'The character have control over the world of his though and can send people in it', 'Other'), -- 431
    ('Corrupted Hero of Dusk Ardyn', 'The character gain access to corrupted holy magic', 'Other') -- 432
;

-- Types
CREATE TABLE IF NOT EXISTS Types (
    type_id INTEGER PRIMARY KEY,
    name TEXT NOT NULL
);
INSERT INTO Types (name)
VALUES
    ('Humanoid'),
    ('Monster'),
    ('Demonoid'),
    ('Undead'),
    ('Void'),
    ('Dragonoid'),
    ('Beast'),
    ('Armored'),
    ('Mounted'),
    ('Flying'), 
    ('Holy'),
    ('Religious')
;

-- Status
CREATE TABLE IF NOT EXISTS Status (
    status_id INTEGER PRIMARY KEY,
    name TEXT NOT NULL
);
INSERT INTO Status (name)
VALUES
    ('Burned'),
    ('Paralyzed'),
    ('Freeze'),
    ('Wet'),
    ('Poison'),
    ('Petrified'),
    ('Bleeding'),
    ('Curse_HP'),
    ('Great_Curse_HP'),
    ('Curse_Strength'),
    ('Great_Curse_Strength'),
    ('Curse_Defense'),
    ('Great_Curse_Defense'),
    ('Curse_Magic'),
    ('Great_Curse_Magic'),
    ('Curse_Resistance'),
    ('Great_Curse_Resistance'),
    ('Curse_Speed'),
    ('Great_Curse_Speed'),
    ('Curse_Skill'),
    ('Great_Curse_Skill'),
    ('Curse_Luck'),
    ('Great_Curse_Luck'),
    ('Curse_Mana'),
    ('Great_Curse_Mana'),
    ('Bless_HP'),
    ('Great_Bless_HP'),
    ('Bless_Strength'),
    ('Great_Bless_Strength'),
    ('Bless_Defense'),
    ('Great_Bless__Defense'),
    ('Bless_Magic'),
    ('Great_Bless_Magic'),
    ('Bless_Resistance'),
    ('Great_Bless_Resistance'),
    ('Bless_Speed'),
    ('Great_Bless_Speed'),
    ('Bless_Skill'),
    ('Great_Bless_Skill'),
    ('Bless_Luck'),
    ('Great_Bless_Luck'),
    ('Bless_Mana'),
    ('Great_Bless_Mana'),
    ('Spirit_Limit')
;

-- Armors
CREATE TABLE IF NOT EXISTS Armors (
    armor_id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    power INTEGER NOT NULL,
    img TEXT
);
INSERT INTO Armors (name, power, img)
VALUES
    ('Clothe', 0, 'http:////144.217.14.182//img//notFound.jpg'),
    ('Leather armor', 2, 'http:////144.217.14.182//img//leather_armor.jpg'),
    ('Adventurer armor', 4, 'http:////144.217.14.182//img//adventurer_armor.jpg'),
    ('Mage robes', 3, 'http:////144.217.14.182//img//mage_robes.jpg'),
    ('Chainmail', 6, 'http:////144.217.14.182//img//chainmail.jpg'),
    ('Full plate', 8, 'http:////144.217.14.182//img//full_plate.jpg'),
    ('Royal armor', 12, 'http:////144.217.14.182//img//royal_armor.jpg')
;

-- Weapons
CREATE TABLE IF NOT EXISTS Weapons (
    weapon_id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    damage INTEGER NOT NULL,
    accuracy INTEGER NOT NULL,
    crit INTEGER NOT NULL,
    price REAL NOT NULL,
    rank TEXT NOT NULL,
    damage_type TEXT NOT NULL,
    weapon_type TEXT NOT NULL,
    img TEXT
);
INSERT INTO Weapons (name, damage, accuracy, crit, price, rank, damage_type, weapon_type, img)
VALUES
    ('Fist', 1, 100, 0, 0, 'E', 'Physical', 'Fist', 'http:////144.217.14.182//img//fist.jpg'), -- 1
    ('Bronze gauntlet', 2, 90, 0, 6, 'E', 'Physical', 'Fist', 'http:////144.217.14.182//img//bronze_gauntlet.jpg'), -- 2
    ('Iron gauntlet', 4, 85, 0, 15, 'D', 'Physical', 'Fist', 'http:////144.217.14.182//img//iron_gauntlet.jpg'), -- 3
    ('Steel gauntlet', 7, 85, 0, 30, 'C', 'Physical', 'Fist', 'http:////144.217.14.182//img//steel_gauntlet.jpg'), -- 4
    ('Magisteel gauntlet', 6, 80, 0, 60, 'B', 'Physical', 'Fist', 'http:////144.217.14.182//img//magisteel_gauntlet.jpg'), -- 5
    ('Silver gauntlet', 8, 90, 0, 120, 'A', 'Physical', 'Fist', 'http:////144.217.14.182//img//silver_gauntlet.jpg'), -- 6
    ('Caestus', 3, 100, 0, 3, 'D', 'Physical', 'Fist', 'http:////144.217.14.182//img//caestus.jpg'), -- 7
    ('Spiked caestus', 4, 100, 0, 12, 'C', 'Physical', 'Fist', 'http:////144.217.14.182//img//spiked_caestus.jpg'), -- 8
    ('Katar', 6, 95, 15, 70, 'B', 'Physical', 'Fist', 'http:////144.217.14.182//img//katar.jpg'), -- 9
    ('Bronze sword', 2, 100, 0, 8, 'E', 'Physical', 'Sword', 'http:////144.217.14.182//img//bronze_sword.jpg'), -- 10
    ('Iron sword', 5, 100, 0, 16, 'D', 'Physical', 'Sword', 'http:////144.217.14.182//img//iron_sword.jpg'), -- 11
    ('Steel sword', 8, 95, 0, 32, 'C', 'Physical', 'Sword', 'http:////144.217.14.182//img//steel_sword.jpg'), -- 12
    ('Magisteel sword', 6, 95, 0, 64, 'B', 'Physical', 'Sword', 'http:////144.217.14.182//img//magisteel_sword.jpg'), -- 13
    ('Silver sword', 12, 100, 0, 128, 'A', 'Physical', 'Sword', 'http:////144.217.14.182//img//silver_sword.jpg'), -- 14
    ('Katana', 9, 95, 15, 75, 'A', 'Physical', 'Sword', 'http:////144.217.14.182//img//katana.jpg'), -- 15
    ('Rapier', 10, 100, 10, 100, 'A', 'Physical', 'Sword', 'http:////144.217.14.182//img//rapier.jpg'), -- 16
    ('Armorslayer', 7, 90, 0, 40, 'C', 'Physical', 'Sword', 'http:////144.217.14.182//img//armorslayer.jpg'), -- 17
    ('Wrymslayer', 7, 85, 0, 50, 'C', 'Physical', 'Sword', 'http:////144.217.14.182//img//wrymslayer.jpg'), -- 18
    ('Brave sword', 8, 90, 5, 150, 'A', 'Physical', 'Sword', 'http:////144.217.14.182//img//brave_sword.jpg'), -- 19
    ('Levin sword', 9, 95, 0, 200, 'A', 'Arcane', 'Sword', 'http:////144.217.14.182//img//levin_sword.jpg'), -- 20
    ('Creator sword', 10, 95, 5, 0, 'B', 'Physical', 'Sword', 'http:////144.217.14.182//img//creator_sword.jpg'), -- 21
    ('Thunderbrand', 12, 80, 5, 0, 'S', 'Physical', 'Sword', 'http:////144.217.14.182//img//thunderbrand.jpg'), -- 22
    ('Blutgang', 8, 90, 5, 0, 'B', 'Physical', 'Sword', 'http:////144.217.14.182//img//blutgang.jpg'), -- 23
    ('Sword of Seiros', 6, 95, 0, 0, 'C', 'Physical', 'Sword', 'http:////144.217.14.182//img//sword_of_seiros.jpg'), -- 24
    ('Sword of Moralta', 6, 90, 10, 0, 'C', 'Physical', 'Sword', 'http:////144.217.14.182//img//sword_of_moralta.jpg'), -- 25
    ('Bronze spear', 3, 90, 0, 10, 'E', 'Physical', 'Spear', 'http:////144.217.14.182//img//bronze_spear.jpg'), -- 26
    ('Iron spear', 6, 85, 5, 20, 'D', 'Physical', 'Spear', 'http:////144.217.14.182//img//iron_spear.jpg'), -- 27
    ('Steel spear', 9, 80, 5, 40, 'C', 'Physical', 'Spear', 'http:////144.217.14.182//img//steel_spear.jpg'), -- 28
    ('Magisteel spear', 7, 80, 5, 80, 'B', 'Physical', 'Spear', 'http:////144.217.14.182//img//magisteel_spear.jpg'), -- 29
    ('Silver spear', 13, 85, 10, 160, 'A', 'Physical', 'Spear', 'http:////144.217.14.182//img//silver_spear.jpg'), -- 30
    ('Naginata', 9, 100, 5, 40, 'B', 'Physical', 'Spear', 'http:////144.217.14.182//img//naginata.jpg'), -- 31
    ('Javelin', 6, 80, 5, 25, 'C', 'Physical', 'Spear', 'http:////144.217.14.182//img//javelin.jpg'), -- 32
    ('Killer spear', 7, 80, 30, 95, 'B', 'Physical', 'Spear', 'http:////144.217.14.182//img//killer_spear.jpg'), -- 33
    ('Beastslayer', 8, 85, 5, 50, 'C', 'Physical', 'Spear', 'http:////144.217.14.182//img//beastslayer.jpg'), -- 34
    ('Brave spear', 11, 80, 15, 170, 'A', 'Physical', 'Spear', 'http:////144.217.14.182//img//brave_spear.jpg'), -- 35
    ('Blessed trident', 9, 75, 5, 100, 'B', 'Holy', 'Spear', 'http:////144.217.14.182//img//blessed_trident.jpg'), -- 36
    ('Aredhbar', 12, 90, 20, 0, 'S', 'Physical', 'Spear', 'http:////144.217.14.182//img//aredhbar.jpg'), -- 37
    ('Lùin', 8, 80, 10, 0, 'B', 'Physical', 'Spear', 'http:////144.217.14.182//img//lùin.jpg'), -- 38
    ('Spear of Assal', 10, 90, 5, 0, 'C', 'Physical', 'Spear', 'http:////144.217.14.182//img//spear_of_assal.jpg'), -- 39
    ('Crescent Sariel', 14, 75, 10, 0, 'A', 'Arcane', 'Spear', 'http:////144.217.14.182//img//crescent_sariel.jpg'), -- 40
    ('Bronze axe', 5, 85, 0, 12, 'E', 'Physical', 'Axe', 'http:////144.217.14.182//img//bronze_axe.jpg'), -- 41
    ('Iron axe', 7, 80, 0, 24, 'D', 'Physical', 'Axe', 'http:////144.217.14.182//img//iron_axe.jpg'), -- 42
    ('Steel axe', 10, 75, 0, 48, 'C', 'Physical', 'Axe', 'http:////144.217.14.182//img//steel_axe.jpg'), -- 43
    ('Magisteel axe', 9, 60, 0, 96, 'B', 'Physical', 'Axe', 'http:////144.217.14.182//img//magisteel_axe.jpg'), -- 44
    ('Silver axe', 15, 65, 0, 192, 'A', 'Physical', 'Axe', 'http:////144.217.14.182//img//silver_axe.jpg'), -- 45
    ('Hand axe', 6, 60, 0, 30, 'D', 'Physical', 'Axe', 'http:////144.217.14.182//img//hand_axe.jpg'), -- 46
    ('Tomahawk', 13, 50, 5, 100, 'B', 'Physical', 'Axe', 'http:////144.217.14.182//img//tomahawk.jpg'), -- 47
    ('Hammer', 9, 55, 0, 50, 'C', 'Physical', 'Axe', 'http:////144.217.14.182//img//hammer.jpg'), -- 48
    ('Mace', 6, 65, 5, 26, 'D', 'Physical', 'Axe', 'http:////144.217.14.182//img//mace.jpg'), -- 49
    ('Killer axe', 9, 45, 20, 55, 'C', 'Physical', 'Axe', 'http:////144.217.14.182//img//killer_axe.jpg'), -- 50
    ('Brave axe', 11, 55, 5, 200, 'A', 'Physical', 'Axe', 'http:////144.217.14.182//img//brave_axe.jpg'), -- 51
    ('Aymr', 15, 65, 5, 0, 'B', 'Physical', 'Axe', 'http:////144.217.14.182//img//aymr.jpg'), -- 52
    ('Freikugel', 16, 70, 10, 0, 'S', 'Physical', 'Axe', 'http:////144.217.14.182//img//freikugel.jpg'), -- 53
    ('Axe of Ukonvasara', 13, 60, 5, 0, 'A', 'Physical', 'Axe', 'http:////144.217.14.182//img//axe_of_ukonvasara.jpg'), -- 54
    ('Bronze dagger', 2, 100, 0, 3, 'E', 'Physical', 'Dagger', 'http:////144.217.14.182//img//bronze_dagger.jpg'), -- 55
    ('Iron dagger', 4, 95, 5, 6, 'D', 'Physical', 'Dagger', 'http:////144.217.14.182//img//iron_dagger.jpg'), -- 56
    ('Steel dagger', 6, 90, 5, 12, 'C', 'Physical', 'Dagger', 'http:////144.217.14.182//img//steel_dagger.jpg'), -- 57
    ('Magisteel dagger', 5, 80, 5, 25, 'B', 'Physical', 'Dagger', 'http:////144.217.14.182//img//magisteel_dagger.jpg'), -- 58
    ('Silver dagger', 8, 85, 5, 48, 'A', 'Physical', 'Dagger', 'http:////144.217.14.182//img//silver_dagger.jpg'), -- 59
    ('Shuriken', 3, 100, 15, 10, 'D', 'Physical', 'Dagger', 'http:////144.217.14.182//img//shuriken.jpg'), -- 60
    ('Chakram', 5, 100, 15, 15, 'C', 'Physical', 'Dagger', 'http:////144.217.14.182//img//chakram.jpg'), -- 61
    ('Hunter knife', 5, 90, 10, 8, 'D', 'Physical', 'Dagger', 'http:////144.217.14.182//img//hunter_knife.jpg'), -- 62
    ('Killer dagger', 6, 80, 25, 20, 'C', 'Physical', 'Dagger', 'http:////144.217.14.182//img//killer_dagger.jpg'), -- 63
    ('Brave dagger', 8, 80, 10, 56, 'A', 'Physical', 'Dagger', 'http:////144.217.14.182//img//brave_dagger.jpg'), -- 64
    ('Mortem', 9, 95, 15, 0, 'S', 'Physical', 'Dagger', 'http:////144.217.14.182//img//mortem.jpg'), -- 65
    ('Ragnell', 11, 75, 10, 0, 'A', 'Physical', 'Dagger', 'http:////144.217.14.182//img//ragnell.jpg'), -- 66
    ('Bölverk', 15, 65, 5, 0, 'B', 'Physical', 'Dagger', 'http:////144.217.14.182//img//bölverk.jpg'), -- 67
    ('Siegfried', 7, 85, 10, 0, 'A', 'Physical', 'Dagger', 'http:////144.217.14.182//img//siegfried.jpg'), -- 68
    ('Wooden staff', 1, 100, 0, 1, 'E', 'Arcane', 'Staff', 'http:////144.217.14.182//img//wooden_staff.jpg'), -- 69
    ('Iron staff', 3, 80, 0, 6, 'D', 'Arcane', 'Staff', 'http:////144.217.14.182//img//iron_staff.jpg'), -- 70
    ('Magisteel staff', 6, 70, 0, 24, 'B', 'Arcane', 'Staff', 'http:////144.217.14.182//img//magisteel_staff.jpg'), -- 71
    ('Byrnhildr', 8, 75, 15, 0, 'S', 'Arcane', 'Staff', 'http:////144.217.14.182//img//byrnhildr.jpg'), -- 72
    ('Bronze bow', 3, 95, 0, 5, 'E', 'Physical', 'Bow', 'http:////144.217.14.182//img//bronze_bow.jpg'), -- 73
    ('Iron bow', 5, 95, 0, 10, 'D', 'Physical', 'Bow', 'http:////144.217.14.182//img//iron_bow.jpg'), -- 74
    ('Steel bow', 8, 85, 0, 20, 'C', 'Physical', 'Bow', 'http:////144.217.14.182//img//steel_bow.jpg'), -- 75
    ('Magisteel bow', 6, 80, 0, 40, 'B', 'Physical', 'Bow', 'http:////144.217.14.182//img//magisteel_bow.jpg'), -- 76
    ('Silver bow', 11, 85, 0, 80, 'A', 'Physical', 'Bow', 'http:////144.217.14.182//img//silver_bow.jpg'), -- 77
    ('Greatbow', 15, 60, 0, 50, 'B', 'Physical', 'Bow', 'http:////144.217.14.182//img//greatbow.jpg'), -- 78
    ('Shortbow', 7, 90, 0, 30, 'C', 'Physical', 'Bow', 'http:////144.217.14.182//img//shortbow.jpg'), -- 79
    ('Longbow', 9, 80, 0, 50, 'B', 'Physical', 'Bow', 'http:////144.217.14.182//img//longbow.jpg'), -- 80
    ('Killer bow', 7, 75, 20, 45, 'C', 'Physical', 'Bow', 'http:////144.217.14.182//img//killer_bow.jpg'), -- 81
    ('Brave bow', 10, 80, 5, 100, 'A', 'Physical', 'Bow', 'http:////144.217.14.182//img//brave_bow.jpg'), -- 82
    ('Failnaught', 12, 90, 10, 0, 'S', 'Physical', 'Bow', 'http:////144.217.14.182//img//failnaught.jpg'), -- 83
    ('Fujin yumi', 9, 85, 5, 0, 'A', 'Wind', 'Bow', 'http:////144.217.14.182//img//fujin_yumi.jpg'), -- 84
    ('Skadi', 7, 80, 10, 0, 'B', 'Physical', 'Bow', 'http:////144.217.14.182//img//skadi.jpg'), -- 85
    ('Beast claw', 6, 125, 10, 0, 'E', 'Physical', 'Other', 'http:////144.217.14.182//img//beast_claw.jpg'), -- 86
    ('Dragon claw', 9, 95, 5, 0, 'E', 'Physical', 'Other', 'http:////144.217.14.182//img//dragon_claw.jpg'), -- 87
    ('Beast jaw', 10, 90, 10, 0, 'C', 'Physical', 'Other', 'http:////144.217.14.182//img//beast_jaw.jpg'), -- 88
    ('Dragon jaw', 13, 95, 5, 0, 'C', 'Physical', 'Other', 'http:////144.217.14.182//img//dragon_jaw.jpg'), -- 89
    ('Whip', 3, 105, 0, 0, 'E', 'Physical', 'Other', 'http:////144.217.14.182//img//whip.jpg'), -- 90
    ('Urumi', 7, 95, 5, 0, 'S', 'Physical', 'Other', 'http:////144.217.14.182//img//urumi.jpg'), -- 91
    ('Daybringer petal whip', 5, 105, 10, 0, 'S', 'Physical', 'Other', 'http:////144.217.14.182//img//daybringer_petal_whip.jpg') -- 92
;

-- Skills
CREATE TABLE IF NOT EXISTS Skills (
    skill_id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    power INTEGER NOT NULL,
    power_gain INTEGER NOT NULL,
    accuracy INTEGER NOT NULL,
    accuracy_gain INTEGER NOT NULL,
    crit INTEGER NOT NULL,
    crit_gain INTEGER NOT NULL,
    mana_usage INTEGER NOT NULL,
    skill_type TEXT NOT NULL,
    skill_purpose TEXT NOT NULL,
    damage_type TEXT NOT NULL
);

-- Classes
CREATE TABLE IF NOT EXISTS Classes (
    class_id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    hp_growth INTEGER NOT NULL,
    strength_growth INTEGER NOT NULL,
    defense_growth INTEGER NOT NULL,
    magic_growth INTEGER NOT NULL,
    resistance_growth INTEGER NOT NULL,
    speed_growth INTEGER NOT NULL,
    skill_growth INTEGER NOT NULL,
    luck_growth INTEGER NOT NULL,
    mana_growth INTEGER NOT NULL,
    class_serie TEXT NOT NULL,
    predecessor TEXT NOT NULL
);
INSERT INTO Classes (name, hp_growth, defense_growth, resistance_growth, strength_growth, magic_growth, speed_growth, skill_growth, luck_growth, mana_growth, class_serie, predecessor)
VALUES
    -- Militia
    ('Militia', 15, 20, 5, 15, 0, 5, 10, 5, 0, 'Militia', 'None'), -- 1
    ('Soldier', 25, 40, 10, 20, 5, 5, 15, 15, 10, 'Militia', 'Militia'), -- 2
    ('Sentinel', 45, 60, 30, 55, 25, 10, 40, 45, 20, 'Militia', 'Soldier'), -- 3
    ('Champion', 55, 40, 25, 60, 10, 30, 55, 30, 15, 'Militia', 'Soldier'), -- 4
    ('Cavalier', 20, 20, 15, 25, 5, 30, 25, 10, 5, 'Militia', 'Militia'), -- 5
    ('Knight', 35, 45, 30, 45, 30, 50, 45, 20, 15, 'Militia', 'Cavalier'), -- 6
    ('Wyvern Lord', 35, 35, 50, 55, 15, 50, 40, 20, 20, 'Militia', 'Cavalier'), -- 7
    ('Captain', 35, 25, 10, 15, 10, 15, 20, 30, 25, 'Militia', 'Militia'), -- 8
    ('General', 40, 50, 45, 35, 25, 30, 35, 30, 30, 'Militia', 'Captain'), -- 9
    ('Exemplar', 45, 30, 20, 35, 30, 35, 45, 50, 40, 'Militia', 'Captain'), -- 10
    -- Fighter
    ('Fighter', 20, 10, 5, 20, 0, 10, 10, 0, 0, 'Fighter', 'None'), -- 11
    ('Spearman', 20, 25, 10, 35, 15, 15, 25, 10, 15, 'Fighter', 'Fighter'), -- 12
    ('Centurion', 40, 35, 20, 50, 25, 35, 45, 15, 25, 'Fighter', 'Spearman'), -- 13
    ('Kishin Knight', 35, 30, 30, 40, 40, 55, 45, 30, 35, 'Fighter', 'Spearman'), -- 14
    ('Scout', 25, 20, 15, 25, 15, 30, 20, 20, 20, 'Fighter', 'Fighter'), -- 15
    ('Hussar', 40, 35, 30, 50, 35, 60, 40, 35, 30, 'Fighter', 'Scout'), -- 16
    ('Dragoon', 45, 45, 25, 40, 25, 60, 55, 40, 25, 'Fighter', 'Scout'), -- 17
    ('Barbarian', 35, 15, 10, 40, 0, 15, 25, 20, 0, 'Fighter', 'Fighter'), -- 18
    ('Berserker', 60, 40, 20, 70, 10, 30, 45, 10, 10, 'Fighter', 'Barbarian'), -- 19
    ('Hero', 40, 45, 30, 55, 35, 50, 45, 30, 40, 'Fighter', 'Barbarian'), -- 20
    -- Skirmisher
    ('Skirmisher', 10, 5, 5, 10, 0, 10, 15, 5, 0, 'Skirmisher', 'None'), -- 21
    ('Swordsman', 25, 20, 15, 25, 5, 25, 35, 15, 5, 'Skirmisher', 'Skirmisher'), -- 22
    ('Swordsmaster', 40, 30, 25, 40, 15, 40, 50, 25, 15, 'Skirmisher', 'Swordsman'), -- 23
    ('Samurai', 45, 40, 30, 50, 5, 30, 50, 30, 5, 'Skirmisher', 'Swordsman'), -- 24
    ('Rogue', 20, 10, 20, 15, 20, 35, 30, 10, 25, 'Skirmisher', 'Skirmisher'), -- 25
    ('Ranger', 30, 35, 40, 45, 40, 55, 50, 15, 25, 'Skirmisher', 'Rogue'), -- 26
    ('Assassin', 25, 15, 25, 45, 50, 45, 70, 15, 40, 'Skirmisher', 'Rogue'), -- 27
    ('Mercenary', 25, 20, 20, 25, 10, 25, 25, 20, 10, 'Skirmisher', 'Skirmisher'), -- 28
    ('Strider', 30, 30, 35, 45, 20, 45, 60, 30, 25, 'Skirmisher', 'Mercenary'), -- 29
    ('Master Ninja', 25, 25, 25, 35, 30, 60, 60, 35, 30, 'Skirmisher', 'Mercenary'), -- 30
    -- Bowman
    ('Bowman', 5, 5, 10, 10, 5, 15, 20, 10, 0, 'Bowman', 'None'), -- 31
    ('Crossbowman', 25, 25, 15, 40, 0, 15, 30, 10, 0, 'Bowman', 'Bowman'), -- 32
    ('Warbow', 30, 40, 20, 45, 15, 45, 55, 20, 25, 'Bowman', 'Crossbowman'), -- 33
    ('Raider', 40, 35, 20, 60, 0, 55, 50, 15, 0, 'Bowman', 'Crossbowman'), -- 34
    ('Archer', 20, 20, 25, 25, 15, 25, 30, 15, 20, 'Bowman', 'Bowman'), -- 35
    ('Sniper', 25, 25, 35, 45, 30, 55, 60, 25, 40, 'Bowman', 'Archer'), -- 36
    ('Horsebow', 25, 35, 35, 40, 35, 55, 45, 30, 40, 'Bowman', 'Archer'), -- 37
    -- Medic
    ('Medic', 15, 5, 20, 5, 15, 5, 5, 15, 10, 'Medic', 'None'), -- 38
    ('Priest', 25, 10, 35, 5, 30, 15, 10, 25, 20, 'Medic', 'Medic'), -- 39
    ('Templar', 35, 30, 40, 30, 45, 20, 30, 40, 35, 'Medic', 'Priest'), -- 40
    ('Inquisitor', 30, 25, 45, 15, 50, 20, 15, 30, 40, 'Medic', 'Priest'), -- 41
    ('Siren', 20, 10, 35, 0, 40, 20, 15, 25, 30, 'Medic', 'Medic'), -- 42
    ('Sorceress', 30, 15, 50, 0, 60, 45, 30, 35, 50, 'Medic', 'Siren'), -- 43
    ('Acolyte', 35, 20, 40, 10, 50, 35, 40, 25, 55, 'Medic', 'Siren'), -- 44
    ('Hospitaller', 30, 25, 25, 10, 25, 25, 15, 20, 10, 'Medic', 'Medic'), -- 45
    ('Paladin', 50, 50, 50, 45, 30, 25, 30, 25, 20, 'Medic', 'Hospitaller'), -- 46
    ('Valkyrie', 40, 35, 35, 25, 45, 50, 25, 40, 20, 'Medic', 'Hospitaller'), -- 47
    -- Apprentice
    ('Apprentice', 10, 0, 15, 0, 20, 5, 10, 10, 20, 'Apprentice', 'None'), -- 48
    ('Arcanist', 15, 10, 20, 0, 35, 25, 20, 20, 40, 'Apprentice', 'Apprentice'), -- 49
    ('Wizard', 25, 15, 50, 0, 60, 30, 40, 35, 55, 'Apprentice', 'Arcanist'), -- 50
    ('Illusionist', 20, 20, 35, 30, 40, 40, 35, 45, 60, 'Apprentice', 'Arcanist'), -- 51
    ('Battlemage', 30, 30, 35, 15, 25, 10, 20, 15, 25, 'Apprentice', 'Apprentice'), -- 52
    ('Aegis', 50, 55, 60, 25, 30, 15, 30, 25, 35, 'Apprentice', 'Battlemage'), -- 53
    ('Astral Seeker', 45, 60, 45, 40, 50, 20, 35, 15, 25, 'Apprentice', 'Battlemage'), -- 54
    ('Conjurer', 20, 10, 25, 0, 40, 10, 20, 15, 25, 'Apprentice', 'Apprentice'), -- 55
    ('Pyromancer', 35, 20, 40, 5, 55, 30, 40, 30, 50, 'Apprentice', 'Conjurer'), -- 56
    ('Druid', 45, 35, 45, 15, 45, 25, 30, 25, 40, 'Apprentice', 'Conjurer'), -- 57
    -- Monster
    ('Monster', 20, 10, 10, 10, 10, 10, 10, 10, 10, 'Monster', 'None'), -- 58
    ('Vampire', 40, 20, 25, 25, 30, 20, 15, 10, 30, 'Monster', 'Monster'), -- 59
    ('Vampire Lord', 60, 35, 40, 50, 55, 40, 35, 30, 55, 'Monster', 'Vampire'), -- 60
    ('Undead', 30, 30, 15, 30, 15, 10, 20, 10, 20, 'Monster', 'Monster'), -- 61
    ('Lich', 30, 30, 55, 30, 60, 10, 40, 10, 60, 'Monster', 'Undead'), -- 62
    ('Great Lich', 30, 60, 80, 0, 80, 40, 60, 55, 65, 'Monster', 'Lich'), -- 63
    ('Necromancer', 35, 60, 80, 15, 80, 15, 60, 55, 65, 'Monster', 'Lich'), -- 64
    ('Squeleton', 50, 50, 20, 50, 20, 25, 45, 20, 30, 'Monster', 'Undead'), -- 65
    ('Oathbound', 75, 80, 55, 80, 25, 60, 60, 80, 30, 'Monster', 'Squeleton'), -- 66
    ('Specter', 30, 30, 45, 35, 35, 60, 55, 15, 25, 'Monster', 'Undead'), -- 67
    ('Voidling', 25, 20, 20, 25, 40, 25, 20, 20, 25, 'Monster', 'Monster'), -- 68
    ('Legion', 40, 45, 45, 55, 40, 30, 50, 20, 30, 'Monster', 'Voidling'), -- 69
    ('Voidmancer', 35, 30, 30, 35, 55, 45, 40, 35, 45, 'Monster', 'Voidling'), -- 70
    -- Demon
    ('Demon', 15, 10, 10, 15, 15, 5, 10, 0, 15, 'Demon', 'None'), -- 71
    ('Demon Lord', 30, 20, 35, 10, 40, 20, 25, 30, 40, 'Demon', 'Demon'), -- 72
    ('Supreme Demon', 40, 30, 50, 20, 60, 20, 35, 55, 60, 'Demon', 'Demon Lord'), -- 73
    ('True Demon', 55, 45, 60, 35, 40, 25, 30, 35, 40, 'Demon', 'Demon Lord'), -- 74
    ('Ancient Demon', 30, 30, 30, 40, 35, 35, 35, 15, 20, 'Demon', 'Demon'), -- 75
    ('Primordial Demon', 45, 30, 30, 50, 50, 45, 45, 30, 40, 'Demon', 'Ancient Demon'), -- 76
    ('Urgash', 60, 35, 35, 55, 45, 35, 40, 25, 35, 'Demon', 'Ancient Demon'), -- 77
    ('Pit Fiend', 25, 30, 25, 35, 20, 10, 25, 0, 30, 'Demon', 'Demon'), -- 78
    ('Pit Lord', 40, 50, 35, 40, 35, 20, 30, 5, 50, 'Demon', 'Pit Fiend'), -- 79
    ('Ravager', 55, 45, 40, 65, 20, 35, 40, 10, 35, 'Demon', 'Pit Fiend'), -- 80
    -- Beastman
    ('Beastman', 20, 20, 5, 25, 0, 15, 10, 0, 0, 'Beastman', 'None'), -- 81
    ('Wolfskin', 30, 25, 25, 40, 10, 15, 30, 10, 20, 'Beastman', 'Beastman'), -- 82
    ('Wolfssegner', 50, 40, 35, 60, 25, 30, 55, 20, 35, 'Beastman', 'Wolfskin'), -- 83
    ('Kitsune', 30, 20, 20, 30, 25, 30, 15, 20, 30, 'Beastman', 'Beastman'), -- 84
    ('Nine-Tails', 50, 35, 35, 55, 45, 50, 35, 40, 60, 'Beastman', 'Kitsune'), -- 85
    -- Drakeling
    ('Drakeling', 20, 10, 10, 10, 5, 5, 10, 10, 15, 'Drakeling', 'None'), -- 86
    ('Wrym', 30, 25, 25, 25, 30, 20, 25, 25, 40, 'Drakeling', 'Drakeling'), -- 87
    ('Dragon', 55, 40, 40, 50, 55, 25, 35, 25, 60, 'Drakeling', 'Wrym'), -- 88
    ('True Dragon', 200, 105, 120, 100, 150, 90, 100, 80, 150, 'Drakeling', 'Dragon') -- 89
;

-- Characters
CREATE TABLE IF NOT EXISTS Characters (
    character_id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    race TEXT NOT NULL,
    level INTEGER NOT NULL,

    -- Stats
    hp INTEGER NOT NULL,
    combat_hp INTEGER NOT NULL,
    hp_growth INTEGER NOT NULL,
    strength INTEGER NOT NULL,
    combat_strength INTEGER NOT NULL,
    strength_growth INTEGER NOT NULL,
    defense INTEGER NOT NULL,
    combat_defense INTEGER NOT NULL,
    defense_growth INTEGER NOT NULL,
    magic INTEGER NOT NULL,
    combat_magic INTEGER NOT NULL,
    magic_growth INTEGER NOT NULL,
    resistance INTEGER NOT NULL,
    combat_resistance INTEGER NOT NULL,
    resistance_growth INTEGER NOT NULL,
    speed INTEGER NOT NULL,
    combat_speed INTEGER NOT NULL,
    speed_growth INTEGER NOT NULL,
    skill INTEGER NOT NULL,
    combat_skill INTEGER NOT NULL,
    skill_growth INTEGER NOT NULL,
    luck INTEGER NOT NULL,
    combat_luck INTEGER NOT NULL,
    luck_growth INTEGER NOT NULL,
    mana INTEGER NOT NULL,
    combat_mana INTEGER NOT NULL,
    mana_growth INTEGER NOT NULL,
    
    -- Magic
    arcane_lvl INTEGER NOT NULL,
    illusion_lvl INTEGER NOT NULL,
    mind_lvl INTEGER NOT NULL,
    fire_lvl INTEGER NOT NULL,
    lava_lvl INTEGER NOT NULL,
    heat_lvl INTEGER NOT NULL,
    water_lvl INTEGER NOT NULL,
    liquid_lvl INTEGER NOT NULL,
    ice_lvl INTEGER NOT NULL,
    air_lvl INTEGER NOT NULL,
    lightning_lvl INTEGER NOT NULL,
    wind_lvl INTEGER NOT NULL,
    earth_lvl INTEGER NOT NULL,
    nature_lvl INTEGER NOT NULL,
    poison_lvl INTEGER NOT NULL,
    light_lvl INTEGER NOT NULL,
    holy_lvl INTEGER NOT NULL,
    space_lvl INTEGER NOT NULL,
    dark_lvl INTEGER NOT NULL,
    curse_lvl INTEGER NOT NULL,
    necromancy_lvl INTEGER NOT NULL,
    
    -- Weapon
    fist_lvl TEXT NOT NULL,
    sword_lvl TEXT NOT NULL,
    spear_lvl TEXT NOT NULL,
    axe_lvl TEXT NOT NULL,
    dagger_lvl TEXT NOT NULL,
    staff_lvl TEXT NOT NULL,
    bow_lvl TEXT NOT NULL,
    other_lvl TEXT NOT NULL,

    -- Rank
    stat_rk TEXT NOT NULL,
    magic_rk TEXT NOT NULL,
    spirit_rk TEXT NOT NULL,

    class_id INTEGER NOT NULL REFERENCES Classes(class_id),
    weapon_id INTEGER NOT NULL REFERENCES Weapons(weapon_id),
    armor_id INTEGER NOT NULL REFERENCES Armors(armor_id),
    user_id INTEGER NOT NULL REFERENCES Users(user_id),
    img TEXT NOT NULL
);

-- Character Types
CREATE TABLE IF NOT EXISTS CharacterTypes (
    character_id INTEGER REFERENCES Characters(character_id),
    type_id INTEGER REFERENCES Types(type_id),
    PRIMARY KEY(character_id, type_id)
);

-- Character Status
CREATE TABLE IF NOT EXISTS CharacterStatus(
    character_id INTEGER REFERENCES Characters(character_id),
    status_id INTEGER REFERENCES Status(status_id),
    PRIMARY KEY(character_id, status_id)
);

-- Character Skills
CREATE TABLE IF NOT EXISTS CharacterSkills (
    character_id INTEGER REFERENCES Characters(character_id),
    skill_id INTEGER REFERENCES Skills(skill_id),
    PRIMARY KEY(character_id, skill_id)
);

-- Character Passives
CREATE TABLE IF NOT EXISTS CharacterPassives (
    character_id INTEGER REFERENCES Characters(character_id),
    passive_id INTEGER REFERENCES Passives(passive_id),
    PRIMARY KEY(character_id, passive_id)
);

-- Character Users
CREATE TABLE IF NOT EXISTS CharacterUsers (
    character_id INTEGER REFERENCES Characters(character_id),
    user_id INTEGER REFERENCES Users(user_id),
    PRIMARY KEY(character_id, user_id)
);

-- Armor Passives
CREATE TABLE IF NOT EXISTS ArmorPassives (
    armor_id INTEGER REFERENCES Armors(armor_id),
    passive_id INTEGER REFERENCES Passives(passive_id),
    PRIMARY KEY(armor_id, passive_id)
);
INSERT INTO ArmorPassives(armor_id, passive_id)
VALUES
    (2, 178),
    (3, 192),
    (4, 179),
    (4, 188),
    (5, 182),
    (6, 184),
    (6, 198),
    (7, 184),
    (7, 190),
    (7, 200)
;

-- Weapon Passives
CREATE TABLE IF NOT EXISTS WeaponPassives (
    weapon_id INTEGER REFERENCES Weapons(weapon_id),
    passive_id INTEGER REFERENCES Passives(passive_id),
    PRIMARY KEY(weapon_id, passive_id)
);
INSERT INTO WeaponPassives(weapon_id, passive_id)
VALUES
    (1, 301),
    (2, 300),
    (2, 301),
    (3, 301),
    (4, 301),
    (5, 279),
    (5, 301),
    (6, 301),
    (7, 247),
    (7, 301),
    (8, 248),
    (8, 301),
    (9, 301),
    (10, 300),
    (13, 279),
    (15, 247),
    (15, 257),
    (16, 260),
    (17, 286),
    (18, 290),
    (19, 301),
    (20, 302),
    (22, 301),
    (23, 288),
    (23, 290),
    (24, 296),
    (25, 299),
    (26, 300),
    (29, 279),
    (34, 288),
    (35, 301),
    (36, 293),
    (36, 294),
    (36, 295),
    (37, 210),
    (38, 290),
    (41, 300),
    (44, 279),
    (48, 286),
    (49, 286),
    (51, 301),
    (52, 290),
    (53, 210),
    (54, 220),
    (54, 240),
    (55, 247),
    (55, 300),
    (56, 248),
    (57, 249),
    (58, 249),
    (58, 279),
    (59, 250),
    (60, 248),
    (61, 249),
    (62, 248),
    (62, 258),
    (63, 249),
    (64, 250),
    (64, 301),
    (65, 251),
    (65, 295),
    (66, 250),
    (66, 286),
    (67, 207),
    (67, 249),
    (68, 255),
    (68, 293),
    (69, 300),
    (69, 302),
    (70, 302),
    (71, 279),
    (71, 302),
    (72, 285),
    (72, 302),
    (73, 257),
    (73, 300),
    (74, 257),
    (75, 257),
    (76, 257),
    (76, 279),
    (77, 257),
    (79, 257),
    (80, 257),
    (81, 257),
    (82, 257),
    (82, 301),
    (83, 257),
    (84, 257),
    (84, 302),
    (85, 265),
    (86, 249),
    (87, 209),
    (88, 252),
    (89, 212),
    (90, 260),
    (91, 265),
    (92, 292),
    (92, 293),
    (92, 294)
;

-- Skill Passives
CREATE TABLE IF NOT EXISTS SkillPassives (
    skill_id INTEGER REFERENCES Skills(skill_id),
    passive_id INTEGER REFERENCES Passives(passive_id),
    PRIMARY KEY(skill_id, passive_id)
);

-- Class Passives
CREATE TABLE IF NOT EXISTS ClassPassives (
    class_id INTEGER REFERENCES Classes(class_id),
    passive_id INTEGER REFERENCES Passives(passive_id),
    PRIMARY KEY(class_id, passive_id)
);
INSERT INTO ClassPassives(class_id, passive_id)
VALUES
    (1, 1),
    (1, 2),
    (2, 3),
    (2, 4),
    (3, 5),
    (3, 6),
    (4, 7),
    (4, 8),
    (5, 9),
    (5, 10),
    (6, 11),
    (6, 12),
    (7, 13),
    (7, 14),
    (8, 15),
    (8, 16),
    (9, 17),
    (9, 18),
    (10, 19),
    (10, 20),
    (11, 21),
    (11, 22),
    (12, 23),
    (12, 24),
    (13, 25),
    (13, 26),
    (14, 27),
    (14, 28),
    (15, 29),
    (15, 30),
    (16, 14),
    (16, 31),
    (17, 32),
    (17, 33),
    (18, 34),
    (18, 35),
    (19, 36),
    (19, 37),
    (20, 38),
    (20, 39),
    (21, 40),
    (21, 41),
    (22, 42),
    (22, 43),
    (23, 44),
    (23, 45),
    (24, 46),
    (24, 47),
    (25, 48),
    (25, 49),
    (26, 50),
    (26, 51),
    (27, 52),
    (27, 53),
    (28, 54),
    (28, 55),
    (29, 56),
    (29, 57),
    (30, 58),
    (30, 59),
    (31, 60),
    (31, 61),
    (32, 62),
    (32, 63),
    (33, 64),
    (33, 65),
    (34, 66),
    (34, 67),
    (35, 68),
    (35, 69),
    (36, 70),
    (36, 71),
    (37, 72),
    (37, 73),
    (38, 74),
    (38, 75),
    (39, 76),
    (39, 77),
    (40, 78),
    (40, 79),
    (41, 80),
    (41, 81),
    (42, 82),
    (42, 83),
    (43, 84),
    (43, 85),
    (44, 86),
    (44, 87),
    (45, 88),
    (45, 89),
    (46, 90),
    (46, 91),
    (47, 92),
    (47, 93),
    (48, 94),
    (48, 95),
    (49, 96),
    (49, 97),
    (50, 98),
    (50, 99),
    (51, 100),
    (51, 101),
    (52, 102),
    (52, 103),
    (53, 104),
    (53, 105),
    (54, 106),
    (54, 107),
    (55, 108),
    (55, 109),
    (56, 110),
    (56, 111),
    (57, 112),
    (57, 113),
    (58, 114),
    (58, 115),
    (59, 116),
    (59, 117),
    (60, 118),
    (60, 119),
    (61, 120),
    (61, 121),
    (62, 122),
    (62, 123),
    (63, 124),
    (63, 125),
    (64, 126),
    (64, 127),
    (65, 128),
    (65, 129),
    (66, 130),
    (66, 131),
    (67, 132),
    (67, 133),
    (68, 134),
    (68, 135),
    (69, 136),
    (69, 137),
    (70, 138),
    (70, 139),
    (71, 140),
    (71, 141),
    (72, 142),
    (72, 143),
    (73, 144),
    (73, 145),
    (74, 146),
    (74, 147),
    (75, 148),
    (75, 149),
    (76, 150),
    (76, 151),
    (77, 152),
    (77, 153),
    (78, 154),
    (78, 155),
    (79, 156),
    (79, 157),
    (80, 158),
    (80, 159),
    (81, 160),
    (81, 161),
    (82, 162),
    (82, 163),
    (83, 164),
    (83, 165),
    (84, 166),
    (84, 163),
    (85, 167),
    (85, 165),
    (86, 168),
    (86, 169),
    (87, 170),
    (87, 171),
    (88, 172),
    (88, 173),
    (89, 174),
    (89, 175)
;