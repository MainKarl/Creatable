import { useColorModeValue } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'

const BattleAnalysis = () => {
    const data = require('../../data.json')
    let backgroundColor = useColorModeValue(data.colors[0].basicbackgroundcolor, data.colors[1].basicbackgroundcolor)
    let sbackgroundColor = useColorModeValue(data.colors[0].darkerbackgroundcolor1, data.colors[1].darkerbackgroundcolor1)
    let inputBackgroundColor = useColorModeValue(data.colors[0].darkerbackgroundcolor2, data.colors[1].darkerbackgroundcolor2)
    let inputBorderColor = useColorModeValue(data.colors[0].darkestbackgroundcolor, data.colors[1].darkestbackgroundcolor)
    let textColor = useColorModeValue(data.colors[0].textcolor, data.colors[1].textcolor)
    let alternateTextColor = useColorModeValue(data.colors[0].textalternatecolor1, data.colors[1].textalternatecolor1)

    const [characters, setCharacters] = useState([])
    const [selectedChr1, setSelectedChr1] = useState(0)
    const [character1, setCharacter1] = useState([])
    const [selectedChr2, setSelectedChr2] = useState(0)
    const [character2, setCharacter2] = useState([])

    const [tileAway, setTileAway] = useState(0)
    const [closeAlly, setCloseAlly] = useState(false)
    const [isNight, setIsNight] = useState(false)
    const [isOutdoor, setIsOutdoor] = useState(false)
    const [canRetaliate, setCanRetaliate] = useState(false)
    const [attackerIsInspired, setAttackerIsInspired] = useState(false)
    const [defenderIsInspired, setDefenderIsInspired] = useState(false)

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
            setCharacters(item)
        }))
    }

    useEffect(() => {
        getCharacters()
    }, [])

    return (
        <></>
    )
}

export default BattleAnalysis