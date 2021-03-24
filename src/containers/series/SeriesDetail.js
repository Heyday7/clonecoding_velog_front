import axios from 'axios'
import React, {Component} from 'react'
import PostList from '../../components/post/PostList'


class SeriesDetail extends Component {
  state = {
    series: {}
  }

  componentDidMount = async () => {
    const seriesId = this.props.match.params.id
    const response = await axios.get(`/series/${seriesId}/`)
    this.setState({series:response.data})
  }

  render() {
    return (
      <div>
        <div>{this.state.series.name}</div>
        <PostList postList={this.state.series.posts}/>
      </div>
    )
  }
}

export default SeriesDetail