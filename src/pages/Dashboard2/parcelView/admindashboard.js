import React, { useState } from 'react';
import './admin.css';
import Headers from './Headers';
import Sidebar from './sidebar';
// import Footers from './Footers';

const Admindashboard = () => {
 

  return (
  <>
<div className="wrapper ">
  {/* Preloader */}

  {/* Navbar */}
  <div className="wrapper bg-white">

  <Headers/>

  <Sidebar/>
  {/* Content Wrapper. Contains page content */}
  <div className="content-wrapper">
  <section className="content-header">
            <div className="container-fluid">
              <div className="row ">
                <div className="col-sm-6">
                  <h1> Dashboard2</h1>
                </div>
              </div>
            </div>
            {/* /.container-fluid */}
          </section>
         
          <section>
          <div className="card">
  <div className="card-header">
    <h3 className="card-title">
      <i className="fas fa-chart-pie mr-1" />
      Sales
    </h3>
    <div className="card-tools">
      <ul className="nav nav-pills ml-auto">
        <li className="nav-item">
          <a className="nav-link active" href="#revenue-chart" data-toggle="tab">Area</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#sales-chart" data-toggle="tab">Donut</a>
        </li>
      </ul>
    </div>
  </div>{/* /.card-header */}
  <div className="card-body">
    <div className="tab-content p-0">
      {/* Morris chart - Sales */}
      <div className="chart tab-pane active" id="revenue-chart" style={{position: 'relative', height: 300}}>
        <canvas id="revenue-chart-canvas" height={300} style={{height: 300}} />
      </div>
      <div className="chart tab-pane" id="sales-chart" style={{position: 'relative', height: 300}}>
        <canvas id="sales-chart-canvas" height={300} style={{height: 300}} />
      </div>
    </div>
  </div>{/* /.card-body */}
</div>

</section>
        </div>


 

    {/* /.content */}
  

</div>
 
</div>

  </>
  )
};

export default Admindashboard;
