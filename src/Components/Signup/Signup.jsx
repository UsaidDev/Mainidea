import React from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import { FirebaseContext } from '../../store/FirebaseContext'
import { useNavigate } from 'react-router-dom'
function Signup() {
    const [username, Setusername] = useState('');
    const [email, Setemail] = useState('');
    const [password, Setpassword] = useState('');
    const { firebase } = useContext(FirebaseContext)
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then((result) => {
            result.user.updateProfile({ displayName: username }).then(() => {
                firebase.firestore().collection('users').add({
                    id: result.user.uid,
                    username: username,
                    email: email
                }).then(() => {
                    alert("Account Created Successfully")
                    navigate('/login')
                })
            })
        })
    }
    return (
        <div>
            <div className="wrapper">
                <h1>Sign Up</h1>
                <form>
                    <input type="text" value={username} placeholder='Username' onChange={((e) => Setusername(e.target.value))} />
                    <input type="email" value={email} placeholder='Email' onChange={((e) => Setemail(e.target.value))} />
                    <input type="password" value={password} placeholder='Password' onChange={((e) => Setpassword(e.target.value))} />
                    <input type="text" placeholder='Re-Enter password' />
                </form>
                <button onClick={handleSubmit}>Signup</button>
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