import React from 'react'
import { Link } from 'react-router-dom'
import {
    Box,
    Flex,
    HStack,
    useColorModeValue,
    useColorMode,
    Image,
    Button,
    Icon,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Text
} from '@chakra-ui/react';
import { ChevronDownIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { FiLogOut } from 'react-icons/fi';
let data = require('../data.json');

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    let colorIcon = useColorModeValue(data.colors[0].textalternatecolor1, data.colors[1].textalternatecolor1)

    return (
        <Box
          bg={ useColorModeValue(data.colors[0].darkestbackgroundcolor, data.colors[1].darkestbackgroundcolor) }
          w={ '100%' }
          h={ '20vh' }>
            <Flex
              h={ '100%' }
              alignItems={ 'center' }
              justifyContent={ 'space-between' }>
                <HStack w={ '20%' }>
                    <Image
                      alt={ 'Creatable-Icon' } 
                      src={ `Creatable_large.png` }
                      w={ '10vh' }
                      h={ '10vh' }
                      ml={ '6vh' }/>
                </HStack>
                <HStack 
                  w={ '65%' }
                  spacing={ '30px' }>
                    <Link
                      draggable={ false }
                      to={ "/characters" }
                      state={{ create: false }}>
                        <Button
                          size={ 'lg' }
                          backgroundColor={ useColorModeValue(data.colors[0].darkerbackgroundcolor2, data.colors[1].darkerbackgroundcolor2) }
                          _hover={{
                            backgroundColor: useColorModeValue(data.colors[0].darkerbackgroundcolor1, data.colors[1].darkerbackgroundcolor1)
                          }}
                          color={ useColorModeValue(data.colors[0].textalternatecolor1, data.colors[1].textalternatecolor1) }>
                            Character
                        </Button>
                    </Link>
                    <Link
                      draggable={ false }
                      to={ "/weapons" }
                      state={{ create: false }}>
                        <Button
                          size={ 'lg' }
                          backgroundColor={ useColorModeValue(data.colors[0].darkerbackgroundcolor2, data.colors[1].darkerbackgroundcolor2) }
                          _hover={{
                            backgroundColor: useColorModeValue(data.colors[0].darkerbackgroundcolor1, data.colors[1].darkerbackgroundcolor1)
                          }}
                          color={ useColorModeValue(data.colors[0].textalternatecolor1, data.colors[1].textalternatecolor1) }>
                            Weapon
                        </Button>
                    </Link>
                    <Link
                      draggable={false}
                      to={ "/armors" }
                      state={{ create: false }}>
                        <Button
                          size={ 'lg' }
                          backgroundColor={ useColorModeValue(data.colors[0].darkerbackgroundcolor2, data.colors[1].darkerbackgroundcolor2) }
                          _hover={{
                            backgroundColor: useColorModeValue(data.colors[0].darkerbackgroundcolor1, data.colors[1].darkerbackgroundcolor1)
                          }}
                          color={ useColorModeValue(data.colors[0].textalternatecolor1, data.colors[1].textalternatecolor1) }>
                            Armor
                        </Button>
                    </Link>
                    <Link
                      draggable={false}
                      to={ "/classes" }
                      state={{ create: false }}>
                        <Button
                          size={'lg'}
                          backgroundColor={ useColorModeValue(data.colors[0].darkerbackgroundcolor2, data.colors[1].darkerbackgroundcolor2) }
                          _hover={{
                            backgroundColor: useColorModeValue(data.colors[0].darkerbackgroundcolor1, data.colors[1].darkerbackgroundcolor1)
                          }}
                          color={ useColorModeValue(data.colors[0].textalternatecolor1, data.colors[1].textalternatecolor1) }>
                            Class
                        </Button>
                    </Link>
                    <Link
                      draggable={false}
                      to={"/passives"}
                      state={{ create: false }}>
                        <Button
                          size={'lg'}
                          backgroundColor={ useColorModeValue(data.colors[0].darkerbackgroundcolor2, data.colors[1].darkerbackgroundcolor2) }
                          _hover={{
                            backgroundColor: useColorModeValue(data.colors[0].darkerbackgroundcolor1, data.colors[1].darkerbackgroundcolor1)
                          }}
                          color={ useColorModeValue(data.colors[0].textalternatecolor1, data.colors[1].textalternatecolor1) }>
                            Passive
                        </Button>
                    </Link>
                    <Link
                      draggable={false}
                      to={"/skills"}
                      state={{ create: false }}>
                        <Button
                          size={'lg'}
                          backgroundColor={ useColorModeValue(data.colors[0].darkerbackgroundcolor2, data.colors[1].darkerbackgroundcolor2) }
                          _hover={{
                            backgroundColor: useColorModeValue(data.colors[0].darkerbackgroundcolor1, data.colors[1].darkerbackgroundcolor1)
                          }}
                          color={ useColorModeValue(data.colors[0].textalternatecolor1, data.colors[1].textalternatecolor1) }>
                            Skill
                        </Button>
                    </Link>
                    <Menu>
                      <MenuButton
                        as={Button} 
                        rightIcon={ <ChevronDownIcon /> } 
                        bgColor={ useColorModeValue(data.colors[0].darkerbackgroundcolor2, data.colors[1].darkerbackgroundcolor2) }
                        color={ useColorModeValue(data.colors[0].textalternatecolor1, data.colors[1].textalternatecolor1) }>
                          More
                      </MenuButton>
                      <MenuList
                        bgColor={ useColorModeValue(data.colors[0].darkerbackgroundcolor2, data.colors[1].darkerbackgroundcolor2) }
                        borderWidth={ 0 }>
                        <MenuItem
                          w={ '100%' }
                          h={ '100%' }
                          color={ useColorModeValue(data.colors[0].textalternatecolor1, data.colors[1].textalternatecolor1) }
                          bgColor={ useColorModeValue(data.colors[0].darkerbackgroundcolor2, data.colors[1].darkerbackgroundcolor2) }>
                          <Text w={ '100%' } h={ '100%' }>
                            <Link
                              draggable={ false }
                              to={ '/battle' }
                              state={{ create: false }}>
                                <Text w={ '100%' } h={ '100%' }>
                                  Combat
                                </Text>
                            </Link>
                          </Text>
                        </MenuItem>
                        <MenuItem
                          w={ '100%' }
                          h={ '100%' }
                          color={ useColorModeValue(data.colors[0].textalternatecolor1, data.colors[1].textalternatecolor1) }
                          bgColor={ useColorModeValue(data.colors[0].darkerbackgroundcolor2, data.colors[1].darkerbackgroundcolor2) }>
                          <Text w={ '100%' } h={ '100%' }>
                            <Link
                              draggable={ false }
                              to={ '/information' }
                              state={{ create: false }}>
                                <Text w={ '100%' } h={ '100%' }>
                                  Information
                                </Text>
                            </Link>
                          </Text>
                        </MenuItem>
                      </MenuList>
                    </Menu>
                </HStack>
                <HStack 
                  w={'15%'}
                  spacing={'20px'}
                  state={{ create: false }}>
                    <Button
                      size={'lg'}
                      onClick={toggleColorMode}
                      backgroundColor={ useColorModeValue(data.colors[0].darkerbackgroundcolor2, data.colors[1].darkerbackgroundcolor2) }
                      _hover={{
                        backgroundColor: useColorModeValue(data.colors[0].darkerbackgroundcolor1, data.colors[1].darkerbackgroundcolor1)
                      }}>
                        { colorMode === 'dark' 
                            ? <SunIcon color={ colorIcon }/> 
                            : <MoonIcon color={ colorIcon }/> 
                        }
                    </Button>
                    <Link
                      draggable={false}
                      to={"/"}
                      state={{ create: false }}>
                        <Button
                          size={'lg'}
                          backgroundColor={ useColorModeValue(data.colors[0].darkerbackgroundcolor2, data.colors[1].darkerbackgroundcolor2) }
                          _hover={{
                            backgroundColor: useColorModeValue(data.colors[0].darkerbackgroundcolor1, data.colors[1].darkerbackgroundcolor1)
                          }}>
                            <Icon 
                              h={'20px'} 
                              w={'20px'} 
                              color={ useColorModeValue(data.colors[0].textalternatecolor1, data.colors[1].textalternatecolor1) } as={ FiLogOut } />
                        </Button>
                    </Link>
                </HStack>
            </Flex>
        </Box>
    )
}

export default Navbar