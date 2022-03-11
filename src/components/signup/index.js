import React, { useState } from 'react'
import './index.scss'
import { Link, useHistory } from 'react-router-dom'
import sign from './../../Group 2.png'
import Img from './../../Group 24.1.png'
import FormWrapper from '../forms/formWrapper';
import FormInput from '../forms/formInput';
import Button from '../forms/button';
import axios from 'axios'

const SignUp =()=> {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [successMessage, setSuccessMessage]= useState("")
    const [errorMessage, setErrorMessage]= useState("")


    const history = useHistory();

    const login =()=> {
        axios.post("https://campaign.fundall.io/api/v1/register", {
            firstname: firstName,
            lastname: lastName,
            email: email,
            password: password,
            password_confirmation: passwordConfirm
        }
        ,{
            "Content-Type": "application/json",
            Authorization: `Bearer lll`,
            "Access-Control-Allow-Origin":"*"
        })
        .then(()=> {
            history.push('/login')
            setSuccessMessage('Registration successfull')
        })
        .catch(error => {
            setErrorMessage('The firstname field is required')
        })
    }

    return (
        <div className="register">
                <div className="signup-div1">
                    <div className="logo">
                    <Link to="/">
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
                            value={firstName}
                            handleChange={(e)=> setFirstName(e.target.value)}
                            />
                            </div>
                            <div className="last">
                            <span>Last Name</span>
                            <FormInput 
                            type="text"
                            name="lastname"
                            placeholder="Enter Firstname"
                            value={lastName}
                            handleChange={(e)=> setLastName(e.target.value)}
                            />
                            </div>
                            </div>
                            <div>
                                <label>email address</label>
                                <FormInput 
                            type="text"
                            name="email"
                            placeholder="Enter Email"
                            value={email}
                            handleChange={(e)=> setEmail(e.target.value)}
                            />
                            </div>
                            <div>
                                <label>Password</label>
                                <FormInput 
                            type="password"
                            name="email"
                            placeholder="Enter Password"
                            value={password}
                            handleChange={(e)=> setPassword(e.target.value)}
                            />
                            </div>
                            <div>
                                <label>Confirm Password</label>
                                <FormInput 
                            type="password"
                            name="email"
                            placeholder="Confirm password"
                            value={passwordConfirm}
                            handleChange={(e)=> setPasswordConfirm(e.target.value)}
                            />
                            </div>
                            <Button onClick={login}>Sign up</Button>
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