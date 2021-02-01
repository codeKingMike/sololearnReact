import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'
import 'bootstrap/dist/css/bootstrap.css';



function Greeting() {
  return <section>
  <header id="mainPageHeader">
      <div id="secHead">
         <div id="mainHeader">
          <nav className="navbar navbar-light bg-transparent">
            <div className="pos-f-t">
<div className="collapse" id="navbarToggleExternalContent">
<div className="bg-dark p-4">
<ul className="nav justify-content-end">
                <li className="nav-item">
                <button className="nav-link btn btn-md mr-3 active" href="#">Courses</button>
                  
                </li>
                <li className="nav-item">
                  <button className="nav-link btn btn-md mr-3" href="#">Code Playground</button>
                </li>
                <li className="nav-item">
                  <button className="nav-link btn btn-md mr-3" href="#">Discuss</button>
                </li>
                <li className="nav-item">
                  <button className="nav-link btn btn-md mr-3" href="#">Top Learners</button>
                </li>
              <li className="nav-item">
                  <button className="nav-link btn btn-md mr-3" href="#">Blog</button>
                </li>
              <li className="nav-item">
                  <button className="nav-link btn btn-md mr-3 signIn" href="#">Sign In</button>
                </li>
              </ul>
</div>
</div>
{/* 
<nav className="navbar navbar-dark bg-transparent">
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>
</nav>
*/}
        <div className="mainLinks">
          <div className="row">
            <div className="col-lg-2">
                <button className="navbar-brand btn btn-md" href="#"><h1>Sololearn</h1></button>
            </div>
            <div className="col-lg-10">
<ul className="nav mainNav justify-content-end">
                <li className="nav-item">
                  <button className="nav-link btn btn-md mr-3 active" href="#">Courses</button>
                </li>
                <li className="nav-item">
                  <button className="nav-link btn btn-md mr-3" href="#">Code Playground</button>
                </li>
                <li className="nav-item">
                  <button className="nav-link btn btn-md mr-3" href="#">Discuss</button>
                </li>
                <li className="nav-item">
                  <button className="nav-link btn btn-md mr-3" href="#">Top Learners</button>
                </li>
              <li className="nav-item">
                  <button className="nav-link btn btn-md mr-3" href="#">Blog</button>
                </li>
              <li className="nav-item">
                  <button className="nav-link btn btn-md mr-3 signIn" href="#">Sign In</button>
                </li>
              </ul>
            </div>
          </div>
        </div>

          

                              
          </div>

          <div className="headingText">
              <h1>Join the largest community of mobile code learners today
</h1>
          <h5 className="middleText">Learning programming can be fun!</h5>
          <button className="btn btn-lg" href="#">Start Learning Now</button>
          </div>
          

      </nav> 
      </div>
      
  </div>
</header>
</section>
}

ReactDOM.render(<Greeting />, document.getElementById('root'));
