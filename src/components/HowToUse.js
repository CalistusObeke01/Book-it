import React from 'react'
import howtouselogo from "../images/Group 116.png";
import logoEasyToUse from "../images/Path 154.png";
import logoEasyManage from "../images/Path 157.png";
import logoPrivacy from "../images/Path 155.png";
import logoCheapCost from "../images/Path 156.png";
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
                        <div className="col-md-6">
                            <div className="easyToUse-container">
                                <img src={logoEasyToUse} alt="Easy To Use"  className="easyToUse" />
                            </div>
                            <h5 className="easyToUse-headings">Easy to Use</h5>
                            <p className="easyToUse-content">
                                The platform is very easy to use and navigate.
                                New users can easily create account 
                                and existing users can log in with ease.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <div className="easyToUse-container">
                                <img src={logoEasyManage} alt="Easy To Manage"  className="easyToUse" />
                            </div>
                            <h5 className="easyToUse-headings">Easy to Manage</h5>
                            <p className="easyToUse-content">
                                Venues and spaces are managed with ease on the platform with 
                                access to various features to make your booking seamless.
                            </p>
                        </div>
                    </div>
                    <div className="row" style={{marginTop: '1rem'}}>
                        <div className="col-md-6">
                            <div className="easyToUse-container">
                                <img src={logoPrivacy} alt="Privacy and Security"  className="easyToUse" />
                            </div>
                            <h5 className="easyToUse-headings">Privacy and Security</h5>
                        </div>
                        <div className="col-md-6">
                            <div className="easyToUse-container">
                                <img src={logoCheapCost} alt="Cheap Cost"  className="cheapCost" />
                            </div>
                            <h5 className="easyToUse-headings">Cheap Cost</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default HowToUse