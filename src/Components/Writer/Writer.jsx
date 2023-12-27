import React, { useContext, useState } from 'react';
import './Writer.css'
import { AuthContext } from '../../store/FirebaseContext'

function Writer() {
  const { user } = useContext(AuthContext)
  const [datas, Setdatas] = useState('');
  return (
    <>
      <div className="writer">
        <h5>Welcome {user ? user.displayName : 'Login'}</h5>
      </div>
      <div className='outer'>
        <div className="writing-page">
          <input type="text" placeholder='Write Your ideas' value={datas} onSubmit={((e) => Setdatas(e.target.value))} />
          <button className='write-btn'>Submit</button>
        </div>
      </div>
    </>
  )
}

export default Writer