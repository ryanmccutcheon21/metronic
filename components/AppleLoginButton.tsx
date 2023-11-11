import React from 'react'
import AppleLogin from 'react-apple-login'

const AppleLoginButton = () => {
    return (
        <div className='hover:cursor-pointer border border-[#DDD] rounded-md hover:shadow-md hover:-translate-y-0.5 transition-all'>
            <AppleLogin clientId="com.react.apple.login" redirectURI="https://redirectUrl.com" designProp={{ color: 'white', border: false, height: 30, width: 175 }} />
        </div>
    )
}

export default AppleLoginButton