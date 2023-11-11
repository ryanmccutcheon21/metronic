'use client'

import SignUpButton from '@/components/SignUpButton'
import SignUpMain from '@/components/SignUpMain'
import SignUpPersonalInfo from '@/components/SignUpPersonalInfo'
import SignUpSidebar from '@/components/SignUpSidebar'
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
        <div className='flex flex-col md:flex-row'>
            <div className='w-full md:w-1/3'>
                <SignUpSidebar currStep={currStep} setCurrStep={setCurrStep} />
            </div>
            {currStep === 1 && (
                <div className='flex-1'>
                    <div className='flex flex-col items-center justify-center h-[100%]'>
                        <SignUpMain userData={userData} setUserData={(userType) => setUserData(userType)} />
                        <SignUpButton currStep={currStep} setCurrStep={setCurrStep} />
                    </div>
                </div>
            )}
            {currStep === 2 && (
                <SignUpPersonalInfo userData={userData} updateUserData={updateUserData} />
            )}
        </div>
    )
}

export default signup
