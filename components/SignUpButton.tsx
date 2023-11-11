import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { SignUpButtonProps } from '@/types'

const SignUpButton: React.FC<SignUpButtonProps> = ({ currStep, setCurrStep }) => {
    return (
        <div className='w-[82%] mt-5 flex justify-end'>

            <button
                type='button'
                className='bg-blue px-3 py-2 rounded-md text-[#fff] hover:cursor-pointer flex items-center justify-around w-[8rem] hover:opacity-80 transition-all'
                onClick={() => setCurrStep(currStep + 1)}
            >
                Continue
                <FontAwesomeIcon icon={faChevronRight} className='h-3' />
            </button>
        </div>
    )
}

export default SignUpButton