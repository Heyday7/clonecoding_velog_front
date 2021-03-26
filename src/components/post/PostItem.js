import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import Coral from '../../assets/coral.jpg'
import moment from 'moment'
import TagList from '../../containers/tag/TagList'

function PostItem(props) {
  const post = props.post
  const link = `/post/${post.id}`

  return (
    <Card 
      elevation={3} 
      className="Post-item" 
      style={{
        maxWidth:900, 
        maxHeight:700, 
        margin:'16px 0', 
        borderBottom:'1px solid gray',
        borderRight: '1px solid gray'
      }}>
      <CardActionArea>
        <Link to={link} style={{textDecoration:'none', color: 'inherit'}}>
          <CardMedia style={{ height: 400 }} component='img' src={Coral}/>
          <CardContent>
            <Typography variant='h4'>{post.title}</Typography>
          </CardContent>
        </Link>
      </CardActionArea>
      <CardContent>
        <Typography style={{ paddingBottom:4, overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitBoxOrient:'vertical', WebkitLineClamp:'4'}} variant='body2' color='textSecondary' component='p'>{post.content}</Typography>
        <TagList tagList={post.tags}/>
        <Typography style={{paddingTop:4}}>
          {moment(post.updated_at).format("YYYY년 MM월 DD일")} / {post.comments.length}개의 댓글
        </Typography>
      </CardContent>
    </Card>
  )

}

export default PostItem