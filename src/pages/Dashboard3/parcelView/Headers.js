import React from 'react'
import "./admin.css"

const Headers = () => {
  return (
    <>
        
          <nav className="main-header navbar navbar-expand navbar-white navbar-light" style={{backgroundColor:"#4b5354"}}>
      {/* Left navbar links */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#" role="button">
            <i className="fas fa-bars" style={{color:"white"}} />
          </a>
        </li>
        
      </ul>
      
    </nav>
        
    </>
  )
}

export default Headers