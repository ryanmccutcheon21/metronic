import { progressIndicators } from '@/constants'
import { SignUpSidebarProps } from '@/types'
import Image from 'next/image'
import React from 'react'
import logo from '../public/logo.png'
import { Box, Flex, ListItem, Text, UnorderedList } from '@chakra-ui/react'

const SignUpSidebar: React.FC<SignUpSidebarProps> = ({ currStep, setCurrStep }) => {
    return (
        <Flex
            flexDirection='column'
            alignItems='center'
            justifyContent='space-between'
            w='33vw'
            backgroundColor='#006CEA'
            minH='100vh'
        >
            {/* Logo */}
            <Box pt={20}>
                <Image
                    alt='Metronic Logo'
                    src={logo}
                    height={60}
                />
            </Box>

            {/* Progress Bar */}
            <UnorderedList>
                {[1, 2, 3, 4].map(step => (
                    <>
                        <ListItem className='flex gap-5 py-5'>
                            <Box position='relative'>
                                {/* Step Icon */}
                                <Text className={`${step === currStep ? 'bg-green' : 'bg-transparent border border-dotted'} w-11 h-11 rounded-md flex justify-center items-center hover:cursor-pointer`}
                                    onClick={() => setCurrStep(step)}
                                >
                                    {step}
                                </Text>
                                {/* Connecting Line */}
                                {
                                    step < 4 && (
                                        <>
                                            <hr className='border-l-1 border-dotted w-0 h-[2.3rem] absolute top-[2.3rem] left-[1.35rem] border-[#aaa]' />
                                        </>
                                    )
                                }
                            </Box>

                            <Box>
                                <Text>{progressIndicators[step - 1].main}</Text>
                                <Text
                                    color='#aaa'
                                >
                                    {progressIndicators[step - 1].sub}
                                </Text>
                            </Box>
                        </ListItem>
                    </>
                ))}
            </UnorderedList>

            {/* Footer Links */}
            <Flex justifyContent='space-evenly' paddingBottom={10} w='100%'>
                <Text _hover={{ cursor: 'pointer', opacity: '90%' }} color='#50CD89'>Terms</Text>
                <Text _hover={{ cursor: 'pointer', opacity: '90%' }} color='#50CD89'>Plans</Text>
                <Text _hover={{ cursor: 'pointer', opacity: '90%' }} color='#50CD89'>Contact Us</Text>
            </Flex>
        </Flex >
    )
}

export default SignUpSidebar