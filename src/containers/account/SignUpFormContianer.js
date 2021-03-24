import React, {Component} from 'react'
import { callSignUp } from '../../actions/auth/Auth'
import { connect } from 'react-redux'
import SignUpForm from '../../components/account/SignUpForm'

class SignUpFormContainer extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    confirm: '',
  }

  handleChange = (e) => {
    this.setState({
      ...this.state, 
      [e.target.name]:e.target.value
    })
  }

  trySignUp = () => {
    this.props.signUp(this.state)
  }
  
  render () {
    return (
      <SignUpForm handleChange={this.handleChange} trySignUp={this.trySignUp}/>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp : (user) => dispatch(callSignUp(user))
  }
}

SignUpFormContainer = connect(undefined, mapDispatchToProps)(SignUpFormContainer)

export default SignUpFormContainer