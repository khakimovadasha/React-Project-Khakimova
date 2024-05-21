import React from "react";
import MainRouter from "./app/routing";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar/index";
import GlobalStyle from "./global-styles.tsx";

const App = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      ></link>
      <GlobalStyle />
      <Navbar />
      <MainRouter />
      <Footer />
    </>
  );
};

export default App;
