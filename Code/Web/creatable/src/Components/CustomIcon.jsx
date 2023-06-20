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
    GiVineLeaf
} from 'react-icons/gi'

const CustomIcon = ({ type, isize }) => {
    const [ricon, setRicon] = useState(<></>)

    useEffect(() => {
        console.log(type)
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

            default:
                setRicon(<></>)
                break
        }
    }, [type])

    return (<>{ ricon }</>)
}

export default CustomIcon