import React from 'react'

function LogoutButton ({logout}) {
  return <button onClick={() => logout()}>Logout</button>
}

export default LogoutButton