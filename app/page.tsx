'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import Navbar from "@/components/Navbar"
import FormContainer from "@/components/FormContainer"
import HomeNav from "@/components/SidebarNav"
import { Box, Flex } from "@chakra-ui/react"

const Home = () => {
  const [isSignedIn, setIsSignedIn] = useState(true)
  const router = useRouter()

  if (!isSignedIn) return router.push('/signup')

  return (
    <Box h='100vh'>
      <Navbar />
      <Flex px={10}>
        {/* Sidebar Nav */}
        <HomeNav />
        {/* Main Content */}
        <FormContainer />
      </Flex>
    </Box>
  )
}

export default Home
