import { Box } from '@chakra-ui/react'
import React from 'react'
import AppleLogin from 'react-apple-login'

const AppleLoginButton = () => {
    return (
        <Box
            _hover={{
                cursor: 'pointer',
                shadow: '0px 2px 2px #CCC',
                transform: 'translate(0px, -1px)'
            }}
            rounded={5}
        >
            <AppleLogin clientId="com.react.apple.login" redirectURI="https://redirectUrl.com" designProp={{ color: 'white', border: false, height: 30, width: 175 }} />
        </Box>
    )
}

export default AppleLoginButton