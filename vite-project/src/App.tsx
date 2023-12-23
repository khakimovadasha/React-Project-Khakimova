import React, { useState } from 'react'; 
import MainRouter from './app/routing/index'; 
import Navbar from './components/NavBar/index'



const App = () => { 
  return ( 
    <> 
      <Navbar/> 
      <MainRouter/> 
    </> 
  ); 
}; 

export default App;