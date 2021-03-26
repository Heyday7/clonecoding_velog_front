import { Paper, Grid, TextField, Typography, Button } from '@material-ui/core'
import React from 'react'


function PostForm(props) {
  const onSubmit = (e) => {
    e.preventDefault()
    props.createPost()
  }


  return (
    <div className='Post-form'>
      <form onSubmit={onSubmit}>
        <Paper style={{padding:16, maxWidth:600, margin:'auto', marginTop:'10%'}}>
          <Grid container spacing={3}>
            <Grid item>
              <Typography variant='h3'>새로운 포스트</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='h6'>제목</Typography>
                <TextField 
                  fullWidth
                  name='title' 
                  label='제목을 입력해주세요'
                  value={props.post.title} 
                  onChange={props.handleChange}
                />
            </Grid>
            <Grid item xs={12}>
              <Typography variant='h6'> 내용 </Typography>
              <TextField
                fullWidth
                multiline
                rows={10}
                name='content' 
                label='내용을 입력해주세요'
                value={props.post.content} 
                onChange={props.handleChange}
              />  
            </Grid>
            <Grid item>
              <Button 
                variant='contained' 
                type='submit'
                color='primary'
              >
                submit
              </Button>
            </Grid>
        </Grid>
        </Paper>
      </form>
    </div>
  )
}

export default PostForm