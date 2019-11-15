import React from 'react'
import { Link } from 'react-router-dom'

const HomepageText = () => (
  <div className='homepage-text'>
    <h2>Hello, my name is Iris.</h2>
    <p>I am a creative, hard-working web developer with a background in journalism and communications. I want to build websites and tell stories that connect and educate, and have a deep interest in the power of community. </p>
    <Link to='/portfolio'>Portfolio</Link>
    <Link to='/workhistory'>Work History</Link>
    <Link to='/skills'>Skills</Link>
  </div>
)

export default HomepageText