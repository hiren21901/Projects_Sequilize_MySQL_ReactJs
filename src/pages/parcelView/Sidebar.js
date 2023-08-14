import React from 'react'
import { CiSquarePlus } from "react-icons/ci";
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <>
      <div>
        <aside className="main-sidebar sidebar-dark-secondary  elevation-4 vh-100">
          <img
            src={require("../../assest/logo.png")}
            alt="AdminLTE Logo"
            className="brand-image  elevation-3 ms-5 mt-3 "
            style={{ width: "150px", background: "white" }}
          />
          <div className="sidebar">
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="image">
                <img
                  src="dist/img/user2-160x160.jpg"
                  className="img-circle elevation-2"
                  alt="User Image"
                />
              </div>
              <div className="info">
                <Link to="#" className="d-block">
                  Alexander Pierce
                </Link>
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
                <li className="nav-item menu-close f">
                  <Link to="/dashboard" className="nav-link active">
                    <i className="nav-icon fas fa-tachometer-alt" />
                    <p style={{ color: "white" }}>
                      Dashboard
                    </p>
                  </Link>

                </li>
                <li className="nav-item">
                  <Link to="#" className="nav-link">
                    <i className="nav-icon fas fa-edit" />
                    <p style={{ color: "white" }}>
                      Admin Forms
                      <CiSquarePlus className='right' style={{ fontSize: "25px" }} />
                    </p>
                  </Link>
                  <ul className="nav nav-treeview">
                    <li className="nav-item ">

                      <Link to="/department" className="nav-link">
                        <p style={{ color: "white" }}><CiSquarePlus style={{ fontSize: "20px", marginRight: "10px" }} />Department</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/designation" className="nav-link">
                        <p style={{ color: "white" }}><CiSquarePlus style={{ fontSize: "20px", marginRight: "10px" }} />Designation</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/country/add" className="nav-link">
                        <p style={{ color: "white" }}><CiSquarePlus style={{ fontSize: "20px", marginRight: "10px" }} />Country</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/state/Add" className="nav-link">
                        <p style={{ color: "white" }}><CiSquarePlus style={{ fontSize: "20px", marginRight: "10px" }} />State</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/City/Add" className="nav-link">
                        <p style={{ color: "white" }}><CiSquarePlus style={{ fontSize: "20px", marginRight: "10px" }} />City</p>
                      </Link>
                    </li>

                  </ul>
                </li>
              </ul>
            </nav>
            {/* /.sidebar-menu */}
          </div>
          {/* /.sidebar */}
        </aside>
      </div>
    </>
  )
}

export default Sidebar