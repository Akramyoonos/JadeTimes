import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Usersidebar from '../User/Usersidebar';
import UserAppHeader from '../User/UserAppHeader';

const HeadEmployeesView = () => {
  return (
    <>  
    <Usersidebar/>
    <UserAppHeader/>
    <main class="backgroundColorChange">
   
    <div class="page-wrapper">
     
        <div class="main-container">
            
            <div id="userSideBar"></div>

            <div class="app-container">
               
                <div id="userAppHeader"></div>

                <div class="app-hero-header d-flex align-items-start">
                   
                    <ol class="breadcrumb d-none d-lg-flex align-items-center">
                        <li class="breadcrumb-item">
                            <i class="bi bi-house text-dark"></i>
                            <a href="userDashBoard.php">Home</a>
                        </li>
                        <li class="breadcrumb-item">Employees</li>
                    </ol>
                </div>

                <div class="app-body">
                    <div class="row">
                       
                        <div class="col-lg-4 col-sm-6 col-12">
                            <div class="card mb-4 rounded-5">
                                <div class="card-body">
                                    <div class="d-flex align-items-center flex-column">
                                        <div class="mb-3">
                                            <img src="assets/img/defaultProfileImage.png" 
                                                 class="img-6x rounded-circle" 
                                                 alt="Profile Image"/>
                                        </div>
                                        <h5 class="mb-3">John Doe</h5>
                                        <p><i class="bi bi-envelope-at"></i> john@example.com</p>
                                        <p><i class="bi bi-telephone-outbound"></i> +1234567890</p>
                                        <div class="mb-3">
                                            <span class="badge bg-info">Position</span>
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

export default HeadEmployeesView