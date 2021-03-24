import React, {Component} from 'react'
import { connect } from 'react-redux'
import { callLogin } from '../../actions/auth/Auth'
import LoginForm from '../../components/account/LoginForm'

class LoginFormContainer extends Component {
  state = {
    username: '',
    password: '',
  }

  tryLogin = () => {
    this.props.login(this.state)
  }

  handlechange = (e) => {
    this.setState({...this.state, [e.target.name]:e.target.value})
  }

  render () {
    return (
      <LoginForm handleChange={this.handlechange} tryLogin={this.tryLogin}/>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(callLogin(user))
  }
}

LoginFormContainer = connect(undefined, mapDispatchToProps)(LoginFormContainer)

export default LoginFormContainer
