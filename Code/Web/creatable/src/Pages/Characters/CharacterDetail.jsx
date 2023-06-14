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
    Divider
} from '@chakra-ui/react'
import { 
    ArrowUpIcon, 
    SmallCloseIcon, 
    ArrowLeftIcon, 
    ArrowRightIcon, 
    SettingsIcon 
} from '@chakra-ui/icons'

const CharacterDetail = (data) => {
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
        'general info',
        'stats',
        'magic',
        'weapons',
        'ranks',
        'items',
        'passives',
        'skills'
    ])

    const [name, setName] = useState('')
    const [level, setLevel] = useState(0)
    const [classe, setClasse] = useState([])
    const [race, setRace] = useState('')
    const [img, setImg] = useState('')

    useEffect(() => {
        console.log(data)
        setName(data.data.name)
        setLevel(data.data.level)
        setClasse(data.data.class)
        setRace(data.data.race)
        setImg(data.data.img)
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
                        <IconButton colorScheme={ 'blue' } size={ 'xs' } icon={ <ArrowUpIcon /> } />
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
                        <IconButton colorScheme={ 'orange' } size={ 'xs' } icon={ <SettingsIcon /> } />
                    </HStack>
                </VStack>
                <VStack
                  w={ '65%' }
                  spacing={ 0 }
                  bgColor={ inputBackgroundColor }
                  minH={ '350px' }
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
                              icon={ <SmallCloseIcon /> } />
                        </HStack>
                    </HStack>
                    <HStack w={ '100%' }>
                        <Divider w={ '85%' } mt={ '2%' } color={ textColor } mr={ 'auto' } ml={ 'auto' } />
                    </HStack>
                    <VStack w={ '100%' }>

                    </VStack>
                </VStack>
            </Flex>
        </Box>
    )
}

export default CharacterDetail