import React from 'react'
import './Signup.css'
import {Link} from 'react-router-dom'
function Signup() {
  return (
    <div>
        <div className="wrapper">
            <h1>Sign Up</h1>
            <form action="/">
                <input type="text" placeholder='Username' />
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password' />
                <input type="text" placeholder='Re-Enter password' />
            </form>
            <button>Signup</button>
            <div className="member">
                Already a member? <Link to={'/login'} >
                    login here
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Signup