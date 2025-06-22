import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">Fashion Brand</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav my-auto ms-auto mb-2 mb-lg-0" style={{ gap: "30px"}}>
        <li className="nav-item">
          <Link className="nav-Link active" aria-current="page" to="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-Link" to="#">Shop</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-Link" to="#">About</Link>
        </li>
      </ul>
        
        <ul className="ms-auto"  style={{margin: "auto 0", display: 'flex', gap:'40px'}}>
          <li>
            <a href=""><i class="fa-regular fa-user fs-5"></i></a>
          </li>
          <li>
            <a href=""><i class="fa-solid fa-cart-shopping fs-5"></i></a>
          </li>
          <li>
            <a href=""><i class="fa-solid fa-right-to-bracket fs-5"></i></a>
          </li>
        </ul>
    </div>
  </div>
</nav>
  );
};

export default Navbar;