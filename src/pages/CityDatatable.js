import React from 'react'
import Headers from './parcelView/Headers';
import Sidebar from './parcelView/Sidebar';
import { Link } from 'react-router-dom';

function CityDatatable() {
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
                                    <h1>City</h1>
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

                                            <Link to="/city" className="btn btn-primary">Add City</Link>
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
                                                    <tr>
                                                        <td className="text-center"><Link to="/designation/update"></Link></td>
                                                        <td>Internet Explorer 4.0</td>
                                                        <td>Win 95+</td>
                                                        <td> 4</td>
                                                        <td>X</td>
                                                    </tr>



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


export default CityDatatable
