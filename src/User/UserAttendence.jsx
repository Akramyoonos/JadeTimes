import React from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../css/boostrap.css";
import "../assets/vendor/Calendar/css/custom.css";
import "../assets/vendor/Calendar/css/main.min.css";
import "../css/main.css";
import "../Login-pages/UserLogin.css";
import Usersidebar from "../User/Usersidebar";
import UserAppHeader from "../User/UserAppHeader";

const UserAttendence = () => {
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
            <Link href="/UserDashBoard">Home</Link>
          </li>
          <li className="breadcrumb-item" aria-current="page">Attendance</li>
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
                      <Link className="nav-link active" id="tab-oneA" data-bs-toggle="tab" href="#oneA" role="tab" aria-controls="oneA" aria-selected="true">
                        <i className="bi bi-building-check text-dark"></i>
                      </Link>
                    </li>
                    <li className="nav-item" role="presentation">
                      <Link className="nav-link" id="tab-twoA" data-bs-toggle="tab" href="#twoA" role="tab" aria-controls="twoA" aria-selected="false">
                        <i className="bi bi-building-add text-dark"></i>
                      </Link>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div className="tab-pane fade show active" id="oneA" role="tabpanel">

                    
                      <div className="row">
                        <div className="col-xxl-12">
                   
                          <div className="card">
                            <div className="card-body">
                              <div id="dayGrid"></div>
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
                              <h5 className="card-title">Mark Attendance</h5>
                            </div>
                            <div className="card-body">
                              <div className="col-12 alert alert-success" id="infoMessage" role="alert">
                                Attendance Already Marked
                              </div>

                             
                              <div className="row" aria-disabled="">
                                <div className="col-12 alert alert-danger d-none" id="infoMessage" role="alert">
                                </div>

                                <div className="col-lg-3 col-sm-4 col-12">
                                  <div className="mb-3">
                                    <label className="form-label">Date</label>
                                    <input type="text" className="form-control removeCorner" id="date" disabled placeholder="Enter Date" value="2023-10-25" />
                                  </div>
                                </div>

                                <div className="col-12">
                                  <div className="mb-3">
                                    <label className="form-label">Articles Completed</label>
                                    <textarea className="form-control removeCorner" id="arti-1" placeholder="Article 1" rows="1"></textarea>
                                    <textarea className="form-control removeCorner my-1" id="arti-2" placeholder="Article 2" rows="1"></textarea>
                                    <textarea className="form-control removeCorner" id="arti-3" placeholder="Article 3" rows="1"></textarea>
                                  </div>
                                </div>

                                <div className="col-sm-6 col-12">
                                  <div className="mb-3">
                                    <label className="form-label">Tasks have Completed <small>(max characters: 1000)</small></label>
                                    <textarea className="form-control removeCorner" id="task" placeholder="Task" rows="10"></textarea>
                                  </div>
                                </div>
                              </div>
                             
                            </div>
                            <div className="card-footer">
                              <div className="d-flex gap-2 justify-content-center">
                                <button type="button" className="btn btn-dark backgroundColorChange removeCorner" disabled >
                                  Mark Attendance
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





export default UserAttendence

$.sidebarMenu = function (menu) {
	var animationSpeed = 300;

	$(menu).on("click", "li a", function (e) {
		var $this = $(this);
		var checkElement = $this.next();

		if (checkElement.is(".treeview-menu") && checkElement.is(":visible")) {
			checkElement.slideUp(animationSpeed, function () {
				checkElement.removeClass("menu-open");
			});
			checkElement.parent("li").removeClass("active");
		}

		//If the menu is not visible
		else if (
			checkElement.is(".treeview-menu") &&
			!checkElement.is(":visible")
		) {
			//Get the parent menu
			var parent = $this.parents("ul").first();
			//Close all open menus within the parent
			var ul = parent.find("ul:visible").slideUp(animationSpeed);
			//Remove the menu-open class from the parent
			ul.removeClass("menu-open");
			//Get the parent li
			var parent_li = $this.parent("li");

			//Open the target menu and add the menu-open class
			checkElement.slideDown(animationSpeed, function () {
				//Add the class active to the parent li
				checkElement.addClass("menu-open");
				parent.find("li.active").removeClass("active");
				parent_li.addClass("active");
			});
		}
		//if this isn't a link, prevent the page from being redirected
		if (checkElement.is(".treeview-menu")) {
			e.preventDefault();
		}
	});
};
$.sidebarMenu($(".sidebar-menu"));

// Custom Sidebar JS
jQuery(function ($) {
	//toggle sidebar
	$("#toggle-sidebar").on("click", function () {
		$(".page-wrapper").toggleClass("toggled");
	});

	// Pin sidebar on click
	$("#pin-sidebar").on("click", function () {
		if ($(".page-wrapper").hasClass("pinned")) {
			// unpin sidebar when hovered
			$(".page-wrapper").removeClass("pinned");
			$("#sidebar").unbind("hover");
		} else {
			$(".page-wrapper").addClass("pinned");
			$("#sidebar").hover(
				function () {
					console.log("mouseenter");
					$(".page-wrapper").addClass("sidebar-hovered");
				},
				function () {
					console.log("mouseout");
					$(".page-wrapper").removeClass("sidebar-hovered");
				}
			);
		}
	});

	// Pinned sidebar
	$(function () {
		$(".page-wrapper").hasClass("pinned");
		$("#sidebar").hover(
			function () {
				console.log("mouseenter");
				$(".page-wrapper").addClass("sidebar-hovered");
			},
			function () {
				console.log("mouseout");
				$(".page-wrapper").removeClass("sidebar-hovered");
			}
		);
	});

	// Toggle sidebar overlay
	$("#overlay").on("click", function () {
		$(".page-wrapper").toggleClass("toggled");
	});

	// Added by Srinu
	$(function () {
		// When the window is resized,
		$(window).resize(function () {
			// When the width and height meet your specific requirements or lower
			if ($(window).width() <= 768) {
				$(".page-wrapper").removeClass("pinned");
			}
		});
		// When the window is resized,
		$(window).resize(function () {
			// When the width and height meet your specific requirements or lower
			if ($(window).width() >= 768) {
				$(".page-wrapper").removeClass("toggled");
			}
		});
	});
});

/***********
***********
***********
	Bootstrap JS 
***********
***********
***********/

// Tooltip
var tooltipTriggerList = [].slice.call(
	document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	return new bootstrap.Tooltip(tooltipTriggerEl);
});

// Popover
var popoverTriggerList = [].slice.call(
	document.querySelectorAll('[data-bs-toggle="popover"]')
);
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
	return new bootstrap.Popover(popoverTriggerEl);
});
