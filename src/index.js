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
                  <a className="nav-link active" href="courses.html">Courses</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="codePlayground.html">Code Playground</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Discuss</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Top Learners</a>
                </li>
              <li className="nav-item">
                  <a className="nav-link" href="#">Blog</a>
                </li>
              <li className="nav-item">
                  <a className="nav-link signIn" href="#">Sign In1</a>
                </li>
              </ul>
</div>
</div>
<nav className="navbar navbar-dark bg-transparent">
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>
</nav>
          <a className="navbar-brand" href="#"><h1>Sololearn</h1></a>

                              <ul className="nav mainNav justify-content-end">
                <li className="nav-item">
                  <a className="nav-link active" href="courses.html">Courses</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="codePlayground.html">Code Playground</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Discuss</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Top Learners</a>
                </li>
              <li className="nav-item">
                  <a className="nav-link" href="#">Blog</a>
                </li>
              <li className="nav-item">
                  <a className="nav-link signIn" href="#">Sign In</a>
                </li>
              </ul>
          </div>

          <div className="headingText">
              <h1>Join the largest community of mobile code learners today
</h1>
          <h5 className="middleText">Learning programming can be fun!</h5>
          <a className="btn btn-lg" href="courses.html">Start Learning Now</a>
          </div>
          

      </nav> 
      </div>
      
  </div>
</header>
</section>
}

ReactDOM.render(<Greeting />, document.getElementById('root'));
