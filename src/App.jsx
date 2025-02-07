import React from 'react'
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import logo from "./assets/images/Logo.avif";
import img from "./assets/images/a2.webp";


const App = () => {
  return (
    <>
    <div>
    <header class="p-3 bg-dark text-white sticky-top">
        <div class="row">
            <div class="col-12 col-sm-12 col-md-4 col-lg-4">
              <button type="button" class="btn btn-danger ms-2 mt-2 d-flex justify-content-start">Subscribe: 49.9/ year</button>
            </div>
            <div class="col-12 col-sm-12 col-md-4 col-lg-4">
              <img class="img-fluid align-content-md-center align-content-sm-center" src={logo} alt="" />
            </div>
            <div class="col-12 col-sm-12 col-md-4 col-lg-4 mt-3">
                <nav>
                    <ul class="list-inline text-md-end text-sm-end">
                        <li class="list-inline-item"><a class="text-white text-decoration-none me-5" href="##">Login</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    <div class="container" >
        <nav class="navbar navbar-expand-lg  ">
            <div class="container-fluid ">
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="nav justify-content-center navbar-collapse">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link active text-primary " aria-current="page" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">News</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Opinion</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Business</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Sports</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Travel</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Culture</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Entertainment</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Innovation</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Political</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Universe</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Fashion</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Health</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Law</a>
                  </li>
                </ul>
              </div>
            </div>
        </nav>
<div class="row mt-3">
    <div class="col-12 col-sm-12 col-md-3 col-lg-3  ">
      <div class="h-70 pt-6 mb-8  border-end border-danger">
        <p class="fs-6">16 hours ago</p>
        <p class="fw-medium">Coca-Cola to sell 40pc stake in Indian bottling arm</p>
    </div>
  </div>
    <div class="col-12 col-sm-12 col-md-3">
      <div class="h-70 pt-6 mb-8  border-end border-danger">
                <p class="fs-6">16 hours ago</p>
                <p class="fw-medium">Why Robots Struggle to Match the Sophistication of Human Hands</p>
    </div>
    </div>
    <div class="col-12 col-sm-12 col-md-3">
      <div class="h-70 pt-6 mb-8  border-end border-danger">
                <p class="fs-6">16 hours ago</p>
                <p class="fw-medium">Champions Shine and Rivalries Ignite on WWE NXT</p>
    </div>
  </div>
    <div class="col-12 col-sm-12 col-md-3">
                <p class="fs-6">16 hours ago</p>
                <p class="fw-medium">Pharrell Williams and Nigo A Celebration of Friendship and</p>
    </div>
    </div>
    <div class="h4 pb-2 mb-4 text-danger border-bottom border-danger">
    </div>
    <div class="row">
    <div class="col-6 col-sm-6 col-md-3 col-lg-3"> 
            <img class="img-fluid h-100 w-100" src={img} alt="" />
    </div>    
    <div class="col-6 col-sm-6 col-md-6 col-lg-6">
                <p class="fs-6"> 8 hours ago | 3 min read</p>
                <p class="fw-bold">Bishat Pankaj</p>
                <h2 class="">Strengthening India-U.S. Relations: Next Modi-Trump Meet Seeks Strategic</h2>
                <p class="fw-normal">Strengthening India-U.S. Relations: Next Modi-Trump Meet Seeks Strategic Expansion</p>
    </div>
      <div class="col-12 col-sm-12 col-md-3 col-lg-3">
        <div class="card"> 
          <img class="img-fluid" src={img} alt="" />
          <div class="card-body">
            <p class="fs-6 pt-lg-3 pt-md-3 pt-sm-3">16 hours ago</p>
            <p>Date: April 17 1999</p>
            <p>This is a big chance 3</p>
          </div>
          </div>
      </div>
    <div class="row pt-2"> 
    <div class="col-6 col-sm-6 col-md-3 col-lg-3">
      <div class="card"> 
      <img class="img-fluid" src={img} alt="" />
      <div class="card-body">
        <p class="fs-6 pt-lg-3 pt-md-3 pt-sm-3">16 hours ago</p>
        <p>Date: April 17 1999</p>
        <p>This is a big chance 3</p>
      </div>
      </div>
    </div>
    <div class="col-6 col-sm-6 col-md-3 col-lg-3 ">
      <div class="card"> 
        <img class="img-fluid" src={img} alt="" />
        <div class="card-body">
          <p class="fs-6 pt-lg-3 pt-md-3 pt-sm-3">16 hours ago</p>
          <p>Date: April 17 1999</p>
          <p>This is a big chance 3</p>
        </div>
        </div>
    </div>
    <div class="col-6 col-sm-6 col-md-3 col-lg-3 " >
      <div class="card"> 
        <img class="img-fluid" src={img} alt="" />
        <div class="card-body">
          <p class="fs-6 pt-lg-3 pt-md-3 pt-sm-3">16 hours ago</p>
          <p>Date: April 17 1999</p>
          <p>This is a big chance 3</p>
        </div>
        </div>
    </div>
    <div class="col-6 col-sm-6 col-md-3 col-lg-3 " >
      <div class="card"> 
        <img class="img-fluid" src={img} alt="" />
        <div class="card-body">
          <p class="fs-6 pt-lg-3 pt-md-3 pt-sm-3">16 hours ago</p>
          <p>Date: April 17 1999</p>
          <p>This is a big chance 3</p>
        </div>
        </div>
    </div>
    </div>
    <div class="pt-4 h5 font-monospace pb-2 mb-4 text-dark fw-bold border-bottom border-danger">
            More News  
    </div>
    <div class="row pt-2"> 
        <div class="col-6 col-sm-6 col-md-3 col-lg-3 ">
          <div class="card"> 
            <img class="img-fluid" src={img} alt="" />
            <div class="card-body">
              <p class="fs-6 pt-lg-3 pt-md-3 pt-sm-3">16 hours ago</p>
              <p>Date: April 17 1999</p>
              <p>This is a big chance 3</p>
            </div>
            </div>
        </div>
        <div class="col-6 col-sm-6 col-md-3 col-lg-3 ">
          <div class="card"> 
            <img class="img-fluid" src={img} alt="" />
            <div class="card-body">
              <p class="fs-6 pt-lg-3 pt-md-3 pt-sm-3">16 hours ago</p>
              <p>Date: April 17 1999</p>
              <p>This is a big chance 3</p>
            </div>
            </div>
        </div>
        <div class="col-6 col-sm-6 col-md-3 col-lg-3 ">
          <div class="card"> 
            <img class="img-fluid" src={img} alt="" />
            <div class="card-body">
              <p class="fs-6 pt-lg-3 pt-md-3 pt-sm-3">16 hours ago</p>
              <p>Date: April 17 1999</p>
              <p>This is a big chance 3</p>
            </div>
            </div>
        </div>
        <div class="col-6 col-sm-6 col-md-3 col-lg-3 "> 
          <div class="card"> 
            <img class="img-fluid" src={img} alt="" />
            <div class="card-body">
              <p class="fs-6 pt-lg-3 pt-md-3 pt-sm-3">16 hours ago</p>
              <p>Date: April 17 1999</p>
              <p>This is a big chance 3</p>
            </div>
            </div>
        </div>
    </div>
</div>
    </div>
    <div class="container bg-white mb-2">
      <div class="row p-3">
        <div class="col-12">
          <h2 class="text-center">Contact Form</h2>
          <form action="">
            <div class="form-group">
              <label for="">E-mail Address</label>
              <input type="email" class="form-control" name="" id="" />
            </div>
            <div class="form-group">
              <label for="">Full Name</label>
              <input type="text" class="form-control" name="" id="" />
            </div>
            <div class="form-group">
              <label for="">Message</label>
              <textarea name="" class="form-control" id=""></textarea>
            </div>
            <button class="btn btn-info my-2 d-grid  col-3 col-sm-3 col-md-2 col-lg-1  mx-auto">Submit</button>
          </form>
        </div>
      </div>
    </div>
<footer class="p-4 bg-dark text-white">
    <div class="row">
        <div class="col-12 col-sm-12 col-md-6 col-lg-6">
            <p class="d-flex pt-3">© 2024 Jadetimes Media LLC. All Rights Reserved</p>
        </div>
        <div class="col-12 col-sm-12 col-md-6 col-lg-6 mt-3  justify-content-md-end">
            <ul class="list-inline">
              <li class="list-inline-item"><a class="text-white text-decoration-none " href="#">Terms & Condition |</a></li>
              <li class="list-inline-item"><a class="text-white text-decoration-none" href="#">About JadeTimes |</a></li>
              <li class="list-inline-item"><a class="text-white text-decoration-none" href="#"> Privacy Policy</a></li>
              <li class="list-inline-item"><a class="text-white text-decoration-none " href="#">Terms & Condition |</a></li>
              <li class="list-inline-item"><a class="text-white text-decoration-none" href="#">About JadeTimes </a></li>
            </ul>
        </div>
    </div>
</footer>
</div>
    
    </>
  )
}

export default App