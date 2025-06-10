import React from 'react';
import { Link } from 'react-router-dom';
import '../css/main.css'
import '../Login-pages/UserLogin.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const First = () => {
  return (
    <main className="backgroundColorChange setBackImg">
    
    <div className="container vh-100">

        <div className="d-flex justify-content-center align-content-center">
            <div className="row">
                <div className="col-12 mt-lg-5 mt-1 text-center">
                    <img src="/src/assets/img/darkLogo.png" height="100" className="mb-5 mt-5" alt="logo" />
                    
                    <h2 className="mb-5 text-white">User Management System (UMS)</h2>

                </div>
                <div className="col-sm-6 mb-3 mb-sm-0">
                    <div className="card bg-white">
                        <div className="card-body">
                            <h5 className="card-title">User Log In</h5>

                            <Link to="/UserLogin" className="btn btn-dark backgroundColorChange mt-3">User Dashboard</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3">
                    <div className="card bg-white">
                        <div className="card-body">
                            <h5 className="card-title">Admin Log In</h5>

                            <Link to="/AdminLogin" className="btn btn-dark backgroundColorChange mt-3">Admin Dashboard</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row ">
            <div className=" col-12 col-md-10 mb-0 mb-lg-5  col-lg-6 offset-lg-2 fs-6 text-center text-white" style={ {marginBottom:"0px", position: "absolute", bottom: "5px"} }>
               If you encounter any issues with our user management system or have feedback to share, please contact  Jade-times Media at <a className="text-white text-decoration-underline" href="mailto:report@Jadetimes.com">report@Jadetimes.com</a> or <br className="d-lg-none d-block"/> +1 (505) 364-6585.

            </div>
        </div>
        
    </div>
</main>
  )
}

export default First