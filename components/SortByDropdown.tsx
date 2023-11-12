import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

const SortByDropdown = () => {
    return (
        <Flex justifyContent='flex-end'>
            {/* Sort By Dropdown */}
            <Flex alignItems='center'>
                <Text color='black' mr={5}>Sort</Text>
                <select className='mr-6 hover:cursor-pointer' placeholder='Select option'>
                    <option value='today'>Today</option>
                    <option value='yesterday'>Yesterday</option>
                    <option value='thisWeek'>This Week</option>
                    <option value='thisMonth'>This Month</option>
                    <option value='selectDate'>Select Date</option>
                </select>
            </Flex>
            {/* End Sort By Dropdown */}
        </Flex>
    )
}

export default SortByDropdown