import React from 'react'
import {Box} from '@mui/material'

//prop named data is an array of items
const HorizontalScrollbar = ({data}) => {
  return (
    <div>
      {/* For each item in the data array, it renders a <Box> component. */}
      {data.map((item) => (
        <Box 
        //Sets the unique identifier for React's reconciliation process. If item has an id, 
        //it uses item.id; otherwise, it uses item itself as the key.
        key={item.id || item}
        //Sets the itemId prop 
        itemId={item.id || item}
        //Sets the title prop 
        title={item.id || item}
        m = '0 40px'>
            {item}
            console.log(item)
        </Box>))}
    </div>
  )
}

export default HorizontalScrollbar
