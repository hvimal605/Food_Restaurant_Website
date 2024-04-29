import React from 'react';
import './Intro.css'
import burgeimg from '../img/burger2.png'
import playsvg from  '../Svg/play.svg'
import TypewriterComponent from './TypeWriter';

const Intro = () => {
  
  
  return (
   

    <div className="intro">
      <div className="introtext">
        <div className="introheadtxt">
          <div>Choose Delicacy</div>
          The Best
          <span className="highlightword slide slide1"><TypewriterComponent /></span>
          <div>Way To Life</div>
        </div>
        <div className="introbtn">
          <div>
            <button className="btn"><a href="#jump">SHOP NOW</a></button>
          </div>
          <div className="watchvideo">
            <img src={playsvg} alt="" />
          </div>
          <div>
            <button className="btn">WATCH VIDEO</button>
          </div>
        </div>
      </div>
      <div className="introimg"><img src={burgeimg} alt="" /></div>
    </div>
  );
}

export default Intro;
