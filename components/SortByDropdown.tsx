import { Flex, Text } from '@chakra-ui/react'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const SortByDropdown = () => {
    return (
        <Flex justifyContent='flex-end' alignItems='center' gap={10} pr={19}>
            <Text color='#7E8299'>Sort by</Text>
            <Flex backgroundColor='#FFFFFF' h='38px' w='140px' rounded={6} px={10} justifyContent='space-between' alignItems='center'>
                <Text color='#3F4254' fontWeight={600}>Today</Text>
                <FontAwesomeIcon icon={faChevronDown} style={{ color: '#7E8299' }} />
            </Flex>
        </Flex>
    )
}

export default SortByDropdown