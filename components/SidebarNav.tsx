'use client'

import { useState } from 'react'
import { Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { HOME_NAV_LINKS } from '@/constants'

const SidebarNav = () => {
    const [activeNavLink, setActiveNavLink] = useState(1)

    const handleNavLinkClick = (index: React.SetStateAction<number>) => {
        setActiveNavLink(index)
    }

    return (
        <Flex flexDirection='column' px={30} mt={30} h='100vh' w='280px'>
            {HOME_NAV_LINKS.map((obj, i) => (
                <Flex
                    alignItems='center'
                    key={i}
                    onClick={() => handleNavLinkClick(i)}
                    cursor='pointer'
                    backgroundColor={activeNavLink === i ? '#EEF6FF' : 'transparent'}
                    rounded='5px'
                    p={10}
                >
                    {activeNavLink === i ? (
                        <>
                            <Image
                                src={obj.image}
                                height={20}
                                width={20}
                                alt={obj.alt}
                                className='pr-5'
                                color='#3E97FF'
                            />
                        </>
                    ) : (
                        <>
                            <Image
                                src={obj.imageBlack}
                                height={20}
                                width={20}
                                alt={obj.alt}
                                className='pr-5'
                            />
                        </>
                    )}

                    <Text color={activeNavLink === i ? '#3E97FF' : '#5E6278'}>{obj.text}</Text>
                </Flex>
            ))
            }
        </Flex >
    )
}

export default SidebarNav