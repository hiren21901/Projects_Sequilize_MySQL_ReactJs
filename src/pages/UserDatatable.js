import React, { useState, useEffect  } from 'react'
import { Helmet } from 'react-helmet-async';
import Headers from './parcelView/Headers';
import Sidebar from './parcelView/Sidebar';
import { NavLink } from "react-router-dom";
import Pagination from '../component/Pagination';
import { RiFileEditFill } from "react-icons/ri";
import axios from 'axios';



function UserDatatable() {

    const [products, setProduct] = useState([0]);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(10);


    const totalPages = Math.ceil(products.length / perPage);


    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage - 1;

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const getProfile = async () => {
      await axios.get('http://localhost:5000/allUserdata' ) 
      .then(function (response){
        console.log(response.data);
        setProduct(response.data);
      })
      .catch(function(error){
        console.log(error);
      });
    };
    useEffect(() => {
        getProfile();
      }, []);
    
    return (
        <>
            <Helmet>
                <title> User Datatable</title>
            </Helmet>
            <div className="wrapper ">
                <Headers />

                <Sidebar />
                <div className="content-wrapper" style={{ backgroundColor: "white" }}>
                    <section className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1>User Datatable</h1>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <div className="card-header">
                                        <NavLink to="/userform/Add" className="btn btn-primary">
                                            Add User
                                        </NavLink>
                                    </div>
                                    <table width="100%" class="display" id="example" cellspacing="0">

                                        <thead>
                                            <tr>
                                                <th> </th>
                                                <th>UserName</th>
                                                <th>FName</th>
                                                <th>LName</th>
                                                <th>Email</th>
                                                <th>MobileNumber</th>
                                                <th>CityID</th>
                                                <th>DesignationID</th>
                                                <th>DepartmentID</th>
                                                <th>Roll</th>
                                                <th>Gender</th>
                                                <th>RAddress</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {products
                                                .slice(startIndex, endIndex + 1)
                                                .map((item, index) => (
                                                    <tr key={index}>
                                                        <td>
                                                            <NavLink to="/userform/Add">
                                                                <RiFileEditFill />
                                                            </NavLink>
                                                        </td>

                                                        <td>{item.UserName}</td>
                                                        <td>{item.FName}</td>
                                                        <td>{item.LName}</td>
                                                        <td>{item.Email}</td>
                                                        <td>{item.MobileNumber}</td>
                                                        <td>{item.CityID}</td>
                                                        <td>{item.DesignationID}</td>
                                                        <td>{item.DepartmentID}</td>
                                                        <td>{item.Roll}</td>
                                                        <td>{item.Gender}</td>
                                                        <td>{item.RAddress}</td>
                                                    </tr>
                                                ))}
                                        </tbody>
                                    </table>

                                    <div className="entries-range d-flex justify-content-between mt-2">
                                        <div>
                                            Showing {startIndex + 1} to{" "}
                                            {Math.min(endIndex + 1, products.length)} of{" "}
                                            {products.length} entries
                                        </div>
                                        <div>
                                            <Pagination
                                                currentPage={currentPage}
                                                totalPages={totalPages}
                                                onPageChange={handlePageChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default UserDatatable;