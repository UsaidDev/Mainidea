import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div>
      <footer className='footer'>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <h3 className='footer-heading'>MainIdea</h3>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-3 col-md-3 col-lg-2">
              <h6 className='heading-content'>Home</h6>
            </div>
            <div className="col-3 col-md-3 col-lg-2">
              <h6 className='heading-content'>Explore</h6>
            </div>
            <div className="col-3 col-md-3 col-lg-2">
              <h6 className='heading-content'>Create</h6>
            </div>
            <div className="col-3 col-md-3 col-lg-2">
              <h6 className='heading-content'>Sign in</h6>
            </div>
          </div>
        </div>
      </footer>
      <div class="text-center p-4 copyright"> 
            <h6 class="text-reset fw-bold" href="/#">© 2023 Mainidea.AllRights Reserved.</h6>
          </div>
    </div>
  )
}
export default Footer