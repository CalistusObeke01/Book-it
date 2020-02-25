import React from 'react';
import Button from './Button';
import { FaTwitter, FaFacebook, FaGooglePlus, FaLinkedin } from 'react-icons/fa';

function SignUp() {
    return(
        <>
        
            <section className="signUp-section" id="sign-up">
                <div className="col-md-5">
                    <p className="signUp-heading lead">Ready to create your <b>account ? Sign Up</b></p>
                    <p className="signUp-subHeading">Welcome to <span>Book!T</span></p>

                    <form>
                        <div className="form-group">
                            <label htmlFor="InputCompany">Company Name</label>
                            <input type="text" className="form-control" id="InputCompany" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="InputFullname">Full Name</label>
                            <input type="text" className="form-control" id="InputFullname" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="InputEmail">Email</label>
                            <input type="email" className="form-control" id="InputEmail" />
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="check" />
                            <label className="form-check-label" htmlFor="check">
                                I have read and agreed to all <span style={{color: 'var(--primaryColor)'}}>terms and condition </span>
                                and <span style={{color: 'var(--primaryColor)'}}>privacy policy</span>
                            </label>
                        </div>
                        <Button>Create Account</Button>
                    </form>
                </div>
                <div className="col-md-2 form-split"></div>

                <div className="col-md-5">
                    <p className="signIn-heading lead">Already have an account, <b>Log In</b></p>
                    <p className="signIn-subHeading">Sign in</p>


                    <form>
                        <div className="form-group">
                            <label htmlFor="signInEmail">Email</label>
                            <input type="email" className="form-control" id="signInEmail" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="signInPassword">Password</label>
                            <input type="password" className="form-control" id="signInPassword" />
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="checkRemember" />
                            <label className="form-check-label" htmlFor="checkRemember">
                                Remember me
                            </label>
                            <a href="#forgetPassword" className="forgetPassword">Forget password ?</a>
                        </div>
                        <Button>Sign in</Button>
                        {/* <div className="signUp-icons">
                            
                            <span>Sign in using </span>
                            
                            <ul>
                                <li>
                                    <a href="#facebook">
                                        <FaFacebook className="facebook-icon" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#linkedIn">
                                        <FaLinkedin className="linkedIn-icon" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#googlePlus">
                                        <FaGooglePlus className="googlePlus-icon" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#twitter">
                                        <FaTwitter className="twitter-icon" />
                                    </a>
                                </li>
                            </ul>
                        </div> */}
                    </form>                
                </div>
            </section>
            <p className="lead text-center  trusted-brands">Trusted by leading Brands</p>
        </>
    )
}

export default SignUp