import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/TED_wordmark.svg/2560px-TED_wordmark.svg.png'
        alt='Ted: Ideas worth spreading'
      />
      <ul>
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
      <button>Membership</button>
      <button>Sign in</button>
    </div>
  );
};

export default Navbar;
