import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Navigator() {
  return (
<div>
<div className="center mb-auto">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand m" href="index.html">
          <Link className='text-decoration-none text-dark' to='/'>
               
            <div className="link-ter-gal d-flex">
              P
              <p className="o" >
                O
              </p>
              STER GAL
            </div>
                </Link>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mt-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link buttons"
                  aria-current="page"
              
                ><Link className='text-decoration-none text-dark' to='/'>
                  Home
                </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active " >
                <Link className='text-decoration-none text-dark' to='/shop'>
                  Shop
                </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" >
                <Link className='text-decoration-none text-dark' to='/about'>
                  About
                </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" >
                <Link className='text-decoration-none text-dark' to='/contact'>
                  Contact
                </Link>
                </a>
              </li>
              <li className="nav-item ms-2">
                <a className="nav-link" href="/login" style={{color:' #FCB08C'}}>
                  <img
                    className="me-3 pb-1"
                    src="/img/icon.svg"
                    alt=""
                  />
                  Login
                </a>
              </li>
              <li className="nav-item ms-2">
                <a className="nav-link" href="#">
                  <img
                    className="me-3 pb-1"
                    src="/img/vector.svg"
                  
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

</div>



    
    )
}

export default Navigator
