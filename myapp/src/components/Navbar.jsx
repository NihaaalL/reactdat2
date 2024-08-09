import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <div>
          <AppBar>
              <Toolbar>
          <Typography variant='h6'>myapp</Typography>
          <Link to='/Signup'>
            <Button variant='contained'>vaa</Button>
          </Link>

          <Link to='/l'>
            <Button variant='contained'>login</Button>
          </Link>

          <Link to='/state'>
            <Button variant='contained'>signup</Button>
          </Link>
          <Link to='/WC'>
            <Button variant='contained'>Welcome</Button>
          </Link>
          <Link to='/Api'>
            <Button variant='contained'>Api</Button>
          </Link>

              </Toolbar>
          </AppBar>
          <br /><br /><br /><br />
    </div>
  )
}

export default Navbar