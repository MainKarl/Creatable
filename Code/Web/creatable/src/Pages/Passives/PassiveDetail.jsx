import { Heading, Td, Text, Tr, useColorModeValue } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"

const PassiveDetail = ({ data }) => {
    let gdata = require('../../data.json')
    let backgroundColor = useColorModeValue(gdata.colors[0].basicbackgroundcolor, gdata.colors[1].basicbackgroundcolor)
    let sbackgroundColor = useColorModeValue(gdata.colors[0].darkerbackgroundcolor1, gdata.colors[1].darkerbackgroundcolor1)
    let inputBackgroundColor = useColorModeValue(gdata.colors[0].darkerbackgroundcolor2, gdata.colors[1].darkerbackgroundcolor2)
    let inputBorderColor = useColorModeValue(gdata.colors[0].darkestbackgroundcolor, gdata.colors[1].darkestbackgroundcolor)
    let textColor = useColorModeValue(gdata.colors[0].textcolor, gdata.colors[1].textcolor)
    let alternateTextColor = useColorModeValue(gdata.colors[0].textalternatecolor1, gdata.colors[1].textalternatecolor1)

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [type, setType] = useState('')

    useEffect(() => {
        setName(data.name)
        setDescription(data.description)
        setType(data.passive_type)
    }, [data])

    return (
        <Tr>
            <Td>
                <Heading size={ 'xs' }>{ name }</Heading>
                <Text pt={ 2 } fontSize={ 'sm' } color={ alternateTextColor }>{ type }</Text>
            </Td>
            <Td>
                <Text fontSize={ 'md' } noOfLines={ 3 }>{ description }</Text>
            </Td>
        </Tr>
    )
}

export default PassiveDetail