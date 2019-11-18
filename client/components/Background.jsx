import React from 'react'
import { Grid } from 'semantic-ui-react'

import NavSidebar from './NavSidebar'
import Header from './Header'
import Footer from './Footer'
import Buttons from './Buttons'
import PurpleBox from './PurpleBox'
import HomepageText from './HomepageText'
import Photo from './Photo'

const Background = () => (
  <div className='background'>
    <Grid divided='vertically'>
      <Grid.Row columns={2}>
        <Grid.Column>
          <HomepageText />
          <Buttons />
          <PurpleBox />
          <Header />
          <Footer />
          <NavSidebar />
        </Grid.Column>
        <Grid.Column>
          <Photo />
      </Grid.Column>
    </Grid.Row>
  </Grid>
  </div>
)

export default Background