import React from 'react'
import { Link } from 'react-router-dom';
import '../css/main.css';
import '../Login-pages/UserLogin.css'
import '../Login-pages/AdminLogin'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';

const ForgotPassword = () => {
  return (
 
    <main className="bg-white">
	<div className="container ">
	    
		<div className="row justify-content-center align-content-center vh-100">
			<div className="col-xl-4 col-lg-5 col-sm-12 col-12">

				<div className="border border-light p-4 mt-5 removeCorner">
					<div className="login-form">

						<div className="row">
							<div className="alert alert-danger d-none" id="infoMessage" role="alert">
							</div>
							<div className="col-12 " id="reqbox">
							    <div className="row">
							        <a href="/" className="mb-4  text-center">
									<img src="/src/assets/img/logoDark.jpg" style={ {height: "80px",width: "auto"}} className="img-fluid login-logo" alt="logo" />
								</a>
							    </div>
								
								<h6 className="fw-light mb-4 lh-2">
									In order to access your account, please enter the email id you
									provided during the registration process.
								</h6>
								<div className="mb-3">
									<div className="row">
										<div className="col-12">
											<div className="row">
												<div className="col-12">
													<label className="form-label">Your Email</label>
												</div>
												<div className="col-9 ps-4 pe-3">
<div className="row">
    <input type="text" id="forgotEmail" className="form-control removeCorner" placeholder="Enter your email" />
</div>
    	

												
												</div>
												<div className="col-3">
												    <div className="row pe-2">
												        	<button onclick={getVerificationCode} className="btn smallText btn-lg   btn-dark backgroundColorChange removeCorner">
														Request
													</button>
												    </div>
												
												</div>
											</div>


										</div>



									</div>



								</div>

							</div>

							<div className="col-12 d-none" id="refbox">
								<div className="row">
									<div className="col-12">
										<label className="form-label">Reference code</label>
										<input type="text" id="frefcode" className="form-control removeCorner" placeholder="reference code" />

										<hr/>
									</div>
									<div className="col-12">
										<label className="form-label">New Password</label>
										<input type="text" id="fnewPassword" className="form-control removeCorner" placeholder="Enter the Password" />
									</div>
									<div className="col-12">
										<label className="form-label">Repeat the Password</label>
										<input type="text" id="frepPassword" className="form-control removeCorner" placeholder="Repeat the Password" />
									</div>
									<div className="col-12 mt-3 ">
									    
										<button className="btn w-100 smallText btn-lg  btn-dark backgroundColorChange removeCorner" 
										onclick={recoverAndChangeThePassword} >
											Recover
										</button>
									</div>
								</div>

							</div>
							<div className="col-12">
								<div className="row">

									<div className="col-6">
										<Link to="/UserLogin" className="text-decoration-underline">Go to User LogIn</Link>
									</div>
									<div className="col-6 text-end ">
										<Link to="/AdminLogin" className="text-decoration-underline">Go to Admin Login</Link>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>

		</div>
	</div>
</main>

  )
}

export default ForgotPassword

function getVerificationCode() {

    var forgotEmail = document.getElementById("forgotEmail");
    var msg = document.getElementById("infoMessage");
    if (forgotEmail.value.length == 0) {

        msg.innerHTML = "email is empty";
        msg.classList = "alert alert-danger";

    } else {



        var reqbox = document.getElementById("reqbox");
        var refbox = document.getElementById("refbox");
        var formData = new FormData();
        formData.append("email", forgotEmail.value);

        fetch("sendReferenceCodeToUser.php", {
            method: "POST",
            body: formData,

        }).then(function (resp) {
            return resp.json();

        })
            .then(function (value) {

                if (value.type == "success") {
                    msg.innerHTML = value.message;
                    msg.classList = "alert alert-success";
                    reqbox.classList = "col-12 d-none";
                    refbox.classList = "col-12";


                } else if (value.type == "error") {
                    msg.innerHTML = value.message;
                    msg.classList = "alert alert-danger";

                }

            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

function recoverAndChangeThePassword() {

    var reference = document.getElementById("frefcode");
    var newPassword = document.getElementById("fnewPassword");
    var repeatPassword = document.getElementById("frepPassword");
    var forgotEmail = document.getElementById("forgotEmail");


    var msg = document.getElementById("infoMessage");
    if (reference.value.length == 0) {
        msg.innerHTML = "Reference Code is Empty";
        msg.classList = "alert alert-danger";
    } else if (newPassword.value.length == 0) {
        msg.innerHTML = "Change your password";
        msg.classList = "alert alert-danger";
    } else if (newPassword.value.length < 8 || newPassword.value.length > 12) {
        msg.innerHTML = "New Password must be larger than 8 and smaller than 12 Characters";
        msg.classList = "alert alert-danger";
    } else if (newPassword.value != repeatPassword.value) {
        msg.innerHTML = "repeat the password correctly";
        msg.classList = "alert alert-danger";
    } else {

        var formData = new FormData();
        formData.append("email", forgotEmail.value);
        formData.append("new", newPassword.value);
        formData.append("rep", repeatPassword.value);
        formData.append("reference", reference.value);
        fetch("forgotpasswordoptionProcess.php", {
            method: "POST",
            body: formData,

        }).then(function (resp) {
            return resp.json();

        })
            .then(function (value) {

                if (value.type == "success") {
                    msg.innerHTML = value.message;
                    msg.classList = "alert alert-success";

                    setTimeout(() => {
                        window.location = "forgotPassword.php";
                    }, 2000);

                } else if (value.type == "error") {
                    msg.innerHTML = value.message;
                    msg.classList = "alert alert-danger";

                }

            })
            .catch(function (error) {
                console.log(error);
            });


    }
}