import React, { useEffect } from 'react'; 

const Home = () => { 
  useEffect(() => { 
    const audio = new Audio('../public/chipi.mp3'); 

    const handleEnded = () => { 
      audio.currentTime = 0; 
      audio.play(); 
    }; 

    audio.addEventListener('ended', handleEnded); 

    audio.play(); 

    return () => { 
      audio.removeEventListener('ended', handleEnded); 
    }; 
  }, []); 

  return ( 
    <> 
      <div>Это главная</div> 
      <img src="../public/chipi-chipi-chapa-chapa.gif" height="800px" width="800px" alt="gif" /> 
    </> 
  ); 
}; 

export default Home;