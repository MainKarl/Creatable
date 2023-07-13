import React, { useState, useEffect } from "react"
import { 
    Box,
    Center,
    Divider,
    Flex,
    HStack,
    IconButton,
    Image,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverTrigger,
    Text,
    VStack,
    useColorModeValue
} from "@chakra-ui/react"
import { ArrowLeftIcon, ArrowRightIcon, SettingsIcon, SmallCloseIcon } from "@chakra-ui/icons"

const ArmorDetail = ({ data, modifyArmor, deleteArmor }) => {
    let gdata = require('../../data.json')
    let backgroundColor = useColorModeValue(gdata.colors[0].basicbackgroundcolor, gdata.colors[1].basicbackgroundcolor)
    let sbackgroundColor = useColorModeValue(gdata.colors[0].darkerbackgroundcolor1, gdata.colors[1].darkerbackgroundcolor1)
    let inputBackgroundColor = useColorModeValue(gdata.colors[0].darkerbackgroundcolor2, gdata.colors[1].darkerbackgroundcolor2)
    let inputBorderColor = useColorModeValue(gdata.colors[0].darkestbackgroundcolor, gdata.colors[1].darkestbackgroundcolor)
    let textColor = useColorModeValue(gdata.colors[0].textcolor, gdata.colors[1].textcolor)
    let alternateTextColor = useColorModeValue(gdata.colors[0].textalternatecolor1, gdata.colors[1].textalternatecolor1)

    const [id, setId] = useState(0)
    const [img, setImg] = useState('')
    const [name, setName] = useState('')
    const [power, setPower] = useState(0)
    const [passives, setPassives] = useState([])

    
    useEffect(() => {
        setId(data.armor_id)
        setImg(data.img)
        setName(data.name)
        setPower(data.power)
        setPassives(data.passives)
    }, [data])
    
    return (
        <Box w={ '100%' }>
            <Flex w={ '100%' }>
                <VStack
                  w={ '35%' } 
                  spacing={ 0 } 
                  bgColor={ sbackgroundColor }
                  h={ '390px' }
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
                      boxSize={ '2xs' }
                      fallbackSrc={ 'http://144.217.14.182/img/notFound.jpg' } />
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
                            power:
                        </Text>
                        <Text fontSize={ 15 }>
                            { power }
                        </Text>
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
                        <HStack w={ '80%' } spacing={ 1 }>
                            <Center w={ '100%' } h={ '30px' }>
                                <Text
                                  w={ '35%' }
                                  textTransform={ 'uppercase' }
                                  fontSize={ 19 }>
                                        <Center w={ '100%' } h={ '100%' }>
                                            passives
                                        </Center>
                                </Text>
                            </Center>
                        </HStack>
                        <HStack w={ '10%' } spacing={ 1 }>
                            <IconButton 
                              colorScheme={ 'orange' } 
                              size={ 'xs' }
                              borderRadius={ 'full' }
                              icon={ <SettingsIcon /> }
                              onClick={ _ => modifyArmor(id, name, power, passives) } />
                        </HStack>
                        <HStack w={ '10%' } spacing={ 1 }>
                            <IconButton 
                              colorScheme={ 'red' } 
                              size={ 'xs' }
                              borderRadius={ 'full' }
                              icon={ <SmallCloseIcon /> }
                              onClick={ _ => deleteArmor(id, name) } />
                        </HStack>
                    </HStack>
                    <HStack w={ '100%' }>
                        <Divider w={ '85%' } mt={ '2%' } color={ textColor } mr={ 'auto' } ml={ 'auto' } />
                    </HStack>
                    <VStack w={ '100%' }>
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
                                        <PopoverContent border={ 0 } bgColor={ inputBorderColor } w={ '120%' }>
                                            <PopoverArrow />
                                            <PopoverCloseButton />
                                            <PopoverBody>
                                                <Text>{ passive.description }</Text>
                                            </PopoverBody>
                                        </PopoverContent>
                                    </Popover>
                                ))
                            }
                        </VStack>
                    </VStack>
                </VStack>
            </Flex>
        </Box>
    )
}

export default ArmorDetail