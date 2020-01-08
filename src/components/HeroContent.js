import React from 'react'
import {Link} from 'react-router-dom'

function HeroContent() {
    return(
        <>
            <h1 className="hero-header">
                Online meeting booking and <br/>
                scheduling of venue <br/>
                for free
            </h1>
            <p className="hero-text">
                BOOK!T is the best way to manage your venues, space for<br/>
                meetings, conferences and other uses without hiccups...
            </p>
            <Link to="/create-account" className="createAccount">
                CREATE AN ACCOUNT
            </Link>
        </>
    )
}

export default HeroContent