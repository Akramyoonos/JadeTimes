import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import '../css/main.css';
import '../Login-pages/AdminLogin.css';
import "../Admin/adminSideBar";
import Usersidebar from '../User/Usersidebar';
import UserAppHeader from '../User/UserAppHeader';

const ManageHeadLeaves = () => {
  return (
    <> 
    <Usersidebar/>
    <UserAppHeader/>
   
    <main class="backgroundColorChange" onload="loadUserLeaves(0)">
    <div class="page-wrapper">
        <div class="main-container">
            <div class="app-container">
                <div class="app-hero-header d-flex align-items-start">
                    <ol class="breadcrumb d-none d-lg-flex align-items-center">
                        <li class="breadcrumb-item">
                            <i class="bi bi-house text-dark"></i>
                            <a href="userDashBoard.php">Home</a>
                        </li>
                        <li class="breadcrumb-item" aria-current="page">Department Leaves</li>
                    </ol>
                </div>
                <div class="app-body" id="cbody">
                    <div class="row">
                        <div class="col-lg-3 col-sm-4 col-12">
                            <div class="mb-3">
                                <div class="row">
                                    <div class="col-12"><label class="form-label fs-6">Search By :</label></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-3 col-sm-4 col-12 text-center">
                            <div class="mb-3">
                                <div class="row">
                                    <div class="col-3 text-end"><label class="form-label smallText">Name -</label></div>
                                    <div class="col-9">
                                        <select id="select-state" class="form-select removeCorner smallText" onchange="loadUserLeaves(1)">
                                            <option value="0">All users</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-4 col-12 text-center">
                            <div class="mb-3">
                                <div class="row">
                                    <div class="col-3 text-end"><label class="form-label smallText">From Date -</label></div>
                                    <div class="col-9"><input type="date" id="from" class="form-control removeCorner smallText" placeholder="Search by first name" value="" oninput="loadUserLeaves(1)" /></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-4 col-12 text-center">
                            <div class="">
                                <div class="row">
                                    <div class="col-3 text-end"><label class="form-label smallText">To Date -</label></div>
                                    <div class="col-9"><input type="date" id="to" class="form-control removeCorner smallText" placeholder="Search by user position" oninput="loadUserLeaves(1)" value="" /></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-4 col-12 text-center mt-lg-0 mt-3">
                            <div class="">
                                <div class="row">
                                    <div class="col-3 text-end"><label class="form-label smallText">Order By</label></div>
                                    <div class="col-9">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="btnradio" id="exampleRadios1" value="ASC" onchange="loadUserLeaves(1)"/>
                                            <label class="form-check-label smallText" for="exampleRadios1">Date ASC</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="btnradio" id="exampleRadios2" value="DESC" checked onchange="loadUserLeaves(1)"/>
                                            <label class="form-check-label smallText text-start" for="exampleRadios2">Date DESC</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-12 text-center mt-lg-0 mt-3">
                            <div class="mb-3">
                                <div class="row">
                                    <div class="col-3 text-end"><label class="form-label smallText">Leave Status -</label></div>
                                    <div class="col-9">
                                        <select id="status" class="form-select removeCorner smallText" onchange="loadUserLeaves(1)">
                                            <option value="0">All</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-lg-6 text-center">
                            <div class="mb-3">
                                <div class="row">
                                    <div class="col-12 text-lg-start text-end">
                                        <button class="btn btn-danger removeCorner" onclick="clearSearchDataLeave()"><i class="bi bi-x"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-12">
                        <div class="card mb-4">
                            <div class="card-body">
                                <div class="row">
                                    <div class="table-responsive">
                                        <table class="table align-middle table-hover m-0">
                                            <thead>
                                                <tr>
                                                    <th scope="col">No</th>
                                                    <th scope="col">Id</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Leave Date</th>
                                                    <th scope="col">Leave Status</th>
                                                </tr>
                                            </thead>
                                            <tbody id="tableBodyUser">
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-12 text-center">
                                        <div class="card mb-4">
                                            <div class="card-body">
                                                <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group" id="pagicontainer">
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

export default ManageHeadLeaves