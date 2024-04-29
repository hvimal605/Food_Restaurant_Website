import React from 'react';
import './Typewriter.css';
import Typewriter from "typewriter-effect";

export default function TypewriterComponent() {
  return (
    <span className="typewriter">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("Healthy")
            .pauseFor(1000)
            .deleteAll()
            .typeString("Fresh")
            .pauseFor(1000)
            .deleteAll()
            .typeString("Nutritious")
            .pauseFor(1000)
            .deleteAll()
            .typeString("Healthy")
            .pauseFor(1000)
            .deleteAll()
            .typeString("Fresh")
            .pauseFor(1000)
            .deleteAll()
            .typeString("Nutritious")
            .start();
        }}
      />
    </span>
  );
}
