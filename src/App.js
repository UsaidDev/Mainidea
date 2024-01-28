import React, { useEffect, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Page/Home';
import Writer from './Components/Writer/Writer';
import Search from './Page/Search';
import Login from './Page/Login'
import Signup from './Page/Signup';
import NotPage from './Page/NotPage';
import Profile from './Page/Profile';
import Like from './Page/Like';
import { AuthContext, FirebaseContext } from './store/FirebaseContext';


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
        <Route path='/search' element={<Search />} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/like' element={<Like />} />
        <Route path='*' element={<NotPage />} />
      </Routes>
    </div>
  )
}
export default App;