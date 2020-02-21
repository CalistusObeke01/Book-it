import React from 'react';
import FooterLinks from './FooterLinks';

function FooterList({eachColumnToMap}) {
    return (
        <>
            <ul className="footerList">
                {
                    
                    eachColumnToMap.map((content, index) => {
                        return(
                            <li key={index}>
                                <FooterLinks href={content.link} link={content.text} />
                            </li>
                        )
                    })
                }

            </ul>
        </>
    )
}

export default FooterList;
