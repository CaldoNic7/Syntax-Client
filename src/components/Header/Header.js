import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, NavLink } from 'react-router-dom'

const authenticatedOptions = (
  <>
    <NavLink exact to='/' className='nav-link'>Dashboard</NavLink>
    {/* <NavLink to='/change-pw' className='nav-link'>Change Password</NavLink> */}
    {/* <NavLink to='/sign-out/' className='nav-link'>Sign Out</NavLink> */}
  </>
)

const unauthenticatedOptions = (
  <>
    <NavLink to='/sign-up/' className='nav-link'>Sign Up</NavLink>
    <NavLink to='/sign-in/' className='nav-link'>Sign In</NavLink>
  </>
)

// const alwaysOptions = (
//   <>
//     <NavLink exact to='/goals/' className='nav-link'>Dashboard</NavLink>
//   </>
// )

const Header = ({ user }) => (
  <Navbar bg='primary' variant='dark' expand='md'>
    <Navbar.Brand>
      <Link to='/' style={{ color: '#FFF', textDecoration: 'none' }}>SYNTAX</Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls='basic-navbar-nav' />
    <Navbar.Collapse id='basic-navbar-nav'>
      <Nav className='ml-auto'>
        {/* {alwaysOptions} */}
        {user ? authenticatedOptions : unauthenticatedOptions}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
