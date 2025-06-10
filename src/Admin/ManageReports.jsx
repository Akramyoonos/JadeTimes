import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import '../css/main.css';
import '../Login-pages/AdminLogin.css';
import "../Admin/adminSideBar";
import AdminSideBar from '../Admin/adminSideBar';
import AdminAppHeader from './AdminAppHeader';

const ManageReports = () => {
  return (
    <>  
    <AdminSideBar />
    <AdminAppHeader />
   
    <main class="backgroundColorChange" onload="loadUserReports(0)">
    <div class="page-wrapper">
        <div class="main-container">
            <div class="app-container">
                <div class="app-hero-header d-flex align-items-start">
                    <ol class="breadcrumb d-none d-lg-flex align-items-center">
                        <li class="breadcrumb-item">
                            <i class="bi bi-house text-dark"></i>
                            <a href="/AdminPanel">Home</a>
                        </li>
                        <li class="breadcrumb-item">Manage Reports</li>
                    </ol>
                </div>

                <div class="app-body" id="cbody">
                    <div class="row">
                        <div class="col-lg-12 col-sm-12 col-12 text-center">
                            <div class="mb-3">
                                <div class="row">
                                    <div class="col-3 text-end">
                                        <label class="form-label smallText">Name -</label>
                                    </div>
                                    <div class="col-9">
                                        <select id="select-state" class="form-select removeCorner smallText" 
                                                onchange="loadUserReports(1)">
                                            <option value="0">All users</option>
                                            <option value="1">John Doe JID123</option>
                                            <option value="2">Jane Smith JID456</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xxl-12">
                        <div class="card mb-4">
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table align-middle table-hover m-0">
                                        <thead>
                                            <tr>
                                                <th scope="col">No</th>
                                                <th scope="col">Id</th>
                                                <th scope="col">Name</th>
                                                <th scope="col" class="w-25">Report</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody id="tableBodyUser"></tbody>
                                    </table>
                                </div>
                                
                                <div class="row mt-3">
                                    <div class="col-12 text-center">
                                        <div class="card mb-4">
                                            <div class="card-body">
                                                <div class="btn-group" role="group" 
                                                     aria-label="Basic checkbox toggle button group" 
                                                     id="pagicontainer">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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

</main>
</>
  )
}

export default ManageReports