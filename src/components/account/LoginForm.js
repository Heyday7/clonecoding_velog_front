import React, {Component} from 'react'

class LoginForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.tryLogin()
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name='username' onChange={this.props.handleChange} placeholder='username'/>
        <input name='password' onChange={this.props.handleChange} placeholder='password'/>
        <button type='submit'>로그인</button>
      </form>
    )
  }
}

export default LoginForm