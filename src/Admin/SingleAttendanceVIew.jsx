import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const SingleAttendanceVIew = () => {
  return (
    <main className="backgroundColorChange">
    <div className="page-wrapper">
        <div className="main-container">
            <div className="sidebar-wrapper">
              
            </div>
            <div className="app-container">
                <div className="app-header">
                
                </div>
                <div className="app-hero-header d-flex align-items-start">
                    <ol className="breadcrumb d-none d-lg-flex align-items-center">
                        <li className="breadcrumb-item">
                            <i className="bi bi-house text-dark"></i>
                            <a href="adminPanel.php">Home</a>
                        </li>
                        <li className="breadcrumb-item"><a href="manageAttendence.php">Manage Attendance</a></li>
                        <li className="breadcrumb-item" aria-current="page">View Attendance</li>
                    </ol>
                </div>
                <div className="app-body">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6 col-12">
                            <div className="card mb-4 rounded-5">
                                <div className="card-body">
                                    <div className="d-flex align-items-center flex-column">
                                        <div className="mb-3">
                                            <img src="assets/img/defaultProfileImage.png" className="img-6x rounded-circle" alt="" />
                                        </div>
                                        <h5 className="mb-3">John Doe</h5>
                                        <p>john.doe@example.com</p>
                                        <div className="mb-3">
                                            <span className="badge bg-danger">Department</span>
                                            <span className="badge bg-info">Position</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-sm-6 col-12">
                            <div className="row">
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-12 mb-3">
                                            <div className="alert alert-danger d-none" id="infoMessage" role="alert">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="alert alert-success" role="alert">
                                                <div className="mb-3">
                                                    <i className="bi bi-check-circle fs-1 me-2 lh-1"></i>
                                                </div>
                                                <h4 className="alert-heading">Task has Completed</h4>
                                                <p>Attendance Date = 2024-01-01</p>
                                                <hr />
                                                <p>Description of the task goes here.</p>
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
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/js/bootstrap.bundle.min.js"></script>
    <script src="assets/vendor/overlay-scroll/jquery.overlayScrollbars.min.js"></script>
    <script src="assets/vendor/overlay-scroll/custom-scrollbar.js"></script>
    <script src="assets/js/custom.js"></script>
    <script src="assets/js/admin.js"></script>
</main>
  )
}

export default SingleAttendanceVIew