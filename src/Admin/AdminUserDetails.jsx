import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const AdminUserDetails = () => {
  return (
    <main class="backgroundColorChange">
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
                            <a href="ManageUser.php">Manage User</a>
                        </li>
                        <li class="breadcrumb-item" aria-current="page">User Profile Single View</li>
                    </ol>
                </div>

                <div class="app-body smoothScroll" id="cbody">
                    <div class="row">
                        <div class="col-xxl-12">
                            <div class="card mb-4">
                                <div class="card-body">
                                    <div class="custom-tabs-container">
                                        <ul class="nav nav-tabs justify-content-end" id="customTab5" role="tablist">
                                            <li class="nav-item" role="presentation">
                                                <a class="nav-link active" id="tab-oneAAAA" data-bs-toggle="tab" href="#oneAAAA" role="tab" aria-controls="oneAAAA" aria-selected="true">
                                                    <span class="badge bg-succes backgroundColorChange">Profile</span>
                                                </a>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <a class="nav-link" id="tab-task" data-bs-toggle="tab" href="#task" role="tab" aria-controls="task" aria-selected="false">
                                                    <span class="badge bg-info">User Task</span>
                                                </a>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <a class="nav-link" id="tab-twoAAAA" data-bs-toggle="tab" href="#twoAAAA" role="tab" aria-controls="twoAAAA" aria-selected="false">
                                                    <span class="badge bg-danger">Password</span>
                                                </a>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <a class="nav-link" id="tab-threeAAAA" data-bs-toggle="tab" href="#threeAAAA" role="tab" aria-controls="threeAAAA" aria-selected="false">
                                                    <span class="badge bg-primary">Change Email</span>
                                                </a>
                                            </li>
                                        </ul>

                                        <div class="tab-content" id="customTabContent">
                                            <div class="tab-pane fade show active" id="oneAAAA" role="tabpanel">
                                                <div class="row">
                                                    <div class="col-12 col-md-12 col-xl-4">
                                                        <div class="card mb-4 bg-secondary">
                                                            <div class="card-body d-flex align-items-center p-0">
                                                                <div class="p-4">
                                                                    <i class="bi bi-pie-chart fs-1 lh-1 text-dark"></i>
                                                                </div>
                                                                <div class="py-4">
                                                                    <h5 class="text-white fw-light m-0">Attendance</h5>
                                                                    <h1 class="m-0">0 days</h1>
                                                                </div>
                                                                <span class="badge backgroundColorChange position-absolute top-0 end-0 m-3">Total</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-md-12 col-xl-4">
                                                        <div class="card mb-4 bg-danger-subtle">
                                                            <div class="card-body d-flex align-items-center p-0">
                                                                <div class="p-4">
                                                                    <i class="bi bi-sticky fs-1 lh-1 text-dark"></i>
                                                                </div>
                                                                <div class="py-4">
                                                                    <h5 class="text-secondary fw-light m-0">Total Leaves</h5>
                                                                    <h1 class="m-0" id="count4">0</h1>
                                                                </div>
                                                                <span class="badge backgroundColorChange position-absolute top-0 end-0 m-3">All</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-md-12 col-xl-4">
                                                        <div class="card mb-4 bg-info-subtle">
                                                            <div class="card-body d-flex align-items-center p-0">
                                                                <div class="p-4">
                                                                    <i class="bi bi-sticky fs-1 lh-1 text-dark"></i>
                                                                </div>
                                                                <div class="py-4">
                                                                    <h5 class="text-secondary fw-light m-0">Remaining Leaves</h5>
                                                                    <h1 class="m-0" id="count4">0</h1>
                                                                </div>
                                                                <span class="badge backgroundColorChange position-absolute top-0 end-0 m-3">2023-10</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-xxl-12">
                                                        <div class="card mb-4">
                                                            <div class="card-body">
                                                                <div class="row">
                                                                    <div class="col-12 mb-3">
                                                                        <div class="alert alert-danger d-none" id="infoMessage" role="alert"></div>
                                                                    </div>
                                                                    <div class="col-12">
                                                                        <div class="form-check form-switch">
                                                                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onchange="changeTheUserStatus()" />
                                                                            <label class="form-check-label" for="flexSwitchCheckChecked">User Status</label>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-12 text-center">
                                                                        <label class="form-label mt-2 fs-6">Profile Image</label>
                                                                    </div>
                                                                    <div class="col-12">
                                                                        <div class="card mb-4">
                                                                            <div class="card-body">
                                                                                <div class="row">
                                                                                    <div class="col-sm-12 text-center">
                                                                                        <img src="assets/img/defaultProfileImage.png" class="img-fluid rounded-2 imageSize" id="view1" alt="" />
                                                                                    </div>
                                                                                    <div class="col-sm-12 text-center mt-1">
                                                                                        <label for="formFile" class="btn btn-primary removeCorner" onclick="changeImg()">+</label>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-3 col-sm-4 col-12">
                                                                        <div class="mb-3">
                                                                            <label class="form-label">Surname</label>
                                                                            <input type="text" id="sname" class="form-control removeCorner" placeholder="Enter Surname" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-3 col-sm-4 col-12">
                                                                        <div class="mb-3">
                                                                            <label class="form-label">First Name</label>
                                                                            <input type="text" id="fname" class="form-control removeCorner" placeholder="Enter First Name" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-3 col-sm-4 col-12">
                                                                        <div class="mb-3">
                                                                            <label class="form-label">Middle Name</label>
                                                                            <input type="text" id="mname" class="form-control removeCorner" placeholder="Enter Middle Name" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-3 col-sm-4 col-12">
                                                                        <div class="mb-3">
                                                                            <label class="form-label">Last Name</label>
                                                                            <input type="text" id="lname" class="form-control removeCorner" placeholder="Enter Last Name" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-12">
                                                                        <hr/>
                                                                    </div>
                                                                    <div class="col-lg-3 col-sm-4 col-12">
                                                                        <div class="mb-3">
                                                                            <label class="form-label">Phone</label>
                                                                            <input type="text" id="mobile" class="form-control removeCorner" placeholder="Enter phone number" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-3 col-sm-4 col-12">
                                                                        <div class="mb-3">
                                                                            <label class="form-label">NIC No/Passport No/Driving License No</label>
                                                                            <input type="text" id="nic" class="form-control removeCorner" placeholder="national ID" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-3 col-sm-4 col-12">
                                                                        <div class="mb-3">
                                                                            <label class="form-label">Date Of Birth</label>
                                                                            <input type="date" id="dob" class="form-control removeCorner" placeholder="date of birth" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-3 col-sm-4 col-12">
                                                                        <div class="mb-3">
                                                                            <label class="form-label">Gender</label>
                                                                            <select class="form-select removeCorner" id="gender">
                                                                                <option value="0">Select</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-12">
                                                                        <hr/>
                                                                        <label class="form-label mt-2 fs-6">Address</label>
                                                                    </div>
                                                                    <div class="col-lg-3 col-sm-4 col-12">
                                                                        <div class="mb-3">
                                                                            <label class="form-label">No</label>
                                                                            <input type="text" id="no" class="form-control removeCorner" placeholder="Enter no" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-3 col-sm-4 col-12">
                                                                        <div class="mb-3">
                                                                            <label class="form-label">Line 1</label>
                                                                            <input type="text" id="line1" class="form-control removeCorner" placeholder="Enter Line 1" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-3 col-sm-4 col-12">
                                                                        <div class="mb-3">
                                                                            <label class="form-label">Line 2</label>
                                                                            <input type="text" id="line2" class="form-control removeCorner" placeholder="Enter Line 2" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-3 col-sm-4 col-12">
                                                                        <div class="mb-3">
                                                                            <label class="form-label">City</label>
                                                                            <input type="text" id="city" class="form-control removeCorner" placeholder="Enter city" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-3 col-sm-4 col-12">
                                                                        <div class="mb-3">
                                                                            <label class="form-label">Select Country</label>
                                                                            <select class="form-select removeCorner" id="country">
                                                                                <option value="0">Select</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-12">
                                                                        <hr/>
                                                                        <label class="form-label mt-2 fs-6">Jadetimes Id Card</label>
                                                                    </div>
                                                                    <div class="col-12">
                                                                        <div class="card mb-4">
                                                                            <div class="card-body">
                                                                                <div class="row">
                                                                                    <div class="col-sm-12 text-start">
                                                                                        <img src="assets/img/card_icon.png" class="img-fluid imageSize" id="view2" alt="" />
                                                                                        <label for="formFile2" class="btn btn-dark removeCorner" onclick="changeIdImg()">+</label>
                                                                                        <input type="file" id="formFile2" class="d-none" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-12 mt-4">
                                                                        <div class="d-flex gap-2 justify-content-center">
                                                                            <button type="button" onclick="adminUpdateUserProfile()" class="btn btn-dark removeCorner backgroundColorChange w-50">
                                                                                Update User The Profile
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="tab-pane fade" id="task" role="tabpanel">
                                                <div class="row">
                                                    <div class="col-xxl-12">
                                                        <div class="card mb-4">
                                                            <div class="card-header">
                                                                <h5 class="card-title">User Task</h5>
                                                            </div>
                                                            <div class="card-body">
                                                                <div class="row">
                                                                    <div class="col-12 mb-3">
                                                                        <div class="alert alert-danger d-none" id="infoMessagetask" role="alert"></div>
                                                                    </div>
                                                                    <div class="col-12">
                                                                        <div class="mb-3">
                                                                            <label class="form-label">Task <small>(max characters: 1000)</small></label>
                                                                            <textarea class="form-control removeCorner" id="userTask" placeholder="user Task" rows="10"></textarea>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-12">
                                                                        <button type="button" class="btn btn-info removeCorner" onclick="changeUserTask()">
                                                                            Change the Task
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="tab-pane fade" id="twoAAAA" role="tabpanel">
                                                <div class="row">
                                                    <div class="col-xxl-12">
                                                        <div class="card mb-4">
                                                            <div class="card-header">
                                                                <h5 class="card-title">Password</h5>
                                                            </div>
                                                            <div class="card-body">
                                                                <div class="row">
                                                                    <div class="col-12 mb-3">
                                                                        <div class="alert alert-danger d-none" id="infoMessagePassword" role="alert"></div>
                                                                    </div>
                                                                    <div class="col-lg-3 col-sm-4 col-12">
                                                                        <div class="mb-3">
                                                                            <label class="form-label">Password</label>
                                                                            <input type="text" class="form-control removeCorner" id="oldPass" disabled placeholder="old" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="tab-pane fade" id="threeAAAA" role="tabpanel">
                                                <div class="row">
                                                    <div class="col-12 mb-3">
                                                        <div class="alert alert-danger d-none" id="emailMessage" role="alert"></div>
                                                    </div>
                                                    <div class="col-lg-3 col-sm-4 col-12">
                                                        <div class="mb-3">
                                                            <label class="form-label">Email</label>
                                                            <input type="email" id="email" class="form-control removeCorner" placeholder="Enter email address" disabled />
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-3 col-sm-4 col-12">
                                                        <div class="mb-3">
                                                            <label class="form-label">New Email</label>
                                                            <input type="email" id="newemail" class="form-control removeCorner" placeholder="Enter new email address" />
                                                        </div>
                                                    </div>
                                                    <div class="col-12 mb-3">
                                                        <div class="d-flex gap-2 justify-content-start">
                                                            <button type="button" class="btn btn-danger removeCorner" onclick="updateUserEmail()">
                                                                Update The Email
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

                <div class="app-footer">
                    <span>© 2024 Jadetimes Media LLC. All rights reserved.</span>
                </div>
            </div>
        </div>
    </div>


</main>
  )
}

export default AdminUserDetails