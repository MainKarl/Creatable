import React, { useState, useEffect, useRef } from "react"
import {
    Box,
    Button,
    Divider,
    Flex,
    HStack,
    IconButton,
    Input,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    SimpleGrid,
    Text,
    VStack,
    useColorModeValue,
    useDisclosure
} from '@chakra-ui/react'
import { AddIcon } from "@chakra-ui/icons"
import CustomDrawer from "../../Components/CustomDrawer"
import { PageChanger } from "../../Components/PageChanger"
import CustomAlertDialog from "../../Components/CustomAlertDialog"
import ArmorDetail from "./ArmorDetail"

const ArmorList = () => {
    let data = require('../../data.json')
    let backgroundColor = useColorModeValue(data.colors[0].basicbackgroundcolor, data.colors[1].basicbackgroundcolor)
    let sbackgroundColor = useColorModeValue(data.colors[0].darkerbackgroundcolor1, data.colors[1].darkerbackgroundcolor1)
    let inputBackgroundColor = useColorModeValue(data.colors[0].darkerbackgroundcolor2, data.colors[1].darkerbackgroundcolor2)
    let inputBorderColor = useColorModeValue(data.colors[0].darkestbackgroundcolor, data.colors[1].darkestbackgroundcolor)
    let textColor = useColorModeValue(data.colors[0].textcolor, data.colors[1].textcolor)
    let alternateTextColor = useColorModeValue(data.colors[0].textalternatecolor1, data.colors[1].textalternatecolor1)

    const [armorsJson, setArmorsJson] = useState([])
    const [armors, setArmors] = useState([])
    const [passives, setPassives] = useState([])

    const [pageFilter, setPageFilter] = useState(1)
    let itemCounter = 0
    const resetItemCounter = () => { itemCounter = 0 }
    const changePage = (pageNumber, lists) => {
        if (pageNumber > 0 && lists.length > ((pageNumber - 1) * 6)) {
            window.scrollTo(0, 0)
            setPageFilter(pageNumber)
        }
    }

    const [searchString, setSearchString] = useState('')
    const [minPower, setMinPower] = useState(0)
    const [maxPower, setMaxPower] = useState(0)

    const { isOpen: createIsOpen, onOpen: createOnOpen, onClose: createOnClose } = useDisclosure()
    const [seeCreate, setSeeCreate] = useState(false)
    const [createData, setCreateData] = useState([])

    const { isOpen: modifyIsOpen, onOpen: modifyOnOpen, onClose: modifyOnClose } = useDisclosure()
    const [seeModify, setSeeModify] = useState(false)
    const [modifyData, setModifyData] = useState([])
    const [modifyId, setModifyId] = useState(0)

    const { isOpen: deleteIsOpen, onOpen: deleteOnOpen, onClose: deleteOnClose } = useDisclosure()
    const [seeDelete, setSeeDelete] = useState(false)
    const [deleteId, setDeleteId] = useState(0)

    const alertRef = useRef()
    const [alertMessage, setAlertMessage] = useState("")
    const [alertTitle, setAlertTitle] = useState("")

    const verifyArmor = (item) => { return verifyFilter(item) && verifyPage() }
    const verifyFilter = (item) => {
        if (searchString !== '' && !String(item.name).toUpperCase().includes(searchString.toUpperCase()))
            return false
        if (minPower !== 0 && item.power < minPower)
            return false
        if (maxPower !== 0 && item.power > maxPower)
            return false
        itemCounter++
        return true
    }
    const verifyFilterPC = (item) => {
        if (searchString !== '' && !String(item.name).toUpperCase().includes(searchString.toUpperCase()))
            return false
        if (minPower !== 0 && item.power < minPower)
            return false
        if (maxPower !== 0 && item.power > maxPower)
            return false
        return true
    }
    const verifyPage = () => {
        if (itemCounter > (pageFilter - 1) * 6 && itemCounter <= pageFilter * 6)
            return true
        return false
    }
    const filterArmor = () => {
        setPageFilter(1)
        resetItemCounter()
        setArmors(armorsJson.filter(verifyArmor))
    }

    const clickCreate = () => {
        setCreateData([
            {
                name: 'img',
                type: 'img',
                value: '',
                hasError: false,
                errors: [
                    {
                        name: 'NULL',
                        message: 'The image cannot be null.',
                        status: false
                    }
                ]
            },
            {
                name: 'name',
                type: 'text',
                value: '',
                hasError: false,
                errors: [
                    {
                        name: 'NULL',
                        message: 'The name cannot be null.',
                        status: false
                    }
                ]
            },
            {
                name: 'power',
                type: 'number',
                value: 0,
                min: -1000,
                max: 1000,
                hasError: false,
                errors: []
            },
            {
                name: 'passives',
                type: 'multi-select',
                actual: '-- Add a passive --',
                value: '',
                data: passives,
                hasError: false,
                errors: []
            }
        ])
        setSeeCreate(true)
        createOnOpen()
    }
    const createArmor = async (list) => {
        const obj = {
            method: 'POST',
            headers: {
                'Authorization': localStorage.getItem('token_auth')
            },
            body: JSON.stringify({ img: list[0].value, name: list[1].value, power: list[2].value, passives: String(list[3].value) })
        }
        fetch(data.api_url+'armor/create', obj).then(response => response.json().then(item => {
            setSeeCreate(false)
            createOnClose()
            getArmors()
        }))
    }
    const clickModify = (id, name, power, wpassives) => {
        let filteredPassives = ""
        wpassives.map(passive => {
            if (filteredPassives.length === 0)
                filteredPassives = passive.passive_id
            else
                filteredPassives += ";"+passive.passive_id
        })
        setModifyId(id)
        setModifyData([
            {
                name: 'name',
                type: 'text',
                value: name,
                hasError: false,
                errors: [
                    {
                        name: 'NULL',
                        message: 'The name cannot be null.',
                        status: false
                    }
                ]
            },
            {
                name: 'power',
                type: 'number',
                value: power,
                min: -1000,
                max: 1000,
                hasError: false,
                errors: []
            },
            {
                name: 'passives',
                type: 'multi-select',
                actual: '-- Add a passive --',
                value: filteredPassives,
                data: passives,
                hasError: false,
                errors: []
            }
        ])
        setSeeModify(true)
        modifyOnOpen()
    }
    const modifyArmor = async (list) => {
        const obj = {
            method: 'POST',
            headers: {
                'Authorization': localStorage.getItem('token_auth')
            },
            body: JSON.stringify({ id: modifyId, name: list[0].value, power: list[1].value, passives: String(list[2].value) })
        }
        fetch(data.api_url+'armor/modify', obj).then(response => response.json().then(item => {
            setSeeModify(false)
            modifyOnClose()
            getArmors()
        }))
    }
    const clickDelete = (id, name) => {
        setDeleteId(id)
        setAlertTitle(`Delete Armor`)
        setAlertMessage(`Delete the armor ${name} ?`)
        setSeeDelete(true)
        deleteOnOpen()
    }
    const deleteArmor = async () => {
        const obj = {
            method: 'POST',
            headers: {
                'Authorization': localStorage.getItem('token_auth')
            },
            body: JSON.stringify({ id: deleteId })
        }
        fetch(data.api_url+'armor/delete', obj).then(response => response.json().then(item => {
            setSeeDelete(false)
            deleteOnClose()
            getArmors()
        }))
    }

    const orderBy = (a, b) => {
        if (a.name < b.name)
            return -1
        if (a.name > b.name)
            return 1
        return 0
    }
    const getPassives = async () => {
        fetch(data.api_url+'passive/get_armor', {
            method: 'GET',
            mode: 'cors',
            cache: 'default',
            redirect: 'manual',
            headers: {
                'Authorization': localStorage.getItem('token_auth')
            }
        }).then(response => response.json().then(item => {
                setPassives(item)
            }
        ))
    }
    const getArmors = async () => {
        const obj = {
            method: 'GET',
            mode: 'cors',
            cache: 'default',
            redirect: 'manual',
            headers: {
                'Authorization': localStorage.getItem('token_auth')
            }
        }
        fetch(data.api_url+'armor/get', obj).then(response => response.json().then(item => {
            setArmorsJson(item.sort(orderBy))
        }))
    }

    useEffect(() => {
        setArmors(armorsJson.filter(verifyArmor))
    }, [pageFilter])
    useEffect(() => {
        setArmors(armorsJson.filter(verifyArmor))
    }, [armorsJson])
    useEffect(() => {
        setPageFilter(1)
        resetItemCounter()
        getPassives()
        getArmors()
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
                            <Text w={ '95%' } fontSize={ '17px' }>Power</Text>
                        </HStack>
                        <HStack w={ '100%' }>
                            <HStack w={ '5%' } />
                            <Text w={ '15%' } fontSize={ '15px' } color={ alternateTextColor }>Min</Text>
                            <NumberInput
                              w={ '70%' }
                              defaultValue={ minPower }
                              min={ -100 }
                              max={ 250 }
                              color={ alternateTextColor }
                              borderColor={ alternateTextColor }
                              onChange={ value => setMinPower(value) }>
                                <NumberInputField />
                                <NumberInputStepper borderColor={ alternateTextColor }>
                                    <NumberIncrementStepper borderColor={ alternateTextColor } />
                                    <NumberDecrementStepper borderColor={ alternateTextColor } />
                                </NumberInputStepper>
                            </NumberInput>
                            <HStack w={ '5%' } />
                        </HStack>
                        <HStack w={ '100%' }>
                            <HStack w={ '5%' } />
                            <Text w={ '15%' } fontSize={ '15px' } color={ alternateTextColor }>Max</Text>
                            <NumberInput
                              w={ '70%' }
                              defaultValue={ maxPower }
                              min={ -100 }
                              max={ 250 }
                              color={ alternateTextColor }
                              borderColor={ alternateTextColor }
                              onChange={ value => setMaxPower(value) }>
                                <NumberInputField />
                                <NumberInputStepper borderColor={ alternateTextColor }>
                                    <NumberIncrementStepper borderColor={ alternateTextColor } />
                                    <NumberDecrementStepper borderColor={ alternateTextColor } />
                                </NumberInputStepper>
                            </NumberInput>
                            <HStack w={ '5%' } />
                        </HStack>
                    </VStack>
                    <HStack w={ '90%' } pt={ '5%' } pb={ '5%' } ml={ 'auto' } mr={ 'auto' }>
                        <Button w={ '100%' } colorScheme={ 'orange' } onClick={ filterArmor }>Filter</Button>
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
                            Armor
                            <IconButton colorScheme={ 'whatsapp' } ml={ '1%' } icon={ <AddIcon /> } onClick={ clickCreate } />
                        </Text>
                    </HStack>
                    <HStack w={ '100%' }>
                        <Divider color={ alternateTextColor } />
                    </HStack>
                    <VStack w={ '100%' }>
                        <SimpleGrid
                          w={ '100%' }
                          h={ '100%' }
                          columns={ 3 }
                          spacing={ 5 }>
                            { armors.map(armor => (
                                    <ArmorDetail 
                                      data={ armor }
                                      deleteArmor={ clickDelete }
                                      modifyArmor={ clickModify } />
                                ))
                            }
                        </SimpleGrid>
                        <PageChanger changePage={ changePage } filteredItems={ armorsJson.filter(verifyFilterPC) } pageFilter={ pageFilter } itemsPerPage={ 6 } />
                    </VStack>
                </VStack>
            </Flex>
            { seeCreate &&
                <CustomDrawer
                  nData={ createData }
                  item={ 'armor' }
                  type={ 'create' }
                  isOpen={ createIsOpen }
                  onClose={ createOnClose }
                  onSubmit={ createArmor } />
            }
            { seeModify &&
                <CustomDrawer
                  nData={ modifyData }
                  item={ 'armor' }
                  type={ 'modify' }
                  isOpen={ modifyIsOpen }
                  onClose={ modifyOnClose }
                  onSubmit={ modifyArmor } />
            }
            { seeDelete &&
                <CustomAlertDialog 
                  isOpen={ deleteIsOpen }
                  message={ alertMessage }
                  title={ alertTitle }
                  ref={ alertRef }
                  onCancel={ deleteOnClose }
                  onSubmit={ deleteArmor } />
            }
        </Box>
    )
}

export default ArmorList