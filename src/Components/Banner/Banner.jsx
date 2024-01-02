import React from 'react'
import './Banner.css'
import { useEffect, useContext, useState } from 'react'
import { FirebaseContext } from '../../store/FirebaseContext'
import { LikeContext } from '../../store/LikeContext'

function Banner() {
  const { firebase } = useContext(FirebaseContext)
  const {like,Setlike}=useContext(LikeContext)
  const [products, Setproducts] = useState([])

  useEffect(() => {
    firebase.firestore().collection('datas').get().then((snapshot) => {
      const Allpost = snapshot.docs.map((datas) => {
        return {
          ...datas.data(),
          id: datas.id
        }
      })
      Setproducts(Allpost);
    })
  }, [firebase]);

  const AddLike=()=>{
    Setlike(like+1)
    console.log(like)
  }
  
  const Dislike=()=>{
    Setlike(like-1)
    console.log(like)
  }

  return (
    <>
      {/*-----BANNER-----*/}
      <div className='banner'>
        <div className="content">
          <h2>Share Your Ideas and Thoughts 💯!!</h2>
          <p>Connect with a community of like-minded individuals</p>
          <div className="">
            <button type='button' className='getstarted'>GetStarted</button>
          </div>
        </div>
      </div>
      {/*-----END BANNER-----*/}
      {/*-----FEATURE-----*/}
      <div className="feature">
        {
        
          products.map((data) => (
            <>
              <div className="card">
                <div className="card-body">
                  <div className="card-title text-center">{data.UserName}</div>
                  <div className="card-text text-center">{data.datas}</div>
                  <div className="card-time text-info">{data.createDate}</div>
                  <div className="openion">
                    <button id='like' onClick={AddLike}>Like</button>
                    <button id='dislike' onClick={Dislike}>Dislike</button>
                  </div>
                </div>
              </div>
            </>
          ))
        }
      </div>
      {/*-----END FEATURE-----*/}
    </>
  )
}

export default Banner