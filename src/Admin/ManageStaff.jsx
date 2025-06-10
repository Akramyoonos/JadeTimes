import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import AdminSideBar from './adminSideBar';
import AdminAppHeader from './AdminAppHeader';

const ManageStaff = () => {
  return (
    <>
    <AdminSideBar />
    <AdminAppHeader />
    <main className="backgroundColorChange" onload="loadStaffDateToFront(0)">
    <div className="page-wrapper">
        <div className="main-container">
            <div className="app-container">
                <div className="app-hero-header d-flex align-items-start">
                    <ol className="breadcrumb d-none d-lg-flex align-items-center">
                        <li className="breadcrumb-item">
                            <i className="bi bi-house text-dark"></i>
                            <a href="/AdminPanel">Home</a>
                        </li>
                        <li className="breadcrumb-item">Manage Staff</li>
                    </ol>
                </div>

                <div className="app-body" id="cbody">
                    <div className="row mb-5">
                        <div className="col-12">
                            <p className="d-inline-flex gap-1">
                                <button className="btn btn-dark backgroundColorChange removeCorner" type="button" 
                                        data-bs-toggle="collapse" data-bs-target="#collapseExample" 
                                        aria-expanded="false" aria-controls="collapseExample">
                                    <i className="bi bi-person-plus"></i> Add New Staff Member
                                </button>
                            </p>
                            <div className="collapse" id="collapseExample">
                                <div className="card card-body">
                                    <div className="row">
                                        <div className="col-xxl-12">
                                            <div className="card mb-4">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-lg-6 col-sm-6 col-12">
                                                            <div className="mb-3">
                                                                <label className="form-label">Select User</label>
                                                                <select className="form-select removeCorner" id="adduser">
                                                                    <option value="0">Select user</option>
                                                                   
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-sm-6 col-12">
                                                            <div className="mb-3">
                                                                <label className="form-label">Registered Date</label>
                                                                <input type="date" id="dor" 
                                                                       className="form-control removeCorner" 
                                                                       placeholder="Registration Date"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 mt-4">
                                                    <button type="button"  
                                                            className="btn btn-dark removeCorner backgroundColorChange w-50">
                                                        Register New Staff Member
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                  
                    <div className="row">
                        <div className="col-lg-3 col-sm-4 col-12 text-center">
                            <div className="mb-3">
                                <input type="text" id="searchname" 
                                       className="form-control removeCorner smallText" 
                                       placeholder="Search by name" 
                                       oninput="loadStaffDateToFront(1)"/>
                            </div>
                        </div>
                       
                    </div>

                   
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table align-middle table-hover m-0">
                                            <thead>
                                                <tr>
                                                    <th>NO</th>
                                                    <th>Id</th>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Mobile</th>
                                                    <th>Staff Reg Date</th>
                                                    <th>Department</th>
                                                    <th>Position</th>
                                                    <th>User Type</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody id="tableBodyUser"></tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                  
                    <div className="row">
                        <div className="col-xl-5 col-lg-12">
                            <div className="card mb-4">
                                <div className="card-header">
                                    <h5 className="card-title">Pending Payments</h5>
                                </div>
                                <div className="card-body">
                                    <table className="table align-middle">
                                        <thead>
                                            <tr>
                                                <th>User</th>
                                                <th>Month</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody id="tableBodypp"></tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-7 col-lg-12">
                            <div className="card mb-4">
                                <div className="card-header">
                                    <h5 className="card-title">Payment History</h5>
                                </div>
                                <div className="card-body">
                                    <table className="table align-middle">
                                        <thead>
                                            <tr>
                                                <th>JID</th>
                                                <th>User</th>
                                                <th>For</th>
                                                <th>Date</th>
                                            </tr>
                                        </thead>
                                        <tbody id="tableBodyphistory"></tbody>
                                    </table>
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

export default ManageStaff