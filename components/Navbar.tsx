import { Badge, Box, Flex, Spacer } from "@chakra-ui/react"
import { faChevronDown, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import type { NextPage } from "next"
import Image from "next/image"
import logo from '../public/logo-6-1.svg'
import notificationBell from '../public/frame.svg'
import userProfileImage from '../public/v3-0282261-1@2x.png'
import Link from "next/link"

const Navbar: NextPage = () => {
    return (
        <Flex
            w='100%'
            alignItems='center'
            borderBottom='1px solid #EEE'
            paddingBottom={5}
        >
            {/* Logo */}
            <Box
                paddingLeft={10}
            >
                <Link href='/signup'>
                    <Image
                        src={logo}
                        width={150}
                        height={50}
                        alt='Navbar logo'
                    />
                </Link>
            </Box>
            <Spacer />

            {/* Right Side Icons */}
            <Flex gap={30}>
                {/* Bell Icon */}
                <Box>
                    <Image
                        src={notificationBell}
                        width={40}
                        height={40}
                        alt='notification bell'
                    />
                    {/* Notifications */}
                    <Badge
                        backgroundColor='red'
                        w={20}
                        h={20}
                        marginLeft={25}
                        marginTop={-40}
                        textAlign='center'
                        display='flex'
                        alignItems='center'
                        justifyContent='center'
                        color='white'
                        rounded='100%'
                    >
                        5
                    </Badge>
                </Box>

                {/* Search Icon */}
                <Box display='flex' alignItems='center' alignContent='center'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
                </Box>

                {/* User Icon and Dropdown Arrow */}
                <Flex
                    alignItems='center'
                    gap={5}
                    paddingRight={10}
                >
                    <Image
                        src={userProfileImage}
                        alt="user profile image"
                        width={40}
                        height={40}
                    />
                    <FontAwesomeIcon icon={faChevronDown} />
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Navbar
