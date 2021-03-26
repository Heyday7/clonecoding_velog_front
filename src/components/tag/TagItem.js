import { Chip } from '@material-ui/core'
import React from 'react'


function TagItem(props) {
  return (
    <Chip style={{margin: 4}} color='primary' label={props.tag.name}/>
  )
}

export default TagItem