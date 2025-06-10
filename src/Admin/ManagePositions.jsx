import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import '../css/main.css';
import '../Login-pages/AdminLogin.css';
import "../Admin/adminSideBar";
import AdminSideBar from '../Admin/adminSideBar';
import AdminAppHeader from './AdminAppHeader';

const ManagePositions = () => {
  return (
    <>  
    <AdminSideBar/>
    <AdminAppHeader/>
    <main class="backgroundColorChange">
    <div class="page-wrapper">
        <div class="main-container">
            <div class="app-container">
                <div class="app-hero-header d-flex align-items-start">
                    <ol class="breadcrumb d-none d-lg-flex align-items-center">
                        <li class="breadcrumb-item">
                            <i class="bi bi-house text-dark"></i>
                            <a href="/AdminPanel">Home</a>
                        </li>
                        <li class="breadcrumb-item">Manage departments and positions</li>
                    </ol>
                </div>

                <div class="app-body">
                    <div class="row">
                        <div class="col-xl-4 col-md-6 col-sm-12 col-12">
                            <div class="card mb-4">
                                <div class="card-header">
                                    <h5 class="card-title">Add new Position</h5>
                                </div>
                                <div class="card-body">
                                    <div class="mb-3">
                                        <label class="form-label">Department</label>
                                        <select class="form-select removeCorner" id="department">
                                            <option value="0">Select</option>
                                            <option value="1">Sales</option>
                                            <option value="2">Marketing</option>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Position</label>
                                        <input type="text" id="position" class="form-control removeCorner" placeholder="Position"/>
                                    </div>
                                    <button type="button" onclick="addNewPosition()" class="btn btn-dark removeCorner backgroundColorChange">
                                        ADD
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-8 col-md-6 col-sm-12 col-12">
                            <div class="card mb-4">
                                <div class="card-header">
                                    <h5 class="card-title">Registered Positions</h5>
                                </div>
                                <div class="card-body">
                                    <table class="table align-middle">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Department</th>
                                                <th>Position</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr data-bs-toggle="modal" data-bs-target="#positionModal1">
                                                <td>1</td>
                                                <td>Sales</td>
                                                <td>Manager</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-8 col-md-6 col-sm-12 col-12">
                            <div class="card mb-4">
                                <div class="card-header">
                                    <h5 class="card-title">Add new Department</h5>
                                </div>
                                <div class="card-body">
                                    <div class="mb-3">
                                        <input type="text" id="addNewDepartment" class="form-control removeCorner" placeholder="Department"/>
                                    </div>
                                    <button type="button" onclick="addNewDepartment()" class="btn btn-dark removeCorner backgroundColorChange">
                                        ADD
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-4 col-md-6 col-sm-12 col-12">
                            <div class="card mb-4">
                                <div class="card-header">
                                    <h5 class="card-title">Registered Departments</h5>
                                </div>
                                <div class="card-body">
                                    <table class="table align-middle">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Department</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr data-bs-toggle="modal" data-bs-target="#deptModal1">
                                                <td>1</td>
                                                <td>Sales</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="app-footer">
                    <span>© 2024 Jadetimes Media LLC. All rights reserved.</span>
                </div>
            </div>
        </div>
    </div>

    
    <div class="modal fade" id="positionModal1" data-bs-backdrop="static">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Edit Position</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <input type="text" id="position1" class="form-control removeCorner" value="Manager"/>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary removeCorner" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary removeCorner" onclick="updatePositionName(1,1)">EDIT</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="deptModal1" data-bs-backdrop="static">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Edit Department</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <input type="text" id="department1" class="form-control removeCorner" value="Sales"/>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary removeCorner" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary removeCorner" onclick="updateDepartmentName(1)">EDIT</button>
                </div>
            </div>
        </div>
    </div>

</main>
 </>
  )
}

export default ManagePositions