import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import AdminSideBar from './adminSideBar';
import AdminAppHeader from './AdminAppHeader';

const ManageUser = () => {
  return (
      <>  
    <AdminSideBar/>
    <AdminAppHeader/>
    <main className="backgroundColorChange">
    <div className="page-wrapper">
        <div className="main-container">
            <div className="app-container">
                <div className="app-hero-header d-flex align-items-start">
                    <ol className="breadcrumb d-none d-lg-flex align-items-center">
                        <li className="breadcrumb-item">
                            <i className="bi bi-house text-dark"></i>
                            <a href="/AdminPanel">Home</a> 
                        </li>
                        <li className="breadcrumb-item" aria-current="page">Manage User</li>
                    </ol>
                </div>

                <div className="app-body" id="cbody">
                    <div className="row mb-5">
                        <div className="col-12">
                            <p className="d-inline-flex gap-1">
                                <button className="btn btn-dark backgroundColorChange removeCorner" type="button" 
                                        data-bs-toggle="collapse" data-bs-target="#collapseExample" 
                                        aria-expanded="false" aria-controls="collapseExample">
                                    <i className="bi bi-person-plus"></i> Add New User
                                </button>
                            </p>
                            <div className="collapse" id="collapseExample">
                                <div className="card card-body">
                                    <div className="row">
                                        <div className="col-xxl-12">
                                            <div className="card mb-4">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-12 mb-3">
                                                            <div className="alert alert-danger d-none" 
                                                                 id="infoMessageProfileUpdate" role="alert">
                                                            </div>
                                                        </div>
                                                        
                                                        <div className="col-lg-3 col-sm-4 col-12">
                                                            <div className="mb-3">
                                                                <label className="form-label">Surname</label>
                                                                <input type="text" id="sname" 
                                                                       className="form-control removeCorner" 
                                                                       placeholder="Enter Surname"/>
                                                            </div>
                                                        </div>
                                                        
                                                        <div className="col-lg-3 col-sm-4 col-12">
                                                            <div className="mb-3">
                                                                <label className="form-label">First Name</label>
                                                                <input type="text" id="fname" 
                                                                       className="form-control removeCorner" 
                                                                       placeholder="Enter First Name"/>
                                                            </div>
                                                        </div>

                                                     
                                                        
                                                        <div className="col-12 mt-4">
                                                            <div className="d-flex gap-2 justify-content-center">
                                                                <button type="button" 
                                                                        className="btn btn-dark removeCorner backgroundColorChange w-50">
                                                                    Register New User
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-sm-4 col-12">
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col-12">
                                        <label className="form-label fs-6">Search By :</label>
                                    </div>
                                </div>
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
                                                    <th scope="col">NO</th>
                                                    <th scope="col">Id</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Mobile</th>
                                                    <th scope="col">Department</th>
                                                    <th scope="col">Position</th>
                                                    <th scope="col">Registered date</th>
                                                    <th scope="col">User Type</th>
                                                    <th scope="col">Duration</th>
                                                    <th scope="col">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody id="tableBodyUser"></tbody>
                                        </table>
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

export default ManageUser;