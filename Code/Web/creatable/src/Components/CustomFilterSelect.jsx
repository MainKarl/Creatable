import React, { useState, useEffect } from "react"
import { 
    HStack,
    VStack,
    Box,
    Text,
    useColorModeValue
} from '@chakra-ui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'

const CustomFilterSelect = ({ value, list, onClick }) => {
    let gData = require('../data.json')
    const [props, setProps] = useState([])
    const [visibility, setVisibility] = useState(false)
    const toggleList = () => setVisibility(!visibility)
    let inputBackgroundColor = useColorModeValue(gData.colors[0].darkerbackgroundcolor2, gData.colors[1].darkerbackgroundcolor2)
    let inputBorderColor = useColorModeValue(gData.colors[0].darkestbackgroundcolor, gData.colors[1].darkestbackgroundcolor)
    let alternateTextColor = useColorModeValue(gData.colors[0].textalternatecolor1, gData.colors[1].textalternatecolor1)
    useEffect(() => {
        setProps(list)
    }, [list])

    return (
        <Box
          w={ '100%' }
          onClick={ () => toggleList() }>
            <HStack
              w={ '100%' }
              backgroundColor={ inputBackgroundColor }
              borderColor={ inputBorderColor }
              borderWidth={ '1px' }
              borderTopRadius={ '5px' }
              p={ '2.5%' }>
                <Text 
                  w={ '95%' } 
                  unselectable={ 'on' }
                  userSelect={ 'none' }>{ value }</Text>
                { visibility 
                    ? (<ChevronUpIcon w={ '5%' } />)
                    : (<ChevronDownIcon w={ '5%' } />)
                }
            </HStack>
            { visibility && 
                <VStack
                  w={ '80%' } 
                  zIndex={ 100 }
                  overflow={ 'auto' }
                  maxH={ '150px' }
                  backgroundColor={ inputBackgroundColor }
                  borderColor={ inputBorderColor }
                  borderWidth={ '1px' }
                  borderBottomRadius={ '5px' }
                  position={ 'absolute' }>
                    {props.map(item => (
                        <HStack
                          key={ item.id } 
                          w={ '100%' }
                          borderBottomWidth={ '1px' }
                          borderColor={ alternateTextColor }
                          pt={ '1%' }
                          pb={ '1%' }
                          pl={ '2%' }
                          pr={ '2%' }
                          onClick={ () => onClick(item.id) }>
                            <Text w={ '90%' }>{ item.value }</Text>
                        </HStack>
                    ))}
                </VStack>
            }
        </Box>
    )
}

export default CustomFilterSelect