import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

const Buttons = () => {
  return (
<div className='buttons'>
    <Button inverted color='green' size='massive'><Link to='/portfolio'>Portfolio</Link></Button>
    <Button inverted color='teal' size='massive'><Link to='/workhistory' className='workhistory'>Work History</Link></Button>
    <Button inverted color='blue' size='massive'><Link to='/skills' className='skills'>Skills</Link></Button>
    
    </div>
      )
    }
    
    export default Buttons