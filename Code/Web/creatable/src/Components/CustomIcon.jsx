import React, { useState, useEffect } from "react"
import {
    GiBroadsword,
    GiBroadDagger,
    GiBatteredAxe,
    GiStoneSpear,
    GiFist,
    GiPocketBow,
    GiWizardStaff,
    GiClawSlashes,
    GiFireBottle,
    GiFire,
    GiFireRing,
    GiWaterSplash,
    GiWaterDrop,
    GiIceBolt,
    GiWhirlwind,
    GiWindSlap,
    GiFocusedLightning,
    GiRockGolem,
    GiPoisonGas,
    GiHolySymbol,
    GiCandleLight,
    GiEnlightenment,
    GiWizardFace,
    GiEyeball,
    GiPolarStar,
    GiCrownedSkull,
    GiDelighted,
    GiDeathNote,
    GiVineLeaf,
    GiSpinningSword,
    GiPentacle,
    GiTripleYin,
    GiBeastEye,
    GiHeartburn,
    GiBleedingHeart,
    GiColdHeart,
    GiHeartDrop,
    GiHeartBattery,
    GiMineralHeart,
    GiPoisonBottle,
    GiHealthDecrease,
    GiHealthIncrease,
    GiHeartPlus,
    GiFragmentedSword,
    GiShatteredSword,
    GiShatteredHeart,
    GiPointySword,
    GiWingedSword,
    GiCrackedShield,
    GiBrokenShield,
    GiCheckedShield,
    GiCrenulatedShield,
    GiCrossShield,
    GiDragonShield,
    GiShieldReflect,
    GiShieldImpact,
    GiMagicPalm,
    GiMagicSwirl,
    GiMagicGate,
    GiMagicShield,
    GiRun,
    GiRunningNinja,
    GiStickyBoot,
    GiWalkingBoot,
    GiDiceTwentyFacesTwenty,
    GiDiceTwentyFacesOne,
    GiDiceSixFacesOne,
    GiDiceSixFacesSix,
    GiFarmer,
    GiPikeman,
    GiDragonHead,
    GiFishMonster,
    GiHighShot,
    GiDoubleShot,
    GiBrokenArrow,
    GiBrokenAxe,
    GiOctogonalEye,
    GiHolyGrail,
    GiAngelWings,
    GiHorseHead,
    GiChestArmor,
    GiWerewolf,
    GiWolfHead,
    GiSkullMask,
    GiWyvern,
    GiWitchFace,
    GiMonkFace
} from 'react-icons/gi'

