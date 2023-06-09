import React, { useState, useEffect, useRef } from "react"
import {
    Box,
    Button,
    Divider,
    Flex,
    HStack,
    IconButton,
    Input,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    SimpleGrid,
    Text,
    VStack,
    useColorModeValue,
    useDisclosure
} from '@chakra-ui/react'
import { AddIcon } from "@chakra-ui/icons"
import CustomDrawer from "../../Components/CustomDrawer"
import { PageChanger } from "../../Components/PageChanger"
import CustomAlertDialog from "../../Components/CustomAlertDialog"
import CustomFilterSelect from "../../Components/CustomFilterSelect"
import WeaponDetail from "./WeaponDetail"

const WeaponList = () => {
    let data = require('../../data.json')
    let backgroundColor = useColorModeValue(data.colors[0].basicbackgroundcolor, data.colors[1].basicbackgroundcolor)
    let sbackgroundColor = useColorModeValue(data.colors[0].darkerbackgroundcolor1, data.colors[1].darkerbackgroundcolor1)
    let inputBackgroundColor = useColorModeValue(data.colors[0].darkerbackgroundcolor2, data.colors[1].darkerbackgroundcolor2)
    let inputBorderColor = useColorModeValue(data.colors[0].darkestbackgroundcolor, data.colors[1].darkestbackgroundcolor)
    let textColor = useColorModeValue(data.colors[0].textcolor, data.colors[1].textcolor)
    let alternateTextColor = useColorModeValue(data.colors[0].textalternatecolor1, data.colors[1].textalternatecolor1)

    const [weaponsJson, setWeaponsJson] = useState([])
    const [weapons, setWeapons] = useState([])
    const [passives, setPassives] = useState([])
    const [weaponType] = useState([
        {
            id: 1,
            value: 'Sword'
        },
        {
            id: 2,
            value: 'Spear'
        },
        {
            id: 3,
            value: 'Axe'
        },
        {
            id: 4,
            value: 'Dagger'
        },
        {
            id: 5,
            value: 'Staff'
        },
        {
            id: 6,
            value: 'Bow'
        },
        {
            id: 7,
            value: 'Fist'
        },
        {
            id: 8,
            value: 'Other'
        }
    ])
    const [fWeaponType] = useState([
        {
            id: 0,
            value: 'None'
        },
        {
            id: 1,
            value: 'Sword'
        },
        {
            id: 2,
            value: 'Spear'
        },
        {
            id: 3,
            value: 'Axe'
        },
        {
            id: 4,
            value: 'Dagger'
        },
        {
            id: 5,
            value: 'Staff'
        },
        {
            id: 6,
            value: 'Bow'
        },
        {
            id: 7,
            value: 'Fist'
        },
        {
            id: 8,
            value: 'Other'
        }
    ])
    const [damageType] = useState([
        {
            id: 1,
            value: 'Physical'
        },
        {
            id: 2,
            value: 'Arcane'
        },
        {
            id: 3,
            value: 'Heat'
        },
        {
            id: 4,
            value: 'Lava'
        },
        {
            id: 5,
            value: 'Liquid'
        },
        {
            id: 6,
            value: 'Ice'
        },
        {
            id: 7,
            value: 'Wind'
        },
        {
            id: 8,
            value: 'Lightning'
        },
        {
            id: 9,
            value: 'Nature'
        },
        {
            id: 10,
            value: 'Poison'
        },
        {
            id: 11,
            value: 'Holy'
        },
        {
            id: 12,
            value: 'Space'
        },
        {
            id: 13,
            value: 'Curse'
        },
        {
            id: 14,
            value: 'Necromancy'
        },
        {
            id: 15,
            value: 'Corrupted Holy'
        },
        {
            id: 16,
            value: 'Chaos'
        },
        {
            id: 17,
            value: 'Void'
        }
    ])
    const [fDamageType] = useState([
        {
            id: 0,
            value: 'None'
        },
        {
            id: 1,
            value: 'Physical'
        },
        {
            id: 2,
            value: 'Arcane'
        },
        {
            id: 3,
            value: 'Heat'
        },
        {
            id: 4,
            value: 'Lava'
        },
        {
            id: 5,
            value: 'Liquid'
        },
        {
            id: 6,
            value: 'Ice'
        },
        {
            id: 7,
            value: 'Wind'
        },
        {
            id: 8,
            value: 'Lightning'
        },
        {
            id: 9,
            value: 'Nature'
        },
        {
            id: 10,
            value: 'Poison'
        },
        {
            id: 11,
            value: 'Holy'
        },
        {
            id: 12,
            value: 'Space'
        },
        {
            id: 13,
            value: 'Curse'
        },
        {
            id: 14,
            value: 'Necromancy'
        },
        {
            id: 15,
            value: 'Corrupted Holy'
        },
        {
            id: 16,
            value: 'Chaos'
        },
        {
            id: 17,
            value: 'Void'
        }
    ])
    const [weaponRank] = useState([
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
    ])
    const [fWeaponRank] = useState([
        {
            id: 0,
            value: 'None'
        },
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
    ])

    const [pageFilter, setPageFilter] = useState(1)
    let itemCounter = 0
    const resetItemCounter = () => { itemCounter = 0 }
    const changePage = (pageNumber, lists) => {
        if (pageNumber > 0 && lists.length > ((pageNumber - 1) * 4)) {
            window.scrollTo(0, 0)
            setPageFilter(pageNumber)
        }
    }

    const [searchString, setSearchString] = useState('')
    const [minDamage, setMinDamage] = useState(0)
    const [maxDamage, setMaxDamage] = useState(0)
    const [minAccuracy, setMinAccuracy] = useState(0)
    const [maxAccuracy, setMaxAccuracy] = useState(0)
    const [minCrit, setMinCrit] = useState(0)
    const [maxCrit, setMaxCrit] = useState(0)
    const [filterWeaponType, setFilterWeaponType] = useState(0)
    const [filterWeaponRank, setFilterWeaponRank] = useState(0)
    const [filterDamageType, setFilterDamageType] = useState(0)

    const { isOpen: createIsOpen, onOpen: createOnOpen, onClose: createOnClose } = useDisclosure()
    const [seeCreate, setSeeCreate] = useState(false)
    const [createData, setCreateData] = useState([])

    const { isOpen: modifyIsOpen, onOpen: modifyOnOpen, onClose: modifyOnClose } = useDisclosure()
    const [seeModify, setSeeModify] = useState(false)
    const [modifyData, setModifyData] = useState([])
    const [modifyId, setModifyId] = useState(0)

    const { isOpen: deleteIsOpen, onOpen: deleteOnOpen, onClose: deleteOnClose } = useDisclosure()
    const [seeDelete, setSeeDelete] = useState(false)
    const [deleteId, setDeleteId] = useState(0)

    const alertRef = useRef()
    const [alertMessage, setAlertMessage] = useState("")
    const [alertTitle, setAlertTitle] = useState("")

    const getRankValue = (id) => {
        switch (id) {
            case 1:
                return 'E'
            case 2:
                return 'D'
            case 3:
                return 'C'
            case 4:
                return 'B'
            case 5:
                return 'A'
            case 6:
                return 'S'
            default:
                return 'None'
        }
    }
    const getRankId = (value) => {
        switch (value) {
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
            default:
                return 0              
        }
    }
    const getDamageTypeValue = (id) => {
        switch (id) {
            case 1:
                return 'Physical'
            case 2:
                return 'Arcane'
            case 3:
                return 'Heat'
            case 4:
                return 'Lava'
            case 5:
                return 'Liquid'
            case 6:
                return 'Ice'
            case 7:
                return 'Wind'
            case 8:
                return 'Lightning'
            case 9:
                return 'Nature'
            case 10:
                return 'Poison'
            case 11:
                return 'Holy'
            case 12:
                return 'Space'
            case 13:
                return 'Curse'
            case 14:
                return 'Necromancy'
            case 15:
                return 'Corrupted Holy'
            case 16:
                return 'Chaos'
            case 17:
                return 'Void'
            default:
                return 'None'
        }
    }
    const getDamageTypeId = (value) => {
        switch (value) {
            case 'Physical':
                return 1
            case 'Arcane':
                return 2
            case 'Heat':
                return 3
            case 'Lava':
                return 4
            case 'Liquid':
                return 5
            case 'Ice':
                return 6
            case 'Wind':
                return 7
            case 'Lightning':
                return 8
            case 'Nature':
                return 9
            case 'Poison':
                return 10
            case 'Holy':
                return 11
            case 'Space':
                return 12
            case 'Curse':
                return 13
            case 'Necromancy':
                return 14
            case 'Corrupted Holy':
                return 15
            case 'Chaos':
                return 16
            case 'Void':
                return 17
            default:
                return 0
        }
    }
    const getWeaponTypeValue = (id) => {
        switch (id) {
            case 1:
                return 'Sword'
            case 2:
                return 'Spear'
            case 3:
                return 'Axe'
            case 4:
                return 'Dagger'
            case 5:
                return 'Staff'
            case 6:
                return 'Bow'
            case 7:
                return 'Fist'
            case 8:
                return 'Other'
            default:
                return 'None'
        }
    }
    const getWeaponTypeId = (value) => {
        switch (value) {
            case 'Sword':
                return 1
            case 'Spear':
                return 2
            case 'Axe':
                return 3
            case 'Dagger':
                return 4
            case 'Staff':
                return 5
            case 'Bow':
                return 6
            case 'Fist':
                return 7
            case 'Other':
                return 8
            default:
                return 0
        }
    }

    const verifyWeapon = (item) => { return verifyFilter(item) && verifyPage() }
    const verifyFilter = (item) => {
        if (searchString !== '' && !String(item.name).toUpperCase().includes(searchString.toUpperCase()))
            return false
        if (getWeaponTypeValue(filterWeaponType) !== 'None' && item.weapon_type !== getWeaponTypeValue(filterWeaponType))
            return false
        if (getRankValue(filterWeaponRank) !== 'None' && item.rank !== getRankValue(filterWeaponRank))
            return false
        if (getDamageTypeValue(filterDamageType) !== 'None' && item.damage_type !== getDamageTypeValue(filterDamageType))
            return false
        if (minDamage > 0 && item.damage < minDamage)
            return false
        if (maxDamage > 0 && item.damage > maxDamage)
            return false
        if (minAccuracy > 0 && item.accuracy < minAccuracy)
            return false
        if (maxAccuracy > 0 && item.accuracy > maxAccuracy)
            return false
        if (minCrit > 0 && item.crit < minCrit)
            return false
        if (maxCrit > 0 && item.crit > maxCrit)
            return false
        itemCounter++
        return true
    }
    const verifyFilterPC = (item) => {
        if (searchString !== '' && !String(item.name).toUpperCase().includes(searchString.toUpperCase()))
            return false
        if (getWeaponTypeValue(filterWeaponType) !== 'None' && item.weapon_type !== getWeaponTypeValue(filterWeaponType))
            return false
        if (getRankValue(filterWeaponRank) !== 'None' && item.rank !== getRankValue(filterWeaponRank))
            return false
        if (getDamageTypeValue(filterDamageType) !== 'None' && item.damage_type !== getDamageTypeValue(filterDamageType))
            return false
        if (minDamage > 0 && item.damage < minDamage)
            return false
        if (maxDamage > 0 && item.damage > maxDamage)
            return false
        if (minAccuracy > 0 && item.accuracy < minAccuracy)
            return false
        if (maxAccuracy > 0 && item.accuracy > maxAccuracy)
            return false
        if (minCrit > 0 && item.crit < minCrit)
            return false
        if (maxCrit > 0 && item.crit > maxCrit)
            return false
        return true
    }
    const verifyPage = () => {
        if (itemCounter > (pageFilter - 1) * 4 && itemCounter <= pageFilter * 4)
            return true
        return false
    }
    const filterWeapon = () => {
        setPageFilter(1)
        resetItemCounter()
        setWeapons(weaponsJson.filter(verifyWeapon))
    }

    const clickCreate = () => {
        setCreateData([
            {
                name: 'img',
                type: 'img',
                value: '',
                hasError: false,
                errors: [
                    {
                        name: 'NULL',
                        message: 'The image cannot be null.',
                        status: false
                    }
                ]
            },
            {
                name: 'name',
                type: 'text',
                value: '',
                hasError: false,
                errors: [
                    {
                        name: 'NULL',
                        message: 'The name cannot be null.',
                        status: false
                    }
                ]
            },
            {
                name: 'damage',
                type: 'number',
                value: 0,
                min: -100,
                max: 250,
                hasError: false,
                errors: []
            },
            {
                name: 'accuracy',
                type: 'number',
                value: 0,
                min: -100,
                max: 1000,
                hasError: false,
                errors: []
            },
            {
                name: 'crit',
                type: 'number',
                value: 0,
                min: -100,
                max: 100,
                hasError: false,
                errors: []
            },
            {
                name: 'price',
                type: 'number',
                value: 0,
                min: 0,
                max: 10000,
                hasError: false,
                errors: []
            },
            {
                name: 'rank',
                type: 'select',
                actual: '-- Select a rank --',
                value: 0,
                data: weaponRank,
                hasError: false,
                errors: [
                    {
                        name: 'SELECT_NULL',
                        message: 'The rank cannot be null.',
                        status: false
                    }
                ]
            },
            {
                name: 'damage type',
                type: 'select',
                actual: '-- Select a damage type --',
                value: 0,
                data: damageType,
                hasError: false,
                errors: [
                    {
                        name: 'SELECT_NULL',
                        message: 'The damage type cannot be null.',
                        status: false
                    }
                ]
            },
            {
                name: 'weapon type',
                type: 'select',
                actual: '-- Select a weapon type --',
                value: 0,
                data: weaponType,
                hasError: false,
                errors: [
                    {
                        name: 'SELECT_NULL',
                        message: 'The weapon type cannot be null.',
                        status: false
                    }
                ]
            },
            {
                name: 'passives',
                type: 'multi-select',
                actual: '-- Add a passive --',
                value: '',
                data: passives,
                hasError: false,
                errors: []
            }
        ])
        setSeeCreate(true)
        createOnOpen()
    }
    const createWeapon = async (list) => {
        const obj = {
            method: 'POST',
            headers: {
                'Authorization': localStorage.getItem('token_auth')
            },
            body: JSON.stringify({ img: list[0].value, name: list[1].value, damage: list[2].value, accuracy: list[3].value, crit: list[4].value, price: list[5].value, rank: getRankValue(list[6].value), damage_type: getDamageTypeValue(list[7].value), weapon_type: getWeaponTypeValue(list[8].value), passives: String(list[9].value) })
        }
        fetch(data.api_url+'weapon/create', obj).then(response => {
            response.json().then(item => {
                setSeeCreate(false)
                createOnClose()
                console.log(item)
                getWeapons()
            })
        })
    }
    const clickModify = (id, name, damage, accuracy, crit, price, rank, damage_type, weapon_type, wpassives) => {
        let filteredPassives = ""
        wpassives.map(passive => {
            if (filteredPassives.length === 0)
                filteredPassives = passive.passive_id
            else
                filteredPassives += ";"+passive.passive_id
        })
        setModifyId(id)
        setModifyData([
            {
                name: 'name',
                type: 'text',
                value: name,
                hasError: false,
                errors: [
                    {
                        name: 'NULL',
                        message: 'The name cannot be null.',
                        status: false
                    }
                ]
            },
            {
                name: 'damage',
                type: 'number',
                value: damage,
                min: -100,
                max: 250,
                hasError: false,
                errors: []
            },
            {
                name: 'accuracy',
                type: 'number',
                value: accuracy,
                min: -100,
                max: 1000,
                hasError: false,
                errors: []
            },
            {
                name: 'crit',
                type: 'number',
                value: crit,
                min: -100,
                max: 100,
                hasError: false,
                errors: []
            },
            {
                name: 'price',
                type: 'number',
                value: price,
                min: 0,
                max: 10000,
                hasError: false,
                errors: []
            },
            {
                name: 'rank',
                type: 'select',
                actual: '-- Select a rank --',
                value: getRankId(rank),
                data: weaponRank,
                hasError: false,
                errors: [
                    {
                        name: 'SELECT_NULL',
                        message: 'The rank cannot be null.',
                        status: false
                    }
                ]
            },
            {
                name: 'damage type',
                type: 'select',
                value: getDamageTypeId(damage_type),
                data: damageType,
                hasError: false,
                errors: [
                    {
                        name: 'SELECT_NULL',
                        message: 'The damage type cannot be null.',
                        status: false
                    }
                ]
            },
            {
                name: 'weapon type',
                type: 'select',
                value: getWeaponTypeId(weapon_type),
                data: weaponType,
                hasError: false,
                errors: [
                    {
                        name: 'SELECT_NULL',
                        message: 'The weapon type cannot be null.',
                        status: false
                    }
                ]
            },
            {
                name: 'passives',
                type: 'multi-select',
                actual: '-- Add a passive --',
                value: filteredPassives,
                data: passives,
                hasError: false,
                errors: []
            }
        ])
        setSeeModify(true)
        modifyOnOpen()
    }
    const modifyWeapon = async (list) => {
        const obj = {
            method: 'POST',
            headers: {
                'Authorization': localStorage.getItem('token_auth')
            },
            body: JSON.stringify({ id: modifyId, name: list[0].value, damage: list[1].value, accuracy: list[2].value, crit: list[3].value, price: list[4].value, rank: getRankValue(list[5].value), damage_type: getDamageTypeValue(list[6].value), weapon_type: getWeaponTypeValue(list[7].value), passives: String(list[8].value) })
        }
        fetch(data.api_url+'weapon/modify', obj).then(response => {
            response.json().then(item => {
                setSeeModify(false)
                modifyOnClose()
                console.log(item)
                getWeapons()
            })
        })
    }
    const clickDelete = (id, name) => {
        setDeleteId(id)
        setAlertTitle(`Delete Weapon`)
        setAlertMessage(`Delete the weapon ${name} ?`)
        setSeeDelete(true)
        deleteOnOpen()
    }
    const deleteWeapon = async () => {
        const obj = {
            method: 'POST',
            headers: {
                'Authorization': localStorage.getItem('token_auth')
            },
            body: JSON.stringify({ id: deleteId })
        }
        fetch(data.api_url+'weapon/delete', obj).then(response => response.json().then(item => {
            console.log(item)
            setSeeDelete(false)
            deleteOnClose()
            getWeapons()
        }))
    }

    const orderBy = (a, b) => {
        if (a.name < b.name)
            return -1
        if (a.name > b.name)
            return 1
        return 0
    }
    const getPassives = async () => {
        fetch(data.api_url+'passive/get_weapon', {
            method: 'GET',
            mode: 'cors',
            cache: 'default',
            redirect: 'manual',
            headers: {
                'Authorization': localStorage.getItem('token_auth')
            }
        }).then(response => response.json().then(item => {
                setPassives(item)
            }
        ))
    }
    const getWeapons = async () => {
        fetch(data.api_url+'weapon/get', {
            method: 'GET',
            mode: 'cors',
            cache: 'default',
            redirect: 'manual',
            headers: {
                'Authorization': localStorage.getItem('token_auth')
            }
        }).then(response => response.json().then(item => {
                setWeaponsJson(item.sort(orderBy))
            }
        ))
    }

    useEffect(_ => {
        setWeapons(weaponsJson.filter(verifyWeapon))
    }, [pageFilter])
    useEffect(_ => {
        setWeapons(weaponsJson.filter(verifyWeapon))
    }, [weaponsJson])
    useEffect(_ => {
        setPageFilter(1)
        resetItemCounter()
        getPassives()
        getWeapons()
    }, [])

    return (
        <Box
          w={ '100%' }
          h={ '100%' }
          minH={ '80vh' }
          bgColor={ backgroundColor }>
            <Flex padding={ 0 }>
                <VStack
                  w={ '15%' }
                  h={ '80vh' }
                  overflow={ 'scroll' }
                  position={ 'relative' }
                  bgColor={ sbackgroundColor }
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
                    <Text 
                      w={ '80%' } 
                      ml={ 'auto' } 
                      mr={ 'auto' }
                      mt={ '1.5%' }
                      textAlign={ 'center' }
                      fontSize={ '18px' }
                      fontWeight={ 'bold' }>
                        Filtering
                    </Text>
                    <Divider color={ alternateTextColor } w={ '85%' } mr={ 'auto' } ml={ 'auto' } />
                    <VStack w={ '100%' }>
                        <HStack w={ '100%' } textAlign={ 'left' }>
                            <HStack w={ '5%' } />
                            <Text w={ '95%' } fontSize={ '17px' }>Search</Text>
                        </HStack>
                        <HStack w={ '100%' }>
                            <HStack w={ '5%' } />
                            <Input
                              w={ '85%' }
                              type={ 'text' }
                              bgColor={ inputBackgroundColor }
                              borderColor={ inputBorderColor }
                              onChange={ value => setSearchString(value.target.value) } />
                        </HStack>
                    </VStack>
                    <VStack w={ '100%' }>
                        <HStack w={ '100%' } textAlign={ 'left' }>
                            <HStack w={ '5%' } />
                            <Text w={ '95%' } fontSize={ '17px' }>Damage</Text>
                        </HStack>
                        <HStack w={ '100%' }>
                            <HStack w={ '5%' } />
                            <Text w={ '15%' } fontSize={ '15px' } color={ alternateTextColor }>Min</Text>
                            <NumberInput
                              w={ '70%' }
                              defaultValue={ minDamage }
                              min={ -100 }
                              max={ 250 }
                              color={ alternateTextColor }
                              borderColor={ alternateTextColor }
                              onChange={ value => setMinDamage(value) }>
                                <NumberInputField />
                                <NumberInputStepper borderColor={ alternateTextColor }>
                                    <NumberIncrementStepper borderColor={ alternateTextColor } />
                                    <NumberDecrementStepper borderColor={ alternateTextColor } />
                                </NumberInputStepper>
                            </NumberInput>
                            <HStack w={ '5%' } />
                        </HStack>
                        <HStack w={ '100%' }>
                            <HStack w={ '5%' } />
                            <Text w={ '15%' } fontSize={ '15px' } color={ alternateTextColor }>Max</Text>
                            <NumberInput
                              w={ '70%' }
                              defaultValue={ minDamage }
                              min={ -100 }
                              max={ 250 }
                              color={ alternateTextColor }
                              borderColor={ alternateTextColor }
                              onChange={ value => setMaxDamage(value) }>
                                <NumberInputField />
                                <NumberInputStepper borderColor={ alternateTextColor }>
                                    <NumberIncrementStepper borderColor={ alternateTextColor } />
                                    <NumberDecrementStepper borderColor={ alternateTextColor } />
                                </NumberInputStepper>
                            </NumberInput>
                            <HStack w={ '5%' } />
                        </HStack>
                    </VStack>
                    <VStack w={ '100%' }>
                        <HStack w={ '100%' } textAlign={ 'left' }>
                            <HStack w={ '5%' } />
                            <Text w={ '95%' } fontSize={ '17px' }>Accuracy</Text>
                        </HStack>
                        <HStack w={ '100%' }>
                            <HStack w={ '5%' } />
                            <Text w={ '15%' } fontSize={ '15px' } color={ alternateTextColor }>Min</Text>
                            <NumberInput
                              w={ '70%' }
                              defaultValue={ minDamage }
                              min={ -100 }
                              max={ 1000 }
                              color={ alternateTextColor }
                              borderColor={ alternateTextColor }
                              onChange={ value => setMinAccuracy(value) }>
                                <NumberInputField />
                                <NumberInputStepper borderColor={ alternateTextColor }>
                                    <NumberIncrementStepper borderColor={ alternateTextColor } />
                                    <NumberDecrementStepper borderColor={ alternateTextColor } />
                                </NumberInputStepper>
                            </NumberInput>
                            <HStack w={ '5%' } />
                        </HStack>
                        <HStack w={ '100%' }>
                            <HStack w={ '5%' } />
                            <Text w={ '15%' } fontSize={ '15px' } color={ alternateTextColor }>Max</Text>
                            <NumberInput
                              w={ '70%' }
                              defaultValue={ minDamage }
                              min={ -100 }
                              max={ 1000 }
                              color={ alternateTextColor }
                              borderColor={ alternateTextColor }
                              onChange={ value => setMaxAccuracy(value) }>
                                <NumberInputField />
                                <NumberInputStepper borderColor={ alternateTextColor }>
                                    <NumberIncrementStepper borderColor={ alternateTextColor } />
                                    <NumberDecrementStepper borderColor={ alternateTextColor } />
                                </NumberInputStepper>
                            </NumberInput>
                            <HStack w={ '5%' } />
                        </HStack>
                    </VStack>
                    <VStack w={ '100%' }>
                        <HStack w={ '100%' } textAlign={ 'left' }>
                            <HStack w={ '5%' } />
                            <Text w={ '95%' } fontSize={ '17px' }>Crit</Text>
                        </HStack>
                        <HStack w={ '100%' }>
                            <HStack w={ '5%' } />
                            <Text w={ '15%' } fontSize={ '15px' } color={ alternateTextColor }>Min</Text>
                            <NumberInput
                              w={ '70%' }
                              defaultValue={ minDamage }
                              min={ -100 }
                              max={ 100 }
                              color={ alternateTextColor }
                              borderColor={ alternateTextColor }
                              onChange={ value => setMinCrit(value) }>
                                <NumberInputField />
                                <NumberInputStepper borderColor={ alternateTextColor }>
                                    <NumberIncrementStepper borderColor={ alternateTextColor } />
                                    <NumberDecrementStepper borderColor={ alternateTextColor } />
                                </NumberInputStepper>
                            </NumberInput>
                            <HStack w={ '5%' } />
                        </HStack>
                        <HStack w={ '100%' }>
                            <HStack w={ '5%' } />
                            <Text w={ '15%' } fontSize={ '15px' } color={ alternateTextColor }>Max</Text>
                            <NumberInput
                              w={ '70%' }
                              defaultValue={ minDamage }
                              min={ -100 }
                              max={ 100 }
                              color={ alternateTextColor }
                              borderColor={ alternateTextColor }
                              onChange={ value => setMaxCrit(value) }>
                                <NumberInputField />
                                <NumberInputStepper borderColor={ alternateTextColor }>
                                    <NumberIncrementStepper borderColor={ alternateTextColor } />
                                    <NumberDecrementStepper borderColor={ alternateTextColor } />
                                </NumberInputStepper>
                            </NumberInput>
                            <HStack w={ '5%' } />
                        </HStack>
                    </VStack>
                    <VStack w={ '100%' }>
                        <HStack w={ '100%' } textAlign={ 'left' }>
                            <HStack w={ '5%' } />
                            <Text w={ '95%' } fontSize={ '17px' }>Weapon Type</Text>
                        </HStack>
                        <HStack w={ '100%' }>
                            <HStack w={ '5%' } />
                            <HStack w={ '85%' }>
                                <CustomFilterSelect
                                  value={ getWeaponTypeValue(filterWeaponType) }
                                  list={ fWeaponType }
                                  onClick={ value => setFilterWeaponType(value) } />
                            </HStack>
                        </HStack>
                    </VStack>
                    <VStack w={ '100%' }>
                        <HStack w={ '100%' } textAlign={ 'left' }>
                            <HStack w={ '5%' } />
                            <Text w={ '95%' } fontSize={ '17px' }>Weapon Rank</Text>
                        </HStack>
                        <HStack w={ '100%' }>
                            <HStack w={ '5%' } />
                            <HStack w={ '85%' }>
                                <CustomFilterSelect
                                  value={ getRankValue(filterWeaponRank) }
                                  list={ fWeaponRank }
                                  onClick={ value => setFilterWeaponRank(value) } />
                            </HStack>
                        </HStack>
                    </VStack>
                    <VStack w={ '100%' }>
                        <HStack w={ '100%' } textAlign={ 'left' }>
                            <HStack w={ '5%' } />
                            <Text w={ '95%' } fontSize={ '17px' }>Damage Type</Text>
                        </HStack>
                        <HStack w={ '100%' }>
                            <HStack w={ '5%' } />
                            <HStack w={ '85%' }>
                                <CustomFilterSelect
                                  value={ getDamageTypeValue(filterDamageType) }
                                  list={ fDamageType }
                                  onClick={ value => setFilterDamageType(value) } />
                            </HStack>
                        </HStack>
                    </VStack>
                    <HStack w={ '90%' } pt={ '5%' } pb={ '5%' } ml={ 'auto' } mr={ 'auto' }>
                        <Button w={ '100%' } colorScheme={ 'orange' } onClick={ filterWeapon }>Filter</Button>
                    </HStack>
                </VStack>
                <VStack
                  w={ '85%' }
                  h={ '80vh' }
                  overflow={ 'scroll' }
                  position={ 'relative' }
                  color={ textColor }
                  padding={ '2%' }
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
                    <HStack w={'100%'}>
                        <Text
                          w={ '100%' }
                          textAlign={ 'center' }
                          fontSize={ '24px' }
                          fontWeight={ 'bold' }>
                            Weapon
                            <IconButton colorScheme={ 'whatsapp' } ml={ '1%' } icon={ <AddIcon /> } onClick={ _ => clickCreate() } />
                        </Text>
                    </HStack>
                    <HStack w={ '100%' }>
                        <Divider color={ alternateTextColor } />
                    </HStack>
                    <VStack w={ '100%' }>
                        <SimpleGrid
                          w={ '100%' }
                          h={ '100%' }
                          columns={ 2 }
                          spacing={ 5 }>
                            { weapons.map((weapon) => (
                                    <WeaponDetail key={ weapon.weapon_id } data={ weapon } modifyWeapon={ clickModify } deleteWeapon={ clickDelete } />
                                ))
                            }
                        </SimpleGrid>
                        <PageChanger changePage={ changePage } filteredItems={ weaponsJson.filter(verifyFilterPC) } pageFilter={ pageFilter } itemsPerPage={ 4 } />
                    </VStack>
                </VStack>
            </Flex>
            { seeCreate &&
                <CustomDrawer
                  nData={ createData }
                  item={ 'weapon' }
                  type={ 'create' }
                  isOpen={ createIsOpen }
                  onClose={ createOnClose }
                  onSubmit={ createWeapon } />
            }
            { seeModify &&
                <CustomDrawer
                  nData={ modifyData }
                  item={ 'weapon' }
                  type={ 'modify' }
                  isOpen={ modifyIsOpen }
                  onClose={ modifyOnClose }
                  onSubmit={ modifyWeapon } />
            }
            { seeDelete &&
                 <CustomAlertDialog
                   isOpen={ deleteIsOpen }
                   message={ alertMessage }
                   title={ alertTitle }
                   ref={ alertRef }
                   onCancel={ deleteOnClose }
                   onSubmit={ deleteWeapon } />
            }
        </Box>
    )
}

export default WeaponList