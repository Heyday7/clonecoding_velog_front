import React, {Component} from 'react'
import { connect } from 'react-redux'
import Header from '../../components/common/Header'


class HeaderContainer extends Component {
  render () {
    return (
      <Header isLogin={this.props.isLogin} username={this.props.username}/>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    isLogin: state.authReducer.isLogin,
    username: state.authReducer.username
  }
}

HeaderContainer = connect(mapStateToProps)(HeaderContainer)

export default HeaderContainer