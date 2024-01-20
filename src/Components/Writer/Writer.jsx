import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Writer.css'
import { FirebaseContext, AuthContext } from '../../store/FirebaseContext';

function Writer() {
  const { user } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);
  const [datas, Setdatas] = useState('');
  const [image, Setimage] = useState('');
  const navigate = useNavigate();
  const date = new Date()

  const handleSubmit = () => {
    firebase.storage().ref(`/image/${image.name}`).put(image).then(({ ref }) => {
      ref.getDownloadURL().then((url) => {
        firebase.firestore().collection("Datas").add({
          Username: user.displayName,
          Datas: datas,
          userId: user.uid,
          currectDate: date.toDateString(),
          url: url
        })
        navigate('/')
      })
    })
  }


  return (
    <>
      <div className="writer-wrapper">
        <h1>Write Your <span style={{ background: 'gold', color: "whitesmoke" }}>Thouts</span> And ideas</h1>
        <form>
          <textarea name="Enter Details" id="" cols="40" rows="3" onChange={((e) => Setdatas(e.target.value))}></textarea>
        </form>
        <form>
          <input type="file" onChange={(e) => Setimage(e.target.files[0])} className='file-insert' />
          <img src={image ? URL.createObjectURL(image) : ''} alt="Addimage" className='writer-image' />
        </form>
        <button onClick={handleSubmit} className='submit-button'>Submit</button>
      </div>
    </>
  );
};
export default Writer;