import { progressIndicators } from '@/constants'
import { SignUpSidebarProps } from '@/types'
import Image from 'next/image'
import React from 'react'
import logo from '../public/logo.png'

const SignUpSidebar: React.FC<SignUpSidebarProps> = ({ currStep, setCurrStep }) => {
    return (
        <div className='bg-blue flex flex-col items-center justify-between min-h-screen'>

            {/* Logo */}
            <div className='mt-20 w-[40%]'>
                <Image
                    alt='Metronic Logo'
                    src={logo}
                    sizes='100vw'
                />
            </div>

            {/* Progress Bar */}
            <ul>
                {[1, 2, 3, 4].map(step => (
                    <>
                        <li className='flex gap-5 py-5'>
                            {/* Step Icon */}
                            <p className={`${step === currStep ? 'bg-green' : 'bg-transparent border border-dotted'} w-11 rounded-md flex justify-center items-center hover:cursor-pointer`}
                                onClick={() => setCurrStep(step)}
                            >
                                {step}
                            </p>
                            <div>
                                <p>{progressIndicators[step - 1].main}</p>
                                <p className='bg-white text-[#aaa] text-xs'>{progressIndicators[step - 1].sub}</p>
                            </div>
                        </li>
                        {/* Connecting Line */}
                        {
                            step < 4 && (
                                <>
                                    <hr className='border border-l-1 border-dotted left-[4.25rem] -mt-5 absolute h-10 border-[#aaa]' />
                                </>
                            )
                        }
                    </>
                ))}
            </ul>

            {/* Footer Links */}
            <div className='flex justify-evenly w-[100%] mb-5'>
                <p className='hover:cursor-pointer hover:opacity-90 text-green'>Terms</p>
                <p className='hover:cursor-pointer hover:opacity-90 text-green'>Plans</p>
                <p className='hover:cursor-pointer hover:opacity-90 text-green'>Contact Us</p>
            </div>
        </div >
    )
}

export default SignUpSidebar