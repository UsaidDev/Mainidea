import React, { useContext, useState } from 'react';
import './Writer.css'
import { AuthContext } from '../../store/FirebaseContext'

function Writer() {
  const { user } = useContext(AuthContext)
  const [datas, Setdatas] = useState('');
  const [todo, Settodo] = useState([])
  const AddList = () => {
    Settodo([...todo, datas])
    Setdatas('')
  }

  return (
    <>
      <div class="writer-container">
        <div class="writer-page">
          <h5>Welcome, <span id="userName">{user ? user.displayName : "Login"}</span></h5>
          <textarea cols="40" rows="3" value={datas} onChange={((e) => Setdatas(e.target.value))} placeholder='Write Your Thouts..'></textarea>
          <div class="writer-btn">
            <div class="btn btn-success Add-btn" onClick={AddList}>Add</div>
            <div class="btn btn-primary Delete-btn">Delete</div>
          </div>
          {
            todo.map((datas) => (
              <>
                <div class="writer-display" key={datas}>
                  <ul>
                    <li>{datas}</li>
                  </ul>
                </div>
              </>
            ))
          }
        </div>
      </div>
    </>
  )
}
export default Writer