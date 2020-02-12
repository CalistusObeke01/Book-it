import React from 'react';

function FooterLinks({href, link}) {
    return(
        <a href={href}>
            {link}
        </a>
    )
}

export default FooterLinks