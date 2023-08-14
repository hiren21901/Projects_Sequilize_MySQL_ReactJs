import { useState, useEffect } from "react";
import axios from "axios";
import Headers from "./parcelView/Headers"
import Sidebar from "./parcelView/Sidebar";
import { Helmet } from "react-helmet-async";
import "./parcelView/admin.css";
import { RiFileEditFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import Pagination from "../component/Pagination";
// import { API_URL } from "../API/config";


function Designation() {

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
    await axios
      .get(`http://localhost:5000/designation`)
      .then(function (response) {
        // handle success
        console.log(response.data.data);
        setProduct(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <>
      <Helmet>
        <title> Designation</title>
      </Helmet>
      <div className="wrapper ">
        <Headers />

        <Sidebar />
        {/* Content Wrapper. Contains page content */}
        <div className="content-wrapper" style={{ backgroundColor: "white" }}>
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>Designation</h1>
                </div>
              </div>
            </div>
            {/* /.container-fluid */}
          </section>


          <section className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">

                      <NavLink to="/designation/add" className="btn btn-primary">Add Designation</NavLink>
                    </div>
                    {/* /.card-header */}
                    <div className="card-body">
                      <table
                        id="example2"
                        className="table table-bordered table-hover"
                      >

                        <thead>
                          <tr>
                            <th></th>
                            <th>DesignationName</th>
                          </tr>
                        </thead>
                        <tbody>
                          {products
                            .slice(startIndex, endIndex + 1)
                            .map((item, index) => (
                              <tr key={index}>
                                <td className="">
                                  <NavLink to="/designation/update">
                                    <RiFileEditFill />
                                  </NavLink>
                                </td>
                                <td className="">{item.DesignationName}</td>
                              </tr>
                            ))}
                        </tbody>
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
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


          {/* /.card-body */}
        </div>


        {/* /.content */}
      </div>
    </>
  );
}

export default Designation;
