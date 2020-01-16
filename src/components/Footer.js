import React from 'react';
import FooterList from './FooterList';
import Socials from './Socials';

function Footer() {

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

        features: [
            {link: '/#booking-calculator', text: 'Booking calcutor'},
            {link: '/#online-bookings', text: 'Online bookings'},
            {link: '/#user-management', text: 'User Management'},
            {link: '/#mobile-friendly', text: 'Mobile friendly'},
            {link: '/#rules-and-policy', text: 'Rules, policy and notifications'}
        ],

        product: [
            {link: '/#small-meeting-room', text: 'Small meeting room'},
            {link: '/#conference-room', text: 'Conference room'},
            {link: '/#outdoor-meeting', text: 'Outdoor meeting'}
        ],

    };

    let supportColumn = footerLinks.support;
    let resourcesColumn = footerLinks.resources;
    let featuresColumn = footerLinks.features;
    let productColumn = footerLinks.product;


    return (
        <div id="footer-links">
            <div>
                <p>Support</p>
                <FooterList eachColumnToMap={supportColumn} />
            </div>
            <div>
                <p>Resources</p>
                <FooterList eachColumnToMap={resourcesColumn} />
            </div>
            
            <div>
                <p>Features</p>
                <FooterList eachColumnToMap={featuresColumn} />
            </div>
            <div>
                <p>Product</p>
                <FooterList eachColumnToMap={productColumn} />
            </div>
            <div>
                <p>Connect with us</p>
                <Socials />
            </div>
        </div>
    )
}

export default Footer;