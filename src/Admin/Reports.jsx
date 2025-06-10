import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../Login-pages/UserLogin.css";
import "../css/main.css";
import Usersidebar from '../User/Usersidebar';
import UserAppHeader from '../User/UserAppHeader';


const Reports = () => {
  return (
    <>  
    <Usersidebar/>
    <UserAppHeader/>
    <main className="backgroundColorChange">
    <div className="page-wrapper">
        <div className="main-container">

            <div className="app-container">
                <div className="app-hero-header d-flex align-items-start">
                    <ol className="breadcrumb d-none d-lg-flex align-items-center">
                        <li className="breadcrumb-item">
                            <i className="bi bi-house text-dark"></i>
                            <a href="/UserDashBoard">Home</a>
                        </li>
                        <li className="breadcrumb-item" aria-current="page">Report</li>
                    </ol>
                </div>
                <div className="app-body">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-xxl-12">
                                            <div className="card mb-4">
                                                <div className="card-header">
                                                    <h5 className="card-title">Report</h5>
                                                </div>
                                                <div className="card-body">
                                                    <div className="row" aria-disabled="">
                                                        <div className="col-12 alert alert-danger d-none" id="infoMessage" role="alert">
                                                        </div>
                                                        <div className="col-sm-6 col-12">
                                                            <div className="mb-3">
                                                                <label className="form-label"></label>
                                                                <textarea className="form-control removeCorner" id="title" placeholder="Describe the condition" rows="5"></textarea>
                                                            </div>
                                                            <div className="d-flex gap-2 justify-content-center">
                                                                <button type="button"  className="btn btn-dark backgroundColorChange removeCorner">
                                                                    Report
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

export default Reports;