import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/TED_wordmark.svg/2560px-TED_wordmark.svg.png'
          alt='Ted: Ideas worth spreading'
        />
      </div>
      <ul className='navbar-list'>
        <li>
          <a href='#' alt='Watch'>
            Watch
          </a>
        </li>
        <li>
          <a href='#' alt='Discover'>
            Discover
          </a>
        </li>
        <li>
          <a href='#' alt='Attend'>
            Attend
          </a>
        </li>
        <li>
          <a href='#' alt='Participate'>
            Participate
          </a>
        </li>
        <li>
          <a href='#' alt='About'>
            About
          </a>
        </li>
      </ul>
      <div className='action-btn'>
        <div className='action-btn-member'>
          <button>Membership</button>
        </div>
        <div className='action-btn-sign-in'>
          <button>SIGN IN</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
