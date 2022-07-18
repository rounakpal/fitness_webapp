import React, { useState } from 'react';
import { Box } from '@mui/material';

import HeroBanner from '../components/HeroBanner';
import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
const Home = () => {
  const [bodypart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([]);

  console.log(bodypart);
 return(
  <Box>
    <HeroBanner />
    <SearchExercises 
    setExercises={setExercises} 
    bodyPart={bodypart} 
    setBodyPart={setBodyPart}/>
    <Exercises
    exercises={exercises}
     setExercises={setExercises} 
    bodyPart={bodypart} 
    
    />
  </Box>
 )
}

export default Home