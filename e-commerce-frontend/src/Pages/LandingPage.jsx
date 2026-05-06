import React from 'react'
import CarouselContainer from '../components/CarouselContainer'
import DumiProducts from './../components/DumiProducts';
import FooterComponent from '../components/FooterComponent';

const LandingPage = () => {
  const handleGreeting=()=>{
    let txt="welcome to haikyuu mart we have various collections in our store you can shop happily hehehhehheheehehhe ";
    let wspeech=window.speechSynthesis;
    let voice=new SpeechSynthesisUtterance(txt);
    wspeech.speak(voice);
    voice.rate=3;
    console.log(wspeech.getVoices())
  };
  return (
    <div>
        <button id="greeting-btn" onClick={handleGreeting}>click to announce Greeting</button>
        <CarouselContainer/>
        <DumiProducts/>
        <FooterComponent/>
    </div>
  )
}

export default LandingPage;