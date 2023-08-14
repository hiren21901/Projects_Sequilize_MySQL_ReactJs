import React, { useEffect, useState } from 'react';
// import axios from "axios";
import Headers from "./parcelView/Headers"
import Sidebar from "./parcelView/Sidebar";
import { Helmet } from "react-helmet-async";
import "./parcelView/admin.css";
import axios from 'axios';
// import { Link } from 'react-router-dom';

function AddCity() {

    const [Viewset, setViewset] = useState();
    const [CityName, setCityName] = useState();
    const [CountryName, setCountry] = useState([]);
    const [StateName, setState] = useState([])

    const btnhandler = async (e) => {
        e.preventDefault();
    
        await axios.post("http://localhost:5000/city", {
          // DepartmentID: DepartmentID,
          CityName: CityName,
          // CreatedBy: CreatedBy,
          // ModifiedBy: ModifiedBy
    
    
    
        })
    
          .then((response) => {
            console.log(response, "response");
          })
        window.location.replace("/City/Add");
      };
    
  

    useEffect(() => {
        axios
            .get("http://localhost:5000/allcountry")
            .then((res) => {
                let data = res.data.data;
                console.log(data);
                setCountry(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


    useEffect(() => {
        axios
            .get("http://localhost:5000/allstate")
            .then((res) => {
                let data = res.data.data;
                console.log(data);
                setState(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


    return (
        <>
            <Helmet>
                <title> City</title>
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
                                    <h1>City</h1>
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
                                                        <label className="mb-2">Country Name*</label>

                                                        <select
                                                            className="form-control"
                                                            value={Viewset}
                                                            onChange={(e) => {
                                                                setViewset(e.target.value);
                                                            }}
                                                        >
                                                            <option
                                                                className="text-center m-3 text-dark"
                                                                // selected={"selected"}
                                                                hidden
                                                            >
                                                                --------Select Country Name--------
                                                            </option>
                                                            {CountryName.map((item, index) => {
                                                                return (
                                                                    <option
                                                                        key={index}
                                                                        // value={Categoryname}
                                                                        className="nav-item"
                                                                    >
                                                                        {item.CountryName}
                                                                    </option>
                                                                );
                                                            })}
                                                        </select>


                                                        <label className="mb-2">State Name*</label>

                                                        <select
                                                            className="form-control"
                                                            value={Viewset}
                                                            onChange={(e) => {
                                                                setViewset(e.target.value);
                                                            }}
                                                        >
                                                            <option
                                                                className="text-center m-3 text-dark"
                                                                // selected={"selected"}
                                                                hidden
                                                            >
                                                                --------Select State Name--------
                                                            </option>
                                                            {StateName.map((item, index) => {
                                                                return (
                                                                    <option
                                                                        key={index}
                                                                        // value={Categoryname}
                                                                        className="nav-item"
                                                                    >
                                                                        {item.CountryName}
                                                                    </option>
                                                                );
                                                            })}
                                                        </select>

                                                        <div className="form-outline flex-fill mt-2">
                                                            <label className="mb-1">City Name *</label>

                                                            <input

                                                                type="text"
                                                                id="Department"
                                                                className="form-control"
                                                                name="DesignationName"
                                                                placeholder="Enter your Department"
                                                                autoComplete="off"
                                                                value={CityName}
                                                                onChange={(e) => { setCityName(e.target.value) }}
                                                            />
                                                        </div>
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
    )
}

export default AddCity;