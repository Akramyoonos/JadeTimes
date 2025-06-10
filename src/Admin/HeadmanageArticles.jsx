import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Usersidebar from '../User/Usersidebar';
import UserAppHeader from '../User/UserAppHeader';

const HeadmanageArticles = () => {
  return (
    <>
    <Usersidebar/>
    <UserAppHeader/>

    <main className="backgroundColorChange" onload="loadUserArticles(0)">
   
    <div className="page-wrapper">
       
        <div className="main-container">
          
            <div id="userSideBar"></div>

            
            <div className="app-container">
          
                <div id="userAppHeader"></div>

                <div className="app-hero-header d-flex align-items-start">
                 
                    <ol className="breadcrumb d-none d-lg-flex align-items-center">
                        <li className="breadcrumb-item">
                            <i className="bi bi-house text-dark"></i>
                            <a href="adminPanel.php">Home</a>
                        </li>
                        <li className="breadcrumb-item" aria-current="page">Manage Leaves</li>
                    </ol>
                  
                </div>
  
                <div className="app-body" id="cbody">
                  
                    <div className="row">
                        <div className="col-lg-3 col-sm-4 col-12">
                            <div className="mb-3">
                                <label className="form-label fs-6">Search By :</label>
                            </div>
                        </div>
                    </div>

                  
                    <div className="row">
                    
                        <div className="col-lg-3 col-sm-4 col-12 text-center">
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col-3 text-end">
                                        <label className="form-label smallText">Name -</label>
                                    </div>
                                    <div className="col-9">
                                        <select id="select-state" className="form-select removeCorner smallText" onchange="loadUserArticles(1)">
                                            <option value="0">All users</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-4 col-12 text-center">
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col-3 text-end">
                                        <label className="form-label smallText">From Date -</label>
                                    </div>
                                    <div className="col-9">
                                        <input type="date" id="from" className="form-control removeCorner smallText" oninput="loadUserArticles(1)" />
                                    </div>
                                </div>
                            </div>
                        </div>

                       
                        <div className="col-lg-3 col-sm-4 col-12 text-center">
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col-3 text-end">
                                        <label className="form-label smallText">To Date -</label>
                                    </div>
                                    <div className="col-9">
                                        <input type="date" id="to" className="form-control removeCorner smallText" oninput="loadUserArticles(1)" />
                                    </div>
                                </div>
                            </div>
                        </div>

                       
                        <div className="col-lg-3 col-sm-4 col-12 text-center mt-lg-0 mt-3">
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col-3 text-end">
                                        <label className="form-label smallText">Order By</label>
                                    </div>
                                    <div className="col-9">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="btnradio" id="exampleRadios1" value="ASC" onchange="loadUserArticles(1)"/>
                                            <label className="form-check-label smallText" for="exampleRadios1">Date ASC</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="btnradio" id="exampleRadios2" value="DESC" checked onchange="loadUserArticles(1)"/>
                                            <label className="form-check-label smallText" for="exampleRadios2">Date DESC</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-12 text-center mt-lg-0 mt-3">
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col-3 text-end">
                                        <label className="form-label smallText">Type -</label>
                                    </div>
                                    <div className="col-9">
                                        <select id="status" className="form-select removeCorner smallText" onchange="loadUserArticles(1)">
                                            <option value="0">All</option>
                                            <option value="1">Commercial</option>
                                            <option value="2">None Commercial</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6 text-center">
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col-12 text-lg-start text-end">
                                        <button className="btn btn-danger removeCorner"><i className="bi bi-x"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                   
                    <div className="col-xxl-12">
                        <div className="card mb-4">
                            <div className="card-body">
                                <div className="row">
                                    <div className="table-responsive">
                                        <table className="table align-middle table-hover m-0">
                                            <thead>
                                                <tr>
                                                    <th scope="col">No</th>
                                                    <th scope="col">Id</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col" className="w-25">Title</th>
                                                    <th scope="col">Date</th>
                                                    <th scope="col">Submit Date</th>
                                                    <th scope="col">Type</th>
                                                </tr>
                                            </thead>
                                            <tbody id="tableBodyUser"></tbody>
                                        </table>
                                    </div>
                                </div>
                           
                                <div className="row mt-3">
                                    <div className="col-12 text-center">
                                        <div className="card mb-4">
                                            <div className="card-body">
                                                <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group" id="pagicontainer"></div>
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

export default HeadmanageArticles