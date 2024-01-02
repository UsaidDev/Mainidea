import React, { useEffect, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Page/Home';
import Login from './Page/Login'
import Signup from './Page/Signup';
import Learncss from './Components/Learncss/learn'
import NotPage from './Page/NotPage';
import { AuthContext, FirebaseContext } from './store/FirebaseContext';
import Writer from './Components/Writer/Writer';

function App() {
  const {Setuser} = useContext(AuthContext)
  const {firebase}=useContext(FirebaseContext)
  
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        Setuser(user)
      }
    })
  })
  
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/writer' element={<Writer />} />
        <Route path='/learn' element={<Learncss />} />
        <Route path='*' element={<NotPage />} />
      </Routes>
    </div>
  )
}
export default App;