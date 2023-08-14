import React from 'react'
import { CiSquarePlus } from "react-icons/ci";
import { NavLink } from 'react-router-dom';
const Sidebar = () => {
  return (
    <>
       
       <aside className="main-sidebar sidebar-dark-secondary  elevation-4 vh-100">
      <img
        src={require("../../../assest/logo.png")}
        alt="AdminLTE Logo"
        className="brand-image  elevation-3 ms-5 mt-3"
        style={{ width:"150px" }}
      />
    <div className="sidebar">
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img
            src={require("../../../assest/avatar5.png")}
            style={{width:"40px"}}
            className="img-circle elevation-2"
            alt="User Image"
          />
        </div>
        <div className="info">
         <NavLink to="#" className="d-block">
            Alexander Pierce
          </NavLink>
        </div>
      </div>
      {/* SidebarSearch Form */}
      <div className="form-inline">
        <div className="input-group" data-widget="sidebar-search">
          <input
            className="form-control form-control-sidebar"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <div className="input-group-append">
            <button className="btn btn-sidebar">
              <i className="fas fa-search fa-fw" />
            </button>
          </div>
        </div>
      </div>
      {/* Sidebar Menu */}
      <nav className="mt-2">
        <ul
          className="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
          <li className="nav-item menu-close">
           <NavLink to="/dashboard" className="nav-link active">
              <i className="nav-icon fas fa-tachometer-alt" />
              <p>
                Dashboard
              </p>
            </NavLink>
           
          </li>
          <li className="nav-item">
           <NavLink to="#" className="nav-link">
              <i className="nav-icon fas fa-edit" />
              <p>
                Admin Forms
                <CiSquarePlus className='right' style={{fontSize:"25px"}}/>           
                </p>
            </NavLink>
            <ul className="nav nav-treeview">
              <li className="nav-item ">
               <NavLink to="/department" className="nav-link">
                  <p> Department</p>
                </NavLink>
              </li>
              <li className="nav-item">
               <NavLink to="/designation" className="nav-link">
                  <p> Designation</p>
                </NavLink>
              </li>
              
            </ul>
          </li>
         
          
        
         
         
        
       
         
        </ul>
      </nav>
      {/* /.sidebar-menu */}
    </div>
    {/* /.sidebar */}
  </aside>  
        
    </>
  )
}

export default Sidebar