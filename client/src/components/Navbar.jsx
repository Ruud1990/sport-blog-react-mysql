import React from 'react';
import logo from '../img/logo.jfif';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logo} alt='logo'></img>
        </div>
        <div className="links">
          <Link className='link' to='/?cat=football'><h6>football</h6></Link>
          <Link className='link' to='/?cat=football'><h6>basketball</h6></Link>
          <Link className='link' to='/?cat=football'><h6>volleyball</h6></Link>
          <Link className='link' to='/?cat=football'><h6>winter sports</h6></Link>
          <Link className='link' to='/?cat=football'><h6>other</h6></Link>
          <span>Joe</span>
          <span>Logout</span>
          <span className='write'><Link className='link' to='/write'>Write</Link></span>
        </div>
      </div>
    </div>
  )
}

export default Navbar