import React from 'react';
import { Link, useHistory } from 'react-router-dom'
import Img from './../../Group 24.1.png'
import './index.scss'

const Header =()=> {
    const history = useHistory()

    const signup =()=> {
        history.push('/signup')
    }

    return (
        <div className="header">
            <div className="head">
                <div className="logo">
                        <Link to="/">
                            <img src={Img} alt="img"/>
                        </Link>
                        {/* <ul>
                            <li>
                                <Link to="/">
                                    Fundall
                                </Link>
                            </li>
                        </ul> */}
                    </div>
                <div className="headerbut">
                    <ul>
                        <li>
                            <Link to="/login">Log in</Link>
                        </li>
                        <button onClick={signup} className="signup">
                            Sign up
                        </button>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;