import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  const token = window.localStorage.getItem('token')
  const [isLoggedIn]=useState(false)

  return (
    <nav style={{display: 'flex', justifyContent: 'space-between'}}>
      <Link to="/"> Home </Link>
      {
        token
          ? <button onClick={() => window.localStorage.clear()}>
            Log Out
          </button>
          : (
            <div>
              <Link to="/register"> Register </Link>
              <Link to="/login"> Login </Link>
              <Link to="/createprojectpage">Create New Project</Link>
              <Link to="/createpledgepage">Create New Pledge</Link>
            </div>
          )
      }
    </nav>
  )
}

export default Nav