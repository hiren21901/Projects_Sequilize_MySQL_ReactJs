import React from 'react';
import "./Header.css";
import image from "../../assest/logo.png";
const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg p-2 mb-0">
        <a className="navbar-brand" href="#"><img src={image} alt="" style={{ width: "250px" }} /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
          {/* <span className="navbar-toggler-icon" /> */}
        </button>
        
        {/* <div className="collapse navbar-collapse " id="navbarsExample05">
          <ul className="navbar-nav ms-auto  ">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
          </ul>
        </div> */}
      </nav>
    </>
  )
}

export default Header