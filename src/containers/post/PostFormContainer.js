import axios from 'axios'
import React, {Component} from 'react'
import PostForm from '../../components/post/PostForm'


class PostFormContainer extends Component {
  state = {
    title: '',
    content: ''
  }

  createPost = async () => {
    await axios.post(
      '/post/',
      this.state,
      {withCredentials:true}
    )
  }

  handleChange = (e) => {
    this.setState({
      ...this.state, 
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <PostForm handleChange={this.handleChange} createPost={this.createPost} post={this.state}/>
    )
  }
}

export default PostFormContainer