import React from 'react'
import howtouselogo from "../images/Group 116.png"
function HowToUse({ children, usage}) {
    return (
        <div className="how-to-use">
            <div className="col-md-6">
                <img src={howtouselogo} alt="How to use app" className="img-responsive" width="100%" />
            </div>
            <div className="col-md-6">
                <p className="text-right how-to-use-text">
                    <b>Book!T</b> is one of the fast growing platforms 
                     brands use for managing their spaces
                </p>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">is one of the fast growing </div>
                        <div className="col-md-6">is one of the fast growing  is one of the fast growing </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">is one of the fast growing </div>
                        <div className="col-md-6">is one of the fast growing  is one of the fast growing </div>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default HowToUse