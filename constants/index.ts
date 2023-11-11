import { faUser, faBriefcase } from "@fortawesome/free-solid-svg-icons"

export const progressIndicators = [
    {
        main: 'Account Type',
        sub: 'Select your account type'
    },
    {
        main: 'Account Details',
        sub: 'Add your personal info'
    },
    {
        main: 'Creator Info',
        sub: 'Setup your business details'
    },
    {
        main: 'Completed',
        sub: 'Your account is created'
    }
]


export const ACCOUNT_TYPES = [
    {
        icon: faUser,
        h3: 'Creator',
        p: 'Sign-up as a creator'
    },
    {
        icon: faBriefcase,
        h3: 'Agency',
        p: 'Sign-up as an agency'
    }
]