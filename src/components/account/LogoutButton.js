import { Button } from '@material-ui/core'
import React from 'react'

function LogoutButton ({logout}) {
  return <Button color='inherit' onClick={() => logout()}>Logout</Button>
}

export default LogoutButton