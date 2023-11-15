import { progressIndicators } from '@/constants'
import { SignUpSidebarProps } from '@/types'
import Image from 'next/image'
import React from 'react'
import logo from '../public/signUpLogo.svg'
import { Box, Flex, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import Link from 'next/link'

const SignUpSidebar: React.FC<SignUpSidebarProps> = ({ currStep, setCurrStep }) => {
    return (
        <Flex
            flexDirection='column'
            alignItems='center'
            justifyContent='space-between'
            w='33%'
            backgroundColor='#006CEA'
            minH='100vh'
        >

            <Flex flexDirection='column' alignItems='center' pt={140} pb={35} px={125}>
                {/* Logo */}
                <Box pb={120}>
                    <Link href='/'>
                        <Image
                            alt='Metronic Logo'
                            src={logo}
                            height={74}
                            width={242}
                        />
                    </Link>
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
                                                <hr className='border-l-1 border-dotted w-0 h-[2.5rem] absolute top-[2.3rem] left-[1.35rem] border-[#aaa]' />
                                            </>
                                        )
                                    }
                                </Box>

                                <Box>
                                    <Text className='font-semibold text-[20px] text-[#FFFFFF]'>{progressIndicators[step - 1].main}</Text>
                                    <Text
                                        className='font-medium text-[14px] leading-[14px] text-[#FFFFFF] opacity-[20%]'
                                    >
                                        {progressIndicators[step - 1].sub}
                                    </Text>
                                </Box>
                            </ListItem>
                        </>
                    ))}
                </UnorderedList>
            </Flex>


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