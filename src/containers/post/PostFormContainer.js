import axios from 'axios'
import React, {Component} from 'react'
import PostForm from '../../components/post/PostForm'


class PostFormContainer extends Component {
  state = {
    post:{title: '',content: ''},
    editMode: false
  }

  componentDidMount = () => {
    try {
      const post = this.props.location.state.post
      this.setState({post, editMode:true})
    } catch (e) {
    }
  }

  updatePost = async () => {
    await axios.put(
      `/post/${this.state.post.id}/`,
      this.state,
      {withCredentials:true}
    ).then((res)=>this.setState(res.data))
    
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
      <PostForm handleChange={this.handleChange} createPost={this.createPost} updatePost={this.updatePost} post={this.state.post} editMode={this.state.editMode}/>
    )
  }
}

export default PostFormContainer