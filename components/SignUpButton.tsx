import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { SignUpButtonProps } from '@/types'
import { Button } from '@chakra-ui/react'

const SignUpButton: React.FC<SignUpButtonProps> = ({ currStep, setCurrStep }) => {
    return (
        <Button
            type='button'
            mt={10}
            display='flex'
            border='none'
            justifyContent='space-around'
            backgroundColor='#4a92e5'
            px={10}
            py={10}
            rounded='5px'
            color='#fff'
            _hover={{ cursor: 'pointer', shadow: '0px 2px 2px #777', transform: 'translate(0px, -1px)' }}
            alignItems='center'
            w='8rem'
            transitionDelay='100'
            onClick={() => setCurrStep(currStep + 1)}
        >
            Continue
            <FontAwesomeIcon icon={faChevronRight} className='h-3' />
        </Button>
    )
}

export default SignUpButton