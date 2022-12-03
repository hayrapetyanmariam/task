import React from 'react'
import {NavLink as Link} from 'react-router-dom'

const Header = () => {
  return (
    <nav className='Header'>
    <Link to={'/'}>Plays</Link>
    <Link to={'/booking'}>Booking</Link>
  </nav>
  )
}

export default Header