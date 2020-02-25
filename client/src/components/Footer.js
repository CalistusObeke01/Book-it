import React from 'react';
import {withRouter} from 'react-router-dom';
import FooterList from './FooterList';
import Socials from './Socials';
import Logo from '../images/Group 139@2x.png';
import netball from '../images/South-Africa.png';
import Vortex from '../images/Vortex Comics 2 Profile Logo.png';
import deloitte from '../images/71d910fe035b5832022357875f97e844deloitte.png';

const Footer = props => {

    const footerLinks = {
        support: [
            {link: '/#help-center', text: 'Help center'},
            {link: '/#terms-and-legals', text: 'Terms and legals'},
            {link: '/#about-us', text: 'About us'},
            {link: '/#contact', text: 'Contact'},
            {link: '/#system-status', text: 'System status'}
        ],

        resources: [
            {link: '/#blog', text: 'Blog'},
            {link: '/#guide', text: 'Guide'},
            {link: '/#help', text: 'Help'}
        ],

        contact: [
            {link:'', text:'16A Fola Jinadu street, UPS Bus-stop, Gbagada, Lagos.'},
            {link:'', text:'Email: info@bookiT.com'},
            {link:'', text:'Phone Number: 08023995138, 07030884944'}
            
        ],

        product: [
            {link: '/#small-meeting-room', text: 'Small meeting room'},
            {link: '/#conference-room', text: 'Conference room'},
            {link: '/#outdoor-meeting', text: 'Outdoor meeting'}
        ],

    };

    let supportColumn = footerLinks.support;
    let resourcesColumn = footerLinks.resources;
    let contactColumn = footerLinks.contact;
    let productColumn = footerLinks.product;

    if (props.location.pathname === '/book-venue') return null;
    return (
        <footer className="footer-parent">
            <div className="trusted-brands-story">
                <div>
                    <p>
                        <q>
                            Our business managers a sport venues with a wide variety of 
                            sporting facilities. As such, it can be complicated to link in
                             the varoius facilities together so that it remains user friendly whilst
                             also being functional.
                             Book!T has managed to help achieve this and i have found that
                             they have always responded in a timely manner with all our queries too
                        </q>
                    </p>
                    <div className="logo-company-container">
                        <div>
                            <img src={netball} alt="Randy Crowler" width="100" />
                        </div>
                        <div>
                            <h5 className="company-heading">Randy Crowler</h5>
                            <p>SPAR Proteas Cape Town</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p>
                        <q>
                            We use Book!T in our four workspaces; Cairo, Lagos, Accra, and Cape Town.
                            Our travelling communities find it quick to view which meeting rooms and 
                            phone booths are free on a daily basis. Before Book!T, we were using Google Calender
                            to manage rooms, Now we are able to centralize the workspaces which helps
                            our growing communities book without interrupting their workflow or 
                            crowding their work calender.
                        </q>
                    </p>
                    <div className="logo-company-container">
                        <div>
                            <img src={deloitte} alt="Randy Crowler" width="100" />
                        </div>
                        <div>
                            <h5 className="company-heading">Jane Stutern</h5>
                            <p>Deloitte Africa - Lagos</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p>
                        <q>
                            Book!T is a deceivingly powerful space-management solution
                            made simple by an intuitive user interface.
                            As a studio with an incredibly dynamic schedule and a variety
                            of needs.
                            Book!T has all but eliminated space-scheduling conflicts. 
                            This has had an important positive impact on departmental cooperation
                            and employee morale.
                        </q>
                    </p>
                    <div className="logo-company-container">
                        <div>
                            <img src={Vortex} alt="Randy Crowler" width="100" />
                        </div>
                        <div>
                            <h5 className="company-heading">Somto Ajulu</h5>
                            <p>Vortex Studio, Lagos</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="footer-links">
                <div>
                    <p>Support</p>
                    <FooterList eachColumnToMap={supportColumn} />
                </div>
                <div>
                    <p>Resources</p>
                    <FooterList eachColumnToMap={resourcesColumn} />
                </div>
                {/* <div>
                    <p>Product</p>
                    <FooterList eachColumnToMap={productColumn} />
                </div> */}
                 <div>
                    <p>Contact</p>
                    <FooterList eachColumnToMap={contactColumn} />
                </div>
                <div>
                    <p>Connect with us</p>
                    <Socials />
                </div>
            </div>
            <div className="footer-hr-container">
                <hr />
            </div>
            <div className="text-center">
                <img src={Logo} width="90" alt="site-log" />
            </div>
            <small className="copyright-text">
                Copyright &copy; Book!T. Book!T ia a Venue Booking Support System 
                Business/Conference Application. All Operating systems are supported.
                The core features are all free.
            </small>

        </footer>
        
    )
}

export default withRouter(Footer);