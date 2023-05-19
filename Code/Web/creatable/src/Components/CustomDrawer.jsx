import React, { useEffect } from 'react'
import { 
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerFooter,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    HStack,
    VStack,
    useColorModeValue
} from '@chakra-ui/react'

const CustomDrawer = ({ data, item, type, isOpen, onClose, onSubmit }) => {
    let gData = require('../data.json')

    let sbackgroundColor = useColorModeValue(gData.colors[0].darkerbackgroundcolor1, gData.colors[1].darkerbackgroundcolor1)
    let inputBackgroundColor = useColorModeValue(gData.colors[0].darkerbackgroundcolor2, gData.colors[1].darkerbackgroundcolor2)
    let inputBorderColor = useColorModeValue(gData.colors[0].darkestbackgroundcolor, gData.colors[1].darkestbackgroundcolor)
    let textColor = useColorModeValue(gData.colors[0].textcolor, gData.colors[1].textcolor)
    let alternateTextColor = useColorModeValue(gData.colors[0].textalternatecolor1, gData.colors[1].textalternatecolor1)

    useEffect(() => {
        console.log(data)
    }, [data])

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
                    
                </DrawerBody>
                <DrawerFooter>
                    <Button variant={ 'outline' } mr={ 3 } onClick={ () => onClose() } textTransform={ 'capitalize' }>cancel</Button>
                    <Button colorScheme={ 'whatsapp' } onClick={ () => onSubmit({}) } textTransform={ 'capitalize' }>{ type }</Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

export default CustomDrawer