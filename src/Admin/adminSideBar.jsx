import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const AdminSideBar = () => {
  return (
<>    
<nav id="sidebar" className="sidebar-wrapper backgroundColorChange">

    <div className="app-brand p-4 mt-lg-0 mt-5">
        <a href="/AdminPanel">
            <img src="/src/assets/img/darkLogo.png" style={{ height: "60px",width: "auto"}} alt="Bootstrap Gallery" />
        </a>
    </div>

    <div className="sidebarMenuScroll">
        <ul className="sidebar-menu">
     
            <li className="active current-page">
                <a href="/AdminPanel">
                    <i className="bi bi-pie-chart"></i>
                    <span className="menu-text">Dashboard</span>
                </a>
            </li>

            <li className="">
                <a href="/ManageUser">
                    <i className="bi bi-person-video2"></i>
                    <span className="menu-text">Manage Users</span>
                </a>
            </li>

            
            <li className="">
                <a href="/ManageAttendence">
                    <i className="bi bi-building-fill-gear"></i>
                    <span className="menu-text">Manage Attendance</span>
                </a>
            </li>

            <li className="">
                <a href="/ManageArticles">
                    <i className="bi bi-journal-bookmark"></i>
                    <span className="menu-text">Articles</span>
                </a>
            </li>

          
            <li className="">
                <a href="/ManageLeaves">
                    <i className="bi bi-calendar2-date"></i>
                    <span className="menu-text">Manage Leaves</span>
                </a>
            </li>

            <li className="">
                <a href="/ManageReports">
                    <i className="bi bi-flag"></i>
                    <span className="menu-text">
                        Manage Reports
                   
                        <span className="badge text-bg-secondary">0</span>
                    </span>
                </a>
            </li>

          
            <li className="">
                <a href="/ManageStaff">
                    <i className="bi bi-bar-chart-steps"></i>
                    <span className="menu-text">Permanent Staff</span>
                </a>
            </li>

         
            <li className="">
                <a href="/ManagePositions">
                    <i className="bi bi-bar-chart-steps"></i>
                    <span className="menu-text">Manage Positions</span>
                </a>
            </li>

            {/* <li>
                <hr />
            </li> */}

         
            <li className="">
                <a href="/AdminAttendence">
                    <i className="bi bi-building"></i>
                    <span className="menu-text">My Attendance</span>
                </a>
            </li>

            <li className="">
                <a href="/AdminLeaves">
                    <i className="bi bi-calendar2-x"></i>
                    <span className="menu-text">My Leaves</span>
                </a>
            </li>

            <li className="">
                <a href="/ManageFeedback">
                    <i className="bi bi-building"></i>
                    <span className="menu-text">Manage Feedback</span>
                </a>
            </li>

          
            <li className="">
                <a href="/">
                    <i className="bi bi-person-square"></i>
                    <span className="menu-text">My Profile</span>
                </a>
            </li>

        </ul>
    </div>
</nav>

    </>
  )
}

export default AdminSideBar