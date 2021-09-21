import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'
import { logo, signOutLink, signUpLink, signInLink, profileLink } from './header_styles'

const authenticatedOptions = (
  <Fragment>
    <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
      <NavLink to='/dashboard' className='nav-link' style={profileLink}>Dashboard</NavLink>
      <NavLink to='/change-pw' className='nav-link' style={profileLink}>Profile</NavLink>
      <NavLink to='/sign-out' className='nav-link' style={signOutLink}>Sign Out</NavLink>
    </div>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <NavLink to='/sign-up' className='nav-link' style={signUpLink}>Sign Up</NavLink>
    <NavLink to='/sign-in' className='nav-link' style={signInLink}>Sign In</NavLink>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar fixed='bottom' bg='dark' variant='dark' expand='md'>
    <Navbar.Brand>
      <NavLink to='/dashboard' style={ logo }>{'< SYNTAX />'}</NavLink>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls='basic-navbar-nav' />
    <Navbar.Collapse id='basic-navbar-nav'>
      <Nav className='ml-auto' style={{ width: '100%', display: 'flex' }}>
        {user ? authenticatedOptions : unauthenticatedOptions}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
