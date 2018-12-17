import './Header.css'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <div className='Header'>
    <div className='HeaderGroup'>
      <Link to='/'><img width='30' src={require('../images/logo-designcode.svg')} /></Link>
      <Link to='/work'>Previous Works</Link>
      <Link to='https://dribbble.com/tcehcrhistie'>Dribbble</Link>
      <Link to='/'>Instagram</Link>
      <Link to='mailto:christie1182542@gmail.com'>Contact</Link>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
