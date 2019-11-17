import React from 'react'
import NavSidebar from './NavSidebar'
import Header from './Header'
import Footer from './Footer'
import Buttons from './Buttons'
import PurpleBox from './PurpleBox'
import HomepageText from './HomepageText'

const App = () => {
  return (
    <>
    <HomepageText />
    <Buttons />
    <PurpleBox />
    <Header />
    <Footer />
    <NavSidebar />
    </>
  )
}

export default App