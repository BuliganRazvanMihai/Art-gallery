/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Signin from "../../pages/signin/Signin";
import appData from "../../data/app.json";
import { handleMobileDropdown } from "../../common/navbar";

const Navbar = ({ lr, nr, theme }) => {
  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${
        theme === "themeL" ? "light" : ""
      }`}
    >
      <div className='container'>
        <button
          className='navbar-toggler'
          type='button'
          onClick={handleMobileDropdown}
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='icon-bar'>
            <i className='fas fa-bars'></i>
          </span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              {/* <Link href={`/signin`}> */}
              <span
                className='nav-link'
                role='button'
                aria-haspopup='true'
                aria-expanded='false'
              >
                {/*<Signin />*/}
                {/* Login */}
              </span>
              {/* </Link> */}
            </li>
            <li className='nav-item'>
              <Link href={`/signin`}>
                <a className='nav-link'>Signin</a>
              </Link>
            </li>
            <li className='nav-item'>
              <Link href={`/about`}>
                <a className='nav-link'>About</a>
              </Link>
            </li>
            {/*<li className="nav-item dropdown" onClick={handleDropdown}>*/}
            {/*  <span*/}
            {/*    className="nav-link dropdown-toggle"*/}
            {/*    data-toggle="dropdown"*/}
            {/*    role="button"*/}
            {/*    aria-haspopup="true"*/}
            {/*    aria-expanded="false"*/}
            {/*  >*/}
            {/*    Blog*/}
            {/*  </span>*/}
            {/*  <div className="dropdown-menu">*/}
            {/*    <Link href={`/blog/blog-dark`}>*/}
            {/*      <a className="dropdown-item">Blog Standerd</a>*/}
            {/*    </Link>*/}
            {/*    <Link href={`/blog-list/blog-list-dark`}>*/}
            {/*      <a className="dropdown-item">Blog List</a>*/}
            {/*    </Link>*/}
            {/*    <Link href={`/blog-grid/blog-grid-dark`}>*/}
            {/*      <a className="dropdown-item">Blog Grid</a>*/}
            {/*    </Link>*/}
            {/*    <Link href={`/blog-details/blog-details-dark`}>*/}
            {/*      <a className="dropdown-item">Blog Details</a>*/}
            {/*    </Link>*/}
            {/*  </div>*/}
            {/*</li>*/}
            <li className='nav-item'>
              <Link href={`/contact`}>
                <a className='nav-link'>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
