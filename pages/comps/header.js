import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


export default function header() {
  return (
    <>
<div className="navbackground">
  <header className="header_section">
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg custom_nav-container pt-3">
      <Link className="navbar-brand" href="/" > <span>Esigned</span></Link>
        {/* <a className="navbar-brand" href="/">
          <span>Esigned</span>
        </a> */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
            <ul className="navbar-nav  ">
              <li className="nav-item active">
                {/* <a className="nav-link" href="index.html">
                  Home <span className="sr-only"></span>
                </a> */}
                <Link className="nav-link" href="/" > Home</Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="about.html">
                  {" "}
                  About{" "}
                </a> */}
                <Link className="nav-link" href="/about" > About</Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="do.html">wahtwedo
                  {" "}
                  What we do{" "}
                </a> */}
                <Link className="nav-link" href="/wahtwedo" > What We Do</Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="portfolio.html">
                  {" "}
                  Portfolio{" "}
                </a> */}
                <Link className="nav-link" href="/portfolio" > Portfolio</Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="contact.html">
                  Contact us
                </a> */}
                <Link className="nav-link" href="/contact" > Contact Us</Link>
              </li>
            </ul>
            <div className="user_option">
              <a href="">
                <Image src="/Images/user.png" alt="account" width={19} height={18} quality={100} />
              </a>
              <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                <button
                  className="btn  my-2 my-sm-0 nav_search-btn"
                  type="submit"
                />
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</div>

</>

  )
}
