import React, { useEffect, useState, useRef } from 'react'
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
    const [image, setImage] = useState([]);

    const [first, setFirst] = useState('')
    const [second, setSecond] = useState('')
    const [third, setThird] = useState('')
    const [total, setTotal] = useState('')

    useEffect(()=> {
        getUser();
    },[])

    const firstExpenses = useRef();
    const secondExpenses = useRef();
    const thirdExpenses = useRef();

    const submit=()=> {
        
        let total = parseInt(first) + 
        parseInt(second) + 
        parseInt(third)
        setTotal(total)
    }

    const amount =()=> {
        
    }

    localStorage.setItem('first', first)
    localStorage.setItem('second', second)
    localStorage.setItem('third', third)

    console.log(localStorage.getItem('first'))


    const getUser =()=> {
        const token = localStorage.getItem("access")
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            "Access-Control-Allow-Origin":"*"
        }
        axios.get("https://campaign.fundall.io/api/v1/base/profile", {
            headers
        })
        .then((data)=> {
            setuser(data.data.success.data)
        })
        .catch(error=> {
            setErr("There was an error authenticating your request")
        })
    }
   
    const updateAvi =async e=> {
        e.preventDefault();
    let data = new FormData();
    console.log(user.avatar + ' ' + 'this is image pathname')
    data.append('image', user.avatar);
    
    const api = localStorage.getItem('access')
    const config = {
        headers: { 
            'content-type': 'multipart/form-data',
            Authorization: `Bearer ${api}`
         }
       }
        axios.post("https://campaign.fundall.io/api/v1/base/avatar",data, config
        )
        .then(res => {
            console.log(res.data + 'this is data after api call');
         })
         .catch(err => console.log(err));
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
                        <div className="rec">
                        <img src={user.avatar} alt="img"/>
                        </div>
                        {/* <div className="user"><img src={user} alt="user" /></div> */}
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
                                <h4 style={{color: "#30443C"}}>Amount</h4>
                                <h4>{first}</h4>
                                <h4>{second}</h4>
                                <h4>{third}</h4>
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
                        <div>
                        <FormInput
                        type="text"
                        placeholder="596,000"
                        name="monthly-expenses"
                        />
                        </div>
                        <label>Date</label>
                        <div>
                        <FormInput
                        type="date"
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
                                value={first}
                                handleChange={e=> setFirst(e.target.value)}
                                />
                                <FormInput
                                type="text"
                                placeholder="10000"
                                name="amt2"
                                value={second}
                                handleChange={e=> setSecond(e.target.value)}
                                />
                                <FormInput
                                type="text"
                                placeholder="10000"
                                name="amt3"
                                value={third}
                                handleChange={e=> setThird(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="amt"><h3>Total Actual Expenses: N <span>{total}</span></h3></div>
                    </div>
                    <button onClick={submit} className="saves">save today's expenses</button>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;