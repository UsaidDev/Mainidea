import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FirebaseContext } from '../../store/FirebaseContext';
import './Login.css';

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { firebase } = useContext(FirebaseContext);

  const handleSubmit = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        alert("Login Successful");
        navigate('/writer')
      })
      .catch((error) => {
        alert(error)
      });
  };
  return (
    <div>
      <div className="wrapper">
        <h1>Login</h1>
        <form>
          <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </form>
        <button onClick={handleSubmit} className='login-button'>Login</button>
        <div className="member">
          Not a member? <Link to={'/signup'}>Register Now</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;