import { Grid, Paper, TextField, Button, Typography } from '@material-ui/core'
import React from 'react'


function SignUpForm (props) {
  const handleSubmit = (e) => {
    e.preventDefault()
    props.trySignUp()
  }

  return (
    <div className='Sign-up-form'>
      <form onSubmit={handleSubmit}>
        <Paper style={{padding:16, margin:'auto', marginTop:16, maxWidth:500}}>
          <Typography variant='h4' align='center' gutterBottom>회원가입</Typography>
          <Grid container alignItems='flex-start' spacing={3}>
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
                name='email' 
                onChange={props.handleChange} 
                placeholder='email'
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField 
                fullWidth
                name='password' 
                onChange={props.handleChange} 
                placeholder='password'
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField 
                fullWidth
                name='confirm' 
                onChange={props.handleChange} 
                placeholder='password-confirm'
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button 
                variant='contained' 
                color='primary' 
                type='submit'
              >
                회원가입
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </form>
    </div>
  )
}

export default SignUpForm