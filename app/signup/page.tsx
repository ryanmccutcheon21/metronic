'use client'

import SignUpButton from '@/components/SignUpButton'
import SignUpMain from '@/components/SignUpMain'
import SignUpPersonalInfo from '@/components/SignUpPersonalInfo'
import SignUpSidebar from '@/components/SignUpSidebar'
import { Box, Flex } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'

const signup = () => {
    const [currStep, setCurrStep] = useState(1)
    const [userData, setUserData] = useState({
        userType: 'Creator',
        userFirstName: '',
        userLastName: '',
        userEmail: '',
        userPhoneNumber: '',
        userPassword: '',
    })

    const updateUserData = ({ ...values }) => {
        setUserData((prevUserData) => ({
            ...prevUserData,
            ...values
        }))
    }

    useEffect(() => {
        console.log(userData)
    }, [userData])

    return (
        <Flex>
            <SignUpSidebar currStep={currStep} setCurrStep={setCurrStep} />
            {currStep === 1 && (
                <Flex flexDirection='column' justifyContent='center' alignItems='center' w='100%'>
                    <SignUpMain userData={userData} setUserData={(userType) => setUserData} currStep={currStep} setCurrStep={setCurrStep} />
                </Flex>
            )}
            {currStep === 2 && (
                <SignUpPersonalInfo userData={userData} updateUserData={updateUserData} />
            )}
        </Flex>
    )
}

export default signup
