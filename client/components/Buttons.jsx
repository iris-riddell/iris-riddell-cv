import React from 'react'
import { Link } from 'react-router-dom'

const App = () => {
  return (
<div className='buttons'>
    <Link to='/portfolio' style={{padding: '1rem'}}>Portfolio</Link>
    <Link to='/workhistory' style={{padding: '1rem'}}>Work History</Link>
    <Link to='/skills' style={{padding: '1rem'}}>Skills</Link>
    </div>
      )
    }
    
    export default App