import React from 'react'
import {Link} from 'react-router-dom'
import {Stack} from '@mui/material'

import Logo from '../assets/images/Logo.png'
import { borderBottom } from '@mui/system'


// exported navbar into app.jsx
const Navbar = () => {
  return (
    // inner Stack component creates a horizontal layout for the navigation links.
    <Stack
        direction= 'row'
        justifyContent= 'space-around'
        // The sx prop is a shortcut for defining custom style that has access to the theme. It can accept any CSS properties plus a few extra from MUI.
        //sm => small, xs => extra-small, mt => margin-top , px => paddding x-axis
        sx = {{gap: 
        {sm : '122px' , xs: '40px'}, mt: {sm : '32px', xs: '20px'}, justifyContent: 'none' }} px= '20px'>
        {/* Creates a link to the home page with a logo image. */}
         <Link to = '/'>
        <img src = {Logo} alt = 'logo' style={{
            width:'48px', height: '48px', margin: '020px'
        }}/>
        </Link>
        <Stack 
            direction = 'row'
            gap = '40px'
            fontSize = '24px'
            alignItems = 'flex-end'>
            {/* Creates a link to the home page with custom styles. */}
            <Link to = '/' style= {{
                textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625'
            }}> Home 
            </Link>
            {/* Creates a link to the exercises section on the same page. */}
            <a href = '#exercises' style = {{
                textDecoration: 'none', color: '#3A1212'}}> Exercises</a>
        </Stack>
    </Stack>
  )
}

export default Navbar
