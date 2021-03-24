import React, {Component} from 'react'
import SeriesItem from './SeriesItem'


class SeriesList extends Component {
  render() {
    return (
      this.props.seriesList.map((series) => {
        return <SeriesItem series={series} key={series.id}/>
      })
    )
  }
}

export default SeriesList