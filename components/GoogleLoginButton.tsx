import { GoogleLogin } from '@react-oauth/google'
import React from 'react'

const GoogleLoginButton = () => {
    return (
        <div className='flex'>
            <div></div>
            <GoogleLogin
                size='medium'
                onSuccess={credentialResponse => {
                    console.log(credentialResponse)
                }}
                onError={() => {
                    console.log('Login Failed')
                }} />
        </div>
    )
}

export default GoogleLoginButton