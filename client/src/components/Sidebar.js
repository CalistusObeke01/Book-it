import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/Group 139@2x.png';
import MembershipImg from '../images/Path 158.png';
import AdminstrationImg from '../images/Path 159.png';
import SpaceImg from '../images/Path 160.png';


function Sidebar() {
    const sidebarAttr = [
        {link: '/Conference', img: SpaceImg, attr: 'Spaces'},
        {link: '/administration', img: AdminstrationImg, attr: 'Administration'}
    ];

    return(
        <>
            <div className="sidebar">
                {/* <Link to="/">
                    <img src={Logo} alt="site logo" width="110" className="sidebar-siteLogo" />
                </Link> */}
                
                <ul>
                    {
                        sidebarAttr.map(content => {
                            return(
                                <li className="sidebar-content">
                                    <img src={content.img} alt={content.attr} width="20" /> 
                                    <Link className="spaceAttr" to={content.link}>
                                        {content.attr}
                                    </Link>
                                </li>
                            );
                        })
                    }
                    {/* <p>Spaces</p>
                    <p>Membership</p>
                    <p>Adminstration</p> */}
                </ul>
            </div>
        </>
    );
}

export default Sidebar;