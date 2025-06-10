import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const FeedbackView = () => {
  return (
    <main class="backgroundColorChange" onload="loadUserFeedbackById(0)">
    
    <div class="page-wrapper">
      
        <div class="main-container">
           
            <div class="app-container">
               
                <div class="app-hero-header d-flex align-items-start">
                  
                    <ol class="breadcrumb d-none d-lg-flex align-items-center">
                        <li class="breadcrumb-item">
                            <i class="bi bi-house text-dark"></i>
                            <a href="adminPanel.php">Home</a>
                        </li>
                        <li class="breadcrumb-item">
                            <a href="manageFeedback.php">Manage Feedback</a>
                        </li>
                        <li class="breadcrumb-item" aria-current="page">Feedback View</li>
                    </ol>
                   
                </div>

                <div class="app-body" id="cbody">
                    <div class="col-xxl-12">
                        <div class="card mb-4">
                            <div class="card-body">
                                <div class="row">
                                    <div class="table-responsive">
                                        <table class="table align-middle table-hover m-0">
                                            <thead>
                                                <tr>
                                                    <th scope="col">No</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Date</th>
                                                    <th scope="col">Feedback</th>
                                                    <th scope="col">Rating</th>
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
  )
}

export default FeedbackView