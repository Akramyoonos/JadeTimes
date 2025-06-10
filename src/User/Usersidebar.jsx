import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../css/main.css";

const Usersidebar = () => {
  return (
<> 
<nav id="sidebar" className="sidebar-wrapper backgroundColorChange">

	<div className="app-brand p-4 mt-lg-0 mt-5">
		<a href="/UserDashBoard">
			<img src="/src/assets/img/darkLogo.png" style={{ height: "60px",width: "auto"}} alt="jadetimes" />
		</a>
	</div>

	<div className="sidebarMenuScroll">
		<ul className="sidebar-menu">

			<li className="current-page">
				<a href="/UserDashBoard">
					<i className="bi bi-pie-chart"></i>
					<span className="menu-text">Dashboard</span>
				</a>
			</li>


			<li className="">
				<a href="/ContributorsArticle">
					<i className="bi bi-journal-bookmark"></i>
					<span className="menu-text">My Article</span>
				</a>
			</li>
			<li className="">
				<a href="/Reports">
					<i className="bi bi-flag"></i>
					<span className="menu-text">Report</span>
				</a>
			</li>

			<li className="">
				<a href="/UserAttendence">
					<i className="bi bi-building"></i>
					<span className="menu-text">Calender/Attendence</span>
				</a>
			</li>
			<li className="">
				<a href="/UserLeaves">
					<i className="bi bi-calendar2-x"></i>
					<span className="menu-text">Leave Request</span>
				</a>
			</li>

			<li className="">
				<a href="/UserProfile">
					<i className="bi bi-person-square"></i>
					<span className="menu-text">My Profile</span>
				</a>
			</li>

	        {/* <li>
				<hr/>
			</li> */}
			
			
			<li className="">
				<a href="/HeadEmployeesView">
					<i className="bi bi-building"></i>
					<span className="menu-text">Department Employees</span>
				</a>
			</li>
			<li className="">
				<a href="/HeadmanageArticles">
					<i className="bi bi-journal-bookmark"></i>
					<span className="menu-text">Articles</span>
				</a>
			</li>
			<li className="">
				<a href="/HeadAttendence">
					<i className="bi bi-building"></i>
					<span className="menu-text">Department Attendence</span>
				</a>
			</li>
			<li className="">
				<a href="/ManageHeadLeaves">
					<i className="bi bi-building"></i>
					<span className="menu-text">Department Leaves</span>
				</a>
			</li>
		</ul>
	</div>

</nav>

</>
  )
}

export default Usersidebar