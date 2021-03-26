import axios from 'axios'
import React, {Component} from 'react'
import NavBar from '../../components/common/NavBar'
import Profile from '../../components/common/Profile'
import SeriesList from '../../components/series/SeriesList'


class Series extends Component {
  state = {
    seriesList: []
  }

  componentDidMount = async () => {
    const response = await axios.get('/series/')
    this.setState({
      seriesList: response.data
    })
  }

  render () { 
    return (
      <>
        <Profile/>
        <NavBar where={1}/>
        <SeriesList seriesList={this.state.seriesList}/>
      </>
    )
  }
}

export default Series