import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Usersidebar from '../User/Usersidebar';
import UserAppHeader from "../User/UserAppHeader";

const ContributorsArticle = () => {
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
                        <li className="breadcrumb-item" aria-current="page">Article</li>
                    </ol>
                </div>

                <div className="app-body">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="custom-tabs-container">
                                        <ul className="nav nav-tabs" id="customTab2" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <a className="nav-link active" id="tab-oneA" data-bs-toggle="tab" href="#oneA" role="tab" aria-controls="oneA" aria-selected="true">
                                                    <i className="bi bi-building-check text-dark"></i>
                                                </a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a className="nav-link" id="tab-twoA" data-bs-toggle="tab" href="#twoA" role="tab" aria-controls="twoA" aria-selected="false">
                                                    <i className="bi bi-building-add text-dark"></i>
                                                </a>
                                            </li>
                                        </ul>

                                        <div className="tab-content">
                                            <div className="tab-pane fade show active" id="oneA" role="tabpanel">
                                                <div className="row">
                                                    <div className="col-xxl-12">
                                                        <div className="card mb-4">
                                                            <div className="card-body">
                                                                <div className="card-header">
                                                                    <h5 className="card-title">My Articles</h5>
                                                                </div>
                                                                <div className="table-responsive mt-5">
                                                                    <table className="table table-bordered m-0 w-100">
                                                                        <thead>
                                                                            <tr>
                                                                                <th>#</th>
                                                                                <th>Article Date</th>
                                                                                <th>Title</th>
                                                                                <th>Type</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                                <div className="card mt-4">
                                                                    <div className="card-body">
                                                                        <div className="col-12">
                                                                            <div className="btn-toolbar" role="toolbar">
                                                                                <div className="btn-group removeCorner me-2 text-center" role="group">
                                                                                    
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

                                            <div className="tab-pane fade" id="twoA" role="tabpanel">
                                                <div className="row">
                                                    <div className="col-xxl-12">
                                                        <div className="card mb-4">
                                                            <div className="card-header">
                                                                <h5 className="card-title">Add Article</h5>
                                                            </div>
                                                            <div className="card-body">
                                                                <div className="row">
                                                                    <div className="col-12 alert alert-danger d-none" id="infoMessage" role="alert"></div>
                                                                    <div className="col-lg-3 col-sm-4 col-12">
                                                                        <div className="mb-3">
                                                                            <label className="form-label">Date</label>
                                                                            <input type="date" className="form-control removeCorner" id="date"/>
                                                                        </div>
                                                                        <div className="mb-3">
                                                                            <label className="form-label">Article Type</label>
                                                                            <select id="articleType" className="form-control removeCorner">
                                                                                <option value="0">Select</option>
                                                                                <option value="1">Commercial</option>
                                                                                <option value="2">Non Commercial</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-6 col-12">
                                                                        <div className="mb-3">
                                                                            <label className="form-label">Article Title</label>
                                                                            <textarea className="form-control removeCorner" id="title" rows="5"></textarea>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card-footer">
                                                                <div className="d-flex gap-2 justify-content-center">
                                                                    <button type="button"  className="btn btn-dark backgroundColorChange removeCorner">
                                                                        Add Article
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

export default ContributorsArticle