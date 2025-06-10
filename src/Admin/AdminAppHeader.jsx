import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import '../css/main.css';
import '../Login-pages/AdminLogin.css';
import "../Admin/adminSideBar"

const AdminAppHeader = () => {
  return (
    <>   
    <div className="app-header d-flex align-items-center bg-white">
   
    <div className="d-flex d-lg-none d-md-block">
        <button className="btn btn-outline-dark me-2 toggle-sidebar" id="toggle-sidebar">
            <i className="bi bi-text-indent-left fs-5"></i>
        </button>
        <button className="btn btn-outline-dark me-2 pin-sidebar" id="pin-sidebar">
            <i className="bi bi-text-indent-left fs-5"></i>
        </button>
    </div>
 
    <div className="app-brand-sm d-md-none d-sm-block text-center">
        <a href="adminPanel.php">
            <img src="/src/assets/img/logoDark.jpg" className="logo" alt="Bootstrap Gallery"/>
        </a>
    </div>

    <div className="header-actions">
        <div className="dropdown ms-3">
            <a id="userSettings" className="dropdown-toggle d-flex py-2 align-items-center ps-3 border-start" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="/src/assets/img/defaultProfileImage.png" className="rounded-circle img-3x" alt="Bootstrap Gallery" />
            </a>
            <div className="dropdown-menu dropdown-menu-end shadow">
                <a className="dropdown-item d-flex align-items-center" href="adminProfile.php">
                    <i className="bi bi-person fs-4 me-2"></i>Profile
                </a>
                <a className="dropdown-item d-flex align-items-center" href="adminLogOutProcess.php">
                    <i className="bi bi-escape fs-4 me-2"></i>Logout
                </a>
            </div>
        </div>
    </div>
    
</div>
</>
  )
}

export default AdminAppHeader