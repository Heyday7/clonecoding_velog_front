import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    const isLogin = this.props.isLogin
    return (
      <div id='header'>
      { isLogin ? 
        <>
          <div>
            <Link to='/'>icon</Link>
            <Link to='/'>{this.props.username}.io</Link>
          </div>
          <div>
            <div> search </div>
            <Link to='/create-post'> 새 글 작성</Link>
            <div> {this.props.username}</div>
          </div>
        </>
        :
        <>
        <div>
            <Link to='/'>icon</Link>
            <Link to='/'>Telog.io</Link>
          </div>
          <div>
            <div> search </div>
            <Link to='/create-post'> 로그인 후 글을 작성 가능합니다.</Link>
            <div> 비로그인상태</div>
          </div>
        </>
      }
      </div>
    )
  }
}

export default Header