import React, { useState, useEffect } from 'react'
import { 
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerFooter,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useColorModeValue,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    InputGroup,
    Image,
    Stack,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper
} from '@chakra-ui/react'
import CustomSelect from './CustomSelect'
import CustomMultiSelect from './CustomMultiSelect'
import { addElement, removeElement } from '../js/SelectFonction'

const CustomDrawer = ({ nData, item, type, isOpen, onClose, onSubmit }) => {
    const [props, setProps] = useState([])
    const [submitProps, setSubmitProps] = useState([])
    let gData = require('../data.json')

    let sbackgroundColor = useColorModeValue(gData.colors[0].darkerbackgroundcolor1, gData.colors[1].darkerbackgroundcolor1)
    let inputBackgroundColor = useColorModeValue(gData.colors[0].darkerbackgroundcolor2, gData.colors[1].darkerbackgroundcolor2)
    let inputBorderColor = useColorModeValue(gData.colors[0].darkestbackgroundcolor, gData.colors[1].darkestbackgroundcolor)
    let textColor = useColorModeValue(gData.colors[0].textcolor, gData.colors[1].textcolor)
    let alternateTextColor = useColorModeValue(gData.colors[0].textalternatecolor1, gData.colors[1].textalternatecolor1)

    const onChangeProps = async (nValue, cItem) => {
        var list = submitProps.map((item) => {
            if (item.name === cItem)
                return { ...item, value: nValue }
            else
                return { ...item }
        })
        await setSubmitProps(list)
    }

    const getValue = (cItem) => { return submitProps.map((item) => { if (item.name === cItem) return item.value }) }
    const getElementSelected = (data, name, backup) => {
        const nName = submitProps.find(item => item.name === name)
        if (nName === undefined)
            return backup
        const element = data.find(item => item.id === nName.value)
        if (element === undefined)
            return backup
        return element.value
    }

    const mAddElement = (value, name) => onChangeProps(addElement(submitProps.find(element => element.name === name).value, value), name)
    const mRemoveElement = (value, name) => onChangeProps(removeElement(submitProps.find(element => element.name === name).value, value), name)

    useEffect(() => {
        setProps(nData)
        var list = []
        nData.map(item => {
            list.push({
                name: item.name,
                value: item.value
            })
        })
        setSubmitProps(list)
    }, [nData])

    const checkSubmit = () => {
        var verification = false
        setProps(props.map(item => {
            const sitem = submitProps.find(element => element.name === item.name)
            var hasError = false
            const errors = item.errors.map(error => {
                if (error.name === 'NULL' && (sitem.value === null || sitem.value === '')) {
                    hasError = true
                    verification = true
                    return { ...error, status: true }
                }
                else if (error.name === 'SELECT_NULL' && sitem.value === 0) {
                    hasError = true
                    verification = true
                    return { ...error, status: true }
                }
                else if (error.name === 'MULTI_SELECT_NULL' && sitem.value === '') {
                    hasError = true
                    verification = true
                    return { ...error, status: true }
                }
                else
                    return { ...error }
            })
            return { ...item, hasError: hasError, errors: errors }
        }))

        if (!verification)
            onSubmit(submitProps)
    }

    return (
        <Drawer
          isOpen={ isOpen }
          placement={ 'right' }
          onClose={ () => onClose() }>
            <DrawerOverlay />
            <DrawerContent backgroundColor={ sbackgroundColor }>
                <DrawerCloseButton />
                <DrawerHeader borderBottomWidth={ '1px' } textTransform={ 'capitalize' }>
                    { String(type+' '+item) }
                </DrawerHeader>
                <DrawerBody>
                    <Stack spacing={ '24px' }>
                        { props.map((item) => (
                            <FormControl isInvalid={ item.hasError } key={ item.name }>
                                <FormLabel textTransform={ 'capitalize' }>{ item.name }</FormLabel>
                                { item.type === 'text' && 
                                    <Input
                                      type={ 'text' }
                                      backgroundColor={ inputBackgroundColor }
                                      borderColor={ inputBorderColor }
                                      onChange={ event => onChangeProps(event.target.value, item.name) } />    
                                }
                                { item.type === 'img' &&
                                    <>
                                        <Image
                                          fit={ 'contain' }
                                          backgroundColor={ inputBackgroundColor }
                                          borderColor={ inputBorderColor }
                                          boxSize={ 'sm' } 
                                          ml={ 'auto' } 
                                          mr={ 'auto' } 
                                          mb={ '1%' } 
                                          borderRadius={ 'full' } 
                                          src={ getValue('image') } 
                                          fallbackSrc={ 'http://144.217.14.182/img/notFound.jpg' } />
                                        <InputGroup>
                                            <Input
                                              type={ 'text' }
                                              backgroundColor={ inputBackgroundColor }
                                              borderColor={ inputBorderColor }
                                              onChange={ event => onChangeProps(event.target.value, item.name) } />
                                        </InputGroup>
                                    </>
                                }
                                { item.type === 'number' &&
                                    <NumberInput
                                      defaultValue={ item.value }
                                      min={ item.min }
                                      max={ item.max }
                                      color={ alternateTextColor }
                                      borderColor={ alternateTextColor }
                                      onChange={ event => onChangeProps(event.target.value, item.name) }>
                                        <NumberInputField />
                                        <NumberInputStepper borderColor={ alternateTextColor }>
                                            <NumberIncrementStepper borderColor={ alternateTextColor } />
                                            <NumberDecrementStepper borderColor={ alternateTextColor } />
                                        </NumberInputStepper>
                                    </NumberInput>
                                }
                                { item.type === 'select' &&
                                    <CustomSelect
                                      value={ getElementSelected(item.data, item.name, item.actual) }
                                      list={ item.data } 
                                      onClick={ event => onChangeProps(event, item.name) } />
                                }
                                { item.type === 'multi-select' &&
                                    <CustomMultiSelect
                                      message={ item.actual }
                                      list={ item.data }
                                      selectedList={ submitProps.find(element => element.name === item.name) }
                                      onAdd={ (event) => mAddElement(event, item.name) }
                                      onRemove={ (event) => mRemoveElement(event, item.name) } />
                                }
                                { item.errors.map((error) => error.status ? (<FormErrorMessage>{error.message}</FormErrorMessage>) : (<></>) ) }
                            </FormControl>
                        ))}
                    </Stack>
                </DrawerBody>
                <DrawerFooter>
                    <Button variant={ 'outline' } mr={ 3 } onClick={ () => onClose() } textTransform={ 'capitalize' }>cancel</Button>
                    <Button colorScheme={ 'whatsapp' } onClick={ () => checkSubmit() } textTransform={ 'capitalize' }>{ type }</Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

export default CustomDrawer