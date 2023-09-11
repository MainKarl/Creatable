import {
    Box,
    HStack,
    VStack,
    IconButton,
    useColorModeValue,
    Center,
    Heading,
    Text,
    Divider,
    Image
} from '@chakra-ui/react'
import { 
    ArrowLeftIcon, 
    ArrowRightIcon
} from '@chakra-ui/icons'
import React, { useState, useEffect } from 'react'

const CharacterAnalysis = ({ data, actualAttack, enDamage, changeAttack }) => {
    const gdata = require('../data.json')
    let backgroundColor = useColorModeValue(gdata.colors[0].basicbackgroundcolor, gdata.colors[1].basicbackgroundcolor)
    let sbackgroundColor = useColorModeValue(gdata.colors[0].darkerbackgroundcolor1, gdata.colors[1].darkerbackgroundcolor1)
    let inputBackgroundColor = useColorModeValue(gdata.colors[0].darkerbackgroundcolor2, gdata.colors[1].darkerbackgroundcolor2)
    let inputBorderColor = useColorModeValue(gdata.colors[0].darkestbackgroundcolor, gdata.colors[1].darkestbackgroundcolor)
    let textColor = useColorModeValue(gdata.colors[0].textcolor, gdata.colors[1].textcolor)
    let alternateTextColor = useColorModeValue(gdata.colors[0].textalternatecolor1, gdata.colors[1].textalternatecolor1)


    const [name, setName] = useState('')
    const [img, setImg] = useState('')
    const [HP, setHP] = useState(0)
    const getPotentialHP = () => { 
        if (HP > enDamage)
            return (HP - enDamage)
        return 0
    }
    const [attack, setAttack] = useState([])

    useEffect(() => {
        setName(data.name)
        setImg(data.img)
        setHP(data.hp)
        setAttack(data.attacks[0])
    }, [data])

    useEffect(() => {
        console.log(data.attacks[actualAttack])
        setAttack(data.attacks[actualAttack])
    }, [actualAttack])

    return (
        <Box
          w={ '100%' }
          m={ 3 }>
            <Center w={ '100%' } h={ '100%' }>
                <VStack
                  w={ '100%' }
                  p={ 2 }
                  bgColor={ inputBackgroundColor }
                  borderColor={ inputBorderColor }>
                    <Image
                      src={ img }
                      bgColor={ sbackgroundColor }
                      borderRadius={ '25%' }
                      fit={ 'contain' }
                      boxSize={ '2xs' } />
                    <Heading size={ 'xs' } textTransform={ 'uppercase' }>
                        { name }
                    </Heading>
                    <Divider color={ alternateTextColor } w={ '85%' } />
                    <HStack
                      w={ '100%' }
                      p={ 2 }>
                        <Center w={ '100%' } h={ '100%' }>
                            <Text textTransform={ 'uppercase' } w={ '15%' }>HP:</Text>
                            <Text w={ '10%' }>{ HP }</Text>
                            <Text w={ '15%' }>{ '-->' }</Text>
                            <Text w={ '10%' }>{ getPotentialHP() }</Text>
                        </Center>
                    </HStack>
                    <HStack w={ '100%' } p={ 1 }>
                        <Center w={ '100%' } h={ '100%' }>
                            <IconButton 
                               colorScheme={ 'orange' }
                               size={ 'sm' }
                               icon={ <ArrowLeftIcon /> }
                               onClick={ _ => changeAttack(0) }
                               m={ 2 } />
                            <Text textTransform={ 'uppercase' } size={ 'sm' }>{ String(attack.name) }</Text>
                            <IconButton 
                               colorScheme={ 'orange' }
                               size={ 'sm' }
                               icon={ <ArrowRightIcon /> }
                               onClick={ _ => changeAttack(1) }
                               m={ 2 } />
                        </Center>
                    </HStack>
                    <HStack w={ '100%' } p={ 2 }>
                        <Text textTransform={ 'uppercase' } w={ '20%' } ml={ '5%' }>Dmg:</Text>
                        <Text w={ '15%' }>{ String(attack.damage) }</Text>
                    </HStack>
                    <HStack w={ '100%' } p={ 2 }>
                        <Text textTransform={ 'uppercase' } w={ '20%' } ml={ '5%' }>Acc:</Text>
                        <Text w={ '15%' }>{ String(attack.accuracy) }</Text>
                    </HStack>
                    <HStack w={ '100%' } p={ 2 }>
                        <Text textTransform={ 'uppercase' } w={ '20%' } ml={ '5%' }>Crit:</Text>
                        <Text w={ '15%' }>{ String(attack.crit) }</Text>
                    </HStack>
                </VStack>
            </Center>
        </Box>
    )
}

export default CharacterAnalysis