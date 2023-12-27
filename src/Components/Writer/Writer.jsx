import React, {useContext } from 'react';
import './Writer.css'
import {AuthContext} from '../../store/FirebaseContext'
function Writer() {
  const {user}=useContext(AuthContext)
  return (
    <div>
        <h1>{user? user.displayName:'Login'}</h1>
    </div>
  )
}

export default Writer