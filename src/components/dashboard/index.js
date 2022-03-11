import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Img from './../../Group 24.1.png'
import rec from './../../Rectangle 9.png'
import user from './../../User.png'
import FormInput from '../forms/formInput';
import ProgressBar from '@ramonak/react-progress-bar'
import Image from './../../Group (1).png'
import './index.scss'
import axios from 'axios'


const Dashboard =()=> {
    const [user, setuser] = useState([]);
    const [err, setErr] = useState([]);

    useEffect(()=> {
        getUser();
    },[])

    console.log(localStorage.getItem("access"))

    const getUser =()=> {
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer lll`,
            "Access-Control-Allow-Origin":"*"
        }
        axios.get("https://campaign.fundall.io/api/v1/base/profile", {
            headers
        })
        .then((data)=> {
            setuser(data.data[0])
        })
        .catch(error=> {
            setErr("There was an error authenticating your request")
        })
    }

    return (
        <div className="dashboard">
            <div className="dash-sub">
                <div className="dash-sub1">
                    <div className="logo">
                    <Link to="/">
                            <img src={Img} alt="img"/>
                        </Link>
                    </div>
                    <div className="user-divs">
                    <div className="users">
                        <div className="rec"><img src={rec} alt="rec" /></div>
                        <div className="user"><img src={user} alt="user" /></div>
                    </div>
                    <div className="name-email">
                        <h2>{user.firstname} {user.lastname}</h2>
                        <h3>{user.email}</h3>
                    </div>
                    </div>
                    <div className="expenses">
                        <h3>target monthly expenses</h3>
                        <h2>N596,000</h2>
                        <div className="progress"><ProgressBar
                         className="progress"
                          completed={60}
                          labelColor="#ffffff"
                          baseBgColor="#EFEFEF"
                          bgColor="#4DE897"
                          /></div>
                    </div>
                    <div className="expenses-summary">
                        <div style={{marginTop: "50px"}}><h4>Daily Expenses Summary</h4></div>
                        <div className="date-amount">
                            <div className="date">
                                <h3>Date</h3>
                                <h3>30, Nov 2018</h3>
                                <h3>30, Nov 2018</h3>
                                <h3>28, Oct 2018</h3>
                            </div>
                            <div className="amount">
                                <h4>Amount</h4>
                                <h4>N30,000</h4>
                                <h4>N30,000</h4>
                                <h4>N30,000</h4>
                            </div>
                        </div>
                        <div className="numbering"><button className="one">1</button> of <span>5</span></div>
                    </div>
                </div>
                <div className="dash-sub2">
                    <div className="welcome-back">
                        <h1>Welcome back, <span>{user.firstname}</span></h1>
                        <h3>Now lets get your expenses for this month</h3>
                        <div className="wel-img">
                    <Link to="/">
                            <img src={Image} alt="img"/>
                        </Link>
                    </div>
                    </div>
                    <div className="target">
                        <div className="tme">
                        <label>Target Monthly Expenses</label>
                        <div style={{marginLeft:"-150px"}}>
                        <FormInput
                        type="text"
                        placeholder="596,000"
                        name="monthly-expenses"
                        />
                        </div>
                        <label>Date</label>
                        <div style={{marginLeft:"-150px"}}>
                        <FormInput
                        type="text"
                        placeholder="08/08/2019"
                        name="date"
                        />
                        </div>
                        </div>
                        <div className="today-expenses">
                            <h4>Today's Expenses </h4>
                            <div className="items">
                                <FormInput
                                type="text"
                                placeholder="Pizza"
                                name="pizza"
                                />
                                <FormInput
                                type="text"
                                placeholder="textbook"
                                name="Textbook"
                                />
                                <FormInput
                                type="text"
                                placeholder="Tuition fee"
                                name="Tuition fee"
                                />
                            </div>
                            <div className="amount">
                                <FormInput
                                type="text"
                                placeholder="10000"
                                name="amt1"
                                />
                                <FormInput
                                type="text"
                                placeholder="10000"
                                name="amt2"
                                />
                                <FormInput
                                type="text"
                                placeholder="10000"
                                name="amt3"
                                />
                            </div>
                        </div>
                        <div className="amt"><h3>Total Actual Expenses: N <span>40,000.00</span></h3></div>
                    </div>
                    <button className="saves">save today's expenses</button>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;