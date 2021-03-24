import React, {Component} from 'react'
import PostItem from './PostItem'

class PostList extends Component {
  render () {
    const postList = this.props.postList ? this.props.postList : []
    return (
      postList.map((post) => {
        return <PostItem post={post} key={post.id}/>
      }) 
    )
  }
}

export default PostList