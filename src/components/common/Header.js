import { AppBar, IconButton, Toolbar, Typography, Button } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import Cube from '../../assets/cube.png'

function Header(props) {
  const isLogin = props.isLogin
  return (
    <div className='header'>
    { isLogin ?
      <AppBar position='static'>
        <Toolbar>
          <IconButton edge='start' style={{marginRight: 16}} color='inherit'>
            <Link to='/'>
              <img src={Cube} style={{ width: 32, height: 32}} alt=''/>
            </Link>
          </IconButton>
          <Typography variant='h6' style={{flexGrow:1}}>
            {props.username}.io
          </Typography>
          <Button color='inherit' component={Link} to='/create-post'>새 글 작성</Button>
          {props.logoutButton}
        </Toolbar>
      </AppBar> 
      :
      <AppBar position='static'>
        <Toolbar>
          <IconButton edge='start' style={{marginRight: 16}} color='inherit'>
            <img src={Cube} style={{ width: 32, height: 32}} alt=''/>
          </IconButton>
          <Typography variant='h6' style={{flexGrow:1}}>
            Telog.io
          </Typography>
          <Button color='inherit' component={Link} to='/login'>Login</Button>
          <Button color='inherit' component={Link} to='/signup'>SignUp</Button>
        </Toolbar>
      </AppBar> 
    }
    </div>
  )
}


export default Header