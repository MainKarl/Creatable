import React from "react"
import { 
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
    useColorModeValue
} from "@chakra-ui/react"

const CustomAlertDialog = ({ title, message, isOpen, ref, onCancel, onSubmit }) => {
    let gData = require('../data.json')
    let sbackgroundColor = useColorModeValue(gData.colors[0].darkerbackgroundcolor1, gData.colors[1].darkerbackgroundcolor1)
    let inputBackgroundColor = useColorModeValue(gData.colors[0].darkerbackgroundcolor2, gData.colors[1].darkerbackgroundcolor2)
    let inputBorderColor = useColorModeValue(gData.colors[0].darkestbackgroundcolor, gData.colors[1].darkestbackgroundcolor)
    let textColor = useColorModeValue(gData.colors[0].textcolor, gData.colors[1].textcolor)
    let alternateTextColor = useColorModeValue(gData.colors[0].textalternatecolor1, gData.colors[1].textalternatecolor1)

    return (
        <AlertDialog
          isOpen={ isOpen }
          leastDestructiveRef={ ref }
          onClose={ onCancel }>
            <AlertDialogOverlay>
                <AlertDialogContent backgroundColor={ sbackgroundColor }>
                    <AlertDialogHeader fontSize={ 'lg' } fontWeight={ 'bold' }>
                        { title }
                    </AlertDialogHeader>
                    <AlertDialogBody>
                        { message }
                    </AlertDialogBody>
                    <AlertDialogFooter>
                        <Button onClick={ onCancel } mr={ '2%' }>
                            Cancel
                        </Button>
                        <Button colorScheme={ 'orange' } onClick={ onSubmit }>
                            Confirm
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
    )
}

export default CustomAlertDialog