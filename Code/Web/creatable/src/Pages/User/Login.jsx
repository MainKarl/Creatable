import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import {
    Box,
    Flex,
    HStack,
    VStack,
    useColorModeValue,
    FormControl,
    FormErrorMessage,
    Input,
    InputGroup,
    InputRightElement,
    Button,
    IconButton,
    Text,
    FormLabel,
    Divider
} from '@chakra-ui/react';
import {
    ViewIcon,
    ViewOffIcon
} from '@chakra-ui/icons'
let data = require('../../data.json');

const Login = () => {
    const [redirect, setRedirect] = useState(false);

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState('');

    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
    const [passwordVisibility, setPasswordVisibility] = useState(false);
    const toggleVisibility = () => setPasswordVisibility(!passwordVisibility);

    let backgroundColor = useColorModeValue(data.colors[0].basicbackgroundcolor, data.colors[1].basicbackgroundcolor);
    let sbackgroundColor = useColorModeValue(data.colors[0].darkerbackgroundcolor1, data.colors[1].darkerbackgroundcolor1);
    let inputBackgroundColor = useColorModeValue(data.colors[0].darkerbackgroundcolor2, data.colors[1].darkerbackgroundcolor2);
    let inputBorderColor = useColorModeValue(data.colors[0].darkestbackgroundcolor, data.colors[1].darkestbackgroundcolor);
    let textColor = useColorModeValue(data.colors[0].textcolor, data.colors[1].textcolor);
    let alternateTextColor = useColorModeValue(data.colors[0].textalternatecolor1, data.colors[1].textalternatecolor1);

    const changeEmail = (email) => setEmail(email)
    const changePassword = (password) => setPassword(password)
    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            document.getElementById("login").click();
        }
    }

    const handleLogin = () => {
        let errorList = []
        let error = false
        if (password === '') {
            setPasswordError(true);
            setPasswordErrorMessage('ERROR: Password cannot be empty');
            error = true;
        }
        else
            setPasswordError(false)
        
        if (email === '') {
            setEmailError(true);
            setEmailErrorMessage('ERROR: Email cannot be empty');
            error = true;
        }
        else
            setEmailError(false)
        
        if (!error) {
            let obj = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: email, password: password })
            }
            fetch(data.api_url+'login', obj).then((response) => {
                response.json().then((item) => {
                    if (item.status == 'success') {
                        localStorage.setItem("token_auth", item.auth_token)
                        setRedirect(true)
                    }
                    else
                        errorList.push('CONNEXION ERROR: Your email or password is not accurate')
                })
            })
        }
    }

    return (
        <Box 
          minHeight={'100vh'}
          backgroundColor={backgroundColor}>
            { redirect ? (<Navigate push to="/characters"/>) : null }
            <Flex
              alignItems={'center'} 
              justifyContent={'space-between'} 
              padding={'0 5%'}
              minHeight={'88vh'}>
                <HStack width={'30%'}/>
                <VStack 
                  width={'40%'}
                  backgroundColor={sbackgroundColor}
                  color={textColor}
                  top={'50%'}
                  position={'relative'}
                  spacing={'20px'}
                  padding={'2%'}>
                    <HStack width={'100%'}>
                        <Text
                          color={textColor} 
                          textAlign={'center'} 
                          width={'100%'}
                          fontSize={'24px'}
                          fontWeight={'bold'}>
                            Login
                        </Text>
                    </HStack>
                    <HStack width={ '100%' }>
                        <Divider color={alternateTextColor} />
                    </HStack>
                    <HStack
                      width={'100%'}>
                        <FormControl isInvalid={emailError} onKeyUp={ (value) => { if (value.code === 'Enter') { handleLogin() } } }>
                            <FormLabel color={textColor}>Email</FormLabel>
                            <InputGroup>
                                <Input 
                                  type='text'
                                  backgroundColor={inputBackgroundColor}
                                  borderColor={inputBorderColor}
                                  onChange={ (nEmail) => setEmail(nEmail.target.value) } />
                            </InputGroup>
                            <FormErrorMessage>{ emailErrorMessage }</FormErrorMessage>
                        </FormControl>
                    </HStack>
                    <HStack
                      width={'100%'}>
                        <FormControl isInvalid={passwordError} onKeyUp={ (value) => { if (value.code === 'Enter') { handleLogin() } } }>
                            <FormLabel color={textColor}>Password</FormLabel>
                            <InputGroup>
                                <Input 
                                  type={passwordVisibility ? 'text' : 'password' } 
                                  backgroundColor={inputBackgroundColor} 
                                  borderColor={inputBorderColor} 
                                  onChange={ (nPassword) => setPassword(nPassword.target.value) } />
                                <InputRightElement>
                                    <IconButton h='1.75rem' size='sm' onClick={toggleVisibility}>
                                        {passwordVisibility ?  <ViewOffIcon /> : <ViewIcon /> }
                                    </IconButton>
                                </InputRightElement>
                            </InputGroup>
                            <FormErrorMessage>{ passwordErrorMessage }</FormErrorMessage>
                        </FormControl>
                    </HStack>
                    <HStack width={'100%'}>
                        <Button
                          size={'md'} 
                          colorScheme={'orange'} 
                          marginLeft={'auto'} 
                          marginRight={'auto'} 
                          width={'90%'}
                          onClick={() => handleLogin() }>Login</Button>
                    </HStack>
                    <HStack width={'100%'}><Text color={alternateTextColor}>You don't have a account? <Link draggable={false} to="/register">Register here</Link></Text></HStack>
                </VStack>
                <HStack width={'30%'}/>
            </Flex>
        </Box>
    );
}

export default Login;