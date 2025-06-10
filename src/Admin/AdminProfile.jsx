import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const AdminProfile = () => {
  return (
    <main class="backgroundColorChange">
    <div class="page-wrapper">
        <div class="main-container">
           
            <div class="app-container">
              
                
                <div class="app-hero-header d-flex align-items-start">
                    <ol class="breadcrumb d-none d-lg-flex align-items-center">
                        <li class="breadcrumb-item">
                            <i class="bi bi-house text-dark"></i>
                            <a href="/AdminPanel">Home</a>
                        </li>
                        <li class="breadcrumb-item">Profile</li>
                    </ol>
                    <div class="ms-auto d-flex flex-row">
                        <div class="d-flex flex-column me-5 text-end">
                            <h3 class="m-0">ADM123</h3>
                        </div>
                    </div>
                </div>

                <div class="app-body smoothScroll" id="cbody">
                    <div class="row justify-content-center">
                        <div class="col-xxl-12">
                            <div class="card mb-4">
                                <div class="card-body">
                                    <div class="row align-items-center">
                                        <div class="col-auto">
                                            <img src="assets/img/iconImg.jpg" class="img-5xx rounded-circle" alt="Profile Image" />
                                        </div>
                                        <div class="col">
                                            <h4 class="m-0">John Doe</h4>
                                            <h6 class="text-primary">IT Department</h6>
                                        </div>
                                        <div class="col-12 bg-light-subtle col-md-auto text-center">
                                            <h5 class="m-0 text-primary">System Administrator</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-xxl-12">
                            <div class="card mb-4">
                                <div class="card-body">
                                    <div class="custom-tabs-container">
                                        <ul class="nav nav-tabs justify-content-end" id="customTab5" role="tablist">
                                            <li class="nav-item">
                                                <a class="nav-link active" id="tab-oneAAAA" data-bs-toggle="tab" href="#oneAAAA">
                                                    <span class="badge bg-succes backgroundColorChange">Profile</span>
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" id="tab-twoAAAA" data-bs-toggle="tab" href="#twoAAAA">
                                                    <span class="badge bg-danger">Password</span>
                                                </a>
                                            </li>
                                        </ul>

                                        <div class="tab-content">
                                            <div class="tab-pane fade show active" id="oneAAAA">
                                                <div class="row">
                                                    <div class="col-xxl-12">
                                                        <div class="card mb-4">
                                                            <div class="card-body">
                                                                <div class="row">
                                                                    <div class="col-lg-3 col-sm-4 col-12">
                                                                        <div class="mb-3">
                                                                            <label class="form-label">Surname</label>
                                                                            <input type="text" class="form-control removeCorner" value="Mr" disabled />
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-3 col-sm-4 col-12">
                                                                        <div class="mb-3">
                                                                            <label class="form-label">First Name</label>
                                                                            <input type="text" class="form-control removeCorner" value="John" disabled />
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-3 col-sm-4 col-12">
                                                                        <div class="mb-3">
                                                                            <label class="form-label">Middle Name</label>
                                                                            <input type="text" class="form-control removeCorner" value="Michael" disabled />
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-3 col-sm-4 col-12">
                                                                        <div class="mb-3">
                                                                            <label class="form-label">Last Name</label>
                                                                            <input type="text" class="form-control removeCorner" value="Doe" disabled />
                                                                        </div>
                                                                    </div>

                                                                    <div class="col-12"><hr/></div>

                                                                    <div class="col-lg-3 col-sm-4 col-12">
                                                                        <div class="mb-3">
                                                                            <label class="form-label">Email</label>
                                                                            <input type="email" class="form-control removeCorner" value="john.doe@example.com" disabled />
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-3 col-sm-4 col-12">
                                                                        <div class="mb-3">
                                                                            <label class="form-label">Phone</label>
                                                                            <input type="text" class="form-control removeCorner" value="+1 555-1234" disabled />
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-3 col-sm-4 col-12">
                                                                        <div class="mb-3">
                                                                            <label class="form-label">NIC No</label>
                                                                            <input type="text" class="form-control removeCorner" value="123456789" disabled />
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-3 col-sm-4 col-12">
                                                                        <div class="mb-3">
                                                                            <label class="form-label">Date Of Birth</label>
                                                                            <input type="date" class="form-control removeCorner" value="1990-01-01" disabled />
                                                                        </div>
                                                                    </div>

                                                                    <div class="col-lg-3 col-sm-4 col-12">
                                                                        <div class="mb-3">
                                                                            <label class="form-label">Gender</label>
                                                                            <select class="form-select removeCorner" disabled>
                                                                                <option value="1" selected>Male</option>
                                                                                <option value="2">Female</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>

                                                                    <div class="col-12"><hr/></div>

                                                                    <div class="col-lg-3 col-sm-4 col-12">
                                                                        <div class="mb-3">
                                                                            <label class="form-label">Department</label>
                                                                            <input type="text" class="form-control removeCorner" value="IT Department" disabled />
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-3 col-sm-4 col-12">
                                                                        <div class="mb-3">
                                                                            <label class="form-label">Position</label>
                                                                            <input type="text" class="form-control removeCorner" value="System Admin" disabled />
                                                                        </div>
                                                                    </div>

                                                                    <div class="col-12"><hr/></div>

                                                                    <div class="col-lg-3 col-sm-4 col-12">
                                                                        <div class="mb-3">
                                                                            <label class="form-label">No</label>
                                                                            <input type="text" class="form-control removeCorner" value="123" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-3 col-sm-4 col-12">
                                                                        <div class="mb-3">
                                                                            <label class="form-label">Line 1</label>
                                                                            <input type="text" class="form-control removeCorner" value="Main Street" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-3 col-sm-4 col-12">
                                                                        <div class="mb-3">
                                                                            <label class="form-label">Line 2</label>
                                                                            <input type="text" class="form-control removeCorner" value="Suite 456" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-3 col-sm-4 col-12">
                                                                        <div class="mb-3">
                                                                            <label class="form-label">City</label>
                                                                            <input type="text" class="form-control removeCorner" value="New York" />
                                                                        </div>
                                                                    </div>

                                                                    <div class="col-12 mt-4">
                                                                        <div class="d-flex gap-2 justify-content-center">
                                                                            <button type="button" class="btn btn-dark removeCorner backgroundColorChange w-50">
                                                                                Update Profile
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="tab-pane fade" id="twoAAAA">
                                                <div class="row">
                                                    <div class="col-xxl-12">
                                                        <div class="card mb-4">
                                                            <div class="card-body">
                                                                <div class="row">
                                                                    <div class="col-lg-3 col-sm-4 col-12">
                                                                        <div class="mb-3">
                                                                            <label class="form-label">Old Password</label>
                                                                            <input type="password" class="form-control removeCorner" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-3 col-sm-4 col-12">
                                                                        <div class="mb-3">
                                                                            <label class="form-label">New Password</label>
                                                                            <input type="password" class="form-control removeCorner" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-lg-3 col-sm-4 col-12">
                                                                        <div class="mb-3">
                                                                            <label class="form-label">Repeat Password</label>
                                                                            <input type="password" class="form-control removeCorner" />
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-12">
                                                                        <button type="button" class="btn btn-danger removeCorner">
                                                                            Update Password
                                                                        </button>
                                                                        <a class="btn btn-dark backgroundColorChange removeCorner" href="#">
                                                                            Forgot Password?
                                                                        </a>
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
                </div>
                
                <div class="app-footer">
                    <span>© 2024 Your Company Name. All rights reserved.</span>
                </div>
            </div>
        </div>
    </div>


</main>
  )
}

export default AdminProfile