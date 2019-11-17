import React from 'react'

import NavSidebar from './NavSidebar'
import Header from './Header'
import Footer from './Footer'
import Buttons from './Buttons'
import PurpleBox from './PurpleBox'
import HomepageText from './HomepageText'

const Background = () => (
  <div className='background'>
    <HomepageText />
    <Buttons />
    <PurpleBox />
    <Header />
    <Footer />
    <NavSidebar />
  </div>
)

export default Background