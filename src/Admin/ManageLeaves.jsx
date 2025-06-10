import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import '../css/main.css';
import '../Login-pages/AdminLogin.css';
import "../Admin/adminSideBar";
import AdminSideBar from '../Admin/adminSideBar';
import AdminAppHeader from './AdminAppHeader';

const ManageLeaves = () => {
  return (
    <>   
    <AdminSideBar/>
    <AdminAppHeader/>
   
    <main className="backgroundColorChange" >
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
                        <li className="breadcrumb-item" aria-current="page">Manage Leaves</li>
                    </ol>
                </div>

             
                <div className="app-body" id="cbody">
                    <div className="row">
                        <div className="col-12">
                            <p className="d-inline-flex gap-1">
                                <button type="button" className="btn btn-dark backgroundColorChange removeCorner" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                    <i className="bi bi-calendar2-plus"></i>
                                </button>
                            </p>
                        </div>
                    </div>

                  
                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="staticBackdropLabel">Add a Leave</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="alert alert-danger d-none" id="attendanceinfoMessage" role="alert"></div>
                                        </div>
                                        <div className="col-12">
                                            <div className="mb-3">
                                                <label className="form-label">Name</label><label className="colorRed ms-3 fs-6">*</label>
                                                <select className="form-select removeCorner" id="adduser">
                                                    <option >Select user</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="mb-3">
                                                <label className="form-label">Leave Type</label>
                                                <select className="form-select removeCorner" id="addtype">
                                                    <option >Emergency</option>
                                                    <option >Normal</option>
                                                    <option >Special Leave</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="mb-3">
                                                <label className="form-label">Date</label>
                                                <input type="date" id="addDate" className="form-control removeCorner" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="mb-3">
                                                <label className="form-label">Reason</label>
                                                <textarea className="form-control removeCorner" id="addreason" placeholder="Reason" rows="4"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-dark backgroundColorChange" >Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-sm-4 col-12">
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col-12"><label className="form-label fs-6">Search By :</label></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-sm-4 col-12 text-center">
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col-3 text-end"><label className="form-label smallText">Name -</label></div>
                                    <div className="col-9">
                                        <select id="select-state" className="form-select removeCorner smallText" >
                                            <option >All users</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-4 col-12 text-center">
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col-3 text-end"><label className="form-label smallText">From Date -</label></div>
                                    <div className="col-9"><input type="date" id="from" className="form-control removeCorner smallText" placeholder="Search by first name"  /></div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-4 col-12 text-center">
                            <div className="">
                                <div className="row">
                                    <div className="col-3 text-end"><label className="form-label smallText">To Date -</label></div>
                                    <div className="col-9"><input type="date" id="to" className="form-control removeCorner smallText" placeholder="Search by user position" /></div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-4 col-12 text-center mt-lg-0 mt-3">
                            <div className="">
                                <div className="row">
                                    <div className="col-3 text-end"><label className="form-label smallText">Order By</label></div>
                                    <div className="col-9">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="btnradio" id="exampleRadios1"  />
                                            <label className="form-check-label smallText" htmlFor="exampleRadios1">Date ASC</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="btnradio" id="exampleRadios2" checked />
                                            <label className="form-check-label smallText text-start" htmlFor="exampleRadios2">Date DESC</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-12 text-center mt-lg-0 mt-3">
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col-3 text-end"><label className="form-label smallText">Leave Status -</label></div>
                                    <div className="col-9">
                                        <select id="status" className="form-select removeCorner smallText" >
                                            <option >All</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6 text-center">
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col-12 text-lg-start text-end">
                                        <button className="btn btn-danger removeCorner" ><i className="bi bi-x"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xxl-12">
                        <div className="card mb-4">
                            <div className="card-body">
                                <div className="row">
                                    <div className="table-responsive">
                                        <table className="table align-middle table-hover m-0">
                                            <thead>
                                                <tr>
                                                    <th scope="col">No</th>
                                                    <th scope="col">Id</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Leave Date</th>
                                                    <th scope="col">Leave Status</th>
                                                </tr>
                                            </thead>
                                            <tbody id="tableBodyUser"></tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-12 text-center">
                                        <div className="card mb-4">
                                            <div className="card-body">
                                                <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group" id="pagicontainer"></div>
                                            </div>
                                        </div>
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

export default ManageLeaves