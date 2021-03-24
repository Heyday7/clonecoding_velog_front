import React, {Component} from 'react'
import { Link } from 'react-router-dom'


class SeriesItem extends Component {
  render () {
    const series = this.props.series
    const link = `/series/${series.id}`
    return (
      <>
        <Link to={link}> image </Link><br/>
        <Link to={link}>{series.name}</Link>
        <div>
          <div>{series.posts.length}개의 포스트</div>
          <div>마지막 업데이트 {series.updated_at}</div>
        </div>
      </>
    )
  }
}

export default SeriesItem