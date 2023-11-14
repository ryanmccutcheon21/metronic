'use client'

import { Box, Button, Card, CardBody, CardFooter, Flex, Grid, GridItem, Input, InputGroup, InputLeftElement, SimpleGrid, Text } from "@chakra-ui/react"
import Image from "next/image"
import { CARD_INFO } from "@/constants"
import SortByDropdown from "./SortByDropdown"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faChevronLeft, faChevronRight, faUpload, faUser } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import { useState } from "react"
import { generateRandomData } from "@/utils"


const FormContainer: React.FC = () => {
  const [tableData, setTableData] = useState(generateRandomData())
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5

  const filteredTableData = tableData.filter((row) =>
    `${row.id} ${row.dateRemoved} ${row.link} ${row.source} ${row.action}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  )

  const totalItems = filteredTableData.length
  const totalPages = 5

  if (currentPage < 1) setCurrentPage(1)
  if (currentPage > totalPages) setCurrentPage(totalPages)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const displayData = filteredTableData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <Flex flex={1} flexDirection='column' bg='whitesmoke' pt={20}>

      {/* Profile Dropdown */}
      <SortByDropdown />

      {/* Cards */}
      <SimpleGrid spacing={10} px={20} pt={30} columns={[1, 2, 3, 4]}>
        {CARD_INFO.map((obj, i) => (
          <Card borderBottom={`2px solid ${obj.borderColor}`} rounded={10} p={20} bg='white'>
            <CardBody>
              <Flex justifyContent='space-between' alignItems='center'>
                <Text fontSize={40} color='black'>{obj.num}</Text>
                <Box backgroundColor={obj.imgBackgroundColor} rounded={5} p={2}>
                  <Image
                    alt="links scraped"
                    src={obj.image}
                    height={20}
                    width={20}
                  />
                </Box>
              </Flex>
            </CardBody>
            <CardFooter color='#777' mt={10} fontSize={12}>
              {obj.text}
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
      {/* End Cards */}

      {/* Main Content */}
      <Flex flexDirection='column' px={20} bg='white' mt={20} mx={20}>

        {/* Search, Export & 2 Dropdonw Row */}
        <Flex
          justifyContent='space-between'
          color='black'
          pt={20}
          px={10}
        >
          {/* Search Input */}
          <InputGroup>
            <Flex>
              <InputLeftElement pointerEvents="none">
                <FontAwesomeIcon icon={faUser} style={{ color: '#A1A5B7' }} className="bg-gray-200 rounded-xl p-1 mt-[5px] ml-2" />
              </InputLeftElement>
              <Input
                type="text"
                pl={35}
                rounded={5}
                border='none'
                backgroundColor='#F9F9F9'
                textColor={{ color: '#7E8299' }}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search"
              />
            </Flex>
          </InputGroup>
          {/* End Search Input */}

          {/* Export and 2 Dropdowns */}
          <Box>
            <Flex gap={10}>

              {/* Export */}
              <Flex gap={10} bg='#EEF6FF' p={10} rounded={5} _hover={{ cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faUpload} style={{ color: "#3E97FF" }} />
                <Text color='#3E97FF'>Export</Text>
              </Flex>

              {/* Today Input */}
              <Flex
                p={10}
                rounded={5}
                bg='#F9F9F9'
                w={70}
                justifyContent='space-between'
                _hover={{ cursor: 'pointer' }}
              >
                <Text color='#A1A5B7'>Today</Text>
                <FontAwesomeIcon icon={faChevronDown} style={{ color: "#A1A5B7", }} />
              </Flex>

              {/* Status input */}
              <Flex
                p={10}
                rounded={5}
                bg='#F9F9F9'
                w={70}
                justifyContent='space-between'
                _hover={{ cursor: 'pointer' }}
              >
                <Text color='#A1A5B7'>Status</Text>
                <FontAwesomeIcon icon={faChevronDown} style={{ color: "#A1A5B7", }} />
              </Flex>

            </Flex>
          </Box>
          {/* End Export and 2 Dropdowns */}

        </Flex>
        {/* End Search, Export & 2 Dropdonw Row */}

        {/* Table Head */}
        <Grid
          templateColumns="repeat(5, 1fr)"
          gap={2}
          px={10}
          mt={20}
          pb={10}
          borderBottom="1px solid #DDD"
          alignItems="center"
        >
          {/* ID Box */}
          <GridItem colSpan={1}>
            {/* Checkbox */}
            <Flex gap={10}>
              <Box h={15} w={15} backgroundColor="#DDD" rounded={2}></Box>
              <Text color="black">ID</Text>
            </Flex>
          </GridItem>

          <GridItem colSpan={1}>
            <Text color="black">DATE REMOVED</Text>
          </GridItem>

          <GridItem colSpan={1}>
            <Text color="black">LINK</Text>
          </GridItem>

          <GridItem colSpan={1}>
            <Text color="black">SOURCE</Text>
          </GridItem>

          <GridItem colSpan={1}>
            <Flex justifyContent="center">
              <Text color="black">Action</Text>
            </Flex>
          </GridItem>
        </Grid>
        {/* End Table Head */}

        {/* Table Rows */}
        {displayData.map((row, index) => (
          <Grid
            key={index}
            templateColumns="repeat(5, 1fr)"
            gap={2}
            px={10}
            mt={20}
            pb={10}
            borderBottom="1px solid #DDD"
            alignItems="center"
          >
            <GridItem colSpan={1}>
              <Flex gap={10}>
                <Box h={15} w={15} backgroundColor="#DDD" rounded={2}></Box>
                <Text color="black">{row.id}</Text>
              </Flex>
            </GridItem>

            <GridItem colSpan={1}>
              <Text color="black">{row.dateRemoved}</Text>
            </GridItem>

            <GridItem colSpan={1}>
              <Link href={row.link} className="no-underline hover:underline" color="#3E97FF">
                {row.link}
              </Link>
            </GridItem>

            <GridItem colSpan={1}>
              <Text color="black">{row.source}</Text>
            </GridItem>

            <GridItem colSpan={1}>
              <Flex justifyContent="center">
                <Box
                  backgroundColor={row.action === "Delisted" ? "#FFF5F8" : "#E8FFF3"}
                  p={5}
                  rounded={5}
                >
                  <Text color={row.action === "Delisted" ? "#D9214E" : "#50CD89"}>{row.action}</Text>
                </Box>
              </Flex>
            </GridItem>
          </Grid>
        ))}
        {/* End Table Rows */}

        <Flex justifyContent='space-between'>
          {/* Total Result */}
          <Box backgroundColor="#eeeeee" px={10} py={5} my={20}>
            <Text color="#9f9f9f">{`Total Result: ${totalItems}`}</Text>
          </Box>

          {/* Bottom Navigation */}
          <Flex alignItems='center' gap={10}>
            <FontAwesomeIcon icon={faChevronLeft} style={{ color: '#9f9f9f', cursor: 'pointer' }} onClick={() => handlePageChange(currentPage - 1)} />

            {[0, 1, 2, 3, 4].map((_, i) => (
              <Button
                key={i}
                backgroundColor={i + 1 === currentPage ? "#5390f9" : "transparent"}
                color={i + 1 === currentPage ? 'white' : '#9f9f9f'}
                rounded={5}
                border='none'
                fontSize={20}
                _hover={{ cursor: 'pointer' }}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </Button>
            ))}

            <FontAwesomeIcon icon={faChevronRight} style={{ color: '#9f9f9f', cursor: 'pointer' }} onClick={() => handlePageChange(currentPage + 1)} />
          </Flex>
          {/* End Bottom Navigation */}
        </Flex>

      </Flex>
      {/* End Main Content */}
    </Flex>
  )
}

export default FormContainer