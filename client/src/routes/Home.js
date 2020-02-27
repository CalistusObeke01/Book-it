import React from 'react';
import Hero from '../components/Hero';
import HeroContent from '../components/HeroContent';
import HowToUse from '../components/HowToUse';
import Users from '../components/Users';
import Features from '../components/Features';
import SignUp from '../components/SignUp';
import SEO from '../components/SEO';


function Home () {
    return (
        <>
          <SEO title="Book!T | An online booking app for managing and booking  meeting rooms seamlessly" 
            name="Official homepage of Book!T" 
            content ={`BOOK!T is the best way to manage your venues, space for
            meetings, conferences and other uses without hiccups...`} />
            <Hero>
                <HeroContent />
            </Hero>
            <HowToUse />
            <Users />
            <Features /> 
            <SignUp />
        </>
    )
}

export default Home