import React from 'react'
import './index.scss'
import { Link, useHistory } from 'react-router-dom'
import sign from './../../Group 2.png'
import Img from './../../Group 24.1.png'
import FormWrapper from '../forms/formWrapper';
import FormInput from '../forms/formInput';
import Button from '../forms/button';

const SignUp =()=> {
    const history = useHistory();

    const login =()=> {
        history.push('/login')
    }

    return (
        <div className="register">
                <div className="signup-div1">
                    <div className="logo">
                    <Link tp="/">
                            <img src={Img} alt="img"/>
                        </Link>
                    </div>
                    <div className="signup-image">
                        <img src={sign} alt="img" />
                    </div>
                    <div className="signup-notes">
                    <h1><span>Welcome!</span> Let's get</h1>
                    <h1 className="h1">to Know You.</h1>
                    <h2>Your first step towards a better financial</h2>
                    <h2>lifestyle starts here.</h2>
                    </div>
                </div>
                <div className="signup-div2">
                    <div className="signup-form">
                        <FormWrapper>
                            <div style={{marginTop: "50px"}}>
                            <div className="firstLast">
                            <div className="first">
                            <span>First name</span>
                            <FormInput 
                            type="text"
                            name="firstname"
                            placeholder="Enter Firstname"
                            />
                            </div>
                            <div className="last">
                            <span>Last Name</span>
                            <FormInput 
                            type="text"
                            name="lastname"
                            placeholder="Enter Firstname"
                            />
                            </div>
                            </div>
                            <div>
                                <label>email address</label>
                                <FormInput 
                            type="text"
                            name="email"
                            placeholder="Enter Email"
                            />
                            </div>
                            <div>
                                <label>Password</label>
                                <FormInput 
                            type="password"
                            name="email"
                            placeholder="Enter Password"
                            />
                            </div>
                            <div>
                                <label>Confirm Password</label>
                                <FormInput 
                            type="password"
                            name="email"
                            placeholder="Confirm password"
                            />
                            </div>
                            <Button>Sign up</Button>
                            <br />
                            <h5>Already have an account? <span style={{cursor: "pointer"}} onClick={login}>Login here</span></h5>
                            </div>
                        </FormWrapper>
                    </div>
                    <div className="terms">
                        <h3>By clicking on login, you agree to our <span>Terms &</span></h3>
                        <span>Conditions and Privacy Policy</span>
                    </div>
                </div>
        </div>
    );
}

export default SignUp