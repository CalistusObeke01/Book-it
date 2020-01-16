import React from 'react';
import FooterLinks from './FooterLinks';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Socials() {

    const socialLinks = [
        {id: 1, link: '/#http://www.twitter.com/bookit', icon: <FaTwitter /> },
        {id: 2, link: '/#http://www.facebook.com/bookit', icon: <FaFacebook /> },
        {id: 3, link: '/#http://www.instagram.com/bookit', icon: <FaInstagram /> },
        {id: 4, link: '/#http://www.linded/in/.com/bookit', icon: <FaLinkedin /> }
    ];
        


    return (
        <>
            <ul className="socials">
                <li>

                    {
                        socialLinks.map(content => {
                            return (
                                <React.Fragment key={content.id}>
                                    <FooterLinks href={content.link} link={content.icon} />
                                </React.Fragment> 
                            )
                        })
                    }

                </li>
            </ul>
        </>
    )
}

export default Socials;