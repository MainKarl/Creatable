import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
    Box,
    Flex,
    HStack,
    VStack,
    useColorModeValue,
    Text,
    Divider,
    Grid,
    GridItem,
    IconButton,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    useDisclosure
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import CustomDrawer from '../../Components/CustomDrawer'
let data = require('../../data.json')

const CharacterList = () => {
    const [charactersJson, setCharactersJson] = useState([])
    const [characters, setCharacters] = useState([])

    const [minLevel, setMinLevel] = useState(0)
    const [maxLevel, setMaxLevel] = useState(0)

    const { isOpen: cDrawerIsOpen, onOpen: cDrawerOnOpen, onClose: cDrawerOnClose } = useDisclosure()
    const [cDrawerData, setCDrawerData] = useState([])

    let url = require('../../data.json')

    let backgroundColor = useColorModeValue(data.colors[0].basicbackgroundcolor, data.colors[1].basicbackgroundcolor)
    let sbackgroundColor = useColorModeValue(data.colors[0].darkerbackgroundcolor1, data.colors[1].darkerbackgroundcolor1)
    let inputBackgroundColor = useColorModeValue(data.colors[0].darkerbackgroundcolor2, data.colors[1].darkerbackgroundcolor2)
    let inputBorderColor = useColorModeValue(data.colors[0].darkestbackgroundcolor, data.colors[1].darkestbackgroundcolor)
    let textColor = useColorModeValue(data.colors[0].textcolor, data.colors[1].textcolor)
    let alternateTextColor = useColorModeValue(data.colors[0].textalternatecolor1, data.colors[1].textalternatecolor1)

    const filterCharacters = () => {

    }

    const createCharacter = async (data) => {

        cDrawerOnClose()
    }

    const getCharacters = async () => {       
        fetch(url.api_url + 'character/get', {
            method: 'GET',
            mode: 'cors',
            cache: 'default',
            redirect: 'manual',
            headers: {
                'Authorization': localStorage.getItem('token_auth')
            }
        }).then((response) => {
            response.json().then((items) => {
                let list = []
                items.map((item) => {
                    list.push({
                        id: item.character_id,
                        name: item.name,
                        race: item.race,
                        level: item.level,
                        img: item.img
                    })
                })
                setCharactersJson(list)
            })
        })
    }

    const getClass = async () => {
        fetch(url.api_url + 'class/get_basic', {
            method: 'GET',
            mode: 'cors',
            cache: 'default',
            redirect: 'manual',
            headers: {
                'Authorization': localStorage.getItem('token_auth')
            }
        }).then((response) => {
            response.json.then((item) => {
                setCDrawerData([
                    {
                        name: 'img',
                        type: 'img',
                        value: '',
                        errors: [
                            {
                                name: 'NULL',
                                message: 'The image cannot be null.'
                            }
                        ]
                    },
                    {
                        name: 'name',
                        type: 'text',
                        value: '',
                        errors: [
                            {
                                name: 'NULL',
                                message: 'The name cannot be null.'
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
                            }
                        ],
                        errors: [
                            {
                                name: 'SELECT_NULL',
                                message: 'The race cannot be null.'
                            }
                        ]
                    },
                    {
                        name: 'class',
                        type: 'select',
                        actual: '-- Select a class --',
                        value: 0,
                        data: item,
                        errors: [
                            {
                                name: 'SELECT_NULL',
                                message: 'The class cannot be null.'
                            }
                        ]
                    }
                ])
            })
        })
    }

    const deleteCharacters = async (event, c_id) => {
        fetch(url.api_url + 'character/delete', {
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

        event.stopPropagation()
        event.preventDefault()
    }

    useEffect(() => {
        filterCharacters()
    }, [charactersJson])

    useEffect(() => {
        getClass()
        getCharacters()
    }, [])

    return (
        <Box
          minH={ '88vh' }
          backgroundColor={ backgroundColor }>
            <Flex
              alignItems={ 'center' } 
              justifyContent={ 'space-between' } 
              padding={ '0' }
              minHeight={ '88vh' }>
                <VStack 
                  w={' 15%' }
                  minH={ '88vh' }
                  bgColor={ sbackgroundColor }>
                    <Text 
                      w={ '80%' } 
                      ml={ 'auto' } 
                      mr={ 'auto' }
                      mt={ '1.5%' }
                      textAlign={ 'center' }
                      fontSize={ '18px' }
                      fontWeight={ 'bold' }>
                        Filtrage
                    </Text>
                    <Divider color={ alternateTextColor } w={ '85%' } mr={ 'auto' } ml={ 'auto' } />
                    <HStack
                      w={ '90%' }
                      textAlign={'left'}>
                        <Text
                          fontSize={ '17px' }>
                            Level
                        </Text>
                    </HStack>
                    <VStack w={ '90%' } ml={ 'auto' } mr={ 'auto' } pb={ '5%' }>
                        <HStack w={ '100%' }>
                            <Text w={ '15%' } fontSize={ '15px' } color={ alternateTextColor }>Min</Text>
                            <NumberInput 
                              w={ '85%' } 
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
                        </HStack>
                        <HStack w={ '100%' }>
                            <Text w={ '15%' } fontSize={ '15px' } color={ alternateTextColor }>Max</Text>
                            <NumberInput 
                              w={ '85%' }
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
                        </HStack>
                    </VStack>
                    <HStack
                      w={ '90%' }
                      textAlign={'left'}>
                        <Text
                          fontSize={ '17px' }>
                            Race
                        </Text>
                    </HStack>
                    <HStack w={ '90%' } ml={ 'auto' } mr={ 'auto' } pb={ '5%' }>
                        
                    </HStack>
                    <HStack
                      w={ '90%' }
                      textAlign={'left'}>
                        <Text
                          fontSize={ '17px' }>
                            Types
                        </Text>
                    </HStack>
                    <HStack w={ '90%' } ml={ 'auto' } mr={ 'auto' } pb={ '5%' }>
                        
                    </HStack>
                </VStack>
                <VStack 
                  w={ '75%' }
                  color={ textColor }
                  padding={ '2%' }>
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
                        <Grid>
                            { characters.map((character) => (
                                    <Link to={ 'characterdetail/'} state={{ character_id: character.id }}>
                                        <GridItem>
                                        </GridItem>
                                    </Link>
                                )) 
                            }                       
                        </Grid>
                    </VStack>
                </VStack>
                <HStack w={ '10%' } />
            </Flex>
            <CustomDrawer
              data={ cDrawerData } 
              item={ 'character' }
              type={ 'create' }
              isOpen={ cDrawerIsOpen }
              onClose={ cDrawerOnClose } 
              onSubmit={ createCharacter }/>
        </Box>
    )
}

export default CharacterList