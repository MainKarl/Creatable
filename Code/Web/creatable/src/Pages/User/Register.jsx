import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import {
    Box,
    Flex,
    VStack,
    HStack,
    useColorModeValue,
    Text,
    Divider,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Button,
    IconButton,
    Image
} from '@chakra-ui/react';
import {
    ViewIcon,
    ViewOffIcon
} from '@chakra-ui/icons'

let data = require('../../data.json')

const Register = () => {
    const [redirect, setRedirect] = useState(false);

    const [profilePicture, setProfilePicture] = useState('')
    const [profilePictureError, setProfilePictureError] = useState(false)
    const [profilePictureErrorMessage, setProfilePictureErrorMessage] = useState('')

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState('');

    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
    const [passwordVisibility, setPasswordVisibility] = useState(false);
    const togglePasswordVisibility = () => setPasswordVisibility(!passwordVisibility);

    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [passwordConfirmationError, setPasswordConfirmationError] = useState(false);
    const [passwordConfirmationErrorMessage, setPasswordConfirmationErrorMessage] = useState('');
    const [passwordConfirmationVisibility, setPasswordConfirmationVisibility] = useState(false);
    const togglePasswordConfirmationVisibility = () => setPasswordConfirmationVisibility(!passwordConfirmationVisibility);

    const [username, setUsername] = useState('');
    const [usernameError, setUsernameError] = useState(false);
    const [usernameErrorMessage, setUsernameErrorMessage] = useState('');

    let backgroundColor = useColorModeValue(data.colors[0].basicbackgroundcolor, data.colors[1].basicbackgroundcolor);
    let sbackgroundColor = useColorModeValue(data.colors[0].darkerbackgroundcolor1, data.colors[1].darkerbackgroundcolor1);
    let tbackgroundColor = useColorModeValue(data.colors[0].darkerbackgroundcolor2, data.colors[1].darkerbackgroundcolor2);
    let inputBackgroundColor = useColorModeValue(data.colors[0].darkerbackgroundcolor2, data.colors[1].darkerbackgroundcolor2);
    let inputBorderColor = useColorModeValue(data.colors[0].darkestbackgroundcolor, data.colors[1].darkestbackgroundcolor);
    let textColor = useColorModeValue(data.colors[0].textcolor, data.colors[1].textcolor);
    let alternateTextColor = useColorModeValue(data.colors[0].textalternatecolor1, data.colors[1].textalternatecolor1);

    const changeProfilePicture = (profilePicture) => setProfilePicture(profilePicture)
    const changeEmail = (email) => setEmail(email)
    const changePassword = (password) => setPassword(password)
    const changePasswordConfirmation = (password) => setPasswordConfirmation(password)
    const changeUsername = (username) => setUsername(username)

    const handleRegister = () => {
        let error = false
        setEmailError(false);
        setPasswordError(false);
        setPasswordConfirmationError(false);
        setUsernameError(false);

        if (password === '') {
            setPasswordErrorMessage('ERROR: Password cannot be empty');
            setPasswordError(true);
            error = true
        }   
        
        if (email === '') {
            setEmailErrorMessage('ERROR: Email cannot be empty');
            setEmailError(true);
            error = true;
        }


        if (passwordConfirmation === '') {
            setPasswordConfirmationErrorMessage('ERROR: Password Confirmation cannot be empty');
            setPasswordConfirmationError(true);
            error = true;
        }
        else if (password != passwordConfirmation) {
            setPasswordConfirmationErrorMessage('ERROR: Password and Password Confirmation must be identical');
            setPasswordConfirmationError(true);
            error = true;
        }

        if (username === '') {
            setUsernameErrorMessage('ERROR: Username cannot be empty');
            setUsernameError(true);
            error = true;
        }

        if (profilePicture === null || profilePicture === '') {
            setProfilePictureErrorMessage('ERROR: Profile picture cannot be empty!');
            setProfilePictureError(true);
            error = true;
        }
        
        if (!error) {
            let opt = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: username, email: email, password: password, profilePicture: profilePicture })
            }
            fetch('http://144.217.14.182:6362/register', opt).then((response) => {
                response.json().then((item) => {
                    console.log(item)
                    if (item.status == 'success')
                        setRedirect(true)
                    else {
                        
                    }
                })
            });
        }
    }
    
    return (
        <Box
        minH={'100vh'}
        backgroundColor={backgroundColor}>
            { redirect ? (<Navigate push to="/"/>) : null }
            <Flex
                padding={'0 5%'}>
                <HStack width={'30%'} />
                <VStack
                    w={'40%'}
                    h={'100vh'}
                    backgroundColor={sbackgroundColor}
                    color={textColor}
                    top={'50%'}
                    position={'relative'}
                    spacing={'20px'}
                    padding={'2%'}
                    overflow={ 'scroll' }
                    css={{
                        '&::-webkit-scrollbar': {
                            width: '15px',
                            height: '100%'
                        },
                        '&::-webkit-scrollbar-track': {
                            background: sbackgroundColor,
                        },
                        '&::-webkit-scrollbar-thumb': {
                            backgroundColor: tbackgroundColor,
                            borderRadius: '20px',
                            border: `3px solid ${sbackgroundColor}`
                        },
                    }}>
                    <HStack width={'100%'}>
                        <Text
                            color={textColor} 
                            textAlign={'center'} 
                            width={'100%'}
                            fontSize={'24px'}
                            fontWeight={'bold'}>
                            Register
                        </Text>
                    </HStack>
                    <HStack width={ '100%' }>
                        <Divider color={alternateTextColor} />
                    </HStack>
                    <HStack width={ '100%' }>
                        <FormControl isInvalid={ profilePictureError }>
                            <FormLabel color={ textColor }>Profile Picture</FormLabel>
                            <Image
                                fit={ 'contain' }
                                backgroundColor={ inputBackgroundColor }
                                borderColor={ inputBorderColor }
                                boxSize={ 'sm' } 
                                ml={ 'auto' } 
                                mr={ 'auto' } 
                                mb={ '1%' } 
                                borderRadius={ 'full' } 
                                src={ profilePicture } 
                                fallbackSrc={ 'http://144.217.14.182/img/notFound.jpg' } />
                            <InputGroup>
                                <Input
                                    type={ 'text' }
                                    backgroundColor={ inputBackgroundColor }
                                    borderColor={ inputBorderColor }
                                    onChange={ (value) => changeProfilePicture(value.target.value) }/>
                            </InputGroup>
                            <FormErrorMessage>{ profilePictureErrorMessage }</FormErrorMessage>
                        </FormControl>
                    </HStack>
                    <HStack width={'100%'}>
                        <FormControl isInvalid={ emailError }>
                            <FormLabel color={ textColor }>Email</FormLabel>
                            <InputGroup>
                                <Input 
                                    type={ 'text' }
                                    backgroundColor={ inputBackgroundColor }
                                    borderColor={ inputBorderColor }
                                    onChange={ (nEmail) => changeEmail(nEmail.target.value) }/>
                            </InputGroup>
                            <FormErrorMessage>{ emailErrorMessage }</FormErrorMessage>
                        </FormControl>
                    </HStack>
                    <HStack width={'100%'}>
                        <FormControl isInvalid={ usernameError }>
                            <FormLabel color={ textColor }>Username</FormLabel>
                            <InputGroup>
                                <Input 
                                    type={ 'text' }
                                    backgroundColor={ inputBackgroundColor }
                                    borderColor={ inputBorderColor }
                                    onChange={ (nUsername) => changeUsername(nUsername.target.value) }/>
                            </InputGroup>
                            <FormErrorMessage>{ usernameErrorMessage }</FormErrorMessage>
                        </FormControl>
                    </HStack>
                    <HStack width={'100%'}>
                        <FormControl isInvalid={ passwordError }>
                            <FormLabel color={ textColor }>Password</FormLabel>
                            <InputGroup>
                                <Input
                                    type={ passwordVisibility ? 'text' : 'password' }
                                    backgroundColor={ inputBackgroundColor }
                                    borderColor={ inputBorderColor }
                                    onChange={ (nPassword) => changePassword(nPassword.target.value) } />
                                <InputRightElement>
                                    <IconButton h='1.75rem' size='sm' onClick={ togglePasswordVisibility }>
                                        {passwordVisibility ?  <ViewOffIcon /> : <ViewIcon /> }
                                    </IconButton>
                                </InputRightElement>
                            </InputGroup>
                            <FormErrorMessage>{ passwordErrorMessage }</FormErrorMessage>
                        </FormControl>
                    </HStack>
                    <HStack width={'100%'}>
                        <FormControl isInvalid={ passwordConfirmationError }>
                            <FormLabel color={ textColor }>Password Confirmation</FormLabel>
                            <InputGroup>
                                <Input
                                    type={ passwordConfirmationVisibility ? 'text' : 'password' }
                                    backgroundColor={ inputBackgroundColor }
                                    borderColor={ inputBorderColor }
                                    onChange={ (nPasswordConfirmation) => changePasswordConfirmation(nPasswordConfirmation.target.value) }/>
                                <InputRightElement>
                                    <IconButton h={ '1.75rem' } size={ 'sm' } onClick={ togglePasswordConfirmationVisibility }>
                                        { passwordConfirmationVisibility ? <ViewOffIcon /> : <ViewIcon /> }
                                    </IconButton>
                                </InputRightElement>
                            </InputGroup>
                            <FormErrorMessage>{ passwordConfirmationErrorMessage }</FormErrorMessage>
                        </FormControl>
                    </HStack>
                    <HStack width={'100%'}>
                        <Button
                            size={'md'}
                            colorScheme={'orange'}
                            marginLeft={'25%'}
                            width={'25%'}
                            onClick={ handleRegister }>
                            Register
                        </Button>
                        <Link
                            draggable={ false }
                            to={'/'}
                            size={'md'}
                            pl={'5%'}
                            pr={'5%'}
                            width={'25%'}>
                            <Button>
                                Cancel
                            </Button>
                        </Link>
                    </HStack>
                </VStack>
                <HStack width={'30%'} />
            </Flex>
        </Box>
    );
}

export default Register;