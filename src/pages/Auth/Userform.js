import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Headers from "../parcelView/Headers";
import Sidebar from "../parcelView/Sidebar";
import { toast } from "react-toastify";

// import { API_URL} from "../API/config"
import axios from 'axios';

const Userform = () => {
  const [user, setUser] = useState({
    FName: "",
    LName: "",
    Email: "",
    Password: "",
    MobileNumber: "",
    RAddress: "",
    CityID: "",
    Roll: "",
    UserName: "",
    DesignationID: "",
    DepartmentID: "",
    Gender: "Male",
    CreatedBy: -1,
    // ModifiedBy:"-1",
  });
  let name, value;

  const handleinput = (e) => {
    name = e.target.name;
    value = e.target.value;
    if (name === "Gender") {
      value = e.target.checked ? e.target.value : ""; // Uncheck the radio button when the same option is clicked
    }
    setUser({ ...user, [name]: value });
  };
  console.log(user);

  const SubmitData = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post('http://localhost:5000/userCreate', user )

        .then((response) => {
          console.log(response);
          toast.success(response.data.message);
          // navigate("/dashboard");
        });
    } catch (error) {
      if (error.response) {
        const { status, data } = error.response;
        console.log(status, data);

        if (data.errors && data.errors.length > 0) {
          data.errors.forEach((errorMessage) => {
            toast.error(errorMessage);
          });
        } else {
          toast.error(error.response.data);
        }
      }
    }
  };
 
  return (
    <>
      <Helmet>
        <title> Designation</title>
      </Helmet>
      <div className="wrapper ">
        <Headers />

        <Sidebar />
        <div className="content-wrapper" style={{ backgroundColor: "white" }}>
          <section className="content-header">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-6">
                  <h1>User Datatable</h1>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className=" px-md-5 text-center text-lg-start ">
              <div className="row gx-lg-5 align-items-top ">
                <div className="col-xs-12 col-sm-12  mb-lg-0 d-flex justify-content-center">
                  <div className="ms-1 me-1 py-4 px-md-4 ">
                    <div
                      className="tab-pane fade show active"
                      id="home"
                      role="tabpanel"
                      aria-labelledby="home-tab"
                    >
                    <form method="POST">
                      <div className="row register-form">
                        <div className="col-md-6 col-sm-6 ">
                          <div className="form-group mb-2">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="First Name *"
                              name="FName"
                              value={user.FName}
                              onChange={handleinput}
                            />
                          </div>
                          <div className="form-group mb-2">
                            <input
                              type="email"
                              name="Email"
                              className="form-control"
                              placeholder="Your Email*"
                              value={user.Email}
                              onChange={handleinput}
                            />
                          </div>
                          <div className="form-group mb-2">
                            <input
                              type="password"
                              name="Password"
                              className="form-control"
                              placeholder="Password *"
                             value={user.Password}
                              onChange={handleinput}
                              autoComplete="off"
                            />
                          </div>
                          <div className="form-group mb-2">
                            <select
                              className="form-control"
                              name="CityID"
                              value={user.CityID}
                              onChange={handleinput}
                            >
                              <option
                                className="hidden"                              
                              >
                                City Id*
                              </option>
                              <option>-1</option>
                             
                            </select>
                          </div>
                          <div className="form-group mb-2">
                            <input
                              type="text"
                              name="Roll"
                              className="form-control"
                              placeholder="Roll*"
                            value={user.Roll}
                              onChange={handleinput}
                            />
                          </div>
                          <div className="form-group mb-2">
                            <label className="mr-2">Gender:</label>
                            <label className="mr-2">
                              <input
                                type="radio"
                                name="Gender"
                                value="male"
                                checked={user.Gender === "male"}
                                onChange={handleinput}
                              />{" "}
                              Male
                            </label>
                            <label className="mr-2">
                              <input
                                type="radio"
                                name="Gender"
                                value="female"
                                checked={user.Gender === "female"}
                                onChange={handleinput}
                              />{" "}
                              Female
                            </label>
                            
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                          <div className="form-group mb-2">
                            <input
                              type="text"
                              name="LName"
                              className="form-control"
                              placeholder="Last Name *"
                              value={user.LName}
                              onChange={handleinput}
                            />
                          </div>
                          <div className="form-group mb-2">
                            <input
                              type="text"
                              name="MobileNumber"
                              minLength={10}
                              maxLength={10}
                              className="form-control"
                              placeholder="Your Mobile Number *"
                              value={user.MobileNumber}
                              onChange={handleinput}
                            />
                          </div>
                          <div className="form-group mb-2">
                            <select
                              className="form-control"
                              name="DesignationID"
                              value={user.DesignationID}
                              onChange={handleinput}
                            >
                              <option
                                className="hidden"
                              >
                                Designation Id*
                              </option>
                              <option>-1</option>
             
                            </select>
                          </div>
                          <div className="form-group mb-2">
                            <select
                              className="form-control"
                              name="DepartmentID"
                              value={user.DepartmentID}
                              onChange={handleinput}
                            >
                              <option
                                className="hidden"
                               >
                                Department Id*
                              </option>
                              <option>-1</option>
                              
                            </select>
                          </div>
                          <div className="form-group mb-2">
                            <input
                              type="text"
                              name="UserName"
                              className="form-control"
                              placeholder="User Name *"
                              value={user.UserName}
                              onChange={handleinput}
                            />
                          </div>
                          <div>
                            <textarea
                              className="form-group mb-2 w-100"
                              rows="2"
                              name="RAddress"
                              placeholder="Your Address*"
                              value={user.RAddress}
                              onChange={handleinput}
                            />
                          </div>
                        </div>

                        <div className="form-group mb-2 mt-3 d-flex justify-content-start">
                          <input
                            type="submit"
                            className="btn btn-primary"
                            onClick={SubmitData}
                          />
                        </div>
                      </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Userform;
