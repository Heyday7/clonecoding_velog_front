import React, {Component} from 'react'
import NavBar from '../components/common/NavBar'
import Profile from '../components/common/Profile'

class About extends Component {
  render () {
    return (
      <>
        <Profile/>
        <NavBar where={2}/>
        <div> 소개입니다 </div>
      </>
    )
  }
}

export default About