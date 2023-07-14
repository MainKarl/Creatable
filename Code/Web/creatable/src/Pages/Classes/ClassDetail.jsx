import { 
    Heading, 
    Td, 
    Text, 
    Tr, 
    useColorModeValue,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverTrigger,
    HStack
} from "@chakra-ui/react"
import React, { useState, useEffect } from "react"

const ClassDetail = ({ data }) => {
    let gdata = require('../../data.json')
    let backgroundColor = useColorModeValue(gdata.colors[0].basicbackgroundcolor, gdata.colors[1].basicbackgroundcolor)
    let sbackgroundColor = useColorModeValue(gdata.colors[0].darkerbackgroundcolor1, gdata.colors[1].darkerbackgroundcolor1)
    let inputBackgroundColor = useColorModeValue(gdata.colors[0].darkerbackgroundcolor2, gdata.colors[1].darkerbackgroundcolor2)
    let inputBorderColor = useColorModeValue(gdata.colors[0].darkestbackgroundcolor, gdata.colors[1].darkestbackgroundcolor)
    let textColor = useColorModeValue(gdata.colors[0].textcolor, gdata.colors[1].textcolor)
    let alternateTextColor = useColorModeValue(gdata.colors[0].textalternatecolor1, gdata.colors[1].textalternatecolor1)

    const [id, setId] = useState(0)
    const [name, setName] = useState('')
    const [hp, setHp] = useState(0)
    const [strength, setStrength] = useState(0)
    const [defense, setDefense] = useState(0)
    const [magic, setMagic] = useState(0)
    const [resistance, setResistance] = useState(0)
    const [speed, setSpeed] = useState(0)
    const [skill, setSkill] = useState(0)
    const [luck, setLuck] = useState(0)
    const [mana, setMana] = useState(0)
    const [classSerie, setClassSerie] = useState('')
    const [predecessor, setPredecessor] = useState('')
    const [passives, setPassives] = useState([])

    useEffect(() => {
        setId(data.id)
        setName(data.name)
        setHp(data.hp_growth)
        setStrength(data.strength_growth)
        setDefense(data.defense_growth)
        setMagic(data.magic_growth)
        setResistance(data.resistance_growth)
        setSpeed(data.speed_growth)
        setSkill(data.skill_growth)
        setLuck(data.luck_growth)
        setMana(data.mana_growth)
        setClassSerie(data.class_serie)
        setPredecessor(data.predecessor)
        setPassives(data.passives)
    }, [data])

    return (
        <Tr>
            <Td>
                <Heading size={ 'xs' }>
                    { name }
                </Heading>
                <Text pt={ 2 } fontSize={ 'sm' } color={ alternateTextColor }>
                    { classSerie }
                </Text>
            </Td>
            <Td>
                <Text fontSize={ 'sm' }>{ hp } %</Text>
            </Td>
            <Td>
                <Text fontSize={ 'sm' }>{ strength } %</Text>
                <Text fontSize={ 'sm' }>{ magic } %</Text>
            </Td>
            <Td>
                <Text fontSize={ 'sm' }>{ defense } %</Text>
                <Text fontSize={ 'sm' }>{ resistance } %</Text>
            </Td>
            <Td>
                <Text fontSize={ 'sm' }>{ speed } %</Text>
                <Text fontSize={ 'sm' }>{ skill } %</Text>
            </Td>
            <Td>
                <Text fontSize={ 'sm' }>{ luck } %</Text>
                <Text fontSize={ 'sm' }>{ mana } %</Text>
            </Td>
            <Td>
                <Text fontSize={ 'md' }>{ predecessor }</Text>
            </Td>
            <Td>
                { passives.map(passive => (
                        <Popover>
                            <PopoverTrigger>
                                <HStack w={ '100%' } bgColor={ sbackgroundColor } borderRadius={ '20px' } mb={ '5%' }>
                                    <HStack w={ '5%' } />
                                    <Text fontSize={ 'sm' } color={ alternateTextColor }>{ passive.name }</Text>
                                </HStack>
                            </PopoverTrigger>
                            <PopoverContent border={ 0 } bgColor={ inputBorderColor }>
                                <PopoverArrow />
                                <PopoverCloseButton />
                                <PopoverBody>
                                    <Text fontSize={ 'xs' }>{ passive.description }</Text>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                    ))
                }
            </Td>
        </Tr>
    )
}

export default ClassDetail