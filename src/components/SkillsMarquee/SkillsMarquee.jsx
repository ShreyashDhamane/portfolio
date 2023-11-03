import React, { useEffect, useRef, useState } from "react";
import "./Marquee.scss";
import Marquee from "./Marquee";
import useElementOnScreen from "../../hooks/useElementOnScreen";
import MotionDiv from "../UI/Animation/MotionDiv/MotionDiv";

const SkillsMarquee = () => {
  const generateRandomSymbols = () => {
    const text =
      "Tech Enthusiast - Curious Innovator - AI Aficionado - Aspiring Entrepreneur - ";
    const windowWidth = window.innerWidth;
    const lotsOfSymbols = text.repeat(windowWidth / 30);
    return lotsOfSymbols;
  };

  const generateLotsOfText = () => {
    const text =
      "Full Stack Developer - Machine Learning Developer - Flutter Developer - ";
    const windowWidth = window.innerWidth;
    const lotOfText = text.repeat(windowWidth / 100);
    return lotOfText;
  };

  return (
    <section className="Skills_marquee">
      <Marquee speed={30} className="marquee2" direction="left" background={2}>
        <MotionDiv
          from={{ transform: `translateY(100%)` }}
          to={{ transform: `translateY(0)` }}
          duration={1000}
          scrollDiv={true}
          offsetTop={40}
          offsetBottom={-10}
          reverse={false}
        >
          <div className="marquee_item dim">{generateRandomSymbols()}</div>
        </MotionDiv>
      </Marquee>
      <Marquee speed={50} className="marquee1" background={1} direction="right">
        <MotionDiv
          from={{ transform: `translateY(100%)` }}
          to={{ transform: `translateY(0)` }}
          scrollDiv={true}
          offsetTop={40}
          offsetBottom={-10}
        >
          <div className="marquee_item">{generateLotsOfText()}</div>
        </MotionDiv>
      </Marquee>
      {/* <div className='marquee_comp'></div> */}
    </section>
  );
};

export default SkillsMarquee;
