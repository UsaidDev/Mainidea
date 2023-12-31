import React from 'react'
import './Banner.css'
import {useEffect,useContext,useState} from 'react'
import { FirebaseContext } from '../../store/FirebaseContext'
function Banner() {
  const {firebase}=useContext(FirebaseContext)
  const [products,Setproducts]=useState([])
  useEffect(()=>{
    firebase.firestore().collection('datas').get().then((snapshot)=>{
      const Allpost=snapshot.docs.map((datas)=>{
        return {
          ...datas.data(),
          id:datas.id
        }
        
      })
      console.log(Allpost);
      Setproducts(Allpost);
    })
  },[firebase]);

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
        <div className="container">
          <div className="row d-flex justify-content-center">
            <h2 className='mt-4'>Feature's</h2>
          </div>
          <div className="feature-para">
            <p className='d-flex justify-content-center'>Analytics insights</p>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6">
              <div className="feature-box">
                <h4 className='text-white ml-3 pt-2'>Idea Sharing</h4>
                <p className='text-white ml-3 mt-2'>Share your ideas and thoughts others</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="feature-box">
                <h4 className='text-white ml-3 pt-2'>Collaboration</h4>
                <p className='text-white ml-3 mt-2'>Collaboration with others to refine and develop your ideas</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="feature-box">
                <h4 className='text-white ml-3 pt-2'>Feedback</h4>
                <p className='text-white ml-3 mt-2'>Receive feedback and suggestions from the community</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="feature-box">
                <h4 className='text-white ml-3 pt-2'>Inspiration</h4>
                <p className='text-white ml-3 mt-2'>Get inspired by exploring ideas and thoughts shared by others</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {
        products.map((data)=>(
          <div key={data.data}>
          <p>{data.datas}</p>
          </div>
        ))
      }
      {/*-----END FEATURE-----*/}

    </>

  )
}

export default Banner