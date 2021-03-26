import React from 'react'
import { Button, Paper, Grid, TextField, Typography } from '@material-ui/core'

function LoginForm (props) {
  const handleSubmit = (e) => {
    e.preventDefault()
    props.tryLogin()
  }

  return (
    <div className='Login-form'>
      <form onSubmit={handleSubmit}>
        <Paper style={{padding:16, margin: 'auto', marginTop: 16, maxWidth:500}}>
          <Typography variant='h4' align='center' gutterBottom> 로그인 </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField 
                fullWidth 
                name='username' 
                onChange={props.handleChange} 
                placeholder='username'
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField 
                fullWidth
                name='password' 
                onChange={props.handleChange} 
                placeholder='password'
              />
            </Grid>
            <Grid item>
              <Button 
                variant='contained' 
                color='primary' 
                type='submit'
              >
                로그인
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </form>
    </div>
  )
  
}

export default LoginForm