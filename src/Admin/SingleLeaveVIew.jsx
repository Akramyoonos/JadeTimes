import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import '../css/main.css';
import '../Login-pages/AdminLogin.css';
import "../Admin/adminSideBar";

const SingleLeaveVIew = () => {
  return (
    
<main className="backgroundColorChange">
  <div className="page-wrapper">
    <div className="main-container">
      <div className="adminSideBar"></div>
      <div className="app-container">
        <div className="adminAppHeader"></div>
        <div className="app-hero-header d-flex align-items-start">
          <ol className="breadcrumb d-none d-lg-flex align-items-center">
            <li className="breadcrumb-item">
              <i className="bi bi-house text-dark"></i>
              <a href="adminPanel.php">Home</a>
            </li>
            <li className="breadcrumb-item"><a href="manageLeaves.php">Manage Leaves</a></li>
            <li className="breadcrumb-item" aria-current="page">View Leave</li>
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
                      <span className="badge bg-danger">Software Development</span>
                      <span className="badge bg-info">Software Engineer</span>
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
                      <div className="alert alert-danger d-none" id="infoMessage" role="alert"></div>
                    </div>
                    <div className="col-lg-5 col-sm-8 col-8">
                      <div className="mb-3">
                        <label className="form-label">Leave Status</label>
                        <label className="colorRed ms-3 fs-6">*</label>
                        <select className="form-select removeCorner" id="leave_state">
                          <option value="1" selected>Pending</option>
                          <option value="2">Approved</option>
                          <option value="3">Rejected</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-3 mt-4 col-sm-4 col-4">
                      <div className="d-flex mt-1 gap-2 justify-content-center">
                        <button type="button" onclick="updateLeaveStatus(1)" className="btn btn-primary removeCorner backgroundColorChange">Update Status</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="alert alert-info" role="alert">
                        <div className="mb-3">
                          <i className="bi bi-info-circle fs-1 me-2 lh-1"></i>
                        </div>
                        <h4 className="alert-heading">Pending!</h4>
                        <p>Leave Date = 2023-10-25</p>
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
        <div className="app-footer">
          <span>© 2024 Jadetimes Media LLC. All rights reserved.</span>
        </div>
      </div>
    </div>
  </div>
  
</main>

  )
}

export default SingleLeaveVIew