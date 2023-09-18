import React, { useState, useEffect } from 'react'
import { 
    Box,
    Text,
    useColorModeValue,
    Image,
    Flex,
    HStack,
    VStack,
    IconButton,
    Center,
    Divider,
    SimpleGrid,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverCloseButton,
    PopoverBody,
    PopoverArrow
} from '@chakra-ui/react'
import { 
    ArrowUpIcon, 
    SmallCloseIcon, 
    ArrowLeftIcon, 
    ArrowRightIcon, 
    SettingsIcon 
} from '@chakra-ui/icons'
import CustomBar from '../../Components/CustomBar'
import CustomIcon from '../../Components/CustomIcon'
import {
    GiCampfire
} from 'react-icons/gi'

const CharacterDetail = ({ data, onChangeCharacter, callRest, callLevelUp, deleteCharacter }) => {
    let gdata = require('../../data.json')
    let backgroundColor = useColorModeValue(gdata.colors[0].basicbackgroundcolor, gdata.colors[1].basicbackgroundcolor)
    let sbackgroundColor = useColorModeValue(gdata.colors[0].darkerbackgroundcolor1, gdata.colors[1].darkerbackgroundcolor1)
    let inputBackgroundColor = useColorModeValue(gdata.colors[0].darkerbackgroundcolor2, gdata.colors[1].darkerbackgroundcolor2)
    let inputBorderColor = useColorModeValue(gdata.colors[0].darkestbackgroundcolor, gdata.colors[1].darkestbackgroundcolor)
    let textColor = useColorModeValue(gdata.colors[0].textcolor, gdata.colors[1].textcolor)
    let alternateTextColor = useColorModeValue(gdata.colors[0].textalternatecolor1, gdata.colors[1].textalternatecolor1)

    const [state, setState] = useState(0)
    const addState = () => {
        if (state === 7)
            setState(0)
        else
            setState(state+1)
    }
    const removeState = () => {
        if (state === 0)
            setState(7)
        else
            setState(state-1)
    }
    const [stateMessage] = useState([
        'general',
        'stats',
        'magic',
        'weapons',
        'ranks',
        'items',
        'passives',
        'skills'
    ])

    const [id, setId] = useState(0)
    const [name, setName] = useState('')
    const [level, setLevel] = useState(0)
    const [classe, setClasse] = useState([])
    const [race, setRace] = useState('')
    const [img, setImg] = useState('')
    const [stats, setStats] = useState([])
    const [weaponRank, setWeaponRank] = useState([])
    const [magic, setMagic] = useState([])
    const [types, setTypes] = useState([])
    const [status, setStatus] = useState([])
    const [ranks, setRanks] = useState([])
    const [passives, setPassives] = useState([])
    const [skills, setSkills] = useState([])
    const [weapon, setWeapon] = useState([])
    const [armor, setArmor] = useState([])

    const getWeaponRank = (name) => {
        switch (name) {
            case 'E':
                return 1
            case 'D':
                return 2
            case 'C':
                return 3
            case 'B':
                return 4
            case 'A':
                return 5
            case 'S':
                return 6
        }
    }
    const getRank = (name) => {
        switch (name) {
            case 'Basic':
                return 1
            case 'Expert':
                return 2
            case 'Sage':
                return 3
            case 'Dragon':
                return 4
            case 'God':
                return 5
        }
    }

    const clickTypes = () => {
        let string_types = ""
        types.map(type => {
            if (string_types.length === 0)
                string_types = type.id
            else
                string_types += ";"+type.id
        })

        fetch(gdata.api_url + 'type/get', {
            method: 'GET',
            mode: 'cors',
            cache: 'default',
            redirect: 'manual',
            headers: {
                'Authorization': localStorage.getItem('token_auth')
            }
        }).then(response => {
            response.json().then(item => {
                const return_value = [
                    {
                        name: 'types',
                        type: 'multi-select',
                        actual: '-- Add a type --',
                        value: string_types,
                        data: item,
                        hasError: false,
                        errors: [
                            {
                                name: 'MULTI_SELECT_NULL',
                                message: 'Minimum 1 type must be selected.',
                                status: false
                            }
                        ]
                    }
                ]
                onChangeCharacter(id, return_value)
            })
        })
    }
    const clickStatus = () => {
        let string_status = ""
        status.map(element => {
            if (string_status.length === 0)
                string_status = element.id
            else
                string_status += ";"+element.id
        })

        fetch(gdata.api_url + 'status/get', {
            method: 'GET',
            mode: 'cors',
            cache: 'default',
            redirect: 'manual',
            headers: {
                'Authorization': localStorage.getItem('token_auth')
            }
        }).then(response => {
            response.json().then(item => {
                const return_value = [
                    {
                        name: 'status',
                        type: 'multi-select',
                        actual: '-- Add a status --',
                        value: string_status,
                        data: item,
                        hasError: false,
                        errors: []
                    }
                ]
                onChangeCharacter(id, return_value)
            })
        })
    }
    const clickStats = () => {
        const return_value = [
            {
                name: 'HP',
                type: 'number',
                value: stats.hp,
                min: 0,
                max: 1000,
                hasError: false,
                errors: [
                    {
                        name: 'NUMBER_NULL',
                        message: 'The HP cannot be null.',
                        status: false
                    }
                ]
            },
            {
                name: 'HP Growth',
                type: 'number',
                value: stats.hp_growth,
                min: 0,
                max: 1000,
                hasError: false,
                errors: [
                    {
                        name: 'NUMBER_NULL',
                        message: 'The HP Growth cannot be null.',
                        status: false
                    }
                ]
            },
            {
                name: 'Strength',
                type: 'number',
                value: stats.strength,
                min: 0,
                max: 1000,
                hasError: false,
                errors: [
                    {
                        name: 'NUMBER_NULL',
                        message: 'The Strength cannot be null.',
                        status: false
                    }
                ]
            },
            {
                name: 'Strength Growth',
                type: 'number',
                value: stats.strength_growth,
                min: 0,
                max: 1000,
                hasError: false,
                errors: [
                    {
                        name: 'NUMBER_NULL',
                        message: 'The Strength Growth cannot be null.',
                        status: false
                    }
                ]
            },
            {
                name: 'Defense',
                type: 'number',
                value: stats.defense,
                min: 0,
                max: 1000,
                hasError: false,
                errors: [
                    {
                        name: 'NUMBER_NULL',
                        message: 'The Defense cannot be null.',
                        status: false
                    }
                ]
            },
            {
                name: 'Defense Growth',
                type: 'number',
                value: stats.defense_growth,
                min: 0,
                max: 1000,
                hasError: false,
                errors: [
                    {
                        name: 'NUMBER_NULL',
                        message: 'The Defense Growth cannot be null.',
                        status: false
                    }
                ]
            },
            {
                name: 'Magic',
                type: 'number',
                value: stats.magic,
                min: 0,
                max: 1000,
                hasError: false,
                errors: [
                    {
                        name: 'NUMBER_NULL',
                        message: 'The Magic cannot be null.',
                        status: false
                    }
                ]
            },
            {
                name: 'Magic Growth',
                type: 'number',
                value: stats.magic_growth,
                min: 0,
                max: 1000,
                hasError: false,
                errors: [
                    {
                        name: 'NUMBER_NULL',
                        message: 'The Magic Growth cannot be null.',
                        status: false
                    }
                ]
            },
            {
                name: 'Resistance',
                type: 'number',
                value: stats.resistance,
                min: 0,
                max: 1000,
                hasError: false,
                errors: [
                    {
                        name: 'NUMBER_NULL',
                        message: 'The Resistance cannot be null.',
                        status: false
                    }
                ]
            },
            {
                name: 'Resistance Growth',
                type: 'number',
                value: stats.resistance_growth,
                min: 0,
                max: 1000,
                hasError: false,
                errors: [
                    {
                        name: 'NUMBER_NULL',
                        message: 'The Resistance Growth cannot be null.',
                        status: false
                    }
                ]
            },
            {
                name: 'Speed',
                type: 'number',
                value: stats.speed,
                min: 0,
                max: 1000,
                hasError: false,
                errors: [
                    {
                        name: 'NUMBER_NULL',
                        message: 'The Speed cannot be null.',
                        status: false
                    }
                ]
            },
            {
                name: 'Speed Growth',
                type: 'number',
                value: stats.speed_growth,
                min: 0,
                max: 1000,
                hasError: false,
                errors: [
                    {
                        name: 'NUMBER_NULL',
                        message: 'The Speed Growth cannot be null.',
                        status: false
                    }
                ]
            },
            {
                name: 'Skill',
                type: 'number',
                value: stats.skill,
                min: 0,
                max: 1000,
                hasError: false,
                errors: [
                    {
                        name: 'NUMBER_NULL',
                        message: 'The Skill cannot be null.',
                        status: false
                    }
                ]
            },
            {
                name: 'Skill Growth',
                type: 'number',
                value: stats.skill_growth,
                min: 0,
                max: 1000,
                hasError: false,
                errors: [
                    {
                        name: 'NUMBER_NULL',
                        message: 'The Skill Growth cannot be null.',
                        status: false
                    }
                ]
            },
            {
                name: 'Luck',
                type: 'number',
                value: stats.luck,
                min: 0,
                max: 1000,
                hasError: false,
                errors: [
                    {
                        name: 'NUMBER_NULL',
                        message: 'The Luck cannot be null.',
                        status: false
                    }
                ]
            },
            {
                name: 'Luck Growth',
                type: 'number',
                value: stats.luck_growth,
                min: 0,
                max: 1000,
                hasError: false,
                errors: [
                    {
                        name: 'NUMBER_NULL',
                        message: 'The Luck Growth cannot be null.',
                        status: false
                    }
                ]
            },
            {
                name: 'Mana',
                type: 'number',
                value: stats.mana,
                min: 0,
                max: 1000,
                hasError: false,
                errors: [
                    {
                        name: 'NUMBER_NULL',
                        message: 'The Mana cannot be null.',
                        status: false
                    }
                ]
            },
            {
                name: 'Mana Growth',
                type: 'number',
                value: stats.mana_growth,
                min: 0,
                max: 1000,
                hasError: false,
                errors: [
                    {
                        name: 'NUMBER_NULL',
                        message: 'The Mana Growth cannot be null.',
                        status: false
                    }
                ]
            },
        ]
        onChangeCharacter(id, return_value)
    }
    const clickMagic = () => {
        const return_value = [
            {
                name: 'Arcane',
                type: 'number',
                value: magic.arcane_lvl,
                min: 0,
                max: 1000,
                hasError: false,
                errors: [
                    {
                        name: 'NUMBER_NULL',
                        message: 'The Arcane cannot be null.',
                        status: false
                    }
                ]
            },
            {
                name: 'Illusion',
                type: 'number',
                value: magic.illusion_lvl,
                min: 0,
                max: 1000,
                hasError: false,
                errors: [
                    {
                        name: 'NUMBER_NULL',
                        message: 'The Illusion cannot be null.',
                        status: false
                    }
                ]
            },
            {
                name: 'Mind',
                type: 'number',
                value: magic.mind_lvl,
                min: 0,
                max: 1000,
                hasError: false,
                errors: [
                    {
                        name: 'NUMBER_NULL',
                        message: 'The Mind cannot be null.',
                        status: false
                    }
                ]
            },
            {
                name: 'Fire',
                type: 'number',
                value: magic.fire_lvl,
                min: 0,
                max: 1000,
                hasError: false,
                errors: [
                    {
                        name: 'NUMBER_NULL',
                        message: 'The Fire cannot be null.',
                        status: false
                    }
                ]
            },
            {
                name: 'Heat',
                type: 'number',
                value: magic.heat_lvl,
                min: 0,
                max: 1000,
                hasError: false,
                errors: [
                    {
                        name: 'NUMBER_NULL',
                        message: 'The Heat cannot be null.',
                        status: false
                    }
                ]
            },
            {
                name: 'Lava',
                type: 'number',
                value: magic.lava_lvl,
                min: 0,
                max: 1000,
                hasError: false,
                errors: [
                    {
                        name: 'NUMBER_NULL',
                        message: 'The Lava cannot be null.',
                        status: false
                    }
                ]
            },
            {
                name: 'Water',
                type: 'number',
                value: magic.water_lvl,
                min: 0,
                max: 1000,
                hasError: false,
                errors: [
                    {
                        name: 'NUMBER_NULL',
                        message: 'The Water cannot be null.',
                        status: false
                    }
                ]
            },
            {
                name: 'Liquid',
                type: 'number',
                value: magic.liquid_lvl,
                min: 0,
                max: 1000,
                hasError: false,
                errors: [
                    {
                        name: 'NUMBER_NULL',
                        message: 'The Liquid cannot be null.',
                        status: false
                    }
                ]
            },
            {
                name: 'Ice',
                type: 'number',
                value: magic.ice_lvl,
                min: 0,
                max: 1000,
                hasError: false,
                errors: [
                    {
                        name: 'NUMBER_NULL',
                        message: 'The Ice cannot be null.',
                        status: false
                    }
                ]
            },
            {
                name: 'Air',
                type: 'number',
                value: magic.air_lvl,
                min: 0,
                max: 1000,
                hasError: false,
                errors: [
                    {
                        name: 'NUMBER_NULL',
                        message: 'The Air cannot be null.',
                        status: false
                    }
                ]
            },
            {
                name: 'Wind',
                type: 'number',
                value: magic.wind_lvl,
                min: 0,
                max: 1000,
                hasError: false,
                errors: [
                    {
                        name: 'NUMBER_NULL',
                        message: 'The Wind cannot be null.',
                        status: false
                    }
                ]
            },
            {
                name: 'Lightning',
                type: 'number',
                value: magic.lightning_lvl,
                min: 0,
                max: 1000,
                hasError: false,
                errors: [
                    {
                        name: 'NUMBER_NULL',
                        message: 'The Lightning cannot be null.',
                        status: false
                    }
                ]
            },
            {
                name: 'Earth',
                type: 'number',
                value: magic.earth_lvl,
                min: 0,
                max: 1000,
                hasError: false,
                errors: [
                    {
                        name: 'NUMBER_NULL',
                        message: 'The Earth cannot be null.',
                        status: false
                    }
                ]
            },
            {
                name: 'Nature',
                type: 'number',
                value: magic.nature_lvl,
                min: 0,
                max: 1000,
                hasError: false,
                errors: [
                    {
                        name: 'NUMBER_NULL',
                        message: 'The Nature cannot be null.',
                        status: false
                    }
                ]
            },
            {
                name: 'Poison',
                type: 'number',
                value: magic.poison_lvl,
                min: 0,
                max: 1000,
                hasError: false,
                errors: [
                    {
                        name: 'NUMBER_NULL',
                        message: 'The Poison cannot be null.',
                        status: false
                    }
                ]
            },
            {
                name: 'Light',
                type: 'number',
                value: magic.light_lvl,
                min: 0,
                max: 1000,
                hasError: false,
                errors: [
                    {
                        name: 'NUMBER_NULL',
                        message: 'The Light cannot be null.',
                        status: false
                    }
                ]
            },
            {
                name: 'Holy',
                type: 'number',
                value: magic.holy_lvl,
                min: 0,
                max: 1000,
                hasError: false,
                errors: [
                    {
                        name: 'NUMBER_NULL',
                        message: 'The Holy cannot be null.',
                        status: false
                    }
                ]
            },
            {
                name: 'Space',
                type: 'number',
                value: magic.space_lvl,
                min: 0,
                max: 1000,
                hasError: false,
                errors: [
                    {
                        name: 'NUMBER_NULL',
                        message: 'The Space cannot be null.',
                        status: false
                    }
                ]
            },
            {
                name: 'Dark',
                type: 'number',
                value: magic.dark_lvl,
                min: 0,
                max: 1000,
                hasError: false,
                errors: [
                    {
                        name: 'NUMBER_NULL',
                        message: 'The Dark cannot be null.',
                        status: false
                    }
                ]
            },
            {
                name: 'Curse',
                type: 'number',
                value: magic.curse_lvl,
                min: 0,
                max: 1000,
                hasError: false,
                errors: [
                    {
                        name: 'NUMBER_NULL',
                        message: 'The Curse cannot be null.',
                        status: false
                    }
                ]
            },
            {
                name: 'Necromancy',
                type: 'number',
                value: magic.necromancy_lvl,
                min: 0,
                max: 1000,
                hasError: false,
                errors: [
                    {
                        name: 'NUMBER_NULL',
                        message: 'The Necromancy cannot be null.',
                        status: false
                    }
                ]
            },
        ]
        onChangeCharacter(id, return_value)
    }
    const clickWeapon = () => {
        const return_value = [
            {
                name: 'Sword',
                type: 'select',
                actual: '-- Select a sword rank --',
                value: getWeaponRank(weaponRank.sword_lvl),
                data: [
                    {
                        id: 1,
                        value: 'E'
                    },
                    {
                        id: 2,
                        value: 'D'
                    },
                    {
                        id: 3,
                        value: 'C'
                    },
                    {
                        id: 4,
                        value: 'B'
                    },
                    {
                        id: 5,
                        value: 'A'
                    },
                    {
                        id: 6,
                        value: 'S'
                    }
                ],
                hasError: false,
                errors: [
                    {
                        name: 'SELECT_NULL',
                        message: 'The Sword cannot be null.',
                        status: false
                    }
                ]
            },
            {
                name: 'Spear',
                type: 'select',
                actual: '-- Select a spear rank --',
                value: getWeaponRank(weaponRank.spear_lvl),
                data: [
                    {
                        id: 1,
                        value: 'E'
                    },
                    {
                        id: 2,
                        value: 'D'
                    },
                    {
                        id: 3,
                        value: 'C'
                    },
                    {
                        id: 4,
                        value: 'B'
                    },
                    {
                        id: 5,
                        value: 'A'
                    },
                    {
                        id: 6,
                        value: 'S'
                    }
                ],
                hasError: false,
                errors: [
                    {
                        name: 'SELECT_NULL',
                        message: 'The Spear cannot be null.',
                        status: false
                    }
                ]
            },
            {
                name: 'Axe',
                type: 'select',
                actual: '-- Select a axe rank --',
                value: getWeaponRank(weaponRank.axe_lvl),
                data: [
                    {
                        id: 1,
                        value: 'E'
                    },
                    {
                        id: 2,
                        value: 'D'
                    },
                    {
                        id: 3,
                        value: 'C'
                    },
                    {
                        id: 4,
                        value: 'B'
                    },
                    {
                        id: 5,
                        value: 'A'
                    },
                    {
                        id: 6,
                        value: 'S'
                    }
                ],
                hasError: false,
                errors: [
                    {
                        name: 'SELECT_NULL',
                        message: 'The Axe cannot be null.',
                        status: false
                    }
                ]
            },
            {
                name: 'Dagger',
                type: 'select',
                actual: '-- Select a dagger rank --',
                value: getWeaponRank(weaponRank.dagger_lvl),
                data: [
                    {
                        id: 1,
                        value: 'E'
                    },
                    {
                        id: 2,
                        value: 'D'
                    },
                    {
                        id: 3,
                        value: 'C'
                    },
                    {
                        id: 4,
                        value: 'B'
                    },
                    {
                        id: 5,
                        value: 'A'
                    },
                    {
                        id: 6,
                        value: 'S'
                    }
                ],
                hasError: false,
                errors: [
                    {
                        name: 'SELECT_NULL',
                        message: 'The Dagger cannot be null.',
                        status: false
                    }
                ]
            },
            {
                name: 'Staff',
                type: 'select',
                actual: '-- Select a staff rank --',
                value: getWeaponRank(weaponRank.staff_lvl),
                data: [
                    {
                        id: 1,
                        value: 'E'
                    },
                    {
                        id: 2,
                        value: 'D'
                    },
                    {
                        id: 3,
                        value: 'C'
                    },
                    {
                        id: 4,
                        value: 'B'
                    },
                    {
                        id: 5,
                        value: 'A'
                    },
                    {
                        id: 6,
                        value: 'S'
                    }
                ],
                hasError: false,
                errors: [
                    {
                        name: 'SELECT_NULL',
                        message: 'The Staff cannot be null.',
                        status: false
                    }
                ]
            },
            {
                name: 'Bow',
                type: 'select',
                actual: '-- Select a bow rank --',
                value: getWeaponRank(weaponRank.bow_lvl),
                data: [
                    {
                        id: 1,
                        value: 'E'
                    },
                    {
                        id: 2,
                        value: 'D'
                    },
                    {
                        id: 3,
                        value: 'C'
                    },
                    {
                        id: 4,
                        value: 'B'
                    },
                    {
                        id: 5,
                        value: 'A'
                    },
                    {
                        id: 6,
                        value: 'S'
                    }
                ],
                hasError: false,
                errors: [
                    {
                        name: 'SELECT_NULL',
                        message: 'The Bow cannot be null.',
                        status: false
                    }
                ]
            },
            {
                name: 'Fist',
                type: 'select',
                actual: '-- Select a fist rank --',
                value: getWeaponRank(weaponRank.fist_lvl),
                data: [
                    {
                        id: 1,
                        value: 'E'
                    },
                    {
                        id: 2,
                        value: 'D'
                    },
                    {
                        id: 3,
                        value: 'C'
                    },
                    {
                        id: 4,
                        value: 'B'
                    },
                    {
                        id: 5,
                        value: 'A'
                    },
                    {
                        id: 6,
                        value: 'S'
                    }
                ],
                hasError: false,
                errors: [
                    {
                        name: 'SELECT_NULL',
                        message: 'The Fist cannot be null.',
                        status: false
                    }
                ]
            },
            {
                name: 'Other',
                type: 'select',
                actual: '-- Select a other rank --',
                value: getWeaponRank(weaponRank.other_lvl),
                data: [
                    {
                        id: 1,
                        value: 'E'
                    },
                    {
                        id: 2,
                        value: 'D'
                    },
                    {
                        id: 3,
                        value: 'C'
                    },
                    {
                        id: 4,
                        value: 'B'
                    },
                    {
                        id: 5,
                        value: 'A'
                    },
                    {
                        id: 6,
                        value: 'S'
                    }
                ],
                hasError: false,
                errors: [
                    {
                        name: 'SELECT_NULL',
                        message: 'The Other cannot be null.',
                        status: false
                    }
                ]
            },
        ]
        onChangeCharacter(id, return_value)
    }
    const clickRank = () => {
        const return_value = [
            {
                name: 'Magic Rank',
                type: 'select',
                actual: '-- Select a magic rank --',
                value: getRank(ranks.magic_rank),
                data: [
                    {
                        id: 1,
                        value: 'Basic'
                    },
                    {
                        id: 2,
                        value: 'Expert'
                    },
                    {
                        id: 3,
                        value: 'Sage'
                    },
                    {
                        id: 4,
                        value: 'Dragon'
                    },
                    {
                        id: 5,
                        value: 'God'
                    }
                ],
                hasError: false,
                errors: [
                    {
                        name: 'SELECT_NULL',
                        message: 'The Magic Rank cannot be null.',
                        status: false
                    }
                ]
            },
            {
                name: 'Spirit Rank',
                type: 'select',
                actual: '-- Select a spirit rank --',
                value: getRank(ranks.spirit_rank),
                data: [
                    {
                        id: 1,
                        value: 'Basic'
                    },
                    {
                        id: 2,
                        value: 'Expert'
                    },
                    {
                        id: 3,
                        value: 'Sage'
                    },
                    {
                        id: 4,
                        value: 'Dragon'
                    },
                    {
                        id: 5,
                        value: 'God'
                    }
                ],
                hasError: false,
                errors: [
                    {
                        name: 'SELECT_NULL',
                        message: 'The Magic Rank cannot be null.',
                        status: false
                    }
                ]
            }
        ]
        onChangeCharacter(id, return_value)
    }
    const clickItem = () => {
        fetch(gdata.api_url+'armor/get_list', {
            method: 'GET',
            mode: 'cors',
            cache: 'default',
            redirect: 'manual',
            headers: {
                'Authorization': localStorage.getItem('token_auth')
            }
        }).then(armor_response => {
            armor_response.json().then(armors => {
                fetch(gdata.api_url+'weapon/get_list', {
                    method: 'GET',
                    mode: 'cors',
                    cache: 'default',
                    redirect: 'manual',
                    headers: {
                        'Authorization': localStorage.getItem('token_auth')
                    }
                }).then(weapon_response => {
                    weapon_response.json().then(weapons => {
                        const return_value = [
                            {
                                name: 'weapon',
                                type: 'select',
                                actual: '-- Select a Weapon --',
                                value: weapon.weapon_id,
                                data: weapons,
                                hasError: false,
                                errors: [
                                    {
                                        name: 'SELECT_NULL',
                                        message: 'The Weapon cannot be null.',
                                        status: false
                                    }
                                ]
                            },
                            {
                                name: 'armor',
                                type: 'select',
                                actual: '-- Select a Armor --',
                                value: armor.armor_id,
                                data: armors,
                                hasError: false,
                                errors: [
                                    {
                                        name: 'SELECT_NULL',
                                        message: 'The Armor cannot be null.',
                                        status: false
                                    }
                                ]
                            }
                        ]
                        onChangeCharacter(id, return_value)
                    })
                })
            })
        })
    }
    const clickPassive = () => {
        fetch(gdata.api_url+'character/get_passive/'+id, {
            method: 'GET',
            mode: 'cors',
            cache: 'default',
            redirect: 'manual',
            headers: {
                'Authorization': localStorage.getItem('token_auth')
            }
        }).then(response => {
            response.json().then(item => {
                const return_value = [
                    {
                        name: 'passive',
                        type: 'multi-select',
                        actual: '-- Add a passive --',
                        value: '',
                        data: item,
                        hasError: false,
                        errors: [
                            {
                                name: 'MULTI_SELECT_NULL',
                                message: 'Minimum 1 type must be selected.',
                                status: false
                            }
                        ]
                    }
                ]
                onChangeCharacter(id, return_value)
            })
        })
    }
    const clickSkill = () => {

    }
    const clickClass = () => {
        fetch(gdata.api_url+'/class/get_list', {
            method: 'GET',
            mode: 'cors',
            cache: 'default',
            redirect: 'manual',
            headers: {
                'Authorization': localStorage.getItem('token_auth')
            }
        }).then(response => {
            response.json().then(item => {
                const return_value = [
                    {
                        name: 'class',
                        type: 'select',
                        actual: '-- Select a Class --',
                        value: classe.class_id,
                        data: item,
                        hasError: false,
                        errors: [
                            {
                                name: 'SELECT_NULL',
                                message: 'The Class cannot be null.',
                                status: false
                            }
                        ]
                    }
                ]
                onChangeCharacter(id, return_value)
            })
        })
    }

    useEffect(() => {
        setId(data.character_id)
        setName(data.name)
        setLevel(data.level)
        setClasse(data.class)
        setRace(data.race)
        setImg(data.img)
        setStats({
            hp: data.hp,
            combat_hp: data.combat_hp,
            hp_growth: data.hp_growth,
            strength: data.strength,
            combat_strength: data.combat_strength,
            strength_growth: data.strength_growth,
            defense: data.defense,
            combat_defense: data.combat_defense,
            defense_growth: data.defense_growth,
            magic: data.magic,
            combat_magic: data.combat_magic,
            magic_growth: data.magic_growth,
            resistance: data.resistance,
            combat_resistance: data.combat_resistance,
            resistance_growth: data.resistance_growth,
            speed: data.speed,
            combat_speed: data.combat_speed,
            speed_growth: data.speed_growth,
            skill: data.skill,
            combat_skill: data.combat_skill,
            skill_growth: data.skill_growth,
            luck: data.luck,
            combat_luck: data.combat_luck,
            luck_growth: data.luck_growth,
            mana: data.mana,
            combat_mana: data.combat_mana,
            mana_growth: data.mana_growth
        })
        setWeaponRank({
            sword_lvl: data.sword_lvl,
            spear_lvl: data.spear_lvl,
            axe_lvl: data.axe_lvl,
            dagger_lvl: data.dagger_lvl,
            staff_lvl: data.staff_lvl,
            bow_lvl: data.bow_lvl,
            fist_lvl: data.fist_lvl,
            other_lvl: data.other_lvl
        })
        setMagic({
            arcane_lvl: data.arcane_lvl,
            illusion_lvl: data.illusion_lvl,
            mind_lvl: data.mind_lvl,
            fire_lvl: data.fire_lvl,
            lava_lvl: data.lava_lvl,
            heat_lvl: data.heat_lvl,
            water_lvl: data.water_lvl,
            liquid_lvl: data.liquid_lvl,
            ice_lvl: data.ice_lvl,
            air_lvl: data.air_lvl,
            wind_lvl: data.wind_lvl,
            lightning_lvl: data.lightning_lvl,
            earth_lvl: data.earth_lvl,
            nature_lvl: data.nature_lvl,
            poison_lvl: data.poison_lvl,
            light_lvl: data.light_lvl,
            holy_lvl: data.holy_lvl,
            space_lvl: data.space_lvl,
            dark_lvl: data.dark_lvl,
            curse_lvl: data.curse_lvl,
            necromancy_lvl: data.necromancy_lvl
        })
        setTypes(data.types)
        setStatus(data.status)
        setRanks({
            magic_rank: data.magic_rk,
            spirit_rank: data.spirit_rk,
            stat_rank: data.stat_rk
        })
        setPassives(data.passives)
        setSkills(data.skills)
        setWeapon(data.weapon)
        setArmor(data.armor)
    }, [data])

    return (
        <Box
          w={ '100%' }>
            <Flex w={ '100%' }>
                <VStack 
                  w={ '35%' } 
                  spacing={ 0 } 
                  bgColor={ sbackgroundColor }
                  minH={ '350px' }
                  p={ 2 }
                  borderTopLeftRadius={ '20px' }
                  borderBottomLeftRadius={ '20px' }
                  borderWidth={ '1px' } 
                  borderColor={ inputBackgroundColor }>
                    <Image 
                      src={ img }
                      backgroundColor={ sbackgroundColor }
                      borderRadius={ '25%' }
                      fit={ 'contain' }
                      boxSize={ '2xs' } />
                    <Text 
                      textTransform={ 'capitalize' } 
                      fontWeight={ 'bold' }
                      fontSize={ 18 }
                      pb={ '5px' }>
                        { name }
                    </Text>
                    <HStack w={ '100%' } pl={ '5%' } pb={ '2px' }>
                        <Text 
                          textTransform={ 'uppercase' }
                          fontSize={ 16 }>
                            Race:
                        </Text>
                        <Text fontSize={ 15 }>
                            { race }
                        </Text>
                        <IconButton colorScheme={ 'blue' }  size={ 'xs' } icon={ <GiCampfire size={ '16px' } /> } onClick={ () => callRest(id) } />
                    </HStack>
                    <HStack w={ '100%' } pl={ '5%' } pb={ '2px' }>
                        <Text
                          textTransform={ 'uppercase' }
                          fontSize={ 16 }>
                            Level:
                        </Text>
                        <Text fontSize={ 15 }>
                            { level }
                        </Text>
                        <IconButton colorScheme={ 'blue' } size={ 'xs' } icon={ <ArrowUpIcon /> } onClick={ () => callLevelUp(id) } />
                    </HStack>
                    <HStack w={ '100%' } pl={ '5%' } pb={ '2px' }>
                        <Text
                          textTransform={ 'uppercase' }
                          fontSize={ 16 }>
                            Class:
                        </Text>
                        <Text fontSize={ 15 }>
                            { classe.name }
                        </Text>
                        <IconButton colorScheme={ 'orange' } size={ 'xs' } icon={ <SettingsIcon /> } onClick={ clickClass } />
                    </HStack>
                </VStack>
                <VStack
                  w={ '65%' }
                  spacing={ 0 }
                  bgColor={ inputBackgroundColor }
                  h={ '390px' }
                  p={ 2 }
                  borderTopRightRadius={ '20px' }
                  borderBottomRightRadius={ '20px' }
                  borderWidth={ '1px' } 
                  borderColor={ inputBackgroundColor }>
                    <HStack w={ '100%' }>
                        <HStack w={ '95%' } spacing={ 1 }>
                            <Center w={ '100%' } h={ '30px' }>
                                <IconButton
                                  colorScheme={ 'orange' }
                                  size={ 'sm' }
                                  borderRadius={ 'full' }
                                  icon={ <ArrowLeftIcon /> }
                                  mr={ '10px' } 
                                  onClick={ _ => removeState() } />
                                <Text
                                  w={ '35%' }
                                  textTransform={ 'uppercase' }
                                  fontSize={ 19 }>
                                        <Center w={ '100%' } h={ '100%' }>
                                            { stateMessage[state] }
                                        </Center>
                                </Text>
                                <IconButton
                                  colorScheme={ 'orange' }
                                  size={ 'sm' }
                                  borderRadius={ 'full' }
                                  icon={ <ArrowRightIcon /> }
                                  ml={ '10px' }
                                  onClick={ _ => addState() } />
                            </Center> 
                        </HStack>
                        <HStack w={ '5%' } spacing={ 1 }>
                            <IconButton 
                              colorScheme={ 'red' } 
                              size={ 'xs' }
                              borderRadius={ 'full' }
                              icon={ <SmallCloseIcon /> }
                              onClick={ _ => deleteCharacter(id, name) } />
                        </HStack>
                    </HStack>
                    <HStack w={ '100%' }>
                        <Divider w={ '85%' } mt={ '2%' } color={ textColor } mr={ 'auto' } ml={ 'auto' } />
                    </HStack>
                    <VStack w={ '100%' }>
                        { state === 0 &&
                            <VStack w={ '100%' } mt={ '5%' }>
                                <HStack w={ '100%' }>
                                    <Text ml={ '4%' } fontSize={ 17 }>Types</Text>
                                    <IconButton ml={ 'auto' } mr={ 0 } size={ 'sm' } colorScheme={ 'orange' } icon={ <SettingsIcon /> } onClick={ clickTypes } />
                                </HStack>
                                <HStack w={ '100%' }>
                                    <Divider w={ '85%' } mt={ '2%' } color={ textColor } mr={ 'auto' } ml={ 'auto' } />
                                </HStack>
                                <SimpleGrid w={ '100%' } h={ '100%' } columns={ 9 } spacing={ 2 }>
                                    { types.map(element => (
                                            <Popover>
                                                <PopoverTrigger>
                                                    <Box>
                                                        <Center w={ '100%' } h={ '100%' }>
                                                            <CustomIcon type={ element.value } isize={ 25 } />
                                                        </Center>
                                                    </Box>
                                                </PopoverTrigger>
                                                <PopoverContent border={ 0 } bgColor={ inputBorderColor }>
                                                    <PopoverArrow />
                                                    <PopoverCloseButton />
                                                    <PopoverBody>{ element.value }</PopoverBody>
                                                </PopoverContent>
                                            </Popover>
                                        ))
                                    }
                                </SimpleGrid>
                                <HStack w={ '100%' }>
                                    <Text ml={ '4%' } fontSize={ 17 }>Status</Text>
                                    <IconButton ml={ 'auto' } mr={ 0 } size={ 'sm' } colorScheme={ 'orange' } icon={ <SettingsIcon /> } onClick={ clickStatus } />
                                </HStack>
                                <HStack w={ '100%' }>
                                    <Divider w={ '85%' } mt={ '2%' } color={ textColor } mr={ 'auto' } ml={ 'auto' } />
                                </HStack>
                                <SimpleGrid w={ '100%' } h={ '100%' } columns={ 9 } spacing={ 2 }>
                                    { status.map(element => (
                                            <Popover>
                                                <PopoverTrigger>
                                                    <Box>
                                                        <Center w={ '100%' } h={ '100%' }>
                                                            <CustomIcon type={ element.value } isize={ 25 } />
                                                        </Center>
                                                    </Box>
                                                </PopoverTrigger>
                                                <PopoverContent border={ 0 } bgColor={ inputBorderColor }>
                                                    <PopoverArrow />
                                                    <PopoverCloseButton />
                                                    <PopoverBody>{ element.value }</PopoverBody>
                                                </PopoverContent>
                                            </Popover>
                                        ))
                                    }
                                </SimpleGrid>
                            </VStack>
                        }
                        { state === 1 &&
                            <VStack w={ '100%' } mt={ '5%' }>
                                <HStack w={ '100%' }>
                                    <HStack w={ '5%' } />                         
                                    <Popover>
                                        <PopoverTrigger>
                                            <HStack w={ '90%' } bgColor={ inputBorderColor } borderRadius={ '20px' } h={ '35px' }>
                                                <Text
                                                w={ '15%' } 
                                                p={ '2%' }
                                                textTransform={ 'uppercase' } 
                                                fontSize={ 19 }
                                                color={ alternateTextColor }>
                                                    HP
                                                </Text>
                                                <HStack w={ '85%' } h={ '100%' } bgColor={ backgroundColor } borderRadius={ '20px' }>
                                                    <CustomBar value={ Number(stats.combat_hp) } max={ Number(stats.hp) } />
                                                </HStack>
                                            </HStack>
                                        </PopoverTrigger>
                                        <PopoverContent border={ 0 } bgColor={ inputBorderColor }>
                                            <PopoverArrow />
                                            <PopoverCloseButton />
                                            <PopoverBody>HP Growth : { stats.hp_growth } %</PopoverBody>
                                        </PopoverContent>
                                    </Popover>
                                    <HStack w={ '5%' } />
                                </HStack>
                                <SimpleGrid w={ '100%' } h={ '100%' } columns={ 2 } spacing={ 2 }>
                                    <Popover>
                                        <PopoverTrigger>
                                            <HStack w={ '100%' }>
                                                <HStack w={ '100%' } bgColor={ inputBorderColor } borderRadius={ '20px' } h={ '35px' }>
                                                    <Text
                                                    w={ '20%' }
                                                    pl={ '1%' }
                                                    textTransform={ 'uppercase' } 
                                                    fontSize={ 13 }
                                                    color={ alternateTextColor }>
                                                        Str
                                                    </Text>
                                                    <HStack w={ '85%' } h={ '100%' } bgColor={ backgroundColor } borderRadius={ '20px' }>
                                                        <CustomBar value={ Number(stats.combat_strength) } max={ Number(stats.strength) } />
                                                    </HStack>
                                                </HStack>
                                            </HStack>
                                        </PopoverTrigger>
                                        <PopoverContent border={ 0 } bgColor={ inputBorderColor }>
                                            <PopoverArrow />
                                            <PopoverCloseButton />
                                            <PopoverBody> Strength Growth : { stats.strength_growth } %</PopoverBody>
                                        </PopoverContent>
                                    </Popover>
                                    <Popover>
                                        <PopoverTrigger>
                                            <HStack w={ '100%' }>
                                                <HStack w={ '100%' } bgColor={ inputBorderColor } borderRadius={ '20px' } h={ '35px' }>
                                                    <Text
                                                    w={ '20%' }
                                                    pl={ '1%' }
                                                    textTransform={ 'uppercase' } 
                                                    fontSize={ 13 }
                                                    color={ alternateTextColor }>
                                                        Def
                                                    </Text>
                                                    <HStack w={ '85%' } h={ '100%' } bgColor={ backgroundColor } borderRadius={ '20px' }>
                                                        <CustomBar value={ Number(stats.combat_defense) } max={ Number(stats.defense) } />
                                                    </HStack>
                                                </HStack>
                                            </HStack>
                                        </PopoverTrigger>
                                        <PopoverContent border={ 0 } bgColor={ inputBorderColor }>
                                            <PopoverArrow />
                                            <PopoverCloseButton />
                                            <PopoverBody> Defense Growth : { stats.defense_growth } %</PopoverBody>
                                        </PopoverContent>
                                    </Popover>
                                    <Popover>
                                        <PopoverTrigger>
                                            <HStack w={ '100%' }>
                                                <HStack w={ '100%' } bgColor={ inputBorderColor } borderRadius={ '20px' } h={ '35px' }>
                                                    <Text
                                                    w={ '20%' } 
                                                    pl={ '1%' }
                                                    textTransform={ 'uppercase' } 
                                                    fontSize={ 13 }
                                                    color={ alternateTextColor }>
                                                        Mag
                                                    </Text>
                                                    <HStack w={ '85%' } h={ '100%' } bgColor={ backgroundColor } borderRadius={ '20px' }>
                                                        <CustomBar value={ Number(stats.combat_magic) } max={ Number(stats.magic) } />
                                                    </HStack>
                                                </HStack>
                                            </HStack>
                                        </PopoverTrigger>
                                        <PopoverContent border={ 0 } bgColor={ inputBorderColor }>
                                            <PopoverArrow />
                                            <PopoverCloseButton />
                                            <PopoverBody> Magic Growth : { stats.magic_growth } %</PopoverBody>
                                        </PopoverContent>
                                    </Popover>
                                    <Popover>
                                        <PopoverTrigger>
                                            <HStack w={ '100%' }>
                                                <HStack w={ '100%' } bgColor={ inputBorderColor } borderRadius={ '20px' } h={ '35px' }>
                                                    <Text
                                                    w={ '20%' } 
                                                    pl={ '1%' }
                                                    textTransform={ 'uppercase' } 
                                                    fontSize={ 13 }
                                                    color={ alternateTextColor }>
                                                        Res
                                                    </Text>
                                                    <HStack w={ '85%' } h={ '100%' } bgColor={ backgroundColor } borderRadius={ '20px' }>
                                                        <CustomBar value={ Number(stats.combat_resistance) } max={ Number(stats.resistance) } />
                                                    </HStack>
                                                </HStack>
                                            </HStack>
                                        </PopoverTrigger>
                                        <PopoverContent border={ 0 } bgColor={ inputBorderColor }>
                                            <PopoverArrow />
                                            <PopoverCloseButton />
                                            <PopoverBody> Resistance Growth : { stats.resistance_growth } %</PopoverBody>
                                        </PopoverContent>
                                    </Popover>
                                    <Popover>
                                        <PopoverTrigger>
                                            <HStack w={ '100%' }>
                                                <HStack w={ '100%' } bgColor={ inputBorderColor } borderRadius={ '20px' } h={ '35px' }>
                                                    <Text
                                                    w={ '20%' }
                                                    pl={ '1%' } 
                                                    textTransform={ 'uppercase' } 
                                                    fontSize={ 13 }
                                                    color={ alternateTextColor }>
                                                        Spd
                                                    </Text>
                                                    <HStack w={ '85%' } h={ '100%' } bgColor={ backgroundColor } borderRadius={ '20px' }>
                                                        <CustomBar value={ Number(stats.combat_speed) } max={ Number(stats.speed) } />
                                                    </HStack>
                                                </HStack>
                                            </HStack>
                                        </PopoverTrigger>
                                        <PopoverContent border={ 0 } bgColor={ inputBorderColor }>
                                            <PopoverArrow />
                                            <PopoverCloseButton />
                                            <PopoverBody> Speed Growth : { stats.speed_growth } %</PopoverBody>
                                        </PopoverContent>
                                    </Popover>
                                    <Popover>
                                        <PopoverTrigger>
                                            <HStack w={ '100%' }>
                                                <HStack w={ '100%' } bgColor={ inputBorderColor } borderRadius={ '20px' } h={ '35px' }>
                                                    <Text
                                                    w={ '20%' } 
                                                    pl={ '1%' }
                                                    textTransform={ 'uppercase' } 
                                                    fontSize={ 13 }
                                                    color={ alternateTextColor }>
                                                        Skl
                                                    </Text>
                                                    <HStack w={ '85%' } h={ '100%' } bgColor={ backgroundColor } borderRadius={ '20px' }>
                                                        <CustomBar value={ Number(stats.combat_skill) } max={ Number(stats.skill) } />
                                                    </HStack>
                                                </HStack>
                                            </HStack>
                                        </PopoverTrigger>
                                        <PopoverContent border={ 0 } bgColor={ inputBorderColor }>
                                            <PopoverArrow />
                                            <PopoverCloseButton />
                                            <PopoverBody> Skill Growth : { stats.skill_growth } %</PopoverBody>
                                        </PopoverContent>
                                    </Popover>
                                    <Popover>
                                        <PopoverTrigger>
                                            <HStack w={ '100%' }>
                                                <HStack w={ '100%' } bgColor={ inputBorderColor } borderRadius={ '20px' } h={ '35px' }>
                                                    <Text
                                                    w={ '20%' } 
                                                    pl={ '1%' }
                                                    textTransform={ 'uppercase' } 
                                                    fontSize={ 13 }
                                                    color={ alternateTextColor }>
                                                        Lck
                                                    </Text>
                                                    <HStack w={ '85%' } h={ '100%' } bgColor={ backgroundColor } borderRadius={ '20px' }>
                                                        <CustomBar value={ Number(stats.combat_luck) } max={ Number(stats.luck) } />
                                                    </HStack>
                                                </HStack>
                                            </HStack>
                                        </PopoverTrigger>
                                        <PopoverContent border={ 0 } bgColor={ inputBorderColor }>
                                            <PopoverArrow />
                                            <PopoverCloseButton />
                                            <PopoverBody> Luck Growth : { stats.luck_growth } %</PopoverBody>
                                        </PopoverContent>
                                    </Popover>
                                    <Popover>
                                        <PopoverTrigger>
                                            <HStack w={ '100%' }>
                                                <HStack w={ '100%' } bgColor={ inputBorderColor } borderRadius={ '20px' } h={ '35px' }>
                                                    <Text
                                                    w={ '20%' } 
                                                    pl={ '1%' }
                                                    textTransform={ 'uppercase' } 
                                                    fontSize={ 13 }
                                                    color={ alternateTextColor }>
                                                        Man
                                                    </Text>
                                                    <HStack w={ '85%' } h={ '100%' } bgColor={ backgroundColor } borderRadius={ '20px' }>
                                                        <CustomBar value={ Number(stats.combat_mana) } max={ Number(stats.mana) } />
                                                    </HStack>
                                                </HStack>
                                            </HStack>
                                        </PopoverTrigger>
                                        <PopoverContent border={ 0 } bgColor={ inputBorderColor }>
                                            <PopoverArrow />
                                            <PopoverCloseButton />
                                            <PopoverBody> Mana Growth : { stats.mana_growth } %</PopoverBody>
                                        </PopoverContent>
                                    </Popover>
                                </SimpleGrid>
                                <HStack w={ '100%' } top={ '20%' } position={ 'relative' }>
                                    <IconButton ml={ 'auto' } mr={ 0 } size={ 'sm' } colorScheme={ 'orange' } icon={ <SettingsIcon /> } onClick={ clickStats } />
                                </HStack>
                            </VStack>
                        }
                        { state === 2 &&
                            <VStack
                              w={ '100%' }
                              maxH={ '300px' }
                              mt={ '5%' }
                              position={'relative'}
                              overflowY={ 'scroll' }
                              css={{
                                  '&::-webkit-scrollbar': {
                                      width: '15px',
                                      height: '100%'
                                  },
                                  '&::-webkit-scrollbar-track': {
                                      background: sbackgroundColor,
                                  },
                                  '&::-webkit-scrollbar-thumb': {
                                      backgroundColor: inputBackgroundColor,
                                      borderRadius: '20px',
                                      border: `3px solid ${sbackgroundColor}`
                                  },
                              }}>
                                <VStack w={ '100%' }>
                                    <HStack w={ '90%' } bgColor={ inputBorderColor } borderRadius={ '20px' }>
                                        <HStack w={ '5%' } />
                                        <HStack w={ '65%' }>
                                            <Text
                                              p={ '2%' }
                                              fontSize={ 19 }
                                              color={ alternateTextColor }
                                              textTransform={ 'uppercase' }>
                                                Arcane
                                            </Text>
                                            <CustomIcon type={ 'Arcane' } isize={ 19 } />
                                        </HStack>
                                        <HStack w={ '35%' }  bgColor={ backgroundColor } borderRadius={ '20px' }>
                                            <Center w={ '100%' } h={ '100%' }>
                                                <Text fontSize={ 21 }>{ magic.arcane_lvl } %</Text>
                                            </Center>
                                        </HStack>
                                    </HStack>
                                    <Divider w={ '85%' } mt={ '2%' } color={ textColor } mr={ 'auto' } ml={ 'auto' } />
                                    <HStack position={ 'relative' } left={ '20px' } w={ '80%' } bgColor={ inputBorderColor } borderRadius={ '20px' }>
                                        <HStack w={ '5%' } />
                                        <HStack w={ '65%' }>
                                            <Text
                                              p={ '2%' }
                                              fontSize={ 19 }
                                              color={ alternateTextColor }
                                              textTransform={ 'uppercase' }>
                                                Illusion
                                            </Text>
                                            <CustomIcon type={ 'Illusion' } isize={ 19 } />
                                        </HStack>
                                        <HStack w={ '35%' }  bgColor={ backgroundColor } borderRadius={ '20px' }>
                                            <Center w={ '100%' } h={ '100%' }>
                                                <Text fontSize={ 21 }>{ magic.illusion_lvl } %</Text>
                                            </Center>
                                        </HStack>
                                    </HStack>
                                    <HStack position={ 'relative' } left={ '20px' } w={ '80%' } bgColor={ inputBorderColor } borderRadius={ '20px' }>
                                        <HStack w={ '5%' } />
                                        <HStack w={ '65%' }>
                                            <Text
                                              p={ '2%' }
                                              fontSize={ 19 }
                                              color={ alternateTextColor }
                                              textTransform={ 'uppercase' }>
                                                Mind
                                            </Text>
                                            <CustomIcon type={ 'Mind' } isize={ 19 } />
                                        </HStack>
                                        <HStack w={ '35%' }  bgColor={ backgroundColor } borderRadius={ '20px' }>
                                            <Center w={ '100%' } h={ '100%' }>
                                                <Text fontSize={ 21 }>{ magic.mind_lvl } %</Text>
                                            </Center>
                                        </HStack>
                                    </HStack>
                                </VStack>
                                <VStack w={ '100%' }>
                                    <HStack w={ '90%' } bgColor={ inputBorderColor } borderRadius={ '20px' }>
                                        <HStack w={ '5%' } />
                                        <HStack w={ '65%' }>
                                            <Text
                                              p={ '2%' }
                                              fontSize={ 19 }
                                              color={ alternateTextColor }
                                              textTransform={ 'uppercase' }>
                                                Fire
                                            </Text>
                                            <CustomIcon type={ 'Fire' } isize={ 19 } />
                                        </HStack>
                                        <HStack w={ '35%' }  bgColor={ backgroundColor } borderRadius={ '20px' }>
                                            <Center w={ '100%' } h={ '100%' }>
                                                <Text fontSize={ 21 }>{ magic.fire_lvl } %</Text>
                                            </Center>
                                        </HStack>
                                    </HStack>
                                    <Divider w={ '85%' } mt={ '2%' } color={ textColor } mr={ 'auto' } ml={ 'auto' } />
                                    <HStack position={ 'relative' } left={ '20px' } w={ '80%' } bgColor={ inputBorderColor } borderRadius={ '20px' }>
                                        <HStack w={ '5%' } />
                                        <HStack w={ '65%' }>
                                            <Text
                                              p={ '2%' }
                                              fontSize={ 19 }
                                              color={ alternateTextColor }
                                              textTransform={ 'uppercase' }>
                                                Heat
                                            </Text>
                                            <CustomIcon type={ 'Heat' } isize={ 19 } />
                                        </HStack>
                                        <HStack w={ '35%' }  bgColor={ backgroundColor } borderRadius={ '20px' }>
                                            <Center w={ '100%' } h={ '100%' }>
                                                <Text fontSize={ 21 }>{ magic.heat_lvl } %</Text>
                                            </Center>
                                        </HStack>
                                    </HStack>
                                    <HStack position={ 'relative' } left={ '20px' } w={ '80%' } bgColor={ inputBorderColor } borderRadius={ '20px' }>
                                        <HStack w={ '5%' } />
                                        <HStack w={ '65%' }>
                                            <Text
                                              p={ '2%' }
                                              fontSize={ 19 }
                                              color={ alternateTextColor }
                                              textTransform={ 'uppercase' }>
                                                Lava
                                            </Text>
                                            <CustomIcon type={ 'Lava' } isize={ 19 } />
                                        </HStack>
                                        <HStack w={ '35%' }  bgColor={ backgroundColor } borderRadius={ '20px' }>
                                            <Center w={ '100%' } h={ '100%' }>
                                                <Text fontSize={ 21 }>{ magic.lava_lvl } %</Text>
                                            </Center>
                                        </HStack>
                                    </HStack>
                                </VStack>
                                <VStack w={ '100%' }>
                                    <HStack w={ '90%' } bgColor={ inputBorderColor } borderRadius={ '20px' }>
                                        <HStack w={ '5%' } />
                                        <HStack w={ '65%' }>
                                            <Text
                                              p={ '2%' }
                                              fontSize={ 19 }
                                              color={ alternateTextColor }
                                              textTransform={ 'uppercase' }>
                                                Water
                                            </Text>
                                            <CustomIcon type={ 'Water' } isize={ 19 } />
                                        </HStack>
                                        <HStack w={ '35%' }  bgColor={ backgroundColor } borderRadius={ '20px' }>
                                            <Center w={ '100%' } h={ '100%' }>
                                                <Text fontSize={ 21 }>{ magic.water_lvl } %</Text>
                                            </Center>
                                        </HStack>
                                    </HStack>
                                    <Divider w={ '85%' } mt={ '2%' } color={ textColor } mr={ 'auto' } ml={ 'auto' } />
                                    <HStack position={ 'relative' } left={ '20px' } w={ '80%' } bgColor={ inputBorderColor } borderRadius={ '20px' }>
                                        <HStack w={ '5%' } />
                                        <HStack w={ '65%' }>
                                            <Text
                                              p={ '2%' }
                                              fontSize={ 19 }
                                              color={ alternateTextColor }
                                              textTransform={ 'uppercase' }>
                                                Liquid
                                            </Text>
                                            <CustomIcon type={ 'Liquid' } isize={ 19 } />
                                        </HStack>
                                        <HStack w={ '35%' }  bgColor={ backgroundColor } borderRadius={ '20px' }>
                                            <Center w={ '100%' } h={ '100%' }>
                                                <Text fontSize={ 21 }>{ magic.liquid_lvl } %</Text>
                                            </Center>
                                        </HStack>
                                    </HStack>
                                    <HStack position={ 'relative' } left={ '20px' } w={ '80%' } bgColor={ inputBorderColor } borderRadius={ '20px' }>
                                        <HStack w={ '5%' } />
                                        <HStack w={ '65%' }>
                                            <Text
                                              p={ '2%' }
                                              fontSize={ 19 }
                                              color={ alternateTextColor }
                                              textTransform={ 'uppercase' }>
                                                Ice
                                            </Text>
                                            <CustomIcon type={ 'Ice' } isize={ 19 } />
                                        </HStack>
                                        <HStack w={ '35%' }  bgColor={ backgroundColor } borderRadius={ '20px' }>
                                            <Center w={ '100%' } h={ '100%' }>
                                                <Text fontSize={ 21 }>{ magic.ice_lvl } %</Text>
                                            </Center>
                                        </HStack>
                                    </HStack>
                                </VStack>
                                <VStack w={ '100%' }>
                                    <HStack w={ '90%' } bgColor={ inputBorderColor } borderRadius={ '20px' }>
                                        <HStack w={ '5%' } />
                                        <HStack w={ '65%' }>
                                            <Text
                                              p={ '2%' }
                                              fontSize={ 19 }
                                              color={ alternateTextColor }
                                              textTransform={ 'uppercase' }>
                                                Air
                                            </Text>
                                            <CustomIcon type={ 'Air' } isize={ 19 } />
                                        </HStack>
                                        <HStack w={ '35%' }  bgColor={ backgroundColor } borderRadius={ '20px' }>
                                            <Center w={ '100%' } h={ '100%' }>
                                                <Text fontSize={ 21 }>{ magic.air_lvl } %</Text>
                                            </Center>
                                        </HStack>
                                    </HStack>
                                    <Divider w={ '85%' } mt={ '2%' } color={ textColor } mr={ 'auto' } ml={ 'auto' } />
                                    <HStack position={ 'relative' } left={ '20px' } w={ '80%' } bgColor={ inputBorderColor } borderRadius={ '20px' }>
                                        <HStack w={ '5%' } />
                                        <HStack w={ '65%' }>
                                            <Text
                                              p={ '2%' }
                                              fontSize={ 19 }
                                              color={ alternateTextColor }
                                              textTransform={ 'uppercase' }>
                                                Wind
                                            </Text>
                                            <CustomIcon type={ 'Wind' } isize={ 19 } />
                                        </HStack>
                                        <HStack w={ '35%' }  bgColor={ backgroundColor } borderRadius={ '20px' }>
                                            <Center w={ '100%' } h={ '100%' }>
                                                <Text fontSize={ 21 }>{ magic.wind_lvl } %</Text>
                                            </Center>
                                        </HStack>
                                    </HStack>
                                    <HStack position={ 'relative' } left={ '20px' } w={ '80%' } bgColor={ inputBorderColor } borderRadius={ '20px' }>
                                        <HStack w={ '5%' } />
                                        <HStack w={ '65%' }>
                                            <Text
                                              p={ '2%' }
                                              fontSize={ 19 }
                                              color={ alternateTextColor }
                                              textTransform={ 'uppercase' }>
                                                Lightning
                                            </Text>
                                            <CustomIcon type={ 'Lightning' } isize={ 19 } />
                                        </HStack>
                                        <HStack w={ '35%' }  bgColor={ backgroundColor } borderRadius={ '20px' }>
                                            <Center w={ '100%' } h={ '100%' }>
                                                <Text fontSize={ 21 }>{ magic.lightning_lvl } %</Text>
                                            </Center>
                                        </HStack>
                                    </HStack>
                                </VStack>
                                <VStack w={ '100%' }>
                                    <HStack w={ '90%' } bgColor={ inputBorderColor } borderRadius={ '20px' }>
                                        <HStack w={ '5%' } />
                                        <HStack w={ '65%' }>
                                            <Text
                                              p={ '2%' }
                                              fontSize={ 19 }
                                              color={ alternateTextColor }
                                              textTransform={ 'uppercase' }>
                                                Earth
                                            </Text>
                                            <CustomIcon type={ 'Earth' } isize={ 19 } />
                                        </HStack>
                                        <HStack w={ '35%' }  bgColor={ backgroundColor } borderRadius={ '20px' }>
                                            <Center w={ '100%' } h={ '100%' }>
                                                <Text fontSize={ 21 }>{ magic.earth_lvl } %</Text>
                                            </Center>
                                        </HStack>
                                    </HStack>
                                    <Divider w={ '85%' } mt={ '2%' } color={ textColor } mr={ 'auto' } ml={ 'auto' } />
                                    <HStack position={ 'relative' } left={ '20px' } w={ '80%' } bgColor={ inputBorderColor } borderRadius={ '20px' }>
                                        <HStack w={ '5%' } />
                                        <HStack w={ '65%' }>
                                            <Text
                                              p={ '2%' }
                                              fontSize={ 19 }
                                              color={ alternateTextColor }
                                              textTransform={ 'uppercase' }>
                                                Nature
                                            </Text>
                                            <CustomIcon type={ 'Nature' } isize={ 19 } />
                                        </HStack>
                                        <HStack w={ '35%' }  bgColor={ backgroundColor } borderRadius={ '20px' }>
                                            <Center w={ '100%' } h={ '100%' }>
                                                <Text fontSize={ 21 }>{ magic.nature_lvl } %</Text>
                                            </Center>
                                        </HStack>
                                    </HStack>
                                    <HStack position={ 'relative' } left={ '20px' } w={ '80%' } bgColor={ inputBorderColor } borderRadius={ '20px' }>
                                        <HStack w={ '5%' } />
                                        <HStack w={ '65%' }>
                                            <Text
                                              p={ '2%' }
                                              fontSize={ 19 }
                                              color={ alternateTextColor }
                                              textTransform={ 'uppercase' }>
                                                Poison
                                            </Text>
                                            <CustomIcon type={ 'Poison' } isize={ 19 } />
                                        </HStack>
                                        <HStack w={ '35%' }  bgColor={ backgroundColor } borderRadius={ '20px' }>
                                            <Center w={ '100%' } h={ '100%' }>
                                                <Text fontSize={ 21 }>{ magic.poison_lvl } %</Text>
                                            </Center>
                                        </HStack>
                                    </HStack>
                                </VStack>
                                <VStack w={ '100%' }>
                                    <HStack w={ '90%' } bgColor={ inputBorderColor } borderRadius={ '20px' }>
                                        <HStack w={ '5%' } />
                                        <HStack w={ '65%' }>
                                            <Text
                                              p={ '2%' }
                                              fontSize={ 19 }
                                              color={ alternateTextColor }
                                              textTransform={ 'uppercase' }>
                                                Light
                                            </Text>
                                            <CustomIcon type={ 'Light' } isize={ 19 } />
                                        </HStack>
                                        <HStack w={ '35%' }  bgColor={ backgroundColor } borderRadius={ '20px' }>
                                            <Center w={ '100%' } h={ '100%' }>
                                                <Text fontSize={ 21 }>{ magic.light_lvl } %</Text>
                                            </Center>
                                        </HStack>
                                    </HStack>
                                    <Divider w={ '85%' } mt={ '2%' } color={ textColor } mr={ 'auto' } ml={ 'auto' } />
                                    <HStack position={ 'relative' } left={ '20px' } w={ '80%' } bgColor={ inputBorderColor } borderRadius={ '20px' }>
                                        <HStack w={ '5%' } />
                                        <HStack w={ '65%' }>
                                            <Text
                                              p={ '2%' }
                                              fontSize={ 19 }
                                              color={ alternateTextColor }
                                              textTransform={ 'uppercase' }>
                                                Holy
                                            </Text>
                                            <CustomIcon type={ 'Holy' } isize={ 19 } />
                                        </HStack>
                                        <HStack w={ '35%' }  bgColor={ backgroundColor } borderRadius={ '20px' }>
                                            <Center w={ '100%' } h={ '100%' }>
                                                <Text fontSize={ 21 }>{ magic.holy_lvl } %</Text>
                                            </Center>
                                        </HStack>
                                    </HStack>
                                    <HStack position={ 'relative' } left={ '20px' } w={ '80%' } bgColor={ inputBorderColor } borderRadius={ '20px' }>
                                        <HStack w={ '5%' } />
                                        <HStack w={ '65%' }>
                                            <Text
                                              p={ '2%' }
                                              fontSize={ 19 }
                                              color={ alternateTextColor }
                                              textTransform={ 'uppercase' }>
                                                Space
                                            </Text>
                                            <CustomIcon type={ 'Space' } isize={ 19 } />
                                        </HStack>
                                        <HStack w={ '35%' }  bgColor={ backgroundColor } borderRadius={ '20px' }>
                                            <Center w={ '100%' } h={ '100%' }>
                                                <Text fontSize={ 21 }>{ magic.space_lvl } %</Text>
                                            </Center>
                                        </HStack>
                                    </HStack>
                                </VStack>
                                <VStack w={ '100%' }>
                                    <HStack w={ '90%' } bgColor={ inputBorderColor } borderRadius={ '20px' }>
                                        <HStack w={ '5%' } />
                                        <HStack w={ '65%' }>
                                            <Text
                                              p={ '2%' }
                                              fontSize={ 19 }
                                              color={ alternateTextColor }
                                              textTransform={ 'uppercase' }>
                                                Dark
                                            </Text>
                                            <CustomIcon type={ 'Dark' } isize={ 19 } />
                                        </HStack>
                                        <HStack w={ '35%' }  bgColor={ backgroundColor } borderRadius={ '20px' }>
                                            <Center w={ '100%' } h={ '100%' }>
                                                <Text fontSize={ 21 }>{ magic.dark_lvl } %</Text>
                                            </Center>
                                        </HStack>
                                    </HStack>
                                    <Divider w={ '85%' } mt={ '2%' } color={ textColor } mr={ 'auto' } ml={ 'auto' } />
                                    <HStack position={ 'relative' } left={ '20px' } w={ '80%' } bgColor={ inputBorderColor } borderRadius={ '20px' }>
                                        <HStack w={ '5%' } />
                                        <HStack w={ '65%' }>
                                            <Text
                                              p={ '2%' }
                                              fontSize={ 19 }
                                              color={ alternateTextColor }
                                              textTransform={ 'uppercase' }>
                                                Curse
                                            </Text>
                                            <CustomIcon type={ 'Curse' } isize={ 19 } />
                                        </HStack>
                                        <HStack w={ '35%' }  bgColor={ backgroundColor } borderRadius={ '20px' }>
                                            <Center w={ '100%' } h={ '100%' }>
                                                <Text fontSize={ 21 }>{ magic.curse_lvl } %</Text>
                                            </Center>
                                        </HStack>
                                    </HStack>
                                    <HStack position={ 'relative' } left={ '20px' } w={ '80%' } bgColor={ inputBorderColor } borderRadius={ '20px' }>
                                        <HStack w={ '5%' } />
                                        <HStack w={ '65%' }>
                                            <Text
                                              p={ '2%' }
                                              fontSize={ 19 }
                                              color={ alternateTextColor }
                                              textTransform={ 'uppercase' }>
                                                Necromancy
                                            </Text>
                                            <CustomIcon type={ 'Necromancy' } isize={ 19 } />
                                        </HStack>
                                        <HStack w={ '35%' }  bgColor={ backgroundColor } borderRadius={ '20px' }>
                                            <Center w={ '100%' } h={ '100%' }>
                                                <Text fontSize={ 21 }>{ magic.necromancy_lvl } %</Text>
                                            </Center>
                                        </HStack>
                                    </HStack>
                                </VStack>
                                <HStack w={ '100%' }>
                                    <IconButton ml={ 'auto' } mr={ 0 } size={ 'sm' } colorScheme={ 'orange' } icon={ <SettingsIcon /> } onClick={ clickMagic } />
                                </HStack>
                            </VStack>   
                        }
                        { state === 3 &&
                            <VStack w={ '100%' } mt={ '5%' }>
                                <SimpleGrid w={ '100%' } h={ '100%' } columns={ 2 } spacing={ 2 }>
                                    <HStack w={ '85%' } bgColor={ inputBorderColor } borderRadius={ '20px' }>
                                        <HStack w={ '5%' } />
                                        <HStack w={ '80%' }>
                                            <Text
                                              p={ '2%' }
                                              fontSize={ 19 }
                                              color={ alternateTextColor }
                                              textTransform={ 'uppercase' }>
                                                Sword
                                            </Text>
                                            <CustomIcon type={ 'Sword' } isize={ 19 } />
                                        </HStack>
                                        <HStack w={ '20%' }  bgColor={ backgroundColor } borderRadius={ '20px' }>
                                            <Center w={ '100%' } h={ '100%' }>
                                                <Text fontSize={ 21 }>{ weaponRank.sword_lvl }</Text>
                                            </Center>
                                        </HStack>
                                    </HStack>
                                    <HStack w={ '85%' } bgColor={ inputBorderColor } borderRadius={ '20px' }>
                                        <HStack w={ '5%' } />
                                        <HStack w={ '80%' }>
                                            <Text
                                              p={ '2%' }
                                              fontSize={ 19 }
                                              color={ alternateTextColor }
                                              textTransform={ 'uppercase' }>
                                                Spear
                                            </Text>
                                            <CustomIcon type={ 'Spear' } isize={ 19 } />
                                        </HStack>
                                        <HStack w={ '20%' }  bgColor={ backgroundColor } borderRadius={ '20px' }>
                                            <Center w={ '100%' } h={ '100%' }>
                                                <Text fontSize={ 21 }>{ weaponRank.spear_lvl }</Text>
                                            </Center>
                                        </HStack>
                                    </HStack>
                                    <HStack w={ '85%' } bgColor={ inputBorderColor } borderRadius={ '20px' }>
                                        <HStack w={ '5%' } />
                                        <HStack w={ '80%' }>
                                            <Text
                                              p={ '2%' }
                                              fontSize={ 19 }
                                              color={ alternateTextColor }
                                              textTransform={ 'uppercase' }>
                                                Axe
                                            </Text>
                                            <CustomIcon type={ 'Axe' } isize={ 19 } />
                                        </HStack>
                                        <HStack w={ '20%' }  bgColor={ backgroundColor } borderRadius={ '20px' }>
                                            <Center w={ '100%' } h={ '100%' }>
                                                <Text fontSize={ 21 }>{ weaponRank.axe_lvl }</Text>
                                            </Center>
                                        </HStack>
                                    </HStack>
                                    <HStack w={ '85%' } bgColor={ inputBorderColor } borderRadius={ '20px' }>
                                        <HStack w={ '5%' } />
                                        <HStack w={ '80%' }>
                                            <Text
                                              p={ '2%' }
                                              fontSize={ 19 }
                                              color={ alternateTextColor }
                                              textTransform={ 'uppercase' }>
                                                Dagger
                                            </Text>
                                            <CustomIcon type={ 'Dagger' } isize={ 19 } />
                                        </HStack>
                                        <HStack w={ '20%' }  bgColor={ backgroundColor } borderRadius={ '20px' }>
                                            <Center w={ '100%' } h={ '100%' }>
                                                <Text fontSize={ 21 }>{ weaponRank.dagger_lvl }</Text>
                                            </Center>
                                        </HStack>
                                    </HStack>
                                    <HStack w={ '85%' } bgColor={ inputBorderColor } borderRadius={ '20px' }>
                                        <HStack w={ '5%' } />
                                        <HStack w={ '80%' }>
                                            <Text
                                              p={ '2%' }
                                              fontSize={ 19 }
                                              color={ alternateTextColor }
                                              textTransform={ 'uppercase' }>
                                                Staff
                                            </Text>
                                            <CustomIcon type={ 'Staff' } isize={ 19 } />
                                        </HStack>
                                        <HStack w={ '20%' }  bgColor={ backgroundColor } borderRadius={ '20px' }>
                                            <Center w={ '100%' } h={ '100%' }>
                                                <Text fontSize={ 21 }>{ weaponRank.staff_lvl }</Text>
                                            </Center>
                                        </HStack>
                                    </HStack>
                                    <HStack w={ '85%' } bgColor={ inputBorderColor } borderRadius={ '20px' }>
                                        <HStack w={ '5%' } />
                                        <HStack w={ '80%' }>
                                            <Text
                                              p={ '2%' }
                                              fontSize={ 19 }
                                              color={ alternateTextColor }
                                              textTransform={ 'uppercase' }>
                                                Bow
                                            </Text>
                                            <CustomIcon type={ 'Bow' } isize={ 19 } />
                                        </HStack>
                                        <HStack w={ '20%' }  bgColor={ backgroundColor } borderRadius={ '20px' }>
                                            <Center w={ '100%' } h={ '100%' }>
                                                <Text fontSize={ 21 }>{ weaponRank.bow_lvl }</Text>
                                            </Center>
                                        </HStack>
                                    </HStack>
                                    <HStack w={ '85%' } bgColor={ inputBorderColor } borderRadius={ '20px' }>
                                        <HStack w={ '5%' } />
                                        <HStack w={ '80%' }>
                                            <Text
                                              p={ '2%' }
                                              fontSize={ 19 }
                                              color={ alternateTextColor }
                                              textTransform={ 'uppercase' }>
                                                Fist
                                            </Text>
                                            <CustomIcon type={ 'Fist' } isize={ 19 } />
                                        </HStack>
                                        <HStack w={ '20%' }  bgColor={ backgroundColor } borderRadius={ '20px' }>
                                            <Center w={ '100%' } h={ '100%' }>
                                                <Text fontSize={ 21 }>{ weaponRank.fist_lvl }</Text>
                                            </Center>
                                        </HStack>
                                    </HStack>
                                    <HStack w={ '85%' } bgColor={ inputBorderColor } borderRadius={ '20px' }>
                                        <HStack w={ '5%' } />
                                        <HStack w={ '80%' }>
                                            <Text
                                              p={ '2%' }
                                              fontSize={ 19 }
                                              color={ alternateTextColor }
                                              textTransform={ 'uppercase' }>
                                                Other
                                            </Text>
                                            <CustomIcon type={ 'Other' } isize={ 19 } />
                                        </HStack>
                                        <HStack w={ '20%' }  bgColor={ backgroundColor } borderRadius={ '20px' }>
                                            <Center w={ '100%' } h={ '100%' }>
                                                <Text fontSize={ 21 }>{ weaponRank.other_lvl }</Text>
                                            </Center>
                                        </HStack>
                                    </HStack>
                                </SimpleGrid>
                                <HStack w={ '100%' } top={ '50%' } position={ 'relative' }>
                                    <IconButton ml={ 'auto' } mr={ 0 } size={ 'sm' } colorScheme={ 'orange' } icon={ <SettingsIcon /> } onClick={ clickWeapon } />
                                </HStack>
                            </VStack>
                        }
                        { state === 4 &&
                            <VStack w={ '100%' } mt={ '5%' }>
                                <HStack w={ '100%' } bgColor={ inputBorderColor } borderRadius={ '20px' }>
                                    <HStack w={ '5%' } />
                                    <HStack w={ '60%' }>
                                        <Text
                                            p={ '1%' }
                                            fontSize={ 19 }
                                            color={ alternateTextColor }
                                            textTransform={ 'uppercase' }>
                                            Magic
                                        </Text>
                                    </HStack>
                                    <HStack w={ '40%' }  bgColor={ backgroundColor } borderRadius={ '20px' }>
                                        <Center w={ '100%' } h={ '100%' }>
                                            <Text fontSize={ 21 }>{ ranks.magic_rank }</Text>
                                        </Center>
                                    </HStack>
                                </HStack>
                                <HStack w={ '100%' } bgColor={ inputBorderColor } borderRadius={ '20px' }>
                                    <HStack w={ '5%' } />
                                    <HStack w={ '60%' }>
                                        <Text
                                            p={ '1%' }
                                            fontSize={ 19 }
                                            color={ alternateTextColor }
                                            textTransform={ 'uppercase' }>
                                            Spirit
                                        </Text>
                                    </HStack>
                                    <HStack w={ '40%' }  bgColor={ backgroundColor } borderRadius={ '20px' }>
                                        <Center w={ '100%' } h={ '100%' }>
                                            <Text fontSize={ 21 }>{ ranks.spirit_rank }</Text>
                                        </Center>
                                    </HStack>
                                </HStack>
                                <HStack w={ '100%' } bgColor={ inputBorderColor } borderRadius={ '20px' }>
                                    <HStack w={ '5%' } />
                                    <HStack w={ '60%' }>
                                        <Text
                                            p={ '1%' }
                                            fontSize={ 19 }
                                            color={ alternateTextColor }
                                            textTransform={ 'uppercase' }>
                                            Stat
                                        </Text>
                                    </HStack>
                                    <HStack w={ '40%' }  bgColor={ backgroundColor } borderRadius={ '20px' }>
                                        <Center w={ '100%' } h={ '100%' }>
                                            <Text fontSize={ 21 }>{ ranks.stat_rank }</Text>
                                        </Center>
                                    </HStack>
                                </HStack>
                                <HStack w={ '100%' } top={ '90%' } position={ 'relative' }>
                                    <IconButton ml={ 'auto' } mr={ 0 } size={ 'sm' } colorScheme={ 'orange' } icon={ <SettingsIcon /> } onClick={ clickRank } />
                                </HStack>
                            </VStack>
                        }
                        { state === 5 &&
                            <VStack w={ '100%' } mt={ '5%' }>
                                <HStack w={ '100%' }>
                                    <VStack 
                                      w={ '40%' } 
                                      ml={ '5%' }
                                      mr={ '5%' } 
                                      minH={ '250px' } 
                                      borderColor={ inputBorderColor } 
                                      borderWidth={ 0.5 } 
                                      p={ 2 }
                                      borderRadius={ '20%' }
                                      bgColor={ inputBorderColor }>
                                        <HStack w={ '100%' }>
                                            <Text
                                            w={ '100%' } 
                                            fontSize={ 18 } 
                                            textAlign={ 'center' } 
                                            color={ alternateTextColor }>
                                                { weapon.name }
                                            </Text>
                                        </HStack>
                                        <HStack w={ '100%' }>
                                            <Divider w={ '85%' } mt={ '2%' } color={ alternateTextColor } mr={ 'auto' } ml={ 'auto' } />
                                        </HStack>
                                        <HStack w={ '100%' }>
                                            <Text textTransform={ 'uppercase' } fontSize={ 17 } color={ alternateTextColor }>
                                                dmg: { weapon.damage }
                                            </Text>
                                            <CustomIcon type={ weapon.damage_type } isize={ 20 } />
                                        </HStack>
                                        <HStack w={ '100%' }>
                                            <Text textTransform={ 'uppercase' } fontSize={ 17 } color={ alternateTextColor }>
                                                acc: { weapon.accuracy }
                                            </Text>
                                        </HStack>
                                        <HStack w={ '100%' }>
                                            <Text textTransform={ 'uppercase' } fontSize={ 17 } color={ alternateTextColor }>
                                                crit: { weapon.crit }
                                            </Text>
                                        </HStack>
                                        <HStack w={ '100%' }>
                                            <Text textTransform={ 'uppercase' } fontSize={ 17 } color={ alternateTextColor }>
                                                rank: { weapon.rank }
                                            </Text>
                                        </HStack>
                                    </VStack>
                                    <VStack 
                                      w={ '40%' } 
                                      ml={ '5%' } 
                                      mr={ '5%' } 
                                      minH={ '250px' } 
                                      borderColor={ inputBorderColor } 
                                      borderWidth={ 0.5 } 
                                      p={ 2 } 
                                      borderRadius={ '20%' }
                                      bgColor={ inputBorderColor }>
                                        <HStack w={ '100%' }>
                                            <Text
                                            w={ '100%' } 
                                            fontSize={ 17 } 
                                            textAlign={ 'center' } 
                                            color={ alternateTextColor }>
                                                { armor.name }
                                            </Text>
                                        </HStack>
                                        <HStack w={ '100%' }>
                                            <Divider w={ '85%' } mt={ '2%' } color={ textColor } mr={ 'auto' } ml={ 'auto' } />
                                        </HStack>
                                        <HStack w={ '100%' }>
                                            <Text textTransform={ 'uppercase' } fontSize={ 17 } color={ alternateTextColor }>
                                                power: { armor.power }
                                            </Text>
                                        </HStack>
                                    </VStack>
                                </HStack>
                                <HStack w={ '100%' }>
                                    <IconButton ml={ 'auto' } mr={ 0 } size={ 'sm' } colorScheme={ 'orange' } icon={ <SettingsIcon /> } onClick={ clickItem } />
                                </HStack>
                            </VStack>
                        }
                        { state === 6 &&
                            <VStack
                              w={ '100%' }
                              h={ '300px' }
                              mt={ '5%' }
                              position={'relative'}
                              overflowY={ 'scroll' }
                              css={{
                                '&::-webkit-scrollbar': {
                                    width: '15px',
                                    height: '100%'
                                },
                                '&::-webkit-scrollbar-track': {
                                    background: sbackgroundColor,
                                },
                                '&::-webkit-scrollbar-thumb': {
                                    backgroundColor: inputBackgroundColor,
                                    borderRadius: '20px',
                                    border: `3px solid ${sbackgroundColor}`
                                },
                              }}>
                                { passives.map(passive => (
                                        <Popover>
                                            <PopoverTrigger>
                                                <HStack w={ '100%' } bgColor={ inputBorderColor } borderRadius={ '20px' }>
                                                    <HStack w={ '5%' } />
                                                    <Text w={ '75%' } p={ 1 } color={ alternateTextColor }>{ passive.name }</Text>
                                                </HStack>
                                            </PopoverTrigger>
                                            <PopoverContent border={ 0 } bgColor={ inputBorderColor }>
                                                <PopoverArrow />
                                                <PopoverCloseButton />
                                                <PopoverBody>
                                                    <Text>{ passive.description }</Text>
                                                </PopoverBody>
                                            </PopoverContent>
                                        </Popover>
                                    ))
                                }
                                <HStack w={ '100%' }>
                                    <IconButton ml={ 'auto' } mr={ 0 } size={ 'sm' } colorScheme={ 'orange' } icon={ <SettingsIcon /> } onClick={ clickPassive } />
                                </HStack>
                            </VStack>
                        }
                        { state === 7 &&
                            <VStack
                              w={ '100%' }
                              maxH={ '300px' }
                              mt={ '5%' }
                              position={'relative'}
                              overflowY={ 'scroll' }
                              css={{
                                '&::-webkit-scrollbar': {
                                  width: '15px',
                                  height: '100%'
                                },
                                '&::-webkit-scrollbar-track': {
                                  background: sbackgroundColor,
                                },
                                '&::-webkit-scrollbar-thumb': {
                                  backgroundColor: inputBackgroundColor,
                                  borderRadius: '20px',
                                  border: `3px solid ${sbackgroundColor}`
                                },
                              }}>
                                { skills.map(skill => (
                                    <Popover>
                                        <PopoverTrigger>
                                            <HStack w={ '100%' }>
                                                <Text>{ skill.name }</Text>
                                            </HStack>
                                        </PopoverTrigger>
                                        <PopoverContent>
                                            <PopoverArrow />
                                            <PopoverCloseButton />
                                            <PopoverBody>
                                                <Box></Box>
                                            </PopoverBody>
                                        </PopoverContent>
                                    </Popover>
                                  ))
                                }
                                <HStack w={ '100%' }>
                                    <IconButton ml={ 'auto' } mr={ 0 } size={ 'sm' } colorScheme={ 'orange' } icon={ <SettingsIcon /> } />
                                </HStack>
                          </VStack>
                        }                        
                    </VStack>
                </VStack>
            </Flex>
        </Box>
    )
}

export default CharacterDetail