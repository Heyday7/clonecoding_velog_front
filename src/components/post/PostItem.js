import React, {Component} from 'react'
import { Link } from 'react-router-dom'


class PostItem extends Component {
  render () {
    const post = this.props.post
    const link = `/post/${post.id}`
    return (
      <div style={{
        border: "1px solid black",
        margin: "4px"
      }}>
        <Link to={link}>{post.title}</Link>
        <div>{post.content}</div>
        <div>tags</div>
        <div>
          <span>{post.updated_at}</span>
          <span>{post.comments.length}개의 댓글</span>
        </div>
      </div>
    )
  }
}

export default PostItem