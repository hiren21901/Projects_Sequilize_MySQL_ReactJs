import React, { useEffect, useState } from 'react'
import Headers from './parcelView/Headers';
import Sidebar from './parcelView/Sidebar';
import { Link } from 'react-router-dom';
import axios from 'axios';

function StateDatatable() {

    const [StateOn, setStateOn] = useState([]);

     
  useEffect(()=>{
    axios.get("http://localhost:5000/allstate")

      .then(function (response) {
        setStateOn(response.data.data)
    })
    .catch(function (error) {
        console.log(error);
    })

  },[]);



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
                                    <h1>State</h1>
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

                                            <Link to="/state" className="btn btn-primary">Add State</Link>
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

                                                        StateOn.map((val, i) => {
                                                            return (
                                                                <tr>
                                                                    <td className='view' key={i}></td>

                                                                    <td>{val.StateName}</td>
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

export default StateDatatable