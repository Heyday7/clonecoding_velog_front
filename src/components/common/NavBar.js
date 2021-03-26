import { Paper, Tabs, Tab } from '@material-ui/core'
import React from 'react'
import {Link} from 'react-router-dom'

function NavBar(props) {
  const [value, setValue] = React.useState(props.where);
  const handleChange = (newValue) => {
    setValue(newValue);
  }

  return (
    <div className='Nav-bar'>
      <Paper elevation={0} style={{margin:'auto', maxWidth:480}} square>
        <Tabs 
          value={value}
          indicatorColor='primary'
          textColor='primary'
          onChange={handleChange}
        >
          <Tab label='글' style={{fontSize:24}} component={Link} to='/'/>
          <Tab label='시리즈' style={{fontSize:24}} component={Link} to='/series'/>
          <Tab label='소개' style={{fontSize:24}} component={Link} to='about'/>
        </Tabs>
      </Paper>
    </div>
  )
}

export default NavBar