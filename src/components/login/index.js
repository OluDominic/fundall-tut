import React from 'react'
import './index.scss'
import { Link, useHistory } from 'react-router-dom'
import sign from './../../Group.png'
import Img from './../../Group 24.1.png'
import FormWrapper from '../forms/formWrapper';
import FormInput from '../forms/formInput';
import Button from '../forms/button';


const Login =()=> {
    const history = useHistory();

    const dashboard =()=> {
        history.push('/dashboard')
    }
    const register =()=> {
        history.push('/signup')
    }

    return (
        <div className="register">
                <div className="signup-div1">
                    <div className="logo">
                    <Link to="/">
                            <img src={Img} alt="img"/>
                        </Link>
                    </div>
                    <div style={{width:"277px"}} className="signup-image">
                        <img src={sign} alt="img" />
                    </div>
                    <div className="signup-notes">
                    <h1><span>Welcome back</span></h1>
                    <h1 className="h1">We miss you.</h1>
                    </div>
                </div>
                <div className="signup-div2">
                    <div className="signup-form">
                        <FormWrapper>
                            <div style={{marginLeft: "80px"}}>
                                <h1 style={{fontFamily: "Roboto", 
                            fontSize: "34px"}}>Holla</h1>
                                <h3 style={{fontFamily: "Roboto", 
                            fontSize: "20px"}}>Sign in to the vibe!</h3>
                            </div>
                            <div style={{marginTop: "50px"}}>
                            <div>
                                <label>Email or Username</label>
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
                            <Button onClick={dashboard}>LOGIN</Button>
                            <br />
                            <h5>Don't have an account? <span style={{cursor: "pointer"}} onClick={register}>Register here</span></h5>
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

export default Login