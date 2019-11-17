import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

const Buttons = () => {
  return (
<div className='buttons'>
    <Link to='/portfolio' style={{padding: '1rem'}}>Portfolio</Link>
    <Link to='/workhistory' style={{padding: '1rem'}}>Work History</Link>
    <Link to='/skills' style={{padding: '1rem'}}>Skills</Link>
    <Button>Click Here</Button>
    </div>
      )
    }
    
    export default Buttons