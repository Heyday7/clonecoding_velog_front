import React, {Component} from 'react'
import { connect } from 'react-redux'
import { callLogout } from '../../actions/auth/Auth'
import LogoutButton from '../../components/account/LogoutButton'
import Header from '../../components/common/Header'


class HeaderContainer extends Component {
  render () {
    return (
      <Header 
        isLogin={this.props.isLogin} 
        username={this.props.username} 
        logoutButton={<LogoutButton logout={this.props.logout}/>}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLogin: state.authReducer.isLogin,
    username: state.authReducer.username
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout : () => {dispatch(callLogout())}
  }
}

HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)

export default HeaderContainer