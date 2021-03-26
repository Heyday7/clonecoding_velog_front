import React, {Component} from 'react'
import axios from 'axios'
import PostList from '../../components/post/PostList'
import NavBar from '../../components/common/NavBar'
import Profile from '../../components/common/Profile'
import TagList from '../tag/TagList'


class Post extends Component {
  state = {
    postList: []
  }

  componentDidMount = async () => {
    const response = await axios.get('/post/')
    this.setState({
      postList: response.data
    })
  }

  render () {
    return (
      <>
        <Profile/>
        <NavBar where={0}/>
        <div id='post-container'>
          <TagList style={{margin:'auto', display:'block', width:900}}/>
          <PostList postList={this.state.postList}/>
        </div>
      </>
    )
  }
}

export default Post