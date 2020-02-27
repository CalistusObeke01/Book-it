import React from 'react';
import Button from '../components/Button';
import {Link} from 'react-router-dom';
import SEO from '../components/SEO';
function Pagenotfound() {
    return(
        <div className="error-container">
            <SEO title="Book!T | 404" 
                name="Page not found" 
                content ={`This is an unknown path`} />
            <div className="error-text">
                <p className="error-figure">40<span style={{color: 'var(--primaryColor)'}}>4</span></p>
                <p >
                    We've noticed you are lost and confused, dont worry.<br />
                    We will help you find your next  opportunity
                </p>
                <Link to="/"> 
                    <Button>Go Home</Button>
                </Link>
            </div>
            <div className="error-img">

            </div>
        </div>

    )
}

export default Pagenotfound