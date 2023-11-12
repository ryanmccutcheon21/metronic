'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import {
    FormControl,
    Checkbox,
    Button,
    Text,
    Flex,
    Box,
    InputGroup,
    InputRightElement,
    Heading,
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import GoogleLoginButton from './GoogleLoginButton'
import AppleLoginButton from './AppleLoginButton'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { SignUpPersonalProps } from '@/types'

// Yup Form Schema
const SignupSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    creatorName: Yup.string().required('Creator name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), ' '], 'Passwords must match')
        .required('Confirm Password is required'),
    terms: Yup.boolean()
    // .oneOf([true], 'You must accept the terms and conditions')
    // .required('You must accept the terms and conditions'),
})

// Component Start
const SignUpPersonalInfo: React.FC<SignUpPersonalProps> = ({ updateUserData }) => {
    // Form States
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    // Form Logic
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }
    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword)
    }

    return (
        <GoogleOAuthProvider clientId="123">
            <Flex flexGrow={1} justifyContent='center' alignItems='center' minH='100vh'>
                <Box className="flex flex-col justify-center items-center gap-1">
                    <Heading as='h1' fontWeight='bold' fontSize={30}>Account Details</Heading>
                    <Heading as='h2' color='#777' mb={10}>Add your personal info</Heading>

                    {/* Google & Apple Buttons */}
                    <Flex gap={5} position='relative'>
                        <GoogleLoginButton />
                        <AppleLoginButton />
                    </Flex>

                    {/* Email Option Heading */}
                    <Text className="text-[#777]" mt={10} mb={10}>Or with email</Text>

                    {/* Form Schema */}
                    <Formik
                        initialValues={{
                            firstName: '',
                            lastName: '',
                            creatorName: '',
                            email: '',
                            phoneNumber: '',
                            password: '',
                            confirmPassword: '',
                            terms: false,
                        }}
                        validationSchema={SignupSchema}
                        onSubmit={(values) => {
                            // Handle form submission here
                            updateUserData(values)
                            console.log(values)
                        }}
                    >
                        {/* Form Start */}
                        <Form>
                            <Flex mb={20} gap={30}>
                                <FormControl id="firstName" isRequired>
                                    {/* First and Last Name */}
                                    <Field
                                        type="text"
                                        name="firstName"
                                        placeholder="First Name"
                                        className="border px-2 w-[100%] rounded-sm"
                                    />
                                    <ErrorMessage name="firstName" component="div" className="text-[#FF5555]" />
                                </FormControl>

                                <FormControl>
                                    <Field
                                        type="text"
                                        name="lastName"
                                        placeholder="Last Name"
                                        className="border px-2 w-[100%] rounded-sm"
                                    />
                                    <ErrorMessage name="lastName" component="div" className="text-[#FF5555]" />
                                </FormControl>
                            </Flex>
                            {/* End First and Last Name */}

                            <Box className="flex flex-col gap-5">
                                {/* Creator Name */}
                                <FormControl>
                                    <Field
                                        type="text"
                                        name="creatorName"
                                        placeholder="Creator Name"
                                        className="border px-2 w-[100%] rounded-sm"
                                    />
                                    <ErrorMessage name="creatorName" component="div" className="text-[#FF5555]" />
                                </FormControl>

                                {/* Email */}
                                <FormControl>
                                    <Field
                                        borderRadius="4px"
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        className="border px-2 w-[100%] rounded-sm"
                                    />
                                    <ErrorMessage name="email" component="div" className="text-[#FF5555]" />
                                </FormControl>

                                {/* Phone Number */}
                                <FormControl>
                                    <Field
                                        borderRadius="4px"
                                        name="phoneNumber"
                                        placeholder="Phone Number"
                                        className="border px-2 w-[100%] rounded-sm"
                                    />
                                    <ErrorMessage name="phoneNumber" component="div" className="text-[#FF5555]" />
                                </FormControl>

                                {/* Password */}
                                <FormControl>
                                    <InputGroup>
                                        <Field
                                            type={showPassword ? 'text' : 'password'}
                                            name="password"
                                            placeholder="Password"
                                            className="border px-2 w-[110%] rounded-sm"
                                        />
                                        <InputRightElement width="4.5rem" onClick={togglePasswordVisibility}>
                                            <Box onClick={togglePasswordVisibility}>
                                                {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                                            </Box>
                                        </InputRightElement>
                                    </InputGroup>
                                    <ErrorMessage name="password" component="div" className="text-[#FF5555]" />
                                </FormControl>

                                {/* Confirm Password */}
                                <FormControl width='100%'>
                                    <InputGroup>
                                        <Field
                                            type={showConfirmPassword ? 'text' : 'password'}
                                            name="confirmPassword"
                                            placeholder="Confirm Password"
                                            className="border px-2 w-[100%] rounded-sm"
                                        />
                                        <InputRightElement width="4.5rem">
                                            <Box onClick={toggleConfirmPasswordVisibility}>
                                                {showConfirmPassword ? <ViewOffIcon /> : <ViewIcon />}
                                            </Box>
                                        </InputRightElement>
                                    </InputGroup>
                                    <ErrorMessage name="confirmPassword" component="div" className="text-[#FF5555]" />
                                </FormControl>
                            </Box>

                            {/* Terms & Conditions */}
                            <FormControl id="terms" isRequired marginTop={15}>
                                <Flex align="center">
                                    <Checkbox
                                        isRequired
                                        name="terms"
                                        border="1px solid black"
                                        rounded={5}
                                        width={20}
                                        height={20} />
                                    <Text fontSize="sm" color="black" ml={10}>
                                        I accept the{' '}
                                        <Link href="/signup" passHref className="text-blue no-underline hover:underline">
                                            Terms
                                        </Link>
                                    </Text>
                                </Flex>
                                <ErrorMessage name="terms" component="div" className="text-[#FF5555]" />
                            </FormControl>

                            {/* Continue Button */}
                            <Button
                                type="submit"
                                backgroundColor="#3E97FF"
                                width={40}
                                colorScheme="#006CEA"
                                mt={20}
                                py={10}
                                minWidth="100%"
                                borderRadius="4px"
                                border='none'
                                textColor="white"
                                _hover={{ cursor: 'pointer', shadow: '0px 2px 2px #777', transform: 'translate(0px, -1px)' }}
                            >
                                Continue
                            </Button>
                        </Form>
                    </Formik>

                    {/* Already Have an Account */}
                    <Text mt={4} color="#777">
                        Already have an account?{' '}
                        <Link href="/signin" passHref className='text-blue no-underline hover:underline'>
                            Sign in
                        </Link>
                    </Text>
                </Box>
            </Flex>
        </GoogleOAuthProvider>
    )
}

export default SignUpPersonalInfo
