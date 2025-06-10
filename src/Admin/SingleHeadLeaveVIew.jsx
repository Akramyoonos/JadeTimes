import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import '../css/main.css';
import '../Login-pages/AdminLogin.css';
import "../Admin/adminSideBar";

const SingleHeadLeaveVIew = () => {
  return (
    <main class="backgroundColorChange">
    <div class="page-wrapper">
        <div class="main-container">
            <div class="sidebar-wrapper">
              
            </div>
            <div class="app-container">
                <div class="app-header">
               
                </div>
                <div class="app-hero-header d-flex align-items-start">
                    <ol class="breadcrumb d-none d-lg-flex align-items-center">
                        <li class="breadcrumb-item">
                            <i class="bi bi-house text-dark"></i>
                            <a href="userDashBoard.php">Home</a>
                        </li>
                        <li class="breadcrumb-item"><a href="manageHeadLeaves.php">Leaves</a></li>
                        <li class="breadcrumb-item" aria-current="page">View Leave</li>
                    </ol>
                </div>
                <div class="app-body">
                    <div class="row">
                        <div class="col-lg-4 col-sm-6 col-12">
                            <div class="card mb-4 rounded-5">
                                <div class="card-body">
                                    <div class="d-flex align-items-center flex-column">
                                        <div class="mb-3">
                                            <img src="assets/img/defaultProfileImage.png" class="img-6x rounded-circle" alt="" />
                                        </div>
                                        <h5 class="mb-3">John Doe</h5>
                                        <p>john.doe@example.com</p>
                                        <div class="mb-3">
                                            <span class="badge bg-danger">Department</span>
                                            <span class="badge bg-info">Position</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-8 col-sm-6 col-12">
                            <div class="row">
                                <div class="col-12">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="alert alert-info" role="alert">
                                                <div class="mb-3">
                                                    <i class="bi bi-info-circle fs-1 me-2 lh-1"></i>
                                                </div>
                                                <h4 class="alert-heading">Pending!</h4>
                                                <p>Leave Date = 2024-01-01</p>
                                                <hr />
                                                <p>Reason for leave goes here.</p>
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
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/js/bootstrap.bundle.min.js"></script>
    <script src="assets/vendor/overlay-scroll/jquery.overlayScrollbars.min.js"></script>
    <script src="assets/vendor/overlay-scroll/custom-scrollbar.js"></script>
    <script src="assets/js/custom.js"></script>
    <script src="assets/js/admin.js"></script>
</main>
  )
}

export default SingleHeadLeaveVIew