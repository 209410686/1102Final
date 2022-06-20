import React from 'react';
import { Link } from 'react-router-dom';

const Navbar_86 = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <Link to='/'>許琦涓209410686
        </Link>
        <ul className='nav-links'>
          <li>
            <Link to='/'>home</Link>
          </li>
          <li>
            <Link to='/about'>about</Link>
          </li>
          <li>
            <Link to='/final'>Final Experient</Link>
          </li>
        </ul>
      </div>
    </nav>
  ) 
};

export default Navbar_86;
