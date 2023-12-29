import React, { useContext, useState, useRef, useEffect } from 'react';
import './Writer.css'
import { AuthContext } from '../../store/FirebaseContext'
import { FirebaseContext } from '../../store/FirebaseContext';
function Writer() {
  const { user } = useContext(AuthContext)
  const [datas, Setdatas] = useState('');
  const [todo, Settodo] = useState([])
  const { firebase } = useContext(FirebaseContext)
  const AddList = () => {
    Settodo([...todo, { list: datas, id: Date.now() }])
    Setdatas('')
    const UserName=user.displayName
    firebase.firestore().collection('datas').add({
      datas: datas,
      UserName:UserName,
    }).then(() => {
      alert('Collection Created Successfully')
    }).catch((error) => {
      alert("Collection Creation Issue")
    })
  }
  const DeleteList = (id) => {
    Settodo(todo.filter((datas) => datas.id !== id))
  }
  useEffect(() => {
    ref.current.focus();
  })
  const ref = useRef('null')
  return (
    <>
      <div class="writer-container">
        <div class="writer-page">
          <h5>Welcome, <span id="userName">{user ? user.displayName : "Login"}</span></h5>
          <textarea cols="40" rows="3" value={datas} onChange={((e) => Setdatas(e.target.value))} placeholder='Write Your Thouts..' ref={ref}></textarea>
          <div class="writer-btn">
            <div class="btn btn-success Add-btn" onClick={AddList}>Add</div>
          </div>
          {
            todo.map((datas) => (
              <>
                <div class="writer-display" key={datas.list}>
                  <ul>
                    <div class="btn btn-primary Delete-btn" onClick={(() => DeleteList(datas.id))}>Delete</div>
                    <li>{datas.list}</li>
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