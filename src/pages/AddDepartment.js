import { useState } from "react";
import axios from "axios";
import Headers from "./parcelView/Headers"
import Sidebar from "./parcelView/Sidebar";
import { Helmet } from "react-helmet-async";
import "./parcelView/admin.css";




function Adddepartment() {

  const [DepartmentName, setDepartmentName] = useState();

  const btnhandler = async (e) => {
    e.preventDefault();

    await axios.post('http://localhost:5000/department', {

      DepartmentName: DepartmentName

    })

      .then((response) => {
        console.log(response, "response");
      })
    window.location.replace("/department");
  };

  return (
    <>
      <Helmet>
        <title> Department</title>
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
                  <h1>Department</h1>
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
                        <div className="d-flex flex-row align-items-center mb-4">
                          <div className="form-outline flex-fill mb-0">
                            <label className="mb-2">Department Name*</label>
                            <input
                              type="text"
                              id="Department"
                              className="form-control"
                              name="DesignationName"
                              placeholder="Enter your Department"
                              autoComplete="off"
                              value={DepartmentName}
                              onChange={(e) => { setDepartmentName(e.target.value) }}
                            />
                          </div>
                        </div>

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

export default Adddepartment;
