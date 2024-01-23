import React from 'react'
import './NotPage.css'
import { Link } from 'react-router-dom'

function NotPage() {
  return (
    <div>
      <div className="notpage">
        <h3>Page Not Found</h3>
        <Link to={'/'}>
          <h5>Go to home</h5>
        </Link>
      </div>
    </div>
  )
}

export default NotPage