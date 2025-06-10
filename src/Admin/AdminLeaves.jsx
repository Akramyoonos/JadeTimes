import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import '../css/main.css';
import '../Login-pages/AdminLogin.css';
import "../Admin/adminSideBar";

const AdminLeaves = () => {
  return (
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
                        <li class="breadcrumb-item">Leaves</li>
                    </ol>
                </div>

                <div class="app-body" id="mainRow">
                    <div class="row">
                        <div class="col-xxl-12">
                            <div class="card mb-4">
                                <div class="card-body">
                                    <div class="custom-tabs-container">
                                        <ul class="nav nav-tabs" id="customTab2" role="tablist">
                                            <li class="nav-item">
                                                <a class="nav-link active" id="tab-oneA" data-bs-toggle="tab" href="#oneA">
                                                    <i class="bi bi-list-nested text-dark"></i>
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" id="tab-twoA" data-bs-toggle="tab" href="#twoA">
                                                    <i class="bi bi-send-plus-fill text-dark"></i>
                                                </a>
                                            </li>
                                        </ul>

                                        <div class="tab-content">
                                            <div class="tab-pane fade show active" id="oneA">
                                                <div class="row">
                                                    <div class="col-xxl-12">
                                                        <div class="card mb-4">
                                                            <div class="card-body">
                                                                <div class="card-header">
                                                                    <h5 class="card-title">Leaves</h5>
                                                                </div>
                                                                <div class="table-responsive mt-5">
                                                                    <table class="table table-bordered m-0">
                                                                        <thead>
                                                                            <tr>
                                                                                <th>#</th>
                                                                                <th>Status</th>
                                                                                <th>Date</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>1</td>
                                                                                <td>
                                                                                    <span class="badge border border-info text-info">Pending</span>
                                                                                </td>
                                                                                <td>2024-01-01</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>2</td>
                                                                                <td>
                                                                                    <span class="badge border border-success text-success">Approved</span>
                                                                                </td>
                                                                                <td>2024-01-05</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>3</td>
                                                                                <td>
                                                                                    <span class="badge bg-danger text-light">Rejected</span>
                                                                                </td>
                                                                                <td>2024-01-10</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="tab-pane fade" id="twoA">
                                                <div class="row">
                                                    <div class="col-xxl-12">
                                                        <div class="card mb-4">
                                                            <div class="card-header">
                                                                <h5 class="card-title">Request For a Leave</h5>
                                                            </div>
                                                            <div class="card-body">
                                                                <div class="row">
                                                                    <div class="col-12 alert alert-danger d-none" id="infoMessage"></div>
                                                                    <div class="col-lg-3 col-sm-4 col-12">
                                                                        <div class="mb-3">
                                                                            <label class="form-label">Date</label>
                                                                            <input type="date" class="form-control removeCorner" id="date" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-sm-6 col-12">
                                                                        <div class="mb-3">
                                                                            <label class="form-label">Reason <small>(max characters: 1000)</small></label>
                                                                            <textarea class="form-control removeCorner" id="reason" rows="10"></textarea>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="card-footer">
                                                                <div class="d-flex gap-2 justify-content-center">
                                                                    <button type="button" class="btn btn-dark backgroundColorChange removeCorner">Request</button>
                                                                </div>
                                                                <div class="col-12 col-lg-6 offset-lg-3 mt-3">
                                                                    <p class="text-danger fw-bold">Please be informed of the specific procedure when applying for leaves:</p>
                                                                    <p>*Leave Policy:*</p>
                                                                    <p class="mt-1">
                                                                        - Submit your leave request at least two days before.<br/>
                                                                        - Each employee is entitled to a total of 3 leaves per month.<br/>
                                                                        - You can request a normal leave through the system.<br/>
                                                                        - Inform your divisional head.
                                                                    </p>
                                                                    <p class="mt-2 bg-danger-subtle m-auto">
                                                                        - You can take up to 2 emergency leaves without prior notice, which will be deducted from your total leaves.📌<br/>
                                                                        Send an email to <b><a href="mailto:info@jadetimes.com">info@jadetimes.com</a></b><br/>
                                                                        CC the email to <b>hr@ums.jadetimes.com</b>
                                                                    </p>
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

export default AdminLeaves