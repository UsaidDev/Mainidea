import React, { useContext, useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Writer.css'
import { FirebaseContext, AuthContext } from '../../store/FirebaseContext';

function Writer() {
  const { user } = useContext(AuthContext)
  const [datas, Setdatas] = useState('');
  const { firebase } = useContext(FirebaseContext)
  const navigate = useNavigate()
  const [show,Setshow]=useState([])

  const AddList = () => {
    Setdatas('')
    const UserName = user.displayName
    const date = new Date()
    firebase.firestore().collection('datas').add({
      datas: datas,
      UserName: UserName,
      createDate: date.toDateString(),
    }).then(() => {
      navigate('/')
    }).catch((error) => {
      alert("Collection Creation Issue")
    })
  }
  const DeleteList=()=>{

  }
  
  useEffect(() => {
    ref.current.focus();
    firebase.firestore().collection('datas').get().then((Snapshot)=>{
      const Alldatas= Snapshot.docs.map((datas)=>{
        return{
          ...datas.data(),
          id:datas.id
        }
      })
      Setshow(Alldatas)
    })
  },[firebase])
  const ref = useRef('null');
  return (
    <>
      <div class="writer-container">
        <div class="writer-page">
          <h5>Welcome, <span id="userName">{user ? user.displayName : "Login"} </span></h5>
          <textarea cols="40" rows="3" value={datas} onChange={((e) => Setdatas(e.target.value))} placeholder='Write Your Thouts..' ref={ref}></textarea>
          <div class="writer-btn">
            <div class="btn btn-success Add-btn" onClick={AddList}>Add</div>
            <div class="btn btn-danger Add-btn" onClick={DeleteList}>Delete</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Writer;