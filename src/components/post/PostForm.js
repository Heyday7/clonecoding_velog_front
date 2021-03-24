import React, {Component} from 'react'


class PostForm extends Component {
  onSubmit = (e) => {
    e.preventDefault()
    this.props.createPost()
  }

  render () {
    return (
      <form onSubmit={this.onSubmit}>
        <input 
          name='title' 
          value={this.props.post.title} 
          onChange={this.props.handleChange}>
        </input>
        <input 
          name='content' 
          value={this.props.post.content} 
          onChange={this.props.handleChange}>  
        </input>
        <button type='submit'>submit</button>
      </form>
    )
  }
}

export default PostForm