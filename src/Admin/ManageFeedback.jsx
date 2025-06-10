import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import '../css/main.css';
import '../Login-pages/AdminLogin.css';
import "../Admin/adminSideBar";

const ManageFeedback = () => {
  return (
    <main class="backgroundColorChange" onload="userFeedBackSectionLoadProcess(0)">
	<div class="page-wrapper">
		<div class="main-container">
			
			
			<div class="app-container">
				

				<div class="app-hero-header d-flex align-items-start">
					<ol class="breadcrumb d-none d-lg-flex align-items-center">
						<li class="breadcrumb-item">
							<i class="bi bi-house text-dark"></i>
							<a href="/AdminPanel">Home</a>
						</li>
						<li class="breadcrumb-item">Manage Feedback</li>
					</ol>
				</div>

				<div class="app-body" id="cbody">
					<div class="row">
						<div class="col-12">
							<p class="d-inline-flex gap-1">
								<button type="button" class="btn btn-dark backgroundColorChange removeCorner" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
									<i class="bi bi-building-add"></i>
								</button>
							</p>
						</div>

						<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" tabindex="-1">
							<div class="modal-dialog">
								<div class="modal-content">
									<div class="modal-header">
										<h5 class="modal-title">Create a New Feedback</h5>
										<button type="button" class="btn-close" data-bs-dismiss="modal"></button>
									</div>
									<div class="modal-body">
										<div class="row">
											<div class="col-12">
												<div class="alert alert-danger d-none" id="infoMessage"></div>
											</div>
											<div class="col-12">
												<div class="mb-3">
													<label class="form-label">Months</label>
													<input type="number" id="months" class="form-control removeCorner" value="0"/>
												</div>
											</div>
											<div class="col-12">
												<div class="mb-3">
													<label class="form-label">Feedback Request Message</label>
													<textarea class="form-control removeCorner" id="feedback" rows="4"></textarea>
												</div>
											</div>
										</div>
									</div>
									<div class="modal-footer">
										<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
										<button type="button" class="btn btn-dark backgroundColorChange" onclick="addNewFeedback()">Submit</button>
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
													<th>No</th>
													<th>For what month employees</th>
													<th>Date</th>
													<th>Request Message</th>
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
												<div class="btn-group" role="group" id="pagicontainer"></div>
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

export default ManageFeedback