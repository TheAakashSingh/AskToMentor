import React from 'react';
import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './footer/Footer';
import Welcome from './Welcome/Welcome';
import Chatbot from './Chatbot/Chatbot';

function Home() {
  return (
    <>
      <Header />
      <Welcome />
      <Body />
      <Footer />
      <Chatbot />
    </>
  );
}

export default Home;
