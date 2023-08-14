import { useState } from "react";
import Headers from "./parcelView/Headers";
import Sidebar from "./parcelView/Sidebar";
import { Helmet } from "react-helmet-async";
import "./parcelView/admin.css";


function Updatedesignation() {

  const [Department, setDepartment] = useState();
  const [Designation, setDesignation] = useState();

  const PostData = async (e) => {
    e.preventDefault();
    // await axios.post("http://localhost:5000/designations",{
    //     DesignationName:DesignationName
    //   })

    //   .then( (response) => {
    //     console.log(response,"response");
    //   })
    window.location.replace("/designation");

  };


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
                  <h1>Update Designation</h1>
                </div>
              </div>
            </div>
            {/* /.container-fluid */}
          </section>


          <section>
            <div className="container">
              <div className="  ">
                <div className="col-lg-12 col-xl-11">
                  {/* <div className="card text-black" style={{ width: "100%" }}> */}
                  {/* <div className="card-body p-md-5"> */}
                  <div className="row ">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <form className="mx-1 mx-md-4" method="POST">
                        <div className="d-flex flex-column  mb-4">
                          <div className="form-outline flex-fill mb-0">
                            <label className="mb-1">Department Name*</label>
                            <input
                              type="text"
                              id="Department"
                              className="form-control"
                              name="DesignationName"
                              placeholder="Enter your Department"
                              autoComplete="off"
                              value={Department}
                              onChange={(e) =>
                                setDepartment(e.target.value)
                              }
                            />
                          </div>
                          <div className="form-outline flex-fill mt-2">
                            <label className="mb-1">Designation Name*</label>
                            <input
                              type="text"
                              id="Designation"
                              className="form-control"
                              name="DesignationName"
                              placeholder="Enter your Designation"
                              autoComplete="off"
                              value={Designation}
                              onChange={(e) =>
                                setDesignation(e.target.value)
                              }
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
                            onClick={PostData}
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* </div> */}
                  {/* </div> */}
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

export default Updatedesignation;