const CustomIcon = ({ type, isize }) => {
    const [ricon, setRicon] = useState(<></>)

    useEffect(() => {
        switch (type) {
            case 'Fist':
                setRicon(<GiFist size={ isize } />)
                break
            case 'Sword':
                setRicon(<GiBroadsword size={ isize } />)
                break
            case 'Spear':
                setRicon(<GiStoneSpear size={ isize } />)
                break
            case 'Axe':
                setRicon(<GiBatteredAxe size={ isize } />)
                break
            case 'Dagger':
                setRicon(<GiBroadDagger size={ isize } />)
                break
            case 'Bow':
                setRicon(<GiPocketBow size={ isize } />)
                break
            case 'Staff':
                setRicon(<GiWizardStaff size={ isize } />)
                break
            case 'Other':
                setRicon(<GiClawSlashes size={ isize } />)
                break

            case 'Arcane':
                setRicon(<GiEnlightenment size={ isize } />)
                break
            case 'Illusion':
                setRicon(<GiEyeball size={ isize } />)
                break
            case 'Mind':
                setRicon(<GiWizardFace size={ isize } />)
                break
            case 'Fire':
                setRicon(<GiFire size={ isize } />)
                break
            case 'Heat':
                setRicon(<GiFireRing size={ isize } />)
                break
            case 'Lava':
                setRicon(<GiFireBottle size={ isize } />)
                break
            case 'Water':
                setRicon(<GiWaterSplash size={ isize } />)
                break
            case 'Liquid':
                setRicon(<GiWaterDrop size={ isize } />)
                break
            case 'Ice':
                setRicon(<GiIceBolt size={ isize } />)
                break
            case 'Air':
                setRicon(<GiWindSlap size={ isize } />)
                break
            case 'Wind':
                setRicon(<GiWhirlwind size={ isize } />)
                break
            case 'Lightning':
                setRicon(<GiFocusedLightning size={ isize } />)
                break
            case 'Earth':
                setRicon(<GiRockGolem size={ isize } />)
                break
            case 'Nature':
                setRicon(<GiVineLeaf size={ isize } />)
                break
            case 'Poison':
                setRicon(<GiPoisonGas size={ isize } />)
                break
            case 'Light':
                setRicon(<GiCandleLight size={ isize } />)
                break
            case 'Holy':
                setRicon(<GiHolySymbol size={ isize } />)
                break
            case 'Space':
                setRicon(<GiPolarStar size={ isize } />)
                break
            case 'Dark':
                setRicon(<GiDeathNote size={ isize } />)
                break
            case 'Curse':
                setRicon(<GiDelighted size={ isize } />)
                break
            case 'Necromancy':
                setRicon(<GiCrownedSkull size={ isize } />)
                break

            case 'Physical':
                setRicon(<GiSpinningSword size={ isize } />)
                break
            case 'Corrupted_Holy':
                setRicon(<GiPentacle size={ isize } />)
                break
            case 'Chaos':
                setRicon(<GiBeastEye size={ isize } />)
                break
            case 'Void':
                setRicon(<GiTripleYin size={ isize } />)
                break

            case 'Burned':
                setRicon(<GiHeartburn size={ isize } />)
                break
            case 'Paralyzed':
                setRicon(<GiHeartBattery size={ isize } />)
                break
            case 'Freeze':
                setRicon(<GiColdHeart size={ isize } />)
                break            
            case 'Wet':
                setRicon(<GiHeartDrop size={ isize } />)
                break
            case 'Poison':
                setRicon(<GiPoisonBottle size={ isize } />)
                break
            case 'Petrified':
                setRicon(<GiMineralHeart size={ isize } />)
                break
            case 'Bleeding':
                setRicon(<GiBleedingHeart size={ isize } />)
                break
            case 'Curse_HP':
                setRicon(<GiHealthDecrease size={ isize } />)
                break
            case 'Great_Curse_HP':
                setRicon(<GiShatteredHeart size={ isize } />)
                break                
            case 'Curse_Strength':
                setRicon(<GiFragmentedSword size={ isize } />)
                break
            case 'Great_Curse_Strength':
                setRicon(<GiShatteredSword isize={ isize } />)
                break
            case 'Curse_Defense':
                setRicon(<GiCrackedShield size={ isize } />)
                break                    
            case 'Great_Curse_Defense':
                setRicon(<GiBrokenShield size={ isize } />)
                break
            case 'Curse_Magic':
                setRicon(<GiMagicPalm size={ isize } />)
                break
            case 'Great_Curse_Magic':
                setRicon(<GiMagicShield size={ isize } />)
                break                
            case 'Curse_Resistance':
                setRicon(<GiShieldReflect size={ isize } />)
                break
            case 'Great_Curse_Resistance':
                setRicon(<GiShieldImpact size={ isize } />)
                break
            case 'Curse_Speed':
                setRicon(<GiWalkingBoot size={ isize } />)
                break                    
            case 'Great_Curse_Speed':
                setRicon(<GiStickyBoot size={ isize } />)
                break
            case 'Curse_Skill':
                setRicon(<GiBrokenArrow size={ isize } />)
                break
            case 'Great_Curse_Skill':
                setRicon(<GiBrokenAxe size={ isize } />)
                break
            case 'Curse_Luck':
                setRicon(<GiDiceSixFacesOne size={ isize } />)
                break
            case 'Great_Curse_Luck':
                setRicon(<GiDiceTwentyFacesOne size={ isize } />)
                break
            case 'Curse_Mana':
                setRicon(<GiPikeman size={ isize } />)
                break                    
            case 'Great_Curse_Mana':
                setRicon(<GiFarmer size={ isize } />)
                break
            case 'Bless_HP':
                setRicon(<GiHealthIncrease size={ isize } />)
                break
            case 'Great_Bless_HP':
                setRicon(<GiHeartPlus size={ isize } />)
                break                
            case 'Bless_Strength':
                setRicon(<GiPointySword size={ isize } />)
                break
            case 'Great_Bless_Strength':
                setRicon(<GiWingedSword size={ isize } />)
                break
            case 'Bless_Defense':
                setRicon(<GiCheckedShield size={ isize } />)
                break                    
            case 'Great_Bless__Defense':
                setRicon(<GiCrenulatedShield size={ isize } />)
                break
            case 'Bless_Magic':
                setRicon(<GiMagicSwirl size={ isize } />)
                break
            case 'Great_Bless_Magic':
                setRicon(<GiMagicGate size={ isize } />)
                break
            case 'Bless_Resistance':
                setRicon(<GiCrossShield size={ isize } />)
                break                    
            case 'Great_Bless_Resistance':
                setRicon(<GiDragonShield size={ isize } />)
                break
            case 'Bless_Speed':
                setRicon(<GiRun size={ isize } />)
                break
            case 'Great_Bless_Speed':
                setRicon(<GiRunningNinja size={ isize } />)
                break                
            case 'Bless_Skill':
                setRicon(<GiHighShot size={ isize } />)
                break
            case 'Great_Bless_Skill':
                setRicon(<GiDoubleShot size={ isize } />)
                break
            case 'Bless_Luck':
                setRicon(<GiDiceSixFacesSix size={ isize } />)
                break
            case 'Great_Bless_Luck':
                setRicon(<GiDiceTwentyFacesTwenty size={ isize } />)
                break
            case 'Bless_Mana':
                setRicon(<GiFishMonster size={ isize } />)
                break
            case 'Great_Bless_Mana':
                setRicon(<GiDragonHead size={ isize } />)
                break
            case 'Spirit_Limit':
                setRicon(<GiOctogonalEye size={ isize } />)
                break

            case 'Humanoid':
                setRicon(<GiMonkFace size={ isize } />)
                break
            case 'Demonoid':
                setRicon(<GiWitchFace size={ isize } />)
                break
            case 'Undead':
                setRicon(<GiSkullMask size={ isize } />)
                break
            case 'Monster':
                setRicon(<GiWerewolf size={ isize } />)
                break
            case 'Dragonoid':
                setRicon(<GiWyvern size={ isize } />)
                break
            case 'Beast':
                setRicon(<GiWolfHead size={ isize } />)
                break
            case 'Armored':
                setRicon(<GiChestArmor size={ isize } />)
                break
            case 'Mounted':
                setRicon(<GiHorseHead size={ isize } />)
                break
            case 'Flying':
                setRicon(<GiAngelWings size={ isize } />)
                break
            case 'Religious':
                setRicon(<GiHolyGrail size={ isize } />)
                break

            default:
                setRicon(<></>)
                break
        }
    }, [type])

    return (<>{ ricon }</>)
}

export default CustomIcon