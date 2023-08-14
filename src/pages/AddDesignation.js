import { useState, useEffect } from "react";
import axios from "axios";
import Headers from "./parcelView/Headers";
import Sidebar from "./parcelView/Sidebar";
import { Helmet } from "react-helmet-async";
import "./parcelView/admin.css";




function Adddesignation() {

  const [Drop, setDrop] = useState();
  const [DepartmentName, setDepartmentName] = useState([]);
  const [DesignationName, setDesignationName] = useState();

  // // const [currentPage, setCurrentPage] = useState();

  // const startIndex = (currentPage - 1) * itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;
  // const currentData = data.slice(startIndex, endIndex);

  // const totalPages = Math.ceil(data.length / itemsPerPage);

  // const handlePageChange = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };





const btnhandler = async (e) => {
  e.preventDefault();

  await axios.post("http://localhost:5000/designation", {
    // DepartmentID: DepartmentID,
    DesignationName: DesignationName,
    // CreatedBy: CreatedBy,
    // ModifiedBy: ModifiedBy



  })

    .then((response) => {
      console.log(response, "response");
    })
  window.location.replace("/designation");
};


useEffect(() => {
  axios
    .get("http://localhost:5000/alldepartment")
    .then((res) => {
      let data = res.data.data;
      console.log(data);
      setDepartmentName(data);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);


return (
  <>
    <Helmet>
      <title> Add Designation</title>
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
                <h1>ADD DESIGNATION</h1>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>

        <section>



          <div className="container">
            <div className="  ">
              <div className="col-lg-12 col-xl-11">
                <div className="row ">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <form className="mx-1 mx-md-4" method="POST">
                      <div className="d-flex flex-column  mb-4">
                        <div className="form-outline flex-fill mb-0">
                          <label className="mb-1">Department Name*</label>
                          <select
                            className="form-control"
                            value={Drop}
                            onChange={(e) => {
                              setDrop(e.target.value);
                            }}
                          >
                            <option
                              className="text-center text-dark"
                              // selected={"selected"}
                              hidden
                            >
                              --------Select DepartmentName--------
                            </option>
                            {DepartmentName.map((item, index) => {
                              return (
                                <option
                                  key={index}
                                  // value={Categoryname}
                                  className="nav-item"
                                >
                                  {item.DepartmentName}
                                </option>
                              );
                            })}
                          </select>
                        </div>

                        <div className="form-outline flex-fill mt-2">
                          <label className="mb-1">Designation Name*</label>
                          <input
                            type="text"
                            id="Department"
                            className="form-control"
                            name="DesignationName"
                            placeholder="Enter your Department"
                            autoComplete="off"
                            value={DesignationName}
                            onChange={(e) => setDesignationName(e.target.value)
                            }
                          />
                        </div>
                      </div>

                      {/* <div>
                        <h1>Table with Pagination</h1>
                        <DesignationName data={data} itemsPerPage={itemsPerPage} />
                      </div> */}




                      <div className="d-flex justify-content-start  mb-3 mb-lg-4">
                        <button
                          type="button"
                          className="btn btn-primary"
                          value="ragister"
                          name="signup"
                          id="signup"
                          onClick={btnhandler}
                        >
                          Submit
                        </button>
                      </div>
                    </form>
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
export default Adddesignation;
