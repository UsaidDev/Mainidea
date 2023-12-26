import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'
function Login() {
  return (
    <div>
        <div className="wrapper">
            <h1>Login</h1>
            <form action="/#">
                <input type="email" placeholder='Email' />
                <input type="text" placeholder='Password' />
            </form>
            <button>Login</button>
            <div className="member">
                Not a member? <Link to={'/signup'}>
                  Registor Now
                </Link>
            </div>
        </div>
    </div>
  )
};

export default Login