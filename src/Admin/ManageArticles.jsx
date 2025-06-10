import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import AdminSideBar from './adminSideBar';
import AdminAppHeader from './AdminAppHeader';

const ManageArticles = () => {
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
                
                <header className="admin-app-header">
                    
                </header>

                <div className="app-hero-header d-flex align-items-start">
                    <ol className="breadcrumb d-none d-lg-flex align-items-center">
                        <li className="breadcrumb-item">
                            <i className="bi bi-house text-dark"></i>
                            <a href="/AdminPanel">Home</a>
                        </li>
                        <li className="breadcrumb-item">Manage Articles</li>
                    </ol>
                </div>

                <div className="app-body" id="cbody">
                    <div className="row">
                        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" tabIndex="-1">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">Add a Leave</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="alert alert-danger d-none" id="attendanceinfoMessage"></div>
                                            </div>
                                            <div className="col-12">
                                                <div className="mb-3">
                                                    <label className="form-label">Name</label>
                                                    <select className="form-select removeCorner" id="adduser">
                                                        <option value="0">Select user</option>
                                                        <option value="1">John Doe</option>
                                                        <option value="2">Jane Smith</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="mb-3">
                                                    <label className="form-label">Leave Type</label>
                                                    <select className="form-select removeCorner" id="addtype">
                                                        <option value="1">Emergency</option>
                                                        <option value="2">Normal</option>
                                                        <option value="3">Special Leave</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="mb-3">
                                                    <label className="form-label">Date</label>
                                                    <input type="date" id="addDate" className="form-control removeCorner"/>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="mb-3">
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
                                        <select className="form-select removeCorner smallText">
                                            <option value="0">All users</option>
                                            <option value="1">John Doe</option>
                                            <option value="2">Jane Smith</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-4 col-12 text-center">
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col-3 text-end"><label className="form-label smallText">From Date -</label></div>
                                    <div className="col-9"><input type="date" className="form-control removeCorner smallText"/></div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-4 col-12 text-center">
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col-3 text-end"><label className="form-label smallText">To Date -</label></div>
                                    <div className="col-9"><input type="date" className="form-control removeCorner smallText"/></div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-4 col-12 text-center mt-lg-0 mt-3">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="btnradio" checked/>
                                <label className="form-check-label smallText">Date DESC</label>
                            </div>
                        </div>
                    </div>

                    <div className="col-xxl-12">
                        <div className="card mb-4">
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table align-middle table-hover m-0">
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Id</th>
                                                <th>Name</th>
                                                <th className="w-25">Title</th>
                                                <th>Date</th>
                                                <th>Submit Date</th>
                                                <th>Type</th>
                                            </tr>
                                        </thead>
                                        <tbody id="tableBodyUser">
                                           
                                        </tbody>
                                    </table>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-12 text-center">
                                        <div className="card mb-4">
                                            <div className="card-body">
                                                <div className="btn-group" id="pagicontainer">
                                                 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="app-footer">
                    <span>© 2024 Your Company Name. All rights reserved.</span>
                </div>
            </div>
        </div>
    </div>

</main>
</>
  )
}

export default ManageArticles