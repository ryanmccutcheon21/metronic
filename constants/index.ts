// Account Types
import { faUser, faBriefcase } from "@fortawesome/free-solid-svg-icons"

// HOME_NAV_LINKS
import homeIcon from '../public/home31.svg'
import violationsIcon from '../public/addfiles1.svg'
import whitelistIcon from '../public/scroll1.svg'
import billingIcon from '../public/questionnairetablet1.svg'
import affiliateIcon from '../public/graphup1.svg'
import settingIcon from '../public/setting21.svg'
import faqIcon from '../public/messagequestion1.svg'
import supportIcon from '../public/rescue1.svg'

// CARD_INFO
import linksScrapedImg from '../public/disconnect.svg'
import linksManuallyImg from '../public/magnifier1.svg'
import linkViolationsImg from '../public/information3.svg'
import linksRemovedImg from '../public/trush.svg'

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


export const HOME_NAV_LINKS = [
    {
        image: homeIcon,
        alt: 'home icon',
        text: 'Home'
    },
    {
        image: violationsIcon,
        alt: 'submit violations icon',
        text: 'Submit Violations'
    },
    {
        image: whitelistIcon,
        alt: 'whitelist icon',
        text: 'Whitelist'
    },
    {
        image: billingIcon,
        alt: 'Billing icon',
        text: 'Billing'
    },
    {
        image: affiliateIcon,
        alt: 'Affiliate Program icon',
        text: 'Affiliate Program'
    },
    {
        image: settingIcon,
        alt: 'Settings icon',
        text: 'Settings'
    },
    {
        image: faqIcon,
        alt: 'FAQ icon',
        text: 'FAQ'
    },
    {
        image: supportIcon,
        alt: 'Support icon',
        text: 'Support'
    }
]





export const CARD_INFO = [
    {
        num: 252,
        text: 'Links Scraped',
        image: linksScrapedImg,
        borderColor: '#3E97FF',
        imgBackgroundColor: '#EEF6FF'
    },
    {
        num: 252,
        text: 'Links Manually Checked',
        image: linksManuallyImg,
        borderColor: '#7239EA',
        imgBackgroundColor: '#F8F5FF'
    },
    {
        num: 252,
        text: 'Link Violations',
        image: linkViolationsImg,
        borderColor: '#F6C000',
        imgBackgroundColor: '#f6f9c8'
    },
    {
        num: 252,
        text: 'Links Removed',
        image: linksRemovedImg,
        borderColor: '#F1416C',
        imgBackgroundColor: '#ffdde7'
    },
]