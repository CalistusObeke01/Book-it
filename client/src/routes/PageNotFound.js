import React from 'react';
import Button from '../components/Button';
import {Link} from 'react-router-dom';
function Pagenotfound() {
    return(
        <div className="error-container">
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