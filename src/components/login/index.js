import React, {useState } from 'react'
import './index.scss'
import { Link, useHistory } from 'react-router-dom'
import sign from './../../Group.png'
import Img from './../../Group 24.1.png'
import FormWrapper from '../forms/formWrapper';
import FormInput from '../forms/formInput';
import Button from '../forms/button';
import axios from 'axios'
import { token } from '../../api/token'


const Login =()=> {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [err, setErr] = useState("")
    const history = useHistory();

    const signup =()=> {
        history.push('/signup')
    }

    const register =()=> {
        axios.post("https://campaign.fundall.io/api/v1/login", {
            email: email,
            password: password
        }
        ,{
            "Content-Type": "application/json",
            Authorization: `Bearer lll`,
            "Access-Control-Allow-Origin":"*"
        })
        .then((response)=> {
            history.push('/dashboard')
        })
        .catch(error=> {
            setErr(error.messsage)
            console.log(error.messsage)
        })
    }

    localStorage.setItem('access', token.data)

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
                    <h1><span>Welcome back</span></h1>
                    <h1 className="h1">We miss you.</h1>
                    </div>
                </div>
                <div className="signup-div2">
                    <div className="signup-form">
                        <FormWrapper>
                            <div>
                                <h1 style={{fontFamily: "Roboto", 
                            }}>Holla</h1>
                                <h3 style={{fontFamily: "Roboto", 
                            }}>Sign in to the vibe!</h3>
                            </div>
                            <div style={{marginTop: "50px"}}>
                            <div>
                            <h3 style={{color: 'red'}}>{err}</h3>
                                <label>Email or Username</label>
                                <FormInput 
                                type="text"
                                name="email"
                                placeholder="Enter Email"
                                handleChange={(e)=> setEmail(e.target.value)}
                                />
                            </div>
                            <div>
                                <label>Password</label>
                                <FormInput 
                                type="password"
                                name="email"
                                placeholder="Enter Password"
                                handleChange={(e)=> setPassword(e.target.value)}
                            />
                            </div>
                            <Button onClick={register}>LOGIN</Button>
                            <br />
                            <h5>Don't have an account? <span style={{cursor: "pointer"}} onClick={signup}>Register here</span></h5>
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