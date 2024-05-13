import React, { useEffect } from 'react'; 

const Home = () => { 
  useEffect(() => { 
<<<<<<< HEAD
    const audio = new Audio('../public/chipi.mp3'); 
=======
    const audio = new Audio('../public/.mp3'); 
>>>>>>> c456f1e2 (added 1+2labs)

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
      <h1>Главная</h1>
<<<<<<< HEAD
      <div style={{ margin: '0 350px 100px'}}>
        <img src="../public/chipi-chipi-chapa-chapa.gif" height="800px" width="800px" alt="gif"/> 
      </div>
=======
      {/* <div style={{ margin: '0 350px 100px'}}>
        <img src="../public/chipi-chipi-chapa-chapa.gif" height="800px" width="800px" alt="gif"/> 
      </div> */}
>>>>>>> c456f1e2 (added 1+2labs)
    </> 
  ); 
}; 

export default Home;