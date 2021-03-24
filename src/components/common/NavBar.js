import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class NavBar extends Component {
  render () {
    return (
      <div id='nav-bar'>
        <Link to='/'>글</Link>
        <Link to='/series'>시리즈</Link>
        <Link to='/about'>소개</Link>
      </div>
    )
  }
}

export default NavBar