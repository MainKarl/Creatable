import React, { useState, useEffect } from "react"
import {
    Box,
    Flex,
    HStack,
    VStack,
    Text,
    Divider,
    Input,
    Button,
    useColorModeValue,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableContainer
} from "@chakra-ui/react"
import CustomFilterSelect from "../../Components/CustomFilterSelect"
import { PageChanger } from "../../Components/PageChanger"
import ClassDetail from "./ClassDetail"

const ClassList = () => {
    let data = require('../../data.json')
    let backgroundColor = useColorModeValue(data.colors[0].basicbackgroundcolor, data.colors[1].basicbackgroundcolor)
    let sbackgroundColor = useColorModeValue(data.colors[0].darkerbackgroundcolor1, data.colors[1].darkerbackgroundcolor1)
    let inputBackgroundColor = useColorModeValue(data.colors[0].darkerbackgroundcolor2, data.colors[1].darkerbackgroundcolor2)
    let inputBorderColor = useColorModeValue(data.colors[0].darkestbackgroundcolor, data.colors[1].darkestbackgroundcolor)
    let textColor = useColorModeValue(data.colors[0].textcolor, data.colors[1].textcolor)
    let alternateTextColor = useColorModeValue(data.colors[0].textalternatecolor1, data.colors[1].textalternatecolor1)

    const [classesJson, setClassesJson] = useState([])
    const [classes, setClasses] = useState([])
    const [classSeries] = useState([
        {
            id: 0,
            value: 'None'
        },
        {
            id: 1,
            value: 'Militia'
        },
        {
            id: 2,
            value: 'Fighter'
        },
        {
            id: 3,
            value: 'Skirmisher'
        },
        {
            id: 4,
            value: 'Bowman'
        },
        {
            id: 5,
            value: 'Medic'
        },
        {
            id: 6,
            value: 'Apprentice'
        },
        {
            id: 7,
            value: 'Monster'
        },
        {
            id: 8,
            value: 'Demon'
        },
        {
            id: 9,
            value: 'Beastman'
        },
        {
            id: 10,
            value: 'Drakeling'
        },
    ])
    const getClassSerieValue = (id) => {
        switch (id) {
            case 0:
                return 'None'
            case 1:
                return 'Militia'
            case 2:
                return 'Fighter'
            case 3:
                return 'Skirmisher'
            case 4:
                return 'Bowman'
            case 5:
                return 'Medic'
            case 6:
                return 'Apprentice'
            case 7:
                return 'Monster'
            case 8:
                return 'Demon'
            case 9:
                return 'Beastman'
            case 10:
                return 'Drakeling'
        }
    }

    const [searchString, setSearchString] = useState('')
    const [filterClassSeries, setFilterClassSeries] = useState(0)
    const verifyClass = (item) => { return verifyFilter(item) && verifyPage() }
    const verifyFilter = (item) => {
        if (searchString !== '' && !String(item.name).toUpperCase().includes(searchString.toUpperCase()))
            if (searchString !== '' && !String(item.predecessor).toUpperCase().includes(searchString.toUpperCase()))
                return false
        if (filterClassSeries !== 0 && item.class_serie !== getClassSerieValue(filterClassSeries))
            return false
        itemCounter++
        return true
    }
    const verifyFilterPC = (item) => {
        if ((searchString !== '' && !String(item.name).toUpperCase().includes(searchString.toUpperCase())) ||
            (searchString !== '' && !String(item.predecessor).toUpperCase().includes(searchString.toUpperCase())))
            return false
        if (filterClassSeries !== 0 && item.class_serie !== getClassSerieValue(filterClassSeries))
            return false
        return true
    }
    const verifyPage = () => {
        if (itemCounter > (pageFilter - 1) * 10 && itemCounter <= pageFilter * 10)
            return true
        return false
    }
    const filterClass = () => {
        setPageFilter(1)
        resetItemCounter()
        setClasses(classesJson.filter(verifyClass))
    }

    const [pageFilter, setPageFilter] = useState(1)
    let itemCounter = 0
    const resetItemCounter = () => { itemCounter = 0 }
    const changePage = (pageNumber, lists) => {
        if (pageNumber > 0 && lists.length > ((pageNumber - 1) * 10)) {
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
    const getClass = () => {
        const obj = {
            method: 'GET',
            mode: 'cors',
            cache: 'default',
            redirect: 'manual',
            headers: {
                'Authorization': localStorage.getItem('token_auth')
            }
        }
        fetch(data.api_url+'class/get', obj).then(response => response.json().then(item => {
            setClassesJson(item.sort(orderBy))
        }))
    }

    useEffect(() => {
        setClasses(classesJson.filter(verifyClass))
    }, [pageFilter])
    useEffect(() => {
        setClasses(classesJson.filter(verifyClass))
    }, [classesJson])
    useEffect(() => {
        setPageFilter(1)
        resetItemCounter()
        getClass()
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
                            <Text w={ '95%' } fontSize={ '17px' }>Class Series</Text>
                        </HStack>
                        <HStack w={ '100%' }>
                            <HStack w={ '5%' } />
                            <HStack w={ '85%' }>
                                <CustomFilterSelect
                                    value={ getClassSerieValue(filterClassSeries) }
                                    list={ classSeries }
                                    onClick={ value => setFilterClassSeries(value) } />
                            </HStack>
                        </HStack>
                    </VStack>
                    <HStack w={ '90%' } pt={ '5%' } pb={ '5%' } ml={ 'auto' } mr={ 'auto' }>
                        <Button w={ '100%' } colorScheme={ 'orange' } onClick={ filterClass }>Filter</Button>
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
                            Weapon
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
                                        <Th>hp</Th>
                                        <Th>str | mag</Th>
                                        <Th>def | res</Th>
                                        <Th>spd | skl</Th>
                                        <Th>lck | man</Th>
                                        <Th>predecessor</Th>
                                        <Th>passives</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    { classes.map(item => (
                                            <ClassDetail data={ item } />
                                        ))
                                    }
                                </Tbody>
                            </Table>
                        </TableContainer>
                        <PageChanger changePage={ changePage } filteredItems={ classesJson.filter(verifyFilterPC) } pageFilter={ pageFilter } itemsPerPage={ 10 } />
                    </VStack>
                </VStack>
            </Flex>
        </Box>
    )
}

export default ClassList