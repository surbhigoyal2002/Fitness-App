import React from 'react'
import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import {Box} from '@mui/material'

import './App.css'
import Home from './Pages/Home'
import ExerciseDetail from './Pages/ExerciseDetail'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box width = '400px' sx = {{width : {xl : '1488px'}}} m = 'auto'>
     {/* contains navbar  */}
     <Navbar/> 
     <Routes>
       <Route path = '/' element = {<Home/>}/>
       {/* this id is going to be dynamic */}
       <Route path = '/exercise/:id' element = {<ExerciseDetail/>}/> 
     </Routes>
     <Footer/>
    </Box>
  )
}

export default App
