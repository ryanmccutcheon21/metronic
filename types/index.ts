import React from "react"

export interface SignUpSidebarProps {
    currStep: number
    setCurrStep: React.Dispatch<React.SetStateAction<number>>
}

export interface SignUpButtonProps {
    currStep: number
    setCurrStep: React.Dispatch<React.SetStateAction<number>>
}

export interface SignUpMainProps {
    userData: {
        userType: string
        userFirstName: string
        userLastName: string
        userEmail: string
        userPhoneNumber: string
        userPassword: string
    }
    setUserData: React.Dispatch<React.SetStateAction<{ userType: string }>>
    currStep: number
    setCurrStep: React.Dispatch<React.SetStateAction<number>>
}

interface Values {
    firstName: string
    lastName: string
    creatorName: string
    email: string
    phoneNumber: string
    password: string
    confirmPassword: string
    terms: boolean
}

export interface SignUpPersonalProps {
    userData: {
        userType: string
        userFirstName: string
        userLastName: string
        userEmail: string
        userPhoneNumber: string
        userPassword: string
    }
    updateUserData: (values: Values) => void
}


export type TableRow = {
    id: number
    dateRemoved: string
    link: string
    source: string
    action: string
}