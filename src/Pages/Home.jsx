import React,{useState} from 'react'
import {Box} from '@mui/material'

import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'

//exported this to home.jsx
const Home = () => {
  return (
    <Box>
        {/* this contains the intro of the platform, importing this from components section */}
        <HeroBanner/>
        {/* to explore various exercises, fetching data from api, importing this from components section */}
        <SearchExercises/>
        <Exercises/>
    </Box>
  )
}

export default Home
