import React from 'react'
import './Banner.css'
function Banner() {
  return (
    <>
      <div className='banner'>
        <div className="content">
          <h2>Share Your Ideas and Thoughts 💯!!</h2>
          <p>Connect with a community of like-minded individuals</p>
          <div className="">
            <button type='button' className='getstarted'><span></span>GetStarted</button>
          </div>
        </div>
      </div>
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
      <div className="welcome">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="parabox">
            <p className='text-center'>Our platform is designed to provide a space for you to share your ideas, thoughts, and opinions with others. Whether you have a unique perspective on a particular topic or want to engage in meaningful discussions, our platform offers a supportive community where you can connect with like-minded individuals.</p>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Banner