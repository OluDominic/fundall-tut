import React from 'react'
import Header from '../header';
import home from './../../Group 2.png'
import './index.scss'

const Home=()=> {

    return (
        <div className="home">
            <Header />
            <div className="home-png">
                <img src={home} alt="img"/>
            </div>
            <div className="writeup">
                <h1>fundall expense tracker</h1>
                <h2>mini project frontend</h2>
                <h4>by Babatunde Fashola</h4>
            </div>
        </div>
    );
}

export default Home;