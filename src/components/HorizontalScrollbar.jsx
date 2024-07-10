import React, {useContext} from 'react'
import {Box, Typography} from '@mui/material'
import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu'
import 'react-horizontal-scrolling-menu/dist/styles.css'; 
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

import BodyPart from './BodyPart'
import ExerciseCard from './ExerciseCard';

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollPrev()} className="right-arrow">
        <img src={LeftArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };
  
const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scrollNext()} className="left-arrow">
        <img src={RightArrowIcon} alt="right-arrow" />
        </Typography>
    );
};

//prop named data is an array of items
const HorizontalScrollbar = ({data, bodyPart, setBodyPart, isBodyParts}) => {
  return (
    <ScrollMenu LeftArrow = {LeftArrow} RightArrow = {RightArrow}>
      {/* For each item in the data array, it renders a <Box> component. */}
      {data.map((item) => (
        <Box
        key={item.id || item}  // Sets the unique identifier for React's reconciliation process
        itemID={item.id || item}  // Sets the itemId prop for ScrollMenu
        title={item.id || item}  // Sets the title prop for accessibility
        sx={{ margin: '0 40px' }}  // Using Material-UI's sx prop for consistent styling
      >
        {isBodyParts ? <BodyPart item={item} bodyPart={bodyPart}
         setBodyPart={setBodyPart} />
        : <ExerciseCard exercise= {item} />}
      </Box>
      ))}
    </ScrollMenu>
  )
}

export default HorizontalScrollbar
