import React from 'react'
import { Grid } from 'semantic-ui-react'

import NavSidebar from './NavSidebar'
import Header from './Header'
import Footer from './Footer'
import Buttons from './Buttons'
import PurpleBox from './PurpleBox'
import ImIris from './ImIris'
import Description from './Description'
import Photo from './Photo'

const Homepage = () => (
  <div className='homepage'>
    <Grid divided='vertically'>
      <Grid.Row columns={3}>
        <Grid.Column>
          <Header />
          <ImIris />
          <Buttons />
          <PurpleBox />
          <NavSidebar />
          <Footer />
        </Grid.Column>
        <Grid.Column>
          <Photo />
      </Grid.Column>
      <Grid.Column>
        <Description />
      </Grid.Column>
    </Grid.Row>
  </Grid>
  </div>
)

export default Homepage