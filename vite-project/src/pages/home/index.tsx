import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const audio = new Audio("../public/.mp3");

    const handleEnded = () => {
      audio.currentTime = 0;
      audio.play();
    };

    audio.addEventListener("ended", handleEnded);

    audio.play();

    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <>
      <h1 data-testid={"main-text"}>Главная</h1>
      {/* <div style={{ margin: '0 350px 100px'}}>
        <img src="../public/chipi-chipi-chapa-chapa.gif" height="800px" width="800px" alt="gif"/> 
      </div> */}
    </>
  );
};

export default Home;
