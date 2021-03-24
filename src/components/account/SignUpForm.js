import React, {Component} from 'react'

class SignUpForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.trySignUp()
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name='username' onChange={this.props.handleChange} placeholder='username'></input>
        <input name='email' onChange={this.props.handleChange} placeholder='email'></input>
        <input name='password' onChange={this.props.handleChange} placeholder='password'></input>
        <input name='confirm' onChange={this.props.handleChange} placeholder='password-confirm'></input>
        <button type='submit'>회원가입</button>
      </form>
    )
  }
}

export default SignUpForm