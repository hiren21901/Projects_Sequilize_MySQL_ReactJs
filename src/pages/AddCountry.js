import React, { useState } from 'react';
// import axios from "axios";
import Headers from "./parcelView/Headers"
import Sidebar from "./parcelView/Sidebar";
import { Helmet } from "react-helmet-async";
import "./parcelView/admin.css";
import axios from 'axios';
// import { Link } from 'react-router-dom';

function AddCountry() {


    const[CountryName,setCountryName] = useState();
    const[CountryID,setCountryID] = useState();




    const btnhandler = async (e) => {
        e.preventDefault();

        await axios.post('http://localhost:5000/country',{

        CountryID: CountryID,
        CountryName: CountryName

        })

        .then((Response) =>{
            console.log(Response,"response");
        })
        window.location.replace("/country")
    }

    return (
        <>
            <Helmet>
                <title> Country</title>
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
                                    <h1>Country</h1>
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
                                                        <input
                                                            type="text"
                                                            id="Country"
                                                            className="form-control"
                                                            name="CountryName"
                                                            placeholder="Enter your Department"
                                                            autoComplete="off"
                                                            value={CountryName}
                                                            onChange={(e) => { setCountryName(e.target.value) }}
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
    )
}

export default AddCountry