import React from 'react'
import { 
    Box,
    Flex, 
    VStack,
    useColorModeValue,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    TabIndicator,
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    AccordionIcon,
    Heading,
    Text,
    UnorderedList,
    ListItem,
    ListIcon,
} from '@chakra-ui/react'
import {
    MathJax
} from 'better-react-mathjax'

const InformationPage = () => {
    let data = require('../../data.json')
    let backgroundColor = useColorModeValue(data.colors[0].basicbackgroundcolor, data.colors[1].basicbackgroundcolor)
    let sbackgroundColor = useColorModeValue(data.colors[0].darkerbackgroundcolor1, data.colors[1].darkerbackgroundcolor1)
    let inputBackgroundColor = useColorModeValue(data.colors[0].darkerbackgroundcolor2, data.colors[1].darkerbackgroundcolor2)
    let inputBorderColor = useColorModeValue(data.colors[0].darkestbackgroundcolor, data.colors[1].darkestbackgroundcolor)
    let textColor = useColorModeValue(data.colors[0].textcolor, data.colors[1].textcolor)
    let alternateTextColor = useColorModeValue(data.colors[0].textalternatecolor1, data.colors[1].textalternatecolor1)

    return (
        <Box
          w={ '100%' }
          h={ '100%' }
          minH={ '80vh' }
          bgColor={ backgroundColor }
          overflow={ 'scroll' }
          position={ 'relative' }
          p={ 2 }
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
            <Flex p={ 0 }>
                <VStack
                  w={ '100%' }
                  color={ textColor }
                  padding={ '2%' }>
                    <Tabs w={ '100%' } variant={ 'unstyled' } isFitted>
                        <TabList>
                            <Tab>Stats</Tab>
                            <Tab>Magic</Tab>
                            <Tab>Spirit</Tab>
                            <Tab>History</Tab>
                        </TabList>
                        <TabIndicator 
                          mt={ '-1.5px' }
                          h={ '2px' }
                          bg={ 'orange.400' }
                          borderRadius={ '1px' } />
                        <TabPanels>
                            <TabPanel>
                                <Accordion allowMultiple p={ 4 }>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    base
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                The stats determine multiple aspect of life for a character. How fast can he move, how strong he is, how strong is magic his are all determine by the stats of a character. All the aspect of combat are determine by the stats of a character.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 1 } pb={ 2 }>
                                                Each character possess the following stats when he's born:
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                <Text fontWeight={'bold'} textTransform={ 'uppercase' }>HP:</Text>
                                                It determine the number of Healt Point of a character, as well as his lifeforce.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                <Text fontWeight={'bold'} textTransform={ 'uppercase' }>Strength:</Text>
                                                It determine the physical strength of a character, it also determine the physical damage of a character.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                <Text fontWeight={'bold'} textTransform={ 'uppercase' }>Defense:</Text>
                                                It determine the endurance of a character, it also determine the physical resistance of a character.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                <Text fontWeight={'bold'} textTransform={ 'uppercase' }>Magic:</Text>
                                                It determine the strength of the mind of a character, it also determine the magical damage of a character.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                <Text fontWeight={'bold'} textTransform={ 'uppercase' }>Resistance:</Text>
                                                It determine the fortitude of a character as well as his resistance of illness, it also determine the magical resistance of a character.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                <Text fontWeight={'bold'} textTransform={ 'uppercase' }>Speed:</Text>
                                                It determine the speed of a character, as well as his reflex and evasion rate.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                <Text fontWeight={'bold'} textTransform={ 'uppercase' }>Skill:</Text>
                                                It determine the dexterity of a character, as well as his precision, hit rate and crit rate.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                <Text fontWeight={'bold'} textTransform={ 'uppercase' }>Luck:</Text>
                                                It determine the chance of a character, as well as his hit rate, evasion rate and crit avoid.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                <Text fontWeight={'bold'} textTransform={ 'uppercase' }>Mana:</Text>
                                                It determine the number of Mana Point of a character, as well as the speed of regeneration of the MP of a character.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 1 } pb={ 2 }>
                                                Stats are boosted by leveling up (depending on the growth rate of the said stat).
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    secret #1
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                The growth rate of the stat of a character can increase with training.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                The next training are necessary for increasing the growth rate of the stats:
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                <Text fontWeight={'bold'} textTransform={ 'uppercase' }>HP:</Text>
                                                The character needs to regenerate his lifeforce to boost the growth rate of his HP stat.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                <Text fontWeight={'bold'} textTransform={ 'uppercase' }>Strength:</Text>
                                                The character needs to train his muscles to boost the growth rate of his strength stat.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                <Text fontWeight={'bold'} textTransform={ 'uppercase' }>Defense:</Text>
                                                The character needs to train his body to physical pain to boost the growth rate of his defense stat.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                <Text fontWeight={'bold'} textTransform={ 'uppercase' }>Magic:</Text>
                                                The character needs to cast spell to boost the growth rate of his magic stat.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                <Text fontWeight={'bold'} textTransform={ 'uppercase' }>Resistance:</Text>
                                                The character needs to train his body to the effect of magic to boost the growth rate of his resistance stat.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                <Text fontWeight={'bold'} textTransform={ 'uppercase' }>Speed:</Text>
                                                The character needs to pratice his cardio to boost the growth rate of his speed stat.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                <Text fontWeight={'bold'} textTransform={ 'uppercase' }>Skill:</Text>
                                                The character needs to pratice a technical exercice to boost the growth rate of his skill stat.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                <Text fontWeight={'bold'} textTransform={ 'uppercase' }>Luck:</Text>
                                                The character needs to pray to boost the growth rate of his luck stat.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                <Text fontWeight={'bold'} textTransform={ 'uppercase' }>Mana:</Text>
                                                The character needs to make his body regenerate magicules to boost the growth rate of his mana stat.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    secret #2
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                A character needs 5 or more speed stat to double a enemy during combat.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    secret #3
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 1 } pb={ 2 }>
                                                During combat, calculations are done for damage, hit and crit:
                                            </Text>
                                            <Text noOfLines={ 2 } pb={ 2 }>
                                                <Text fontSize={ 16 } fontWeight={ 'bold' } textTransform={ 'uppercase' } pb={ 1 }>avoid chance:</Text>
                                                <Text fontSize={ 20 }>
                                                    <MathJax inline>{ '\\(\\frac{Speed \\times 3 + Luck}{2}\\)' }</MathJax>
                                                </Text>
                                            </Text>
                                            <Text noOfLines={ 2 } pb={ 2 }>
                                                <Text fontSize={ 16 } fontWeight={ 'bold' } textTransform={ 'uppercase' } pb={ 1 }>hit chance: (WRB == Weapon Rank Bonus)</Text>
                                                <Text fontSize={ 20 }>
                                                    <MathJax inline>{ '\\(Weapon_{Hit} + \\frac{Skill \\times 3 + Luck}{2}\\ + Character_{WRB} - Enemy_{Avoid}\\)' }</MathJax>
                                                </Text>
                                            </Text>
                                            <Text noOfLines={ 2 } pb={ 2 }>
                                                <Text fontSize={ 16 } fontWeight={ 'bold' } textTransform={ 'uppercase' } pb={ 1 }>critical chance:</Text>
                                                <Text fontSize={ 20 }>
                                                    <MathJax inline>{ '\\(Weapon_{Crit} + \\frac{Skill}{2}\\ - Enemy_{Luck}\\)' }</MathJax>
                                                </Text>
                                            </Text>
                                            <Text noOfLines={ 3 } pb={ 2 }>
                                                <Text fontSize={ 16 } fontWeight={ 'bold' } textTransform={ 'uppercase' } pb={ 1 }>Basic attack: (WRB == Weapon Rank Bonus)</Text>
                                                <Text fontSize={ 20 }>
                                                    <MathJax inline>{ '\\(Strength + Weapon_{Damage} + Character_{WRB} - Enemy_{Defense}\\)' }</MathJax>
                                                </Text>
                                                <Text fontSize={ 20 }>
                                                    <MathJax inline>{ '\\(Magic + Weapon_{Damage} + Character_{WRB} - Enemy_{Resistance}\\)'}</MathJax>
                                                </Text>
                                            </Text>
                                            <Text noOfLines={ 3 } pb={ 2 }>
                                                <Text fontSize={ 16 } fontWeight={ 'bold' } textTransform={ 'uppercase' } pb={ 1 }>Skill/Spell:</Text>
                                                <Text fontSize={ 20 }>
                                                    <MathJax inline>{ '\\(Strength + Skill_{Power} + Weapon_{Damage} + Character_{WRB} - Enemy_{Defense}\\)' }</MathJax>
                                                </Text>
                                                <Text fontSize={ 20 }>
                                                    <MathJax inline>{ '\\(Magic + Spell_{Power} - Enemy_{Resistance}\\)' }</MathJax>
                                                </Text>
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    secret #4
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                A passive that gives a boost during combat are added after the calculations.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    secret #5
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 1 } pb={ 2 }>
                                                A character has a stat rank depending on the sum of all his stats:
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                <Text fontWeight={'bold'} textTransform={ 'uppercase' }>Basic:</Text>
                                                The sum of all the character stats is equal or lower than 150.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                <Text fontWeight={'bold'} textTransform={ 'uppercase' }>Expert:</Text>
                                                The sum of all the character stats is equal or lower than 200.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                <Text fontWeight={'bold'} textTransform={ 'uppercase' }>Sage:</Text>
                                                The sum of all the character stats is equal or lower than 300.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                <Text fontWeight={'bold'} textTransform={ 'uppercase' }>Dragon:</Text>
                                                The sum of all the character stats is equal or lower than 600.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                <Text fontWeight={'bold'} textTransform={ 'uppercase' }>God:</Text>
                                                The sum of all the character stats is greater than 600.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                </Accordion>
                            </TabPanel>
                            <TabPanel>
                                <Accordion allowMultiple p={ 4 }>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    base
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                There is 7 types of magic:
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                <Text fontWeight={'bold'} textTransform={ 'uppercase' }>arcane, fire, water, air, earth, light and dark</Text>
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                You have a proficiency with magic and that proficiency allow the use of the said magic.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    secret #1
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                Magicule is the particule that allow oneself to use magic.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                This particle can be found partically anywhere: in someone's body, in the air, in a rock, etc.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                Someplaces with contain more magicules than other places, the same phenomenon can be seen in people.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    secret #2
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                It is possible to use the magicules around oneself by using other magicules to pull the surrounding one closer and open his own skin's pore to let the magicule enter their body.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    secret #3
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                The surrounding magicules can be control, but it is very limited and casting a spell with it require a great mastery of magic and a perfect concentration and precision.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    secret #4
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                The proficiency of a magic is by itself only the control that the individual have on the said magic. When someone have a proficiency of 100%, it mean that the person have mastered the magic to the maximum that is humanly possible. Boosting the magic at a higher level is possible, but the body will encounter consequences to that choice.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    secret #5
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                The 7 basic magic all have sub-magic in them:
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                <Text fontWeight={'bold'} textTransform={ 'uppercase' }>Arcane:</Text>
                                                The arcane magic subdivise in mind and illusion.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                <Text fontWeight={'bold'} textTransform={ 'uppercase' }>Fire:</Text>
                                                The fire magic subdivise in heat and lava.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                <Text fontWeight={'bold'} textTransform={ 'uppercase' }>Water:</Text>
                                                The water magic subdivise in liquid and ice.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                <Text fontWeight={'bold'} textTransform={ 'uppercase' }>Air:</Text>
                                                The air magic subdivise in wind and lightning.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                <Text fontWeight={'bold'} textTransform={ 'uppercase' }>Earth:</Text>
                                                The earth magic subdivise in nature and poison.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                <Text fontWeight={'bold'} textTransform={ 'uppercase' }>Light:</Text>
                                                The light magic subdivise in holy and space.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                <Text fontWeight={'bold'} textTransform={ 'uppercase' }>Dark:</Text>
                                                The dark magic subdivise in curse and necromancy.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    secret #6
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                The proficiency of magic set the maximum number that the proficiencies of sub-magic can have at first. However, if the caster is willing to take the risk, he can suppress this limit and use more powerful spell than normal, but his body will have to endure the consequences.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    secret #7
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 1 } pb={ 2 }>
                                                Any magic can have their proficiencies boosted when you pratice using them with gradually more powerful spell.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    secret #8
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 1 } pb={ 2 }>
                                                The different element of magic can be used even without the proficiency to use it at first, a character only has to use arcane magic modified to the most basic form of the element:
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                <Text fontWeight={'bold'} textTransform={ 'uppercase' }>Fire:</Text>
                                                By moving rapidly the magicules to create heat.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                <Text fontWeight={'bold'} textTransform={ 'uppercase' }>Water:</Text>
                                                By transforming the magicules into molecules of water.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                <Text fontWeight={'bold'} textTransform={ 'uppercase' }>Air:</Text>
                                                By transforming the magicules into oxygen.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                <Text fontWeight={'bold'} textTransform={ 'uppercase' }>Earth:</Text>
                                                By transforming the magicules into dirt.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                <Text fontWeight={'bold'} textTransform={ 'uppercase' }>Light:</Text>
                                                By making the magicules absorb the surrounding light.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                <Text fontWeight={'bold'} textTransform={ 'uppercase' }>Dark:</Text>
                                                By making the magicules absorb the surrounding darkness.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    secret #9
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 1 } pb={ 2 }>
                                                A character has a magic rank depending on how skillfully he can control his magic:
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                <Text fontWeight={'bold'} textTransform={ 'uppercase' }>Basic:</Text>
                                                The character can use basic spell with incantations.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                <Text fontWeight={'bold'} textTransform={ 'uppercase' }>Expert:</Text>
                                                The character can use advanced spell with incantations.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                <Text fontWeight={'bold'} textTransform={ 'uppercase' }>Sage:</Text>
                                                The character can use advanced spell with speachless casting or expert spell with incantations.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                <Text fontWeight={'bold'} textTransform={ 'uppercase' }>Dragon:</Text>
                                                The character can use game breaking spell with speachless casting.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                <Text fontWeight={'bold'} textTransform={ 'uppercase' }>God:</Text>
                                                The character can use world breaking spell with speachless casting.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    secret #10
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                        <Text fontSize={ 16 } noOfLines={ 1 } pb={ 2 }>
                                                To pass to the next magic rank, a character needs to learn a specific skill (if there is no further rank, the skill can be learn witout any benefit):
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                <Text as={ 'span' } fontWeight={'bold'} textTransform={ 'uppercase' }>Basic: </Text>
                                                <Text as={ 'span' } fontStyle={ 'italic' }>Mana Eye</Text> - 
                                                Allow the character to see magicules.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                <Text as={'span'} fontWeight={'bold'} textTransform={ 'uppercase' }>Expert: </Text>
                                                <Text as={ 'span' } fontStyle={ 'italic' }>Worldless Magic</Text> - 
                                                Allow the character to use magic without incantations.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                <Text as={'span'} fontWeight={'bold'} textTransform={ 'uppercase' }>Sage: </Text>
                                                <Text as={ 'span' } fontStyle={ 'italic' }>Mana Limiter/Releaser</Text> - 
                                                Allow the character to limit and release is own mana usage.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                <Text as={'span'} fontWeight={'bold'} textTransform={ 'uppercase' }>Dragon: </Text>
                                                <Text as={ 'span' } fontStyle={ 'italic' }>Nature Magic</Text> - 
                                                Allow the character to use the magicules around him.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                <Text as={'span'} fontWeight={'bold'} textTransform={ 'uppercase' }>God: </Text>
                                                <Text as={ 'span' } fontStyle={ 'italic' }>Mana World</Text> - 
                                                Allow the character to change the rules of the world.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                </Accordion>
                            </TabPanel>
                            <TabPanel>
                                <Accordion allowMultiple p={ 4 }>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    base
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 1 } pb={ 2 }>
                                                The spirit is the power of the will of a character, the more a character have the will to realise his objective, the more his spirit will be potent. The spirit is stronger the more the user have a will to do the action required.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    secret #1
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 1 } pb={ 2 }>
                                                A character has a spirit rank depending on how willful he is and how much he trained for it:
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                <Text fontWeight={'bold'} textTransform={ 'uppercase' }>Basic:</Text>
                                                The character has a weak will that he can use.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                <Text fontWeight={'bold'} textTransform={ 'uppercase' }>Expert:</Text>
                                                The character has a averaege will that he can use.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                <Text fontWeight={'bold'} textTransform={ 'uppercase' }>Sage:</Text>
                                                The character has a strong will that he can use.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                <Text fontWeight={'bold'} textTransform={ 'uppercase' }>Dragon:</Text>
                                                The character has a trained strong will that he can use.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                <Text fontWeight={'bold'} textTransform={ 'uppercase' }>God:</Text>
                                                The character has a trained strong will and a natural talent for it that he can use.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    secret #2
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                To pass to the next spirit rank, a character has to learn a specific skill (if there is no further rank, the skill can be learn without any benefit):
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                <Text as={'span'} fontWeight={'bold'} textTransform={ 'uppercase' }>Basic: </Text>
                                                <Text as={ 'span' } fontStyle={ 'italic' }>Spirit Eye</Text> - 
                                                Allow the character to see the stats of others.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                <Text as={'span'} fontWeight={'bold'} textTransform={ 'uppercase' }>Expert: </Text>
                                                <Text as={ 'span' } fontStyle={ 'italic' }>Spirit Sense</Text> - 
                                                Allow the character to boost his 5 senses to the limit.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                <Text as={'span'} fontWeight={'bold'} textTransform={ 'uppercase' }>Sage: </Text>
                                                <Text as={ 'span' } fontStyle={ 'italic' }>Spirit Limit</Text> - 
                                                Allow the user to boost his physical capabilities (strength, agility, speed) to his limit or pass his limit, also allow the adding of spirit power to his attack and skills.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                <Text as={'span'} fontWeight={'bold'} textTransform={ 'uppercase' }>Dragon: </Text>
                                                <Text as={ 'span' } fontStyle={ 'italic' }>Spirit Body</Text> - 
                                                Allow the character to change himself how he pleases.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                <Text as={'span'} fontWeight={'bold'} textTransform={ 'uppercase' }>God: </Text>
                                                <Text as={ 'span' } fontStyle={ 'italic' }>Spirit Domination</Text> - 
                                                Allow the character to dominate the weak will of others.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                </Accordion>
                            </TabPanel>
                            <TabPanel>
                                <Accordion allowMultiple p={ 4 }>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year -100000 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                Year of the creation of the world by a mana catastrophy (source of the catastrophy unkowned). 
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year -50000 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 1 } pb={ 2 }>
                                                Year of the great mana disturbance, creating the Dragonoid (source of the distrubance unkowned).
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 1 } pb={ 2 }>
                                                Year of the birth of the dragon Asha, the god of magic.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year -45000 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 1 } pb={ 2 }>
                                                Years of ascension of Asha to the state of godhood.
                                            </Text>
                                            <Text>
                                                Year of the start of the distribution of Asha's Mana into the nature, a distribution that cause a boost to the mana in the air and in all creatures.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year -44972 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                Years of the birth of the dragon Sylanna, the god of nature.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year -44950 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                Years of the end of the distribution of Asha's mana.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year -44500 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                Years of the ascension of Sylanna to the state of godhood. 
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year -42000 to -41500 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 1 } pb={ 2 }>
                                                Years of usage of the purest Nature magic to mold the three continents:
                                                <Text as={ 'span' } fontWeight={'bold'} textTransform={ 'uppercase' }> Atlas, Gaia and Osiris</Text>
                                                .
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                <Text fontWeight={'bold'} textTransform={ 'uppercase' }>Atlas:</Text>
                                                A huge continent with 1 island that is today divided into 9 sections:
                                                <UnorderedList>
                                                    <ListItem>Sajin, the mountains of the dragon</ListItem>
                                                    <ListItem>Tensa, the sacred birch forest of the beasts</ListItem>
                                                    <ListItem>Zara, the divine plain of the gods</ListItem>
                                                    <ListItem>Kuru, the giant mountain of observation</ListItem>
                                                    <ListItem>Kenpa, the fertile meadow</ListItem>
                                                    <ListItem>Shin, the neverending forest of oak</ListItem>
                                                    <ListItem>Shun, the grassland of the sun</ListItem>
                                                    <ListItem>Toshi, the deserted frozen land</ListItem>
                                                    <ListItem>Zenka, the desert of death that always have unfertile lands and unbearable heat</ListItem>
                                                </UnorderedList>
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                <Text fontWeight={'bold'} textTransform={ 'uppercase' }>Gaia:</Text>
                                                A huge island that is divided into 3 sections:
                                                <UnorderedList>
                                                    <ListItem>Dura, the fertile plain of serenity</ListItem>
                                                    <ListItem>Pior, the bamboo forest of life that is the abode of Mythical Beasts because the forest shelters a lot of mana</ListItem>
                                                    <ListItem>Solitude, the cordillera that contain the Great Tree of Sylph which is the last remain of Sylanna's work</ListItem>
                                                </UnorderedList>
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                <Text fontWeight={'bold'} textTransform={ 'uppercase' }>Osiris:</Text>
                                                5 islands that is divided into 5 sections:
                                                <UnorderedList>
                                                    <ListItem>Rysm, the island of cooperation</ListItem>
                                                    <ListItem>Aloy, the desert of isolation</ListItem>
                                                    <ListItem>Sylv, the grassland of prosperity</ListItem>
                                                    <ListItem>Splyrt, the mountain of concentration</ListItem>
                                                    <ListItem>Vlyd, the deserted plain of abandonment</ListItem>
                                                </UnorderedList>
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year -41431 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of the birth of the dragon Urgash, the god of chaos.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year -40993 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of the birth of the dragon Elrath, the god of justice.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year -40990 to -40374 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Years of the creation of the demon race in the Osiris continent. A race made to be in symbiose with the magic of Asha and who has great stats.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year -39830 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of the start of the collaboration between demon and Asha to increase the power of magic.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year -39700 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of the creation of the different elemental magic and submagic (fire, water, air and earth) by the demon race and Asha.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year -37740 to -37000 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Years of the creation of animals, beasts and mythical beasts in the three different continent. The beast is a race who possess a deep connection with his lifeforce and good stat, but a weak connection with magic.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year -37500 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of ascension of Urgash to the state of godhood.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of the start of the corruption of the demon race to the chaos.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year -37380 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of the end of the corruption of the demon race to the chaos.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year -37379 to -36600 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Years of the civil war between demon in the Osiris continent.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year -37200 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of ascension of Elrath to the state of godhood.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year -37000 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of the start of the effort of Elrath to stop the corruption of Urgash.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year -36750 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of the creation of the dark magic and submagic by the corrupted demon of Urgash.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year -36700 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of the creation of the light magic and submagic by the god of justice Elrath.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year -29500 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of the reconciliation between Urgash and Elrath.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year -20000 to -15000 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Years of the creation of the human race in the Gaia continent. The human race is a race who is design to be the weakest race in term of stat and magic, but with the greatest potential.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year -14890 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of the first instance of the birth of a elf in the human race.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year -14630 to -14320 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Years of the civil war between human in the Gaia continent.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year -14350 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of the exile of a part of the human race to the Atlas continent.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year -14000 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of the creation of the Fhargeus Kingdom in the Kenpa and Shun section.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year -13837 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of the creation of the Aldnerius Empire in the Zenka section.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year -13820 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of the creation of the Draen Alliance in the Zara section.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year -13763 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of the first instance of the birth of a kitsune (woman + fox) in the Draen Alliance.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year -13754 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of the first instance of the birth of a wolfskin (woman + wolf) in the Draen Alliance.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year -13600 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of the declaration of the beastman as a inferior race to the human and start of the enslavement.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year -13541 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of birth of the first magicless human named Asta.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of birth of the dragon Nantharu, the thread of fate and daughter of Asha And Sylanna.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year -13526 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of birth of the dragon Yuimoji, the master of skill and son of Elrath and Urgash.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year -13510 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of birth of the Mythical Beasts Kurama the supreme nine-tails and Keaton the supreme wolfssegner in the Gaia continent by Sylanna for his daughter.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year -13350 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of birth of the dragon Sylvanus, the controller of weather and son of Asha and Sylanna.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year -13325 to -13311 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of the war between the Aldnerius Empire and the Fhargeus Kingdom for the Shin section. In the end, the Shin section was designed as a neutral territory by the two nation and the Kuru section by the three nation.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year -13100 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of birth of the deformed dragon Ylath, the forgotten god and the daughter of Urgash and a unnamed demon.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year -12970 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of the start of the veneration of the god by the human of the Atlas continent.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year -12960 to -12940 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of the war of religion between the three nation. The war had no conclusion and the number of deceased for all nations is well above the hundred of thousand.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year -12955 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of the creation of the immense magic crystal in the dept of a mountain in the Sajin section. The crystal is today the only remanence of the work of the god of magic.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year -12710 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of birth of the dragon Ythil, mother of the void and daughter of Ylath and Yuimoji.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year -12700 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of the ascension of Ylath to the state of godhood.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year -12000 to -11000 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of creation of the voidling by Ythil with the help of Ylath in the Vlyd island. The voidling is a race who resemble the human greatly, but have a deaper connection with mana.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year -11700 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of creation of the unending blob of darkness in a deep cave in the Aloy island. The blob is today the only remanence of the work of the god of chaos.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year -11690 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of birth of the dragon Rhea, the light of faith and daughter of Elrath and Ythil.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year -11500 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of the start of the conquest to transcendence of one life by the human of the Gaia continent. The idea came with the inspiration of the Nine-tails and Wolfssegner Mythical Beast.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year -11495 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of birth of Yami, the transcended limit-breaker and son of the chief of the country in the Gaia continent.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year -11460 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of transcendence of Yami to the state of godhood.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year -11430 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of death of the first transcended human Yami.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year -11425 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of the creation of the creator sword, the sword of justice, by Elrath and given to her daughter Rhea. The sword is today the only remanence of the work of the god of justice.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year -11211 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of birth of the dragon Corrin, dragon of existance and son of Asha and Sylanna.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year -11180 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of birth of the dragon Arthan, the wrath of the world and son of Asha and Sylanna.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of birth of the dragon Byleth, the dragon of power and son of Asha and Sylanna.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year -10000 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of birth of Gehrman, the conqueror of space and time, by two paysant of the Atlas continent.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year -5000 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of ascension of Gehrman to the state of godhood.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year -2501 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of cast of the perfect blizzard by a human ice mage in the Toshi section.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year -2500 to -1000 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Years of the famine of the part of the Aldnerius Empire living in the Toshi section because the land because less and less fertile because of the eternal blizzard.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year -1040 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of birth of Tirmis, the creator of skills and son of two paysant in the Atlas continent.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year -1000 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of creation of the human class by Tirmis with the help of the dragon Yuimoji.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year -1000 to 1200 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                Years of the reign of the primordial gods : 
                                                <Text as={ 'span' } fontWeight={'bold'} textTransform={ 'uppercase' }> Asha, Urgash, Elrath, Sylanna, Arkath</Text>
                                                .
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year 0 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                Year of birth of Arkath, the god of humanity.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year 40 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 2 } pb={ 2 }>
                                                Year of ascension of Arkath to the state of godhood. 
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year 1138 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of birth of Yuuki, the godslayer and son of two noble in the Draen Alliance.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year 1150 to 1168 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Years of the travel of Yuuki to the Gaia continent.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year 1170 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of death of Ylath in the Vlyd island to the hand of Yuuki.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year 1175 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of death of Elrath in the Kuru section to the hand of Yuuki.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year 1180 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of death of Urgash in the Aloy island to the hand of Yuuki.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year 1190 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of death of Asha in the Sajin section to the hand of Yuuki.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year 1200 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of death of Sylanna in the Solitude section to the hand of Yuuki.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of the start of the work of Sylvanus in the place of Sylanna.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year 1200 to 2300 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Years of peace without the gods in the Atlas continent.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year 1203 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of death of Yuuki from a unkowned disease.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year 1256 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of birth of four demon lord Azazoth, Lucifer, Azazel and Abaddon in the Osiris continent.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year 1292 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of the arrival of the four demon lord in the Zenka section of the Atlas continent.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year 1310 to 1400 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Years of domination of the four demon lord in the Zenka section.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year 1368 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of birth of Godric, the hero of heroes by noble of the Aldnerius Empire.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year 1380 to 1395 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Years of training of Godric by the dragon Rhea.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year 1400 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of death of the four demon lord by the supreme salvation of Godric (the spell also burned the entire section forever).
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year 1421 to 1444 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Years of war between the Aldnerius Empire and the Draen Alliance for the Kuru mountain.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year 1738 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of birth of Xeno, the liberator by two slaves of the Zera section.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year 1761 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of death of Xeno's parent by slavery punishment for trying to protect their child.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year 1769 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of the escape of Xeno from slavery into the Tensa forest.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year 1770 to 1820 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Years of the journey of Xeno to the Gaia continent.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year 1791 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of the start of the training of Xeno by Kurama.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year 1820 to 1880 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Years of the war of slavery between Xeno and the Draen Alliance.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year 1880 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of the sign of the treaty of peace between the beastman and the Draen Alliance (the treaty also considered the beastman as a independent group that owned the Tensa forest).
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year 2260 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of birth of Sariel, the god of hope.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of birth of Saraphiel, the goddess of hapiness.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of birth of Elira, the goddess of success.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year 2300 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of ascension of Sariel to the state of godhood.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of ascension of Saraphiel to the state of godhood.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of ascension of Elira to the state of godhood.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of the start of the religion of the three gods in the Draen Alliance by the dragon of faith Rhea.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year 3125 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of the creation of the Antemons village in the Zara plain and very close to the Sajin mountains.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year 3270 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of birth of Boreas Grinberryall, the wind spirit and son of two human farmers in Kenpa meadow.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year 3285 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of birth of Godfrey Dawnbringer, the paladin's exemple and son of two humble noble in the Draenor Capital.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year 3318 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of birth of Ardyn Dawnbringer, the hero of twilight and son of Godfrey a paladin and Annette a nun in the Antemons village.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of birth of Adelia Daygund, the mistress of the mind and daughter of Blayd a demon farmer and Morgana a templar in the Antemons village.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year 3325 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of the destruction of the Antemons village by a demon attack.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of death of Godfrey to a demon.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of death of Annette to a demon.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of disapperance of Blayd.
                                            </Text>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of adoption of Ardyn in the Daygund's family.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year 3330 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of birth of Aldric Licit, the cursed child and son of two noble elf in the Shin forest.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                    <AccordionItem borderTop={ 0 } borderBottomWidth={ 1 } borderColor={ alternateTextColor }>
                                        <AccordionButton>
                                            <Box as={ 'div' } flex={ 1 } textAlign={ 'left' }>
                                                <Heading size={ 'sm' } textTransform={ 'uppercase' }>
                                                    Year 3333 &bull; Ascended Calender
                                                </Heading>
                                            </Box>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pt={ 3 } pb={ 5 }>
                                            <Text fontSize={ 16 } noOfLines={ 12 } pb={ 2 }>
                                                Year of the enrollment of Ardyn and Adelia in the Garreg Mach Academy.
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                </Accordion>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </VStack>
            </Flex>
        </Box>
    )
}

export default InformationPage