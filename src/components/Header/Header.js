import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, NavLink } from 'react-router-dom'
import { logo } from './header_styles'

const authenticatedOptions = (
  <Fragment>
    <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
      <NavLink to='/sign-out' className='nav-link' style={{ justifySelf: 'flex-end' }}>Sign Out</NavLink>
    </div>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <NavLink to='/sign-up' className='nav-link'>Sign Up</NavLink>
    <NavLink to='/sign-in' className='nav-link'>Sign In</NavLink>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar fixed='bottom' bg='dark' variant='dark' expand='md'>
    <Navbar.Brand>
      <Link to='/dashboard' style={ logo }>{'< SYNTAX />'}</Link>
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
