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
    const [stats, setStats] = useState([])
    const [weaponRank, setWeaponRank] = useState([])
    const [magic, setMagic] = useState([])

    useEffect(() => {
        console.log(data)
        setName(data.data.name)
        setLevel(data.data.level)
        setClasse(data.data.class)
        setRace(data.data.race)
        setImg(data.data.img)
        setStats({
            hp: data.data.hp,
            combat_hp: data.data.combat_hp,
            hp_growth: data.data.hp_growth,
            strength: data.data.strength,
            combat_strength: data.data.combat_strength,
            strength_growth: data.data.strength_growth,
            defense: data.data.defense,
            combat_defense: data.data.combat_defense,
            defense_growth: data.data.defense_growth,
            magic: data.data.magic,
            combat_magic: data.data.combat_magic,
            magic_growth: data.data.magic_growth,
            resistance: data.data.resistance,
            combat_resistance: data.data.combat_resistance,
            resistance_growth: data.data.resistance_growth,
            speed: data.data.speed,
            combat_speed: data.data.combat_speed,
            speed_growth: data.data.speed_growth,
            skill: data.data.skill,
            combat_skill: data.data.combat_skill,
            skill_growth: data.data.skill_growth,
            luck: data.data.luck,
            combat_luck: data.data.combat_luck,
            luck_growth: data.data.luck_growth,
            mana: data.data.mana,
            combat_mana: data.data.combat_mana,
            mana_growth: data.data.mana_growth
        })
        setWeaponRank({
            sword_lvl: data.data.sword_lvl,
            spear_lvl: data.data.spear_lvl,
            axe_lvl: data.data.axe_lvl,
            dagger_lvl: data.data.dagger_lvl,
            staff_lvl: data.data.staff_lvl,
            bow_lvl: data.data.bow_lvl,
            fist_lvl: data.data.fist_lvl,
            other_lvl: data.data.other_lvl
        })
        setMagic({
            arcane_lvl: data.data.arcane_lvl,
            illusion_lvl: data.data.illusion_lvl,
            mind_lvl: data.data.mind_lvl,
            fire_lvl: data.data.fire_lvl,
            lava_lvl: data.data.lava_lvl,
            heat_lvl: data.data.heat_lvl,
            water_lvl: data.data.water_lvl,
            liquid_lvl: data.data.liquid_lvl,
            ice_lvl: data.data.ice_lvl,
            air_lvl: data.data.air_lvl,
            wind_lvl: data.data.wind_lvl,
            lightning_lvl: data.data.lightning_lvl,
            earth_lvl: data.data.earth_lvl,
            nature_lvl: data.data.nature_lvl,
            poison_lvl: data.data.poison_lvl,
            light_lvl: data.data.light_lvl,
            holy_lvl: data.data.holy_lvl,
            space_lvl: data.data.space_lvl,
            dark_lvl: data.data.dark_lvl,
            curse_lvl: data.data.curse_lvl,
            necromancy_lvl: data.data.necromancy_lvl
        })
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
                              icon={ <SmallCloseIcon /> } />
                        </HStack>
                    </HStack>
                    <HStack w={ '100%' }>
                        <Divider w={ '85%' } mt={ '2%' } color={ textColor } mr={ 'auto' } ml={ 'auto' } />
                    </HStack>
                    <VStack w={ '100%' }>
                        { state === 0
                            
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
                                    <IconButton ml={ 'auto' } mr={ 0 } size={ 'sm' } colorScheme={ 'orange' } icon={ <SettingsIcon /> } />
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
                                    <IconButton ml={ 'auto' } mr={ 0 } size={ 'sm' } colorScheme={ 'orange' } icon={ <SettingsIcon /> } />
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
                                    <IconButton ml={ 'auto' } mr={ 0 } size={ 'sm' } colorScheme={ 'orange' } icon={ <SettingsIcon /> } />
                                </HStack>
                            </VStack>
                        }
                        { state === 4

                        }
                        { state === 5

                        }
                        { state === 6

                        }
                        { state === 7

                        }                        
                    </VStack>
                </VStack>
            </Flex>
        </Box>
    )
}

export default CharacterDetail