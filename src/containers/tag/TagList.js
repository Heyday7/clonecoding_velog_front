import React, {Component} from 'react'
import TagItem from '../../components/tag/TagItem'
import axios from 'axios'


class TagList extends Component {
  state = {
    tagList : []
  }
  
  componentDidMount = async () => {
    const tagList = this.props.tagList 
      ? await Promise.all(this.props.tagList.map((id) => this.getTagItem(id)))
      : await axios.get('/tag/').then((res)=> res.data)
    this.setState({tagList})
  }

  getTagItem = async (tagId) => {
    const response = await axios.get(`/tag/${tagId}/`)
    console.log(response.data)
    return response.data
  }


  render() {
    return (
      <div className='Tag-list' style={{...this.props.style, padding:'16 0'}} >
        {this.state.tagList.map((tag) => {
          return <TagItem tag={tag} key={tag.id}/>
        })}
      </div>
    )
  }
}

export default TagList