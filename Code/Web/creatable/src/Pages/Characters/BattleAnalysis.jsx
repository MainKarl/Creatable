import { 
    HStack,
    VStack, 
    useColorModeValue,
    Center,
    Heading,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Divider,
    Text,
    Checkbox,
    Button
} from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import CharacterSelection from '../../Components/CharacterSelection'
import CharacterAnalysis from '../../Components/CharacterAnalysis'

const BattleAnalysis = () => {
    const data = require('../../data.json')
    let backgroundColor = useColorModeValue(data.colors[0].basicbackgroundcolor, data.colors[1].basicbackgroundcolor)
    let sbackgroundColor = useColorModeValue(data.colors[0].darkerbackgroundcolor1, data.colors[1].darkerbackgroundcolor1)
    let inputBackgroundColor = useColorModeValue(data.colors[0].darkerbackgroundcolor2, data.colors[1].darkerbackgroundcolor2)
    let inputBorderColor = useColorModeValue(data.colors[0].darkestbackgroundcolor, data.colors[1].darkestbackgroundcolor)
    let textColor = useColorModeValue(data.colors[0].textcolor, data.colors[1].textcolor)
    let alternateTextColor = useColorModeValue(data.colors[0].textalternatecolor1, data.colors[1].textalternatecolor1)

    const [characters, setCharacters] = useState([])
    const [analysisState, setAnalysisState] = useState(false)
    const [selectedChr1, setSelectedChr1] = useState(0)
    const changeSelectedChr1 = (item) => {
        setSelectedChr1(item)
        setAnalysisState(false)
    }
    const isSelectedChr1 = (item) => { return item.id === selectedChr1 }
    const getSelectedChr1 = () => {
        if (selectedChr1 === 0)
            return 'None'
        return characters.find(isSelectedChr1).value
    }
    const [character1, setCharacter1] = useState([])
    const [atCharacter1, setAtCharacter1] = useState(0)
    const changeAtCharacter1 = (move, max) => {
        if (move === 0) {
            if (atCharacter1 === 0)
                setAtCharacter1(max)
            else
                setAtCharacter1(atCharacter1--)
        } else {
            if (atCharacter1 === max)
                setAtCharacter1(0)
            else
                setAtCharacter1(atCharacter1++)
        }
    }
    
    const [selectedChr2, setSelectedChr2] = useState(0)
    const changeSelectedChr2 = (item) => {
        setSelectedChr2(item)
        setAnalysisState(false)
    }
    const isSelectedChr2 = (item) => { return item.id === selectedChr2 }
    const getSelectedChr2 = () => {
        if (selectedChr2 === 0)
            return 'None'
        return characters.find(isSelectedChr2).value
    }
    const [character2, setCharacter2] = useState([])
    const [atCharacter2, setAtCharacter2] = useState(0)
    const changeAtCharacter2 = (move, max) => {
        if (move === 0) {
            if (atCharacter2 === 0)
                setAtCharacter2(max)
            else
                setAtCharacter2(atCharacter1--)
        } else {
            if (atCharacter2 === max)
                setAtCharacter2(0)
            else
                setAtCharacter2(atCharacter1++)
        }
    }

    const [tileAway, setTileAway] = useState(0)
    const [attackerCloseAlly, setAttackerCloseAlly] = useState(false)
    const [defenderCloseAlly, setDefenderCloseAlly] = useState(false)
    const [isNight, setIsNight] = useState(false)
    const [isOutdoor, setIsOutdoor] = useState(false)
    const [canRetaliate, setCanRetaliate] = useState(false)
    const [attackerIsInspired, setAttackerIsInspired] = useState(false)
    const [defenderIsInspired, setDefenderIsInspired] = useState(false)

    const orderBy = (a, b) => {
        if (a.value < b.value){
            return -1
        }
        if (a.value > b.value){
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
        fetch(data.api_url+'character/get_list', obj).then(response => response.json().then(item => {
            setCharacters(item.sort(orderBy))
        }))
    }
    const getAnalyse = async () => {
        if (selectedChr1 !== 0 && selectedChr2 !== 0) {
            const obj = {
                method: 'GET',
                mode: 'cors',
                cache: 'default',
                redirect: 'manual',
                headers: {
                    'Authorization': localStorage.getItem('token_auth'),
                    'Attacker': selectedChr1,
                    'Defender': selectedChr2,
                    'attackerCloseAlly': attackerCloseAlly,
                    'defenderCloseAlly': defenderCloseAlly,
                    'isNight': isNight,
                    'isOutdoor': isOutdoor,
                    'canRetaliate': canRetaliate,
                    'attackerIsInspired': attackerIsInspired,
                    'defenderIsInspired': defenderIsInspired,
                    'tileAway': tileAway
                }
            }
            fetch(data.api_url+'character/get_analysis', obj).then(response => response.json().then(item => {
                setCharacter1(item[0])
                setCharacter2(item[1])
                setAnalysisState(true)
            }))
        }
    }
    const getBattle = async () => {
        if (selectedChr1 !== 0 && selectedChr2 !== 0) {

        }
    }
    const getWait = async () => {
        if (selectedChr1 !== 0) {
            
        }
    }

    useEffect(() => {
        getCharacters()
    }, [])

    return (
        <HStack 
          w={ '100%' }
          h={ '80vh' }
          overflow={ 'scroll' }
          position={ 'relative' }
          bgColor={ backgroundColor }
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
            <VStack w={ '40%' } p={ 5 }>
                <Center w={ '100%' } h={ '100%' }>
                    <VStack 
                      w={ '100%' }
                      p={ 4 }
                      bgColor={ sbackgroundColor }
                      borderColor={ inputBackgroundColor }>
                        <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                            attacker
                        </Heading>
                        <Divider color={ alternateTextColor } w={ '85%' } />
                        <CharacterSelection
                          list={ characters }
                          value={ getSelectedChr1() }
                          onClick={ event => changeSelectedChr1(event) } />
                        { analysisState &&
                            <CharacterAnalysis 
                              data={ character1 }
                              actualAttack={ atCharacter1 }
                              enDamage={ character2.attacks[atCharacter2].damage }
                              changeAttack={ (event) => changeAtCharacter1(event, character1.attacks.length) } />
                        }
                    </VStack>
                </Center>
            </VStack>
            <VStack w={ '20%' } p={ 2 }>
                <Center w={ '100%' } h={ '100%' }>
                    <VStack 
                      w={ '100%' } 
                      p={ 5 }
                      bgColor={ sbackgroundColor }>
                        <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                            options
                        </Heading>
                        <Divider color={ alternateTextColor } w={ '85%' } />
                        <VStack w={ '100%' } pb={ 2 }>
                            <HStack w={ '100%' }>
                                <HStack w={ '5%' } />
                                <Text w={ '95%' } fontSize={ '17px' }>Tile away</Text>
                            </HStack>
                            <HStack w={ '100%' }>
                                <HStack w={ '5%' } />
                                <NumberInput
                                  w={ '70%' }
                                  defaultValue={ tileAway }
                                  min={ 0 }
                                  max={ 1000000 }
                                  color={ alternateTextColor }
                                  borderColor={ alternateTextColor }
                                  onChange={ value => setTileAway(value) }>
                                    <NumberInputField />
                                    <NumberInputStepper>
                                        <NumberIncrementStepper borderColor={ alternateTextColor } />
                                        <NumberDecrementStepper borderColor={ alternateTextColor } />
                                    </NumberInputStepper>
                                </NumberInput>
                            </HStack>
                        </VStack>
                        <VStack w={ '100%' } pb={ 2 }>
                            <Checkbox 
                              colorScheme={ 'orange' } 
                              onChange={ event => setIsNight(event.target.checked) }
                              w={ '95%' }
                              mr={ 'auto' }
                              ml={ '5%' }>
                                Is it night?
                            </Checkbox>
                        </VStack>
                        <VStack w={ '100%' } pb={ 2 }>
                            <Checkbox 
                              colorScheme={ 'orange' } 
                              onChange={ event => setIsOutdoor(event.target.checked) }
                              w={ '95%' }
                              mr={ 'auto' }
                              ml={ '5%' }>
                                Is the fight outdoor?
                            </Checkbox>
                        </VStack>
                        <VStack w={ '100%' } pb={ 2 }>
                            <Checkbox 
                              colorScheme={ 'orange' } 
                              onChange={ event => setAttackerCloseAlly(event.target.checked) }
                              w={ '95%' }
                              mr={ 'auto' }
                              ml={ '5%' }>
                                Attacker close to ally?
                            </Checkbox>
                        </VStack>
                        <VStack w={ '100%' } pb={ 2 }>
                            <Checkbox 
                              colorScheme={ 'orange' } 
                              onChange={ event => setDefenderCloseAlly(event.target.checked) }
                              w={ '95%' }
                              mr={ 'auto' }
                              ml={ '5%' }>
                                Defender close to ally?
                            </Checkbox>
                        </VStack>
                        <VStack w={ '100%' } pb={ 2 }>
                            <Checkbox 
                              colorScheme={ 'orange' } 
                              onChange={ event => setAttackerIsInspired(event.target.checked) }
                              w={ '95%' }
                              mr={ 'auto' }
                              ml={ '5%' }>
                                Attacker is inspired?
                            </Checkbox>
                        </VStack>
                        <VStack w={ '100%' } pb={ 2 }>
                            <Checkbox 
                              colorScheme={ 'orange' } 
                              onChange={ event => setDefenderIsInspired(event.target.checked) }
                              w={ '95%' }
                              mr={ 'auto' }
                              ml={ '5%' }>
                                Defender is inspired?
                            </Checkbox>
                        </VStack>
                        <VStack w={ '100%' } pb={ 2 }>
                            <Checkbox
                              colorScheme={ 'orange' } 
                              onChange={ event => setCanRetaliate(event.target.checked) }
                              w={ '95%' }
                              mr={ 'auto' }
                              ml={ '5%' }>
                                Defender can retaliate?
                            </Checkbox>
                        </VStack>
                        <Button
                          w={ '60%' }
                          colorScheme={ 'orange' }
                          onClick={ getAnalyse }>
                            Analyse
                        </Button>
                        <Button
                          w={ '60%' }
                          colorScheme={ 'orange' }
                          onClick={ getBattle }>
                            Battle!
                        </Button>
                        <Button
                          w={ '60%' }
                          colorScheme={ 'orange' }
                          onClick={ getWait }>
                            Waiting
                        </Button>
                    </VStack>
                </Center>
            </VStack>
            <VStack w={ '40%' } p={ 5 }>
                <Center w={ '100%' } h={ '100%' }>
                    <VStack 
                      w={ '100%' }
                      p={ 4 }
                      bgColor={ sbackgroundColor }
                      borderColor={ inputBackgroundColor }>
                        <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                            defender
                        </Heading>
                        <Divider color={ alternateTextColor } w={ '85%' } />
                        <CharacterSelection
                          list={ characters }
                          value={ getSelectedChr2() }
                          onClick={ event => changeSelectedChr2(event) } />
                        { analysisState &&
                            <CharacterAnalysis
                              data={ character2 }
                              actualAttack={ atCharacter2 }
                              enDamage={ character1.attacks[atCharacter1].damage }
                              changeAttack={ (event) => changeAtCharacter2(event, character2.attacks.length) } />
                        }
                    </VStack>
                </Center>
            </VStack>
        </HStack>
    )
}

export default BattleAnalysis