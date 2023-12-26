import React from 'react'
import './Login.css'
import { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FirebaseContext } from '../../store/FirebaseContext'
function Login() {
  const [email, Setemail] = useState('')
  const [password, Setpassword] = useState('')
  const { firebase } = useContext(FirebaseContext);
  const navigate = useNavigate()

  const handleSubmit = () => {
    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
      alert("Login Successfull")
      navigate('/')
    }).catch((error) => {
      alert(error)
    })
  }
  return (
    <div>
      <div className="wrapper">
        <h1>Login</h1>
        <form>
          <input type="email" placeholder='Email' value={email} onChange={((e) => Setemail(e.target.value))} />
          <input type="text" placeholder='Password' value={password} onChange={((e) => Setpassword(e.target.value))} />
        </form>
        <button onClick={handleSubmit}>Login</button>
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