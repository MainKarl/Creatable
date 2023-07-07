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
import CustomIcon from "../../Components/CustomIcon"
import { ArrowLeftIcon, ArrowRightIcon, SettingsIcon, SmallCloseIcon } from "@chakra-ui/icons"

const WeaponDetail = ({ data, modifyWeapon, deleteWeapon }) => {
    let gdata = require('../../data.json')
    let backgroundColor = useColorModeValue(gdata.colors[0].basicbackgroundcolor, gdata.colors[1].basicbackgroundcolor)
    let sbackgroundColor = useColorModeValue(gdata.colors[0].darkerbackgroundcolor1, gdata.colors[1].darkerbackgroundcolor1)
    let inputBackgroundColor = useColorModeValue(gdata.colors[0].darkerbackgroundcolor2, gdata.colors[1].darkerbackgroundcolor2)
    let inputBorderColor = useColorModeValue(gdata.colors[0].darkestbackgroundcolor, gdata.colors[1].darkestbackgroundcolor)
    let textColor = useColorModeValue(gdata.colors[0].textcolor, gdata.colors[1].textcolor)
    let alternateTextColor = useColorModeValue(gdata.colors[0].textalternatecolor1, gdata.colors[1].textalternatecolor1)

    const [state, setState] = useState(0)
    const changeState = () => state === 0 ? setState(1) : setState(0)
    const [stateMessage, setStateMessage] = useState([
        'general',
        'passives'
    ])

    const [id, setId] = useState(0)
    const [name, setName] = useState('')
    const [img, setImg] = useState('')
    const [damage, setDamage] = useState(0)
    const [accuracy, setAccuracy] = useState(0)
    const [crit, setCrit] = useState(0)
    const [price, setPrice] = useState(0)
    const [rank, setRank] = useState('')
    const [damageType, setDamageType] = useState('')
    const [weaponType, setWeaponType] = useState('')
    const [passives, setPassives] = useState([])

    useEffect(() => {
        setId(data.weapon_id)
        setName(data.name)
        setImg(data.img)
        setDamage(data.damage)
        setAccuracy(data.accuracy)
        setCrit(data.crit)
        setPrice(data.price)
        setRank(data.rank)
        setDamageType(data.damage_type)
        setWeaponType(data.weapon_type)
        setPassives(data.passives)
    }, [data])

    return (
        <Box w={ '100%' }>
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
                            Type:
                        </Text>
                        <Text fontSize={ 15 }>
                            { weaponType }
                        </Text>
                        <CustomIcon isize={ 20 } type={ weaponType } />
                    </HStack>
                    <HStack w={ '100%' } pl={ '5%' } pb={ '2px' }>
                        <Text 
                          textTransform={ 'uppercase' }
                          fontSize={ 16 }>
                            Rank:
                        </Text>
                        <Text fontSize={ 15 }>
                            { rank }
                        </Text>
                    </HStack>
                    <HStack w={ '100%' } pl={ '5%' } pb={ '2px' }>
                        <Text 
                          textTransform={ 'uppercase' }
                          fontSize={ 16 }>
                            Price:
                        </Text>
                        <Text fontSize={ 15 }>
                            { price }
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
                        <HStack w={ '90%' } spacing={ 1 }>
                            <Center w={ '100%' } h={ '30px' }>
                                <IconButton colorScheme={ 'orange' } size={ 'sm' } borderRadius={ 'full' } icon={ <ArrowLeftIcon /> } mr={ '10px' } onClick={ _ => changeState() } />
                                <Text
                                  w={ '35%' }
                                  textTransform={ 'uppercase' }
                                  fontSize={ 19 }>
                                        <Center w={ '100%' } h={ '100%' }>
                                            { stateMessage[state] }
                                        </Center>
                                </Text>
                                <IconButton colorScheme={ 'orange' } size={ 'sm' } borderRadius={ 'full' } icon={ <ArrowRightIcon /> } ml={ '10px' } onClick={ _ => changeState() } />
                            </Center>
                        </HStack>
                        <HStack w={ '5%' } spacing={ 1 }>
                            <IconButton 
                              colorScheme={ 'orange' } 
                              size={ 'xs' }
                              borderRadius={ 'full' }
                              icon={ <SettingsIcon /> }
                              onClick={ _ => modifyWeapon(id, name, damage, accuracy, crit, price, rank, damageType, weaponType, passives, img) } />
                        </HStack>
                        <HStack w={ '5%' } spacing={ 1 }>
                            <IconButton 
                              colorScheme={ 'red' } 
                              size={ 'xs' }
                              borderRadius={ 'full' }
                              icon={ <SmallCloseIcon /> }
                              onClick={ _ => deleteWeapon(id, name) } />
                        </HStack>
                    </HStack>
                    <HStack w={ '100%' }>
                        <Divider w={ '85%' } mt={ '2%' } color={ textColor } mr={ 'auto' } ml={ 'auto' } />
                    </HStack>
                    <VStack w={ '100%' }>
                        { state === 0 &&
                            <VStack w={ '100%' } mt={ '5%' }>
                                <HStack w={ '100%' } bgColor={ inputBorderColor } borderRadius={ '20px' }>
                                    <HStack w={ '5%' } />
                                    <HStack w={ '60%' }>
                                        <Text
                                            p={ '1%' }
                                            fontSize={ 19 }
                                            color={ alternateTextColor }
                                            textTransform={ 'uppercase' }>
                                            damage
                                        </Text>
                                    </HStack>
                                    <HStack w={ '40%' }  bgColor={ backgroundColor } borderRadius={ '20px' }>
                                        <Center w={ '100%' } h={ '100%' }>
                                            <Text fontSize={ 21 } mr={ '6px' }>{ damage }</Text>
                                            <CustomIcon isize={ 21 } type={ damageType } />
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
                                            accuracy
                                        </Text>
                                    </HStack>
                                    <HStack w={ '40%' }  bgColor={ backgroundColor } borderRadius={ '20px' }>
                                        <Center w={ '100%' } h={ '100%' }>
                                            <Text fontSize={ 21 }>{ accuracy } %</Text>
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
                                            crit
                                        </Text>
                                    </HStack>
                                    <HStack w={ '40%' }  bgColor={ backgroundColor } borderRadius={ '20px' }>
                                        <Center w={ '100%' } h={ '100%' }>
                                            <Text fontSize={ 21 }>{ crit } %</Text>
                                        </Center>
                                    </HStack>
                                </HStack>
                            </VStack>
                        }
                        { state === 1 &&
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
                            </VStack>
                        }
                    </VStack>
                </VStack>
            </Flex>
        </Box>
    )
}

export default WeaponDetail