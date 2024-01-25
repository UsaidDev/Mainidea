import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Writer.css'
import { FirebaseContext } from '../../store/FirebaseContext';

function Writer() {
  const { firebase } = useContext(FirebaseContext);
  const [datas, Setdatas] = useState('');
  const navigate = useNavigate();
  const date = new Date()

  const handleSubmit = () => {
    firebase.firestore().collection("Datas").add({
      Datas: datas,
      currectDate: date.toDateString(),
    }).then(() => {
      navigate('/');
    }).catch((error) => {
      alert(error)
    });
  }
  return (
    <>
      <div className="writer-wrapper">
        <h1>Write Your Thouts And ideas</h1>
        <form>
          <textarea name="Enter Details" id="" cols="40" rows="3" placeholder='Write your ideas' onChange={((e) => Setdatas(e.target.value))}></textarea>
        </form>
        <button onClick={handleSubmit} className='submit-button'>Submit</button>
      </div>
    </>
  );
};
export default Writer;