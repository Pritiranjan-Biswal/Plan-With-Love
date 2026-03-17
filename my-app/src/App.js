import React, { useState } from 'react';
import './App.css';
import data from './components/Tours.js'


const App=() =>{
  const [tours, SetTours]=useState(data);
  return (
    <div>
      
      <Tours tours={tours}></Tours>
    </div>
  )
}
export default App;
