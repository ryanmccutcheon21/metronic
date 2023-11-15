import { Badge, Box, Flex, Spacer } from "@chakra-ui/react"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import type { NextPage } from "next"
import Image from "next/image"
import logo from '../public/logo.svg'
import notificationBell from '../public/frame.svg'
import userProfileImage from '../public/userProfileImage.svg'
import searchIcon from '../public/searchIcon.svg'
import Link from "next/link"

const Navbar: NextPage = () => {
    return (
        <Flex
            w='100vw'
            pr={30}
            alignItems='center'
            borderBottom='1px solid #EEE'
            paddingBottom={5}
        >
            {/* Logo */}
            <Box
                paddingLeft={30}
            >
                <Link href='/signup'>
                    <Image
                        src={logo}
                        width={127}
                        height={24}
                        alt='Navbar logo'
                    />
                </Link>
            </Box>
            <Spacer />

            {/* Right Side Icons */}
            <Flex gap={25} w={178}>
                {/* Bell Icon */}
                <Box mb={27}>
                    <Image
                        src={notificationBell}
                        width={40}
                        height={40}
                        alt='notification bell'
                    />
                    {/* Notifications */}
                    <Badge
                        backgroundColor='#F1416C'
                        w='18px'
                        h='18px'
                        marginLeft={23}
                        marginTop={-38}
                        textAlign='center'
                        display='flex'
                        alignItems='center'
                        justifyContent='center'
                        color='white'
                        rounded='100%'
                        className="font-semibold text-[10px]"
                    >
                        5
                    </Badge>
                </Box>

                {/* Search Icon */}
                <Flex alignItems='center' alignContent='center'>
                    <Image
                        src={searchIcon}
                        height={20}
                        width={20}
                        alt="search icon"
                    />
                </Flex>

                {/* User Icon and Dropdown Arrow */}
                <Flex
                    alignItems='center'
                    gap={10}
                >
                    <Image
                        src={userProfileImage}
                        alt="user profile image"
                        width={40}
                        height={40}
                    />
                    <FontAwesomeIcon icon={faChevronDown} style={{ color: '#7E8299' }} />
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Navbar
