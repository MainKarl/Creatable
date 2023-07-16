import React, { useState, useEffect } from 'react'
import {
    Box,
    Flex,
    HStack,
    VStack,
    useColorModeValue,
    Text,
    Divider,
    SimpleGrid,
    IconButton,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    useDisclosure,
    Button
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import CustomDrawer from '../../Components/CustomDrawer'
import CharacterDetail from './CharacterDetail'
import { PageChanger } from '../../Components/PageChanger'
import CustomFilterSelect from '../../Components/CustomFilterSelect'
import CustomAlertDialog from '../../Components/CustomAlertDialog'

const CharacterList = () => {
    let data = require('../../data.json')

    const [charactersJson, setCharactersJson] = useState([])
    const [characters, setCharacters] = useState([])

    const [minLevel, setMinLevel] = useState(0)
    const [maxLevel, setMaxLevel] = useState(0)

    const [races] = useState([
        {
            id: 0,
            value: 'None'
        },
        {
           id: 1,
           value: 'Human'
        },
        {
            id: 2,
            value: 'Elf'
        },
        {
            id: 3,
            value: 'Demon'
        },
        {
            id: 4,
            value: 'Kitsune'
        },
        {
            id: 5,
            value: 'Wolfskin'
        },
        {
            id: 6,
            value: 'Voidoid'
        },
        {
            id: 7,
            value: 'Undead'
        },
        {
            id: 8,
            value: 'Monster'
        },
        {
            id: 9,
            value: 'Dragonoid'
        }
    ])
    const [filterRace, setFilterRace] = useState(0)
    const [pageFilter, setPageFilter] = useState(1)
    
    let itemCounter = 0
    const resetItemCounter = () => { itemCounter = 0 }

    const { isOpen: cDrawerIsOpen, onOpen: cDrawerOnOpen, onClose: cDrawerOnClose } = useDisclosure()
    const [seeDrawer, setSeeDrawer] = useState(false)
    const [cDrawerData, setCDrawerData] = useState([
        {
            name: 'image',
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
            name: 'race',
            type: 'select',
            actual: '-- Select a race --',
            value: 0,
            data: [
                {
                   id: 1,
                   value: 'Human'
                },
                {
                    id: 2,
                    value: 'Elf'
                },
                {
                    id: 3,
                    value: 'Demon'
                },
                {
                    id: 4,
                    value: 'Kitsune'
                },
                {
                    id: 5,
                    value: 'Wolfskin'
                },
                {
                    id: 6,
                    value: 'Voidoid'
                },
                {
                    id: 7,
                    value: 'Undead'
                },
                {
                    id: 8,
                    value: 'Monster'
                },
                {
                    id: 9,
                    value: 'Dragonoid'
                }
            ],
            hasError: false,
            errors: [
                {
                    name: 'SELECT_NULL',
                    message: 'The race cannot be null.',
                    status: false
                }
            ]
        }
    ])

    const { isOpen: mDrawerIsOpen, onOpen: mDrawerOnOpen, onClose: mDrawerOnClose } = useDisclosure()
    const [seeMDrawer, setSeeMDrawer] = useState(false)
    const [mDrawerData, setMDrawerData] = useState([])
    const [mId, setMId] = useState(0)
    
    const { isOpen: deleteIsOpen, onOpen: deleteOnOpen, onClose: deleteOnClose } = useDisclosure()
    const deleteRef = React.useRef()
    const [dId, setDId] = useState(0)
    const [alertMessage, setAlertMessage] = useState('')
    const [alertTitle, setAlertTitle] = useState('')

    let backgroundColor = useColorModeValue(data.colors[0].basicbackgroundcolor, data.colors[1].basicbackgroundcolor)
    let sbackgroundColor = useColorModeValue(data.colors[0].darkerbackgroundcolor1, data.colors[1].darkerbackgroundcolor1)
    let inputBackgroundColor = useColorModeValue(data.colors[0].darkerbackgroundcolor2, data.colors[1].darkerbackgroundcolor2)
    let inputBorderColor = useColorModeValue(data.colors[0].darkestbackgroundcolor, data.colors[1].darkestbackgroundcolor)
    let textColor = useColorModeValue(data.colors[0].textcolor, data.colors[1].textcolor)
    let alternateTextColor = useColorModeValue(data.colors[0].textalternatecolor1, data.colors[1].textalternatecolor1)

    const verifyCharacter = (item) => { return verifyFilter(item) && verifyPage() }
    const verifyFilter = (item) => {
        if (minLevel > 0 && item.level < minLevel)
            return false
        if (maxLevel > 0 && item.level > maxLevel)
            return false
        if (getRace(filterRace) !== 'None' && item.race !== getRace(filterRace))
            return false
        
        itemCounter++
        return true
    }
    const verifyFilterForPageChanger = (item) => {
        if (minLevel > 0 && item.level < minLevel)
            return false
        if (maxLevel > 0 && item.level > maxLevel)
            return false
        if (getRace(filterRace) !== 'None' && item.race !== getRace(filterRace))
            return false
        
        return true
    }
    const verifyPage = () => {
        if (itemCounter > (pageFilter - 1) * 4 && itemCounter <= pageFilter * 4)
            return true
        return false
    }
    const changePage = (pageNumber, lists) => {
        if (pageNumber > 0 && lists.length > ((pageNumber - 1) * 4)) {
            window.scrollTo(0, 0)
            setPageFilter(pageNumber)
        }
    }
    const getRace = (id) => {
        switch (id) {
            case 1:
                return 'Human'
            case 2:
                return 'Elf'
            case 3:
                return 'Demon'
            case 4:
                return 'Kitsune'
            case 5:
                return 'Wolfskin'
            case 6:
                return 'Voidoid'
            case 7:
                return 'Undead'
            case 8:
                return 'Monster'
            case 9:
                return 'Dragonoid'
            default:
                return 'None'
        }
    }
    const getWeaponRank = (id) => {
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
        }
    }
    const getRank = (id) => {
        switch (id) {
            case 1:
                return 'Basic'
            case 2:
                return 'Expert'
            case 3:
                return 'Sage'
            case 4:
                return 'Dragon'
            case 5:
                return 'God'
        }
    }

    const filterCharacter = () => {        
        setPageFilter(1)
        resetItemCounter()
        setCharacters(charactersJson.filter(verifyCharacter))
    }

    const createCharacter = async (list) => {
        const obj = {
            method: 'POST',
            headers: {
                'Authorization': localStorage.getItem('token_auth')
            },
            body: JSON.stringify({ img: list[0].value, name: list[1].value, race: getRace(list[2].value), class_id: Number(list[3].value), types: list[4].value })
        }
        fetch(data.api_url + 'character/create', obj).then(response => {
            response.json().then(item => {
                getCharacters()
            })
        })
        cDrawerOnClose()
    }

    const clickDeleteCharacters = (id, name) => {
        setDId(id)
        setAlertTitle("Delete Character")
        setAlertMessage(`Delete the character ${name} ?`)
        deleteOnOpen()
    }
    const deleteCharacters = async (c_id) => {
        deleteOnClose()
        fetch(data.api_url + 'character/delete', {
            method: 'POST',
            mode: 'cors',
            cache: 'default',
            redirect: 'manual',
            headers: {
                'Authorization': localStorage.getItem('token_auth'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'character_id': c_id })
        }).then((response) => {
            response.json().then((item) => {
                getCharacters()
            })
        })
    }

    const changeToCharacter = async (id, value) => {
        setMId(id)
        setMDrawerData(value)
        setSeeMDrawer(true)
        mDrawerOnOpen()
    }

    const submitModify = async (list) => {
        if (list[0].name === 'types') {
            fetch(data.api_url + 'character/change_type', {
                method: 'POST',
                mode: 'cors',
                cache: 'default',
                redirect: 'manual',
                headers: {
                    'Authorization': localStorage.getItem('token_auth'),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: mId, types: list[0].value })
            }).then((response) => {
                response.json().then((item) => {
                    setSeeMDrawer(false)
                    getCharacters()
                })
            })
        } else if (list[0].name === 'status') {
            fetch(data.api_url + 'character/change_status', {
                method: 'POST',
                mode: 'cors',
                cache: 'default',
                redirect: 'manual',
                headers: {
                    'Authorization': localStorage.getItem('token_auth'),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: mId, status: list[0].value })
            }).then((response) => {
                response.json().then((item) => {
                    setSeeMDrawer(false)
                    getCharacters()
                })
            })
        } else if (list[0].name === 'HP') {
            fetch(data.api_url+'character/change_stat', {
                method: 'POST',
                mode: 'cors',
                cache: 'default',
                redirect: 'manual',
                headers: {
                    'Authorization': localStorage.getItem('token_auth'),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    id: mId, 
                    hp: list[0].value, 
                    hp_growth: list[1].value,
                    strength: list[2].value,
                    strength_growth: list[3].value,
                    defense: list[4].value,
                    defense_growth: list[5].value,
                    magic: list[6].value,
                    magic_growth: list[7].value,
                    resistance: list[8].value,
                    resistance_growth: list[9].value,
                    speed: list[10].value,
                    speed_growth: list[11].value,
                    skill: list[12].value,
                    skill_growth: list[13].value,
                    luck: list[14].value,
                    luck_growth: list[15].value,
                    mana: list[16].value,
                    mana_growth: list[17].value
                })
            }).then(response => {
                response.json().then(item => {
                    setSeeMDrawer(false)
                    getCharacters()
                })
            })
        } else if (list[0].name === 'Arcane') {
            fetch(data.api_url+'/character/change_magic', {
                method: 'POST',
                mode: 'cors',
                cache: 'default',
                redirect: 'manual',
                headers: {
                    'Authorization': localStorage.getItem('token_auth'),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: mId,
                    arcane: list[0].value,
                    illusion: list[1].value,
                    mind: list[2].value,
                    fire: list[3].value,
                    heat: list[4].value,
                    lava: list[5].value,
                    water: list[6].value,
                    liquid: list[7].value,
                    ice: list[8].value,
                    air: list[9].value,
                    wind: list[10].value,
                    lightning: list[11].value,
                    earth: list[12].value,
                    nature: list[13].value,
                    poison: list[14].value,
                    light: list[15].value,
                    holy: list[16].value,
                    space: list[17].value,
                    dark: list[18].value,
                    curse: list[19].value,
                    necromancy: list[20].value
                })
            }).then(response => {
                response.json().then(item => {
                    setSeeMDrawer(false)
                    getCharacters()
                })
            })
        } else if (list[0].name === 'Sword') {
            fetch(data.api_url+'/character/change_weapon_rank', {
                method: 'POST',
                mode: 'cors',
                cache: 'default',
                redirect: 'manual',
                headers: {
                    'Authorization': localStorage.getItem('token_auth'),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: mId,
                    sword: getWeaponRank(list[0].value),
                    spear: getWeaponRank(list[1].value),
                    axe: getWeaponRank(list[2].value),
                    dagger: getWeaponRank(list[3].value),
                    staff: getWeaponRank(list[4].value),
                    bow: getWeaponRank(list[5].value),
                    fist: getWeaponRank(list[6].value),
                    other: getWeaponRank(list[7].value)
                })
            }).then(response => {
                response.json().then(item => {
                    setSeeMDrawer(false)
                    getCharacters()
                })
            })
        } else if (list[0].name === 'Magic Rank') {
            fetch(data.api_url+'/character/change_rank', {
                method: 'POST',
                mode: 'cors',
                cache: 'default',
                redirect: 'manual',
                headers: {
                    'Authorization': localStorage.getItem('token_auth'),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: mId, magic: getRank(list[0].value), spirit: getRank(list[1].value) })
            }).then(response => {
                response.json().then(item => {
                    setSeeMDrawer(false)
                    getCharacters()
                })
            })
        } else if (list[0].name === 'passive') {
            fetch(data.api_url+'character/add_passive', {
                method: 'POST',
                mode: 'cors',
                cache: 'default',
                redirect: 'manual',
                headers: {
                    'Authorization': localStorage.getItem('token_auth'),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: mId, passive: list[0].value })
            }).then(response => {
                response.json().then(item => {
                    setSeeMDrawer(false)
                    getCharacters()
                })
            })
        } else if (list[0].name === 'class') {
            fetch(data.api_url+'character/change_class', {
                method: 'POST',
                mode: 'cors',
                cache: 'default',
                redirect: 'manual',
                headers: {
                    'Authorization': localStorage.getItem('token_auth'),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: mId, class: list[0].value })
            }).then(response => {
                response.json().then(item => {
                    setSeeMDrawer(false)
                    getCharacters()
                })
            })
        } else if (list[0].name === 'weapon') {
            fetch(data.api_url+'character/change_item', {
                method: 'POST',
                mode: 'cors',
                cache: 'default',
                redirect: 'manual',
                headers: {
                    'Authorization': localStorage.getItem('token_auth'),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: mId, weapon: list[0].value, armor: list[1].value })
            }).then(response => {
                response.json().then(item => {
                    setSeeMDrawer(false)
                    getCharacters()
                })
            })
        }
    }

    const callRest = (nId) => {
        fetch(data.api_url + 'character/rest', {
            method: 'POST',
            mode: 'cors',
            cache: 'default',
            redirect: 'manual',
            headers: {
                'Authorization': localStorage.getItem('token_auth'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: nId })
        }).then(response => {
            response.json().then(item => {
                getCharacters()
            })
        })
    }
    const callLevelUp = (nId) => {
        fetch(data.api_url+'character/levelup/'+nId, {
            method: 'POST',
            mode: 'cors',
            cache: 'default',
            redirect: 'manual',
            headers: {
                'Authorization': localStorage.getItem('token_auth'),
                'Content-Type': 'application/json'
            }
        }).then(response => {
            response.json().then(item => {
                getCharacters()
            })
        })
    }

    const orderBy = (a, b) => {
        if (a.name < b.name){
            return -1
        }
        if (a.name > b.name){
            return 1
        }
        return 0
    }
    const getCharacters = async () => {     
        const obj = {
            method: 'GET',
            mode: 'cors',
            cache: 'default',
            redirect: 'manual',
            headers: {
                'Authorization': localStorage.getItem('token_auth')
            }
        }
        fetch(data.api_url + 'character/get', obj).then(response => response.json().then(items => {
            setCharactersJson(items.sort(orderBy))
        }))
    }
    const getClass = () => {
        fetch(data.api_url + 'class/get_basic', {
            method: 'GET',
            mode: 'cors',
            cache: 'default',
            redirect: 'manual',
            headers: {
                'Authorization': localStorage.getItem('token_auth')
            }
        }).then((response) => {
            response.json().then(async item => {
                const cData = {
                    name: 'class',
                    type: 'select',
                    actual: '-- Select a class --',
                    value: 0,
                    data: item,
                    hasError: false,
                    errors: [
                        {
                            name: 'SELECT_NULL',
                            message: 'The class cannot be null.',
                            status: false
                        }
                    ]
                }
                var list = cDrawerData
                if (list.find(element => element.name.toLowerCase() === 'class') === null ||
                    list.find(element =>  element.name.toLowerCase() === 'class') === undefined)
                    list.push(cData)
                await setCDrawerData(list)
                await getTypes()
            })
        })
    }
    const getTypes = () => {
        fetch(data.api_url + 'type/get', {
            method: 'GET',
            mode: 'cors',
            cache: 'default',
            redirect: 'manual',
            headers: {
                'Authorization': localStorage.getItem('token_auth')
            }
        }).then(response => {
            response.json().then(async item => {
                const tData = {
                    name: 'types',
                    type: 'multi-select',
                    actual: '-- Add a type --',
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
                var list = cDrawerData
                if (list.find(element => element.name.toLowerCase() === 'types') === null ||
                    list.find(element =>  element.name.toLowerCase() === 'types') === undefined)
                    list.push(tData)
                await setCDrawerData(list)
                await setSeeDrawer(true)
            })
        })
    }

    useEffect(() => {
        setCharacters(charactersJson.filter(verifyCharacter))
    }, [pageFilter])
    useEffect(() => {
        setCharacters(charactersJson.filter(verifyCharacter))
    }, [charactersJson])
    useEffect(() => {
        setSeeDrawer(false)
        setPageFilter(1)
        resetItemCounter()
        getClass()
        getCharacters()
    }, [])

    return (
        <Box
          w={ '100%' }
          h={ '100%' }
          bgColor={ backgroundColor }>
            <Flex
              padding={ '0' }>
                <VStack
                  w={' 15%' }
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
                    <VStack w={ '100%' } pb={ '5%' }>
                        <HStack
                          w={ '100%' }
                          textAlign={ 'left' }>
                            <HStack w={ '5%' } />
                            <Text
                              fontSize={ '17px' }
                              w={ '95%' }>
                                Level
                            </Text>
                        </HStack>
                        <HStack w={ '100%' }>
                            <HStack w={ '5%' } />
                            <Text w={ '15%' } fontSize={ '15px' } color={ alternateTextColor }>Min</Text>
                            <NumberInput 
                              w={ '70%' } 
                              defaultValue={ minLevel }
                              min={ 0 } 
                              max={ 999 } 
                              color={ alternateTextColor }
                              borderColor={ alternateTextColor }
                              onChange={ (value) => setMinLevel(value) }>
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
                              defaultValue={ maxLevel } 
                              min={ 0 } 
                              max={ 999 }
                              color={ alternateTextColor }
                              borderColor={ alternateTextColor }
                              onChange={ (value) => setMaxLevel(value) }>
                                <NumberInputField />
                                <NumberInputStepper borderColor={ alternateTextColor }>
                                    <NumberIncrementStepper borderColor={ alternateTextColor } />
                                    <NumberDecrementStepper borderColor={ alternateTextColor } />
                                </NumberInputStepper>
                            </NumberInput>
                            <HStack w={ '5%' } />
                        </HStack>
                    </VStack>
                    <VStack w={ '100%' } pb={ '5%' }>
                        <HStack
                          w={ '100%' }
                          textAlign={ 'left' }>
                            <HStack w={ '5%' } />
                            <Text
                              fontSize={ '17px' }
                              w={ '95%' }>
                                Race
                            </Text>
                        </HStack>
                        <HStack w={ '100%' }>
                            <HStack w={ '5%' } />
                            <HStack w={ '85%' }>
                                <CustomFilterSelect
                                  value={ getRace(filterRace) }
                                  list={ races }
                                  onClick={ event => setFilterRace(event) } />
                            </HStack>
                        </HStack>
                    </VStack>
                    <VStack w={ '100%' } pb={ '5%' }>
                        <HStack
                          w={ '100%' }
                          textAlign={'left'}>
                            <HStack w={ '5%' } />
                            <Text
                              w={ '95%' }
                              fontSize={ '17px' }>
                                Types
                            </Text>
                        </HStack>
                        <HStack w={ '100%'}>
                            <HStack w={ '5%' } />
                            <HStack w={ '85%' }>
                                {/* <CustomMultiSelect 
                                  message={ '-- Select a Type --' }
                                  list={  }
                                  selectedList={ }
                                  onAdd={ }
                                  onRemove={ } /> */}
                            </HStack>
                        </HStack>
                    </VStack>
                    <HStack w={ '90%' } ml={ 'auto' } mr={ 'auto' } pb={ '5%' }>
                        <Button w={ '100%' } colorScheme={ 'orange' } onClick={ filterCharacter }>Filter</Button>
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
                    <HStack 
                      w={'100%'}>
                        <Text
                          w={ '100%' }
                          textAlign={ 'center' }
                          fontSize={ '24px' }
                          fontWeight={ 'bold' }>
                            Character
                            <IconButton colorScheme={ 'whatsapp' } ml={ '1%' } icon={ <AddIcon /> } onClick={ () => cDrawerOnOpen() } />
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
                            { characters.map((character) => (
                                    <CharacterDetail
                                      key={ character.id }
                                      data={ character }
                                      onChangeCharacter={ changeToCharacter }
                                      callRest={ callRest }
                                      callLevelUp={ callLevelUp }
                                      deleteCharacter={ clickDeleteCharacters } />
                                ))
                            }
                        </SimpleGrid>
                        <PageChanger changePage={ changePage } filteredItems={ charactersJson.filter(verifyFilterForPageChanger) } pageFilter={ pageFilter } itemsPerPage={ 4 } />       
                    </VStack>
                </VStack>
            </Flex>
            { seeDrawer && 
                <CustomDrawer
                  nData={ cDrawerData } 
                  item={ 'character' }
                  type={ 'create' }
                  isOpen={ cDrawerIsOpen }
                  onClose={ cDrawerOnClose } 
                  onSubmit={ createCharacter } />
            }
            { seeMDrawer &&
                <CustomDrawer 
                  nData={ mDrawerData }
                  item={ 'character' }
                  type={ 'modify' }
                  isOpen={ mDrawerIsOpen }
                  onClose={ mDrawerOnClose }
                  onSubmit={ submitModify } />
            }
            <CustomAlertDialog 
              isOpen={ deleteIsOpen }
              message={ alertMessage }
              title={ alertTitle }
              ref={ deleteRef }
              onCancel={ deleteOnClose }
              onSubmit={ () => deleteCharacters(dId) } />
        </Box>
    )
}

export default CharacterList