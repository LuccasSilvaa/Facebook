import React from "react";
import Footer from "./components/footer/Footer";
import { createGlobalStyle } from "styled-components";
import Main from "./components/main/Main";
import Header from "./components/headeer/Header";

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body{
     max-width:1200px;
     margin:auto;

  }


`;


export default function App() {
  return (
    <>
    <GlobalStyle/>
      <Header nome="Luccas Silva" />
      <Main nome="Luccas Silva" idade="20 anos"/>
      <Footer />
    </>
  );
}

