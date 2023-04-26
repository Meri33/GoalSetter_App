import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import NavLink from 'react-bootstrap/NavLink';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
   <>
    <Navbar expand="lg" bg="dark" >
        <Navbar.Brand>
        <Link to="/">
           <img  className='border'  style={{width:'70px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHaaL4_M51p8ZDcPb6zc6d6Ta72nMCvT-k4g&usqp=CAU" alt="" />

        </Link>
        </Navbar.Brand>
        <Nav className='ms-auto pe-2'>
          <Link to="/register" className='text-light text-decoration-none me-4'>
           Register
          </Link>
          <Link to="/login" className='text-light  text-decoration-none me-4'>
         Login
          </Link>
        </Nav>
    </Navbar>
   </>
  )
}

export default Header