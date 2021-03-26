import { Link } from 'react-router-dom'
import axios from 'axios'
import React, {Component} from 'react'
import SeriesNav from '../../components/series/SeriesNav'


class PostDetail extends Component {
  state = {
    post: {},
    series: {}
  }

  componentDidMount= async () => {
    const postId = this.props.match.params.id
    const response = await axios.get(
      `/post/${postId}/`,
    )
    const post = response.data
    if (post && post.series) {
      const seriesResponse = await axios.get(`/series/${post.series}/`)
      this.setState({
        post,
        series : seriesResponse.data
      })
    } else {
      this.setState({ post })
    }   
  }

  render () {
    const post = this.state.post
    return (
      <div>
        <div>사진!</div>
        <div>{post.title}</div>
        <div>tags</div>
        { post.series && 
          <SeriesNav series={this.state.series}/>
        }
        <div>{post.content}</div>
        <Link to={{
          pathname : `/post/${post.id}/edit`,
          state: {post}
        }}>수정하기</Link>
      </div>
    )
  }
}

export default PostDetail