import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import '../css/main.css';
import '../Login-pages/AdminLogin.css';
import "../Admin/adminSideBar";

const AdminAttendence = () => {
  return (
    <main class="backgroundColorChange" onload="loadUserAttendanceCalender()">
    <div class="page-wrapper">
        <div class="main-container">
            <div class="app-container">
                <div class="app-hero-header d-flex align-items-start">
                    <ol class="breadcrumb d-none d-lg-flex align-items-center">
                        <li class="breadcrumb-item">
                            <i class="bi bi-house text-dark"></i>
                            <a href="/AdminPanel">Home</a>
                        </li>
                        <li class="breadcrumb-item" aria-current="page">Attendence</li>
                    </ol>
                </div>

                <div class="app-body">
                    <div class="row">
                        <div class="col-xxl-12">
                            <div class="card mb-4">
                                <div class="card-body">
                                    <div class="custom-tabs-container">
                                        <ul class="nav nav-tabs" id="customTab2" role="tablist">
                                            <li class="nav-item" role="presentation">
                                                <a class="nav-link active" id="tab-oneA" data-bs-toggle="tab" href="#oneA" role="tab" aria-controls="oneA" aria-selected="true">
                                                    <i class="bi bi-building-check text-dark"></i>
                                                </a>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <a class="nav-link" id="tab-twoA" data-bs-toggle="tab" href="#twoA" role="tab" aria-controls="twoA" aria-selected="false">
                                                    <i class="bi bi-building-add text-dark"></i>
                                                </a>
                                            </li>
                                        </ul>
                                        
                                        <div class="tab-content">
                                            <div class="tab-pane fade show active" id="oneA" role="tabpanel">
                                                <div class="row">
                                                    <div class="col-xxl-12">
                                                        <div class="card">
                                                            <div class="card-body">
                                                                <div id="dayGrid"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="tab-pane fade" id="twoA" role="tabpanel">
                                                <div class="row">
                                                    <div class="col-xxl-12">
                                                        <div class="card mb-4">
                                                            <div class="card-header">
                                                                <h5 class="card-title">Mark Attendence</h5>
                                                            </div>
                                                            <div class="card-body">
                                                                <div class="row" aria-disabled="">
                                                                    <div class="col-12 alert alert-danger d-none" id="infoMessage" role="alert"></div>
                                                                    <div class="col-lg-3 col-sm-4 col-12">
                                                                        <div class="mb-3">
                                                                            <label class="form-label">Date</label>
                                                                            <input type="text" class="form-control removeCorner" id="date" disabled placeholder="Enter Date" value="2024-03-20" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-sm-6 col-12">
                                                                        <div class="mb-3">
                                                                            <label class="form-label">Tasks have Completed <small>(max characters: 1000)</small></label>
                                                                            <textarea class="form-control removeCorner" id="task" placeholder="Tasks have Completed" rows="10"></textarea>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="card-footer">
                                                                <div class="d-flex gap-2 justify-content-center">
                                                                    <button type="button" class="btn btn-dark backgroundColorChange removeCorner" onclick="markAttendence()">
                                                                        Mark Attendence
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
                    </div>
                </div>

                <div class="app-footer">
                    <span>© 2024 Jadetimes Media LLC. All rights reserved.</span>
                </div>
            </div>
        </div>
    </div>


</main>
  )
}

export default AdminAttendence