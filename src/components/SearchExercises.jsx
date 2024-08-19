import React, {useEffect, useState} from 'react'
import {Box, Stack, Typography, Button, TextField} from '@mui/material'
//created a file named fetchData for the purpose of fetching data from the api, storing api key and api host
import {exerciseOptions, fetchData} from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'



const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {
    const [search, setSearch] = useState('');
    const [bodyParts, setBodyParts] = useState([])

//The useEffect hook has been used in this code to perform 
//a side effect: fetching data from an external API
 useEffect(() =>{
     //This is an asynchronous function that fetches a list of body parts from an
     //external API and updates the component's state with the fetched data.
    const fetchExercisesData = async() => {
        //Waits for the data to be fetched and assigns it to bodyPartsData.
        const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        exerciseOptions)
        //updates the state with the fetched data.
        setBodyParts(['all', ...bodyPartsData])//'all' is to include a default option that represents all possible body parts.
    }
        fetchExercisesData();
 }, []) //When empty array is passed as the second argument to useEffect,
        // the effect runs only once after the initial render of the component.


    //asynchronous function as we have to fetch some data,
    // simply means that this function will take some time
    const handleSearch = async() => {
        // only proceeds if the search variable is not empty.
        if(search){
            //exerciseOptionsare are going to authorize you to make request because we added our own api key
            //fetchData is a function here
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',
             exerciseOptions) //The exerciseOptions object, which contains the API key and host information, is passed to the fetchData function to authorize the request.

             //This line filters the fetched exercise data based on the search term.
             //If the search term is found in any of these properties, the exercise is included in the searchedExercises array.
            const searchedExercises  = exercisesData.filter(
                (exercise) => exercise.name.toLowerCase().includes(search)
                || exercise.target.toLowerCase().includes(search)
                || exercise.equipment.toLowerCase().includes(search)
                || exercise.bodyPart.toLowerCase().includes(search)
            )
            // console.log(searchedExercises)

            setSearch(''); //resets the search input to an empty string.
            setExercises(searchedExercises); //updates the state with the filtered list of exercises, which can then be used to update the UI.
        }
    }
  return (
    // Stack component from Material-UI is used to create a flexible layout container.
    <Stack alignItems = 'center' mt = '37px'
    justifyContent= 'center' padding = '20px'>
        {/* Typography component is used to display text. */}
      <Typography fontWeight={700}
      sx ={{
          fontSize: {lg: '44px', xs: '30px'}}}
          mb = '50px' textAlign = 'center'>
          Awesome Exercises You <br/>
          Should Know
      </Typography>
      <Box position= 'relative' mb = '72px'>
      {/* TextField Renders an input field for text entry. */}
          <TextField
            sx = {{
                input : {
                    fontWeight: '700',
                    border: 'none',
                    borderRadius: '4px'},
                    width: {lg: '800px', xs: '350px'},
                    backgroundColor: '#fff',
                    borderRadius: '40px'
                
            }}
            height= '76px'
            value= {search}
            onChange= {(e) => {setSearch(e.target.value.toLowerCase())}}
            placeholder= 'Search Exercises'
            type= 'text' />
            <Button className = 'search-btn'
            sx= {{
                bgcolor:  '#FF2625',
                color: '#fff',
                textTransform: 'none',
                width: {lg: '175px', xs: '80px'},
                fontSize: {lg: '20px', xs: '14px'},
                height: '56px',
                position: 'absolute',
                right: '0'
            }}
            onClick= {handleSearch}>
                Search
            </Button>
      </Box>
      <Box sx ={{position: 'relative', width: '100%', p: '20px' }}>
            {/* Renders a horizontal scrollbar for navigating body parts. */}
            {/* data={bodyParts}: Passes the bodyParts data to the HorizontalScrollbar  */}
            <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} />
      </Box>
    </Stack>
  )
}

export default SearchExercises
