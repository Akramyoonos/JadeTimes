import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Usersidebar from '../User/Usersidebar';
import UserAppHeader from '../User/UserAppHeader';

const HeadAttendence = () => {
  return (
    <>  
    <Usersidebar/>
    <UserAppHeader/>
    <main class="backgroundColorChange" onload="loadUserAttendanceHead(0)">
    
    <div class="page-wrapper">
        
        <div class="main-container">
            <div class="app-container">
               
                <div class="app-hero-header d-flex align-items-start">
                   
                    <ol class="breadcrumb d-none d-lg-flex align-items-center">
                        <li class="breadcrumb-item">
                            <i class="bi bi-house text-dark"></i>
                            <a href="userDashBoard.php">Home</a>
                        </li>
                        <li class="breadcrumb-item" aria-current="page">Department Attendance</li>
                    </ol>
                 
                </div>

                <div class="app-body" id="cbody">
                    <div class="row">
                        <div class="col-sm-4 offset-sm-4">
                            <div class="row">
                                <div class="col-6">
                                    <div class="card mb-4 bg-success">
                                        <div class="card-body d-flex align-items-center">
                                            <table class="w-100 text-center">
                                                <tr>
                                                    <td><span class="smallText text-white">Marked</span></td>
                                                </tr>
                                                <tr>
                                                    <td><h2 class="m-0 text-white number" id="markedCount">0</h2></td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="card mb-4 backGroundRed">
                                        <div class="card-body d-flex align-items-center">
                                            <table class="w-100 text-center">
                                                <tr>
                                                    <td><span class="smallText text-white">Not Marked</span></td>
                                                </tr>
                                                <tr>
                                                    <td><h2 class="m-0 text-black number text-white" id="notMarkedCount">0</h2></td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

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
                                        <select id="select-state" class="form-select removeCorner smallText" onchange="loadUserAttendanceHead(1)">
                                            <option value="0">All users</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-sm-4 col-12 text-center">
                            <div class="mb-3">
                                <div class="row">
                                    <div class="col-3 text-end"><label class="form-label smallText">Status</label></div>
                                    <div class="col-9">
                                        <select id="markStatus" class="form-select removeCorner smallText" onchange="loadUserAttendanceHead(1)">
                                            <option value="1" selected>All</option>
                                            <option value="2">Marked</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-sm-4 col-12 text-center">
                            <div class="mb-3">
                                <div class="row">
                                    <div class="col-3 text-end"><label class="form-label smallText">From Date -</label></div>
                                    <div class="col-9"><input type="date" id="from" class="form-control removeCorner smallText" oninput="loadUserAttendanceHead(1)" /></div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-sm-4 col-12 text-center">
                            <div class="">
                                <div class="row">
                                    <div class="col-3 text-end"><label class="form-label smallText">To Date -</label></div>
                                    <div class="col-9"><input type="date" id="to" class="form-control removeCorner smallText" oninput="loadUserAttendanceHead(1)" /></div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-sm-4 col-12 text-center">
                            <div class="">
                                <div class="row">
                                    <div class="col-3 text-end"><label class="form-label smallText">Order By</label></div>
                                    <div class="col-9">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="btnradio" id="exampleRadios1" value="ASC" onchange="loadUserAttendanceHead(1)"/>
                                            <label class="form-check-label smallText" for="exampleRadios1">Date ASC</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="btnradio" id="exampleRadios2" value="DESC" checked onchange="loadUserAttendanceHead(1)"/>
                                            <label class="form-check-label smallText text-start" for="exampleRadios2">Date DESC</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 text-center">
                            <div class="mb-3">
                                <div class="row">
                                    <div class="col-12 text-end">
                                        <button class="btn btn-danger removeCorner" onclick="clearSearchDataAttendance()"><i class="bi bi-x"></i></button>
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
                                                    <th scope="col">Date</th>
                                                    <th scope="col">Attendance Status</th>
                                                </tr>
                                            </thead>
                                            <tbody id="tableBodyUser"></tbody>
                                        </table>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-12 text-center">
                                        <div class="card mb-4">
                                            <div class="card-body">
                                                <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group" id="pagicontainer"></div>
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

export default HeadAttendence