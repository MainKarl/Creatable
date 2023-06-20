import { Center, HStack, Text, useColorModeValue } from "@chakra-ui/react"
import React, { useState, useEffect } from "react"

const CustomBar = ({ value, max }) => {
    const [barColor, setBarColor] = useState('green.500')

    useEffect(() => {
        if (value > max*10)
            setBarColor('pink.500')
        else if (value > max*2)
            setBarColor('purple.500')
        else if (value > max)
            setBarColor('blue.500')
        else if (max/2 < value)
            setBarColor('green.500')
        else if (max/2 >= value && max/10 < value)
            setBarColor('yellow.500')
        else if (max/10 >= value)
            setBarColor('red.500')
    }, [value])

    return (
        <HStack w={ '100%' } m={ '5%' } bgColor={ barColor } borderRadius={ '10px' }>
            <Center w={ '100%' } h={ '100%' }>
                <Text>{ value } / { max }</Text>
            </Center>
        </HStack>
    )
}

export default CustomBar