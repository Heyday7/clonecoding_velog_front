import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class SeriesNav extends Component {
  render() {
    const series = this.props.series
    return (
      <div>
        <h3>Series: {series.name}</h3>
        <ul>
          { series.posts && series.posts.map((post, index) => {
            return (
              <li key={index}>
                <Link to='/'>{post.title}</Link>
              </li>
            )
          })
          }
        </ul>
      </div>
    )
  }
}

export default SeriesNav