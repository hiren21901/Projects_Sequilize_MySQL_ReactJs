import React, { useEffect, useState } from 'react';
import Headers from './parcelView/Headers';
import Sidebar from './parcelView/Sidebar';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import {RiRiFileEditFillF} from "react-icons/ri"

function CountryDatatable() {

    const [Country, setCountry] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/allcountry")

            .then(function (response) {
                setCountry(response.data.data)
            })
            .catch(function (error) {
                console.log(error);
            })

    }, []);



    return (
        <>

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


                    <section className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <div className="card">
                                        <div className="card-header">

                                            <Link to="/country" className="btn btn-primary">Add Country</Link>
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

                                                        Country.map((val, i) => {
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
    )
}

export default CountryDatatable