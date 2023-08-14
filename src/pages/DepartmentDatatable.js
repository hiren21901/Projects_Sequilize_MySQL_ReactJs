import { useEffect, useState } from "react";
import axios from "axios";
import Headers from "./parcelView/Headers"
import Sidebar from "./parcelView/Sidebar";
import { Helmet } from "react-helmet-async";
import "./parcelView/admin.css";
// import { RiFileEditFill } from "react-icons/ri";
import { Link } from "react-router-dom";

function Department() {
  const [view, setView] = useState([]);



  useEffect(() => {
    axios.get("http://localhost:5000/alldepartment")

      .then(function (response) {
        setView(response.data.data)
      })
      .catch(function (error) {
        console.log(error);
      })

  }, []);

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


          <section className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">

                      <Link to="/adddepartment" className="btn btn-primary">Add department</Link>
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
                            <th>Browser</th>
                            <th>Platform(s)</th>
                            <th>Engine version</th>
                            <th>CSS grade</th>
                          </tr>
                        </thead>

                        <tbody>
                          {

                            view.map((val, i) => {
                              return (
                                <tr>
                                  <td className='view' key={i}></td>

                                  <td>{val.DepartmentName}</td>
                                </tr>
                              )
                            })

                          }




                        </tbody>

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

export default Department;
