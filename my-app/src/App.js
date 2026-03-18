  import React, { useState } from 'react';
  import './App.css';
  import Tours from './components/Tours.js'
  import data from './data.js';


  const App=() =>{
    const [tours, SetTours]=useState(data);
    function removetour(id) {
      const newTours=tours.filter(tour => tour.id !== id);
      SetTours(newTours)
    }
    if(tours.length===0) {
      return (
        <div className='refresh'>
          <h2>No Tours Left</h2>
          <button className="bnt-white"onClick={()=> SetTours(data)}>
            Refresh
          </button>
        </div>
      )
    }


    return (
      <div className='App'>
        
        <Tours tours={tours} removetour={removetour}></Tours>
      </div>
    )
  };
  export default App;
