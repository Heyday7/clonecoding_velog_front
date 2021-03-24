import React, {Component} from 'react'


class TagItem extends Component {
  render () {
    return (
      <div>{this.props.tag.name}</div>
    )
  }
}

export default TagItem