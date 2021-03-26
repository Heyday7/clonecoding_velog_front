import React from 'react'
import PostItem from './PostItem'

function PostList(props) {
  const postList = props.postList ? props.postList : []
  return (
    <div className="Post-list" style={{margin:'auto', maxWidth:900}}>
      {postList.map((post) => {
        return <PostItem post={post} key={post.id} getTag={props.getTag}/>
      })} 
    </div>
  )
}

export default PostList