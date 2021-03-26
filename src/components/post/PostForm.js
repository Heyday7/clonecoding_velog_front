import { Paper, Grid, TextField, Typography, Button } from '@material-ui/core'
import React from 'react'


function PostForm(props) {
  const onSubmit = (e) => {
    e.preventDefault()
    props.editMode ? props.updatePost() :  props.createPost()
  }

  const header = props.editMode ? '포스트 수정하기' : '새로운 포스트';

  return (
    <div className='Post-form'>
      <form onSubmit={onSubmit}>
        <Paper style={{padding:16, maxWidth:600, margin:'auto', marginTop:'10%'}}>
          <Grid container spacing={3}>
            <Grid item>
              <Typography variant='h3'>{header}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='h6'>제목</Typography>
                <TextField 
                  fullWidth
                  name='title'
                  placeholder='제목을 입력해주세요'
                  defaultValue={props.post.title} // 버그가 있는 거 같다..
                  onChange={props.handleChange}
                  autoComplete='off'
                />
            </Grid>
            <Grid item xs={12}>
              <Typography variant='h6'> 내용 </Typography>
              <TextField
                fullWidth
                multiline
                rows={10}
                name='content' 
                placeholder='내용을 입력해주세요'
                defaultValue={props.post.content}
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