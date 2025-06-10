import React from 'react'
import { Link } from 'react-router-dom';
import '../css/main.css';
import '../Login-pages/AdminLogin.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';

const AdminLogin = () => {
  return (
    <main className="setBackImg">
	
	<div className="container ">
		<div className="row">

		</div>

		<div className="row justify-content-center align-content-center vh-100">


			<div className="col-xl-4 col-lg-5 col-12 align-content-center ">

				<div className="border border-light  p-4 mt-5 bg-white removeCorner">
					<div className="login-form">

						<Link to="/" className="mb-4 d-flex d-block justify-content-center">

							<img src="/src/assets/img/logoDark.jpg" style={{height: "70px",width: "auto"}} className="img-fluid login-logo" alt="Jade Times Admin" />
						</Link>
						<h4 className="fw-semibold mb-4 text-center">Admin Login</h4>
						<div className="alert alert-danger d-none" id="infoMessage" role="alert">
						</div>
						<div className="mb-3">
							<label className="form-label">Email</label>
							<input type="text" className="form-control removeCorner" id="email" placeholder="Enter your email"  />
						</div>
						<div className="mb-3">
							<label className="form-label">Password</label>
							<div className="input-group">
								<input type="password" className="form-control removeCorner" id="password" placeholder="Enter password"  />
								<Link to="#" className="input-group-text removeCorner"  onClick={togglePasswordVisibility} >
									<i className="bi bi-eye"></i>
								</Link>
							</div>
						</div>
						<div className="d-flex align-items-center justify-content-between">
							<div className="form-check m-0">
								<input className="form-check-input" type="checkbox" id="rememberPassword" />
								<label className="form-check-label" htmlFor="rememberPassword">Remember</label>
							</div>
							<Link to="/ForgotPassword" className="text-blue text-decoration-underline">Lost password?</Link>
						</div>
						<div className="d-grid py-3 mt-2">
							<button className="btn btn-lg btn-dark backgroundColorChange removeCorner" onClick={adminSignin} >
								Login
							</button>
						</div>



					</div>
				</div>

			</div>
		</div>
	</div>

	
</main>
  )
}

export default AdminLogin

function adminSignin() {

    let emailField = document.getElementById("email");
    let passwordField = document.getElementById("password");
    let msg = document.getElementById("infoMessage");

    let rememberPassword = document.getElementById("rememberPassword");


    let email = emailField.value;
    let password = passwordField.value;

    if (email.length == 0) {
        msg.classList = "alert alert-danger";
        msg.innerHTML = "Email is Empty";
        emailField.classList = "form-control border-danger";
        passwordField.classList = "form-control";
    } else if (password.length == 0) {
        msg.classList = "alert alert-danger";
        msg.innerHTML = "Password is Empty";
        passwordField.classList = "form-control border-danger";
        emailField.classList = "form-control";

    } else {

        var send = {
            email: email,
            password: password,
            rememberPassword:rememberPassword.checked,
        }

        fetch("http://localhost/Back-end/adminSigninProcess.php", {
            method: "POST",
            headers: {

                "Content-Type": "application/json;charset=UTF-8"
            }, body: JSON.stringify(send),

        })
            .then(function (resp) {

                try {
                    let response = resp.json();
                    return response;
                } catch (error) {
                    msg.classList = "alert alert-danger";
                    msg.innerHTML = "Something wrong please try again bla bla";
                    emailField.classList = "form-control";
                    passwordField.classList = "form-control";
                }

            })
            .then(function (value) {
             
                if (value == "not_admin") {
                    msg.classList = "alert alert-danger";
                    msg.innerHTML = "Incorrect Email or Password";
                    emailField.classList = "form-control";
                    passwordField.classList = "form-control";
                } else if (value == "adminSuccess") {
                    window.location = "adminPanel.php";
                } else {
                    msg.classList = "alert alert-danger";
                    msg.innerHTML = "Something wrong please try again";
                    emailField.classList = "form-control";
                    passwordField.classList = "form-control";
                }

            })
            .catch(function (error) {
                console.log(error);
            });
    }



}



function togglePasswordVisibility() {
    const passwordField = document.getElementById('password');
    const fieldType = passwordField.getAttribute('type');
    if (fieldType === 'password') {
        passwordField.setAttribute('type', 'text');
    } else {
        passwordField.setAttribute('type', 'password');
    }
}