'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SignUpMainProps } from '@/types'
import { ACCOUNT_TYPES } from '@/constants'

const SignUpMain: React.FC<SignUpMainProps> = ({ userData, setUserData }) => {
    const [selected, setSelected] = useState(1)

    return (
        <div className='flex justify-center items-center'>
            <div>
                {/* Choose Account Type */}
                <div>
                    <p className='text-[#000] font-bold text-xl'>Choose an account type</p>
                    <p className='text-[#777] text-xs'>If you need more info, please visit our <Link href={'/signup'} className='text-blue'>help page</Link></p>
                </div>

                {/* Account Selection Boxes */}
                <div className='flex mt-5 gap-5'>
                    {ACCOUNT_TYPES.map((obj, i) => (
                        <div
                            key={i}
                            className={`border ${selected === i + 1 ? 'border-blue bg-[#DBEDFF]' : ''} border-dotted rounded-md flex items-center gap-5 p-5 hover:cursor-pointer`}
                            onClick={() => {
                                setUserData({ userType: obj.h3 })
                                setSelected(i + 1)
                            }}
                        >
                            <div className='bg-[#ADD5FF] px-2 pt-2 rounded-md'>
                                <FontAwesomeIcon icon={obj.icon} size='xl' style={{
                                    color: '#006CEA'
                                }} />
                            </div>
                            <div>
                                <h3 className='font-bold'>{obj.h3}</h3>
                                <p className='text-[#777]'>{obj.p}</p>
                            </div>
                        </div>
                    ))}

                </div>
                {/* End Selection Boxes */}
            </div>
        </div >
    )
}

export default SignUpMain