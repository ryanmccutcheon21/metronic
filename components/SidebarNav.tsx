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
        <Flex flexDirection='column' px={10} mr={10} mt={30} h='100vh'>
            {HOME_NAV_LINKS.map((obj, i) => (
                <Flex
                    alignItems='center'
                    key={i}
                    onClick={() => handleNavLinkClick(i)}
                    cursor='pointer'
                    backgroundColor={activeNavLink === i ? '#d8e9fc' : 'transparent'}
                    rounded='5px'
                    p={10}
                >
                    <Image
                        src={obj.image}
                        height={20}
                        width={20}
                        alt={obj.alt}
                        className='pr-5'
                    />
                    <Text color={activeNavLink === i ? '#005cc6' : 'black'}>{obj.text}</Text>
                </Flex>
            ))
            }
        </Flex >
    )
}

export default SidebarNav