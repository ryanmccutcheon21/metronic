'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SignUpMainProps } from '@/types'
import { ACCOUNT_TYPES } from '@/constants'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import SignUpButton from './SignUpButton'

const SignUpMain: React.FC<SignUpMainProps> = ({ setUserData, currStep, setCurrStep }) => {
    const [selected, setSelected] = useState(1)

    return (
        <Flex flexDirection='column' justifyContent='center' gap={10} minH='100vh'>
            {/* Choose Account Type */}
            <Text color='#000' fontWeight='bold' fontSize='larger'>Choose an account type</Text>
            <Text color='#777' fontSize='small'>If you need more info, please visit our <Link href={'/signup'} className='text-blue no-underline'>help page</Link></Text>

            {/* Account Selection Boxes */}
            <Flex mt={5} gap={5}>
                {ACCOUNT_TYPES.map((obj, i) => (
                    <Box
                        key={i}
                        className={`border ${selected === i + 1 ? 'border-blue bg-[#DBEDFF]' : ''} border-dotted rounded-md flex items-center gap-5 p-5 hover:cursor-pointer`}
                        onClick={() => {
                            setUserData({ userType: obj.h3 })
                            setSelected(i + 1)
                        }}
                    >
                        <Box className='bg-[#ADD5FF] px-2 pt-2 rounded-md'>
                            <FontAwesomeIcon icon={obj.icon} size='xl' style={{
                                color: '#006CEA'
                            }} />
                        </Box>
                        <Box>
                            <Heading as='h3' fontWeight='bold'>{obj.h3}</Heading>
                            <Text color='#777'>{obj.p}</Text>
                        </Box>
                    </Box>
                ))}
            </Flex>

            {/* End Selection Boxes */}
            <Flex justifyContent='flex-end'>
                <SignUpButton currStep={currStep} setCurrStep={setCurrStep} />
            </Flex>
        </Flex >
    )
}

export default SignUpMain