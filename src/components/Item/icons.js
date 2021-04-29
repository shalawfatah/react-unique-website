import { SiGmail, SiYoutubetv, SiTwitter, SiTwitch, SiTelegram, SiSlack} from "react-icons/si";
import { FaHome, FaCode } from "react-icons/fa";
import {MdContacts} from 'react-icons/md'
import {GiSkills} from 'react-icons/gi'
import {BsInfoCircleFill} from 'react-icons/bs'


const items = [
    {
        icon: <FaHome />,
        title: 'Home'
    },
    {
        icon: <FaCode />,
        title: 'Projects'
    },
    {
        icon: <GiSkills />,
        title: 'Skills'
    },
    {
        icon: <MdContacts />,
        title: 'Contacts'
    },
    {
        icon: <BsInfoCircleFill />,
        title: 'About'
    },
]

export default items