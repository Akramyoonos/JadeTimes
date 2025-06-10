import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import '../css/main.css';
import '../Login-pages/AdminLogin.css'
import "./adminSideBar";
import AdminSideBar from './adminSideBar';
import AdminAppHeader from "../Admin/AdminAppHeader";

const AdminPanel = () => {
  return (
    
    <>    
    <AdminSideBar/>
    <AdminAppHeader/>
    
    <main className="backgroundColorChange">   


    <div className="page-wrapper">

        <div className="main-container">
            
            <div className="admin-sidebar">
             
            </div>

            <div className="app-container">

                <div className="admin-app-header">
                  
                </div>

             
                <div className="app-hero-header d-flex align-items-start">

                    <ol className="breadcrumb d-none d-lg-flex align-items-center">
                        <li className="breadcrumb-item">
                            <i className="bi bi-house text-dark"></i>
                            <a href="/AdminPanel">Home</a>
                        </li>
                        <li className="breadcrumb-item" aria-current="page">Dashboard</li>
                    </ol>
              
                    <div className="ms-auto d-flex flex-row">
                        <div className="d-flex flex-column text-end">
                            <p className="m-0 text-secondary">Welcome</p>
                            <h3 className="m-0">Admin Name</h3>
                        </div>
                    </div>
                

                </div>

                <div className="app-body">

                 
                    <div className="row">

                        <div className="col-xl-8">
                            <div className="row">
                                <div className="col-xxl-6 col-sm-6 col-12">
                                    <div className="card mb-4">
                                        <div className="card-body d-flex align-items-center p-0">
                                            <div className="p-4">
                                                <i className="bi bi-pie-chart fs-1 lh-1 text-dark"></i>
                                            </div>
                                            <div className="py-4">
                                                <h5 className="text-secondary fw-light m-0">Head Count</h5>
                                                <h1 className="m-0 number" id="count1">100</h1>
                                            </div>
                                            <span className="badge backgroundColorChange position-absolute top-0 end-0 m-3">Active</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xxl-6 col-sm-6 col-12">
                                    <div className="card mb-4">
                                        <div className="card-body d-flex align-items-center p-0">
                                            <div className="p-4">
                                                <i className="bi bi-sticky fs-1 lh-1 text-dark"></i>
                                            </div>
                                            <div className="py-4">
                                                <h5 className="text-secondary fw-light m-0">Pending Leaves</h5>
                                                <h1 className="m-0" id="count4">5</h1>
                                            </div>
                                            <span className="badge backgroundColorChange position-absolute top-0 end-0 m-3">Leaves</span>
                                        </div>
                                    </div>
                                </div>

                           
                                <div className="col-xxl-6 col-sm-6 col-12">
                                    <div className="card mb-4">
                                        <div className="card-body d-flex align-items-center p-0">
                                            <div className="p-4">
                                                <i className="bi bi-star fs-1 lh-1 textredChange"></i>
                                            </div>
                                            <div className="py-4">
                                                <h5 className="text-secondary fw-light m-0">Attendance</h5>
                                                <h1 className="m-0 text-success"><span className="number" id="count2">95.00</span>%</h1>
                                            </div>
                                            <span className="badge backGroundRed position-absolute top-0 end-0 m-3">Today</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xxl-6 col-sm-6 col-12">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="card mb-4 bg-success">
                                                <div className="card-body d-flex align-items-center py-4">
                                                   <table className="w-100 text-center">
                                <tbody><tr>
                                    <td><span className="m-0 text-white smallText">Marked</span></td>
                                       </tr>
                                        <tr>
                                    <td><h2 className="m-0 text-white number" id="count5">95</h2></td>
                                         </tr>
                                </tbody></table>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="card mb-4 backGroundRed">
                                                <div className="card-body d-flex align-items-center py-4">
                                        <table className="w-100 text-center">
                                            <tbody><tr>
                                            <td><span className="m-0 text-white smallText">Not Marked</span></td>
                                             </tr>
                                             <tr>
                                           <td><h2 className="m-0 text-black number" id="count6">5</h2></td>
                                           </tr>
                                        </tbody></table>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                       
                        <div className="col-12 col-xl-4 text-sm-center text-lg-center text-xl-end text-md-center text-center">
                            <img src="assets/img/card_icon.png" className="img-fluid imageSize" style={{height: "400px"}} />
                        </div>
                    </div>

               
                    <div className="col-12">
                        <hr/>
                    </div>

                    <div className="col-xl-12 col-sm-12 col-12">
                        <div className="row">
                         
                            <div className="col-12 col-xl-4">
                                <div className="card mb-4">
                                    <div className="card-body d-flex align-items-center backGroundRed p-0">
                                        <div className="p-4">
                                            <i className="fs-1 lh-1 bi bi-check2-circle text-light"></i>
                                        </div>
                                        <div className="py-4">
                                            <h5 className="text-light m-0">Today Attendance</h5>
                                            <h1 className="m-0 text-light">SUBMITTED</h1>
                                        </div>
                                        <span className="badge backgroundColorChange position-absolute top-0 end-0 m-3">2023-10-10</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-xl-4">
                                <div className="card mb-4">
                                    <div className="card-body d-flex align-items-center p-0">
                                        <div className="p-4">
                                            <i className="bi bi-pie-chart fs-1 lh-1 text-dark"></i>
                                        </div>
                                        <div className="py-4">
                                            <h5 className="text-secondary fw-light m-0">Attendance</h5>
                                            <h1 className="m-0"><span className="number" id="count3">200</span> days</h1>
                                        </div>
                                        <span className="badge backgroundColorChange position-absolute top-0 end-0 m-3">Total</span>
                                    </div>
                                </div>
                            </div>

                          
                            <div className="col-12 col-xl-4">
                                <div className="col-12">
                                    <div className="card mb-4 backgroundColorChange">
                                        <div className="card-body text-center">
                                            <h5 className="mb-3 fw-bold text-light">Admin's Task</h5>
                                            <p className="lh-base mb-4 text-light">Manage the team and ensure smooth operations.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="row">
                        <hr/>
                    </div>

                   
                    <div className="row">
                      
                        <div className="col-xl-4 col-sm-6 col-12">
                            <div className="card mb-4">
                                <div className="card-header">
                                    <h5 className="card-title">Leave Requests</h5>
                                </div>
                                <div className="card-body">
                                    <div className="scroll350">
                                     
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-sm-6 col-12">
                            <div className="card mb-4">
                                <div className="card-header">
                                    <h5 className="card-title">Today Leaves</h5>
                                </div>
                                <div className="card-body">
                                    <div className="scroll350">
                                    
                                    </div>
                                </div>
                            </div>
                        </div>

                      
                        <div className="col-xl-4 col-sm-6 col-12">
                            <div className="card mb-4">
                                <div className="card-header">
                                    <h5 className="card-title">Absent Employees</h5>
                                </div>
                                <div className="card-body">
                                    <div className="scroll350">
                                   
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="app-footer">
                    <span>© 2024 Jadetimes Media LLC. All rights reserved.</span>
                </div>
            

            </div>
        
        </div>
      
    </div>
</main>
</>
  )
}

export default AdminPanel