import { Box, Button, Divider, Flex, HStack, Input, Table, TableContainer, Tbody, Text, Th, Thead, Tr, VStack, useColorModeValue } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import CustomFilterSelect from "../../Components/CustomFilterSelect";
import { PageChanger } from "../../Components/PageChanger";
import PassiveDetail from "./PassiveDetail";

const PassiveList = () => {
    let data = require('../../data.json')
    let backgroundColor = useColorModeValue(data.colors[0].basicbackgroundcolor, data.colors[1].basicbackgroundcolor)
    let sbackgroundColor = useColorModeValue(data.colors[0].darkerbackgroundcolor1, data.colors[1].darkerbackgroundcolor1)
    let inputBackgroundColor = useColorModeValue(data.colors[0].darkerbackgroundcolor2, data.colors[1].darkerbackgroundcolor2)
    let inputBorderColor = useColorModeValue(data.colors[0].darkestbackgroundcolor, data.colors[1].darkestbackgroundcolor)
    let textColor = useColorModeValue(data.colors[0].textcolor, data.colors[1].textcolor)
    let alternateTextColor = useColorModeValue(data.colors[0].textalternatecolor1, data.colors[1].textalternatecolor1)

    const [passivesJson, setPassivesJson] = useState([])
    const [passives, setPassives] = useState([])
    const [types] = useState([
        {
            id: 1,
            value: 'Class'
        },
        {
            id: 2,
            value: 'Armor'
        },
        {
            id: 3,
            value: 'Weapon'
        },
        {
            id: 4,
            value: 'Skill'
        },
        {
            id: 5,
            value: 'Other'
        }
    ])
    const [ftypes] = useState([
        {
            id: 0,
            value: 'None'
        },
        {
            id: 1,
            value: 'Class'
        },
        {
            id: 2,
            value: 'Armor'
        },
        {
            id: 3,
            value: 'Weapon'
        },
        {
            id: 4,
            value: 'Skill'
        },
        {
            id: 5,
            value: 'Other'
        }
    ])

    const [searchString, setSearchString] = useState('')
    const [filterType, setFilterType] = useState(0)
    const getTypeValue = (id) => {
        switch (id) {
            case 0:
                return 'None'
            case 1:
                return 'Class'
            case 2:
                return 'Armor'
            case 3:
                return 'Weapon'
            case 4:
                return 'Skill'
            case 5:
                return 'Other'
        }
    }
    const getTypeId = (value) => {
        switch (value) {
            case 'None':
                return 0
            case 'Class':
                return 1
            case 'Armor':
                return 2
            case 'Weapon':
                return 3
            case 'Skill':
                return 4
            case 'Other':
                return 5
        }
    }
    const verifyPassive = (item) => { return verifyFilter(item) && verifyPage() }
    const verifyFilter = (item) => {
        if (searchString !== '' && !String(item.name).toUpperCase().includes(searchString.toUpperCase()))
            return false
        if (filterType !== 0 && item.passive_type !== getTypeValue(filterType))
            return false
        itemCounter++
        return true
    }
    const verifyFilterPC = (item) => {
        if (searchString !== '' && !String(item.name).toUpperCase().includes(searchString.toUpperCase()))
            return false
        if (filterType !== 0 && item.passive_type !== getTypeValue(filterType))
            return false
        return true
    }
    const verifyPage = () => {
        if (itemCounter > (pageFilter - 1) * 12 && itemCounter <= pageFilter * 12)
            return true
        return false
    }
    const filterPassive = () => {
        setPageFilter(1)
        resetItemCounter()
        setPassives(passivesJson.filter(verifyPassive))
    }

    const [pageFilter, setPageFilter] = useState(1)
    let itemCounter = 0
    const resetItemCounter = () => { itemCounter = 0 }
    const changePage = (pageNumber, lists) => {
        if (pageNumber > 0 && lists.length > ((pageNumber - 1) * 12)) {
            window.scrollTo(0, 0)
            setPageFilter(pageNumber)
        }
    }

    const orderBy = (a, b) => {
        if (a.name < b.name)
            return -1
        if (a.name > b.name)
            return 1
        return 0
    }
    const getPassives = () => {
        const obj = {
            method: 'GET',
            mode: 'cors',
            cache: 'default',
            redirect: 'manual',
            headers: {
                'Authorization': localStorage.getItem('token_auth')
            }
        }
        fetch(data.api_url+'passive/get', obj).then(response => response.json().then(item => {
            setPassivesJson(item.sort(orderBy))
        }))
    }

    useEffect(() => {
        setPassives(passivesJson.filter(verifyPassive))
    }, [pageFilter])
    useEffect(() => {
        setPassives(passivesJson.filter(verifyPassive))
    }, [passivesJson])
    useEffect(() => {
        setPageFilter(1)
        resetItemCounter()
        getPassives()
    }, [])

    return (
        <Box
          w={ '100%' }
          h={ '100%' }
          minH={ '80vh' }
          bgColor={ backgroundColor }>
            <Flex padding={ 0 }>
                <VStack
                  w={ '15%' }
                  h={ '80vh' }
                  overflow={ 'scroll' }
                  position={ 'relative' }
                  bgColor={ sbackgroundColor }
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
                    <Text 
                      w={ '80%' } 
                      ml={ 'auto' } 
                      mr={ 'auto' }
                      mt={ '1.5%' }
                      textAlign={ 'center' }
                      fontSize={ '18px' }
                      fontWeight={ 'bold' }>
                        Filtering
                    </Text>
                    <Divider color={ alternateTextColor } w={ '85%' } mr={ 'auto' } ml={ 'auto' } />
                    <VStack w={ '100%' }>
                        <HStack w={ '100%' } textAlign={ 'left' }>
                            <HStack w={ '5%' } />
                            <Text w={ '95%' } fontSize={ '17px' }>Search</Text>
                        </HStack>
                        <HStack w={ '100%' }>
                            <HStack w={ '5%' } />
                            <Input
                              w={ '85%' }
                              type={ 'text' }
                              bgColor={ inputBackgroundColor }
                              borderColor={ inputBorderColor }
                              onChange={ value => setSearchString(value.target.value) } />
                        </HStack>
                    </VStack>
                    <VStack w={ '100%' }>
                        <HStack w={ '100%' } textAlign={ 'left' }>
                            <HStack w={ '5%' } />
                            <Text w={ '95%' } fontSize={ '17px' }>Passives Types</Text>
                        </HStack>
                        <HStack w={ '100%' }>
                            <HStack w={ '5%' } />
                            <HStack w={ '85%' }>
                                <CustomFilterSelect
                                    value={ getTypeValue(filterType) }
                                    list={ ftypes }
                                    onClick={ value => setFilterType(value) } />
                            </HStack>
                        </HStack>
                    </VStack>
                    <HStack w={ '90%' } pt={ '5%' } pb={ '5%' } ml={ 'auto' } mr={ 'auto' }>
                        <Button w={ '100%' } colorScheme={ 'orange' } onClick={ filterPassive }>Filter</Button>
                    </HStack>    
                </VStack>
                <VStack
                  w={ '85%' }
                  h={ '80vh' }
                  overflow={ 'scroll' }
                  position={ 'relative' }
                  color={ textColor }
                  padding={ '2%' }
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
                    <HStack w={'100%'}>
                        <Text
                          w={ '100%' }
                          textAlign={ 'center' }
                          fontSize={ '24px' }
                          fontWeight={ 'bold' }>
                            Passive
                        </Text>
                    </HStack>
                    <HStack w={ '100%' }>
                        <Divider color={ alternateTextColor } />
                    </HStack>
                    <VStack w={ '100%' }>
                        <TableContainer w={ '100%' }>
                            <Table variant={ 'unstyled' } size={ 'lg' }>
                                <Thead>
                                    <Tr>
                                        <Th>name</Th>
                                        <Th>description</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    { passives.map(passive => (
                                            <PassiveDetail data={ passive } />
                                        ))
                                    }
                                </Tbody>
                            </Table>
                        </TableContainer>
                        <PageChanger changePage={ changePage } filteredItems={ passivesJson.filter(verifyFilterPC) } pageFilter={ pageFilter } itemsPerPage={ 12 } />
                    </VStack>
                </VStack>
            </Flex>
        </Box>
    )
}

export default PassiveList