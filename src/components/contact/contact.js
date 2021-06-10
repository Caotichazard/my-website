import React from 'react'
import './contact.css'

import {SiWhatsapp,SiTelegram,SiLinkedin,SiGithub,SiGmail} from "react-icons/si"
import {AiOutlineFileText} from "react-icons/ai"

const Contact_card = ({contacts}) => {
    const {contact_icon,contact_name,contact_link} = contacts
    return (
        <a href={contact_link}>
        <div class='contact_card' >
            <div class='contact_icon'>
                {contact_icon}
            </div>
            <span>
                {contact_name}
            </span>
        </div>
        </a>
    )
}

const Contact = () => {

    var contacts = [
        {
            contact_icon : <SiWhatsapp size='5rem'/>,
            contact_name: 'Whatsapp',
            contact_link: 'https://api.whatsapp.com/send/?phone=5571999010744&text=Ol%C3%A1,%20Guilherme!',
        },
        {
            contact_icon : <SiTelegram size='5rem'/>,
            contact_name: 'Telegram',
            contact_link: 'https://t.me/guisalomao',
        },
        {
            contact_icon : <SiLinkedin size='5rem'/>,
            contact_name: 'Linkedin',
            contact_link: 'https://www.linkedin.com/in/guilherme-salomao/',
        },
        {
            contact_icon : <SiGithub size='5rem'/>,
            contact_name: 'Github',
            contact_link: 'https://github.com/Caotichazard',
        },
        {
            contact_icon : <AiOutlineFileText size='5rem'/>,
            contact_name: 'Curriculo',
            contact_link: 'https://drive.google.com/file/d/1S7ROcQuoZ4nWh3c9E1pQk8j8DMrku4zl/view?usp=sharing',
        },
        {
            contact_icon : <SiGmail size='5rem'/>,
            contact_name: 'Gmail',
            contact_link: 'mailto:guilsalomao@gmail.com',
        },
        
        
        
        
    ]
    var contacts_arr = []
    contacts.forEach(element => {
        contacts_arr.push(<Contact_card contacts={element}/>)
    })


    return (
        <div class="contact_div">
            <h2>Entre em contato:</h2>
            <br></br>
            <div class='contact_grid'>
                {contacts_arr}
            </div>
        </div>
    )
}

export default Contact
