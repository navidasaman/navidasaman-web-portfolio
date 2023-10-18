import "./about.scss"
import me from "./linkedinbw.png"
import coder from "./undraw_proud_coder_re_exuy.svg"
import Typewriter from "typewriter-effect";
import { useState, useEffect } from 'react'

export default function About() {

  const [showCoder, setShowCoder] = useState(window.innerWidth < 900 ? false : true);

  const words: string[] = [' interesting ', ' harmonious ', ' userfriendly '];
  const [word, setWord] = useState<string>(words[0]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 900) {
        setShowCoder(false);
      } else {
        setShowCoder(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Get the index of the next word in the array
      const currentIndex: number = words.findIndex((w) => w === word);
      const nextIndex: number = (currentIndex + 1) % words.length;

      // Update the word state with the next word
      setWord(words[nextIndex]);
    }, 3000);

    // Cleanup the interval when the component unmounts or the dependencies change
    return () => clearInterval(interval);
  }, [word]);

  return (
    <div className="aboutContainer">
      <div className="twinklingStars"></div>
      <div className="twinkl"></div>
      <div className="introContainer">
        <h1 className='title'>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Hi! I'm Saman...")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Welcome!")
                .start();
            }}
          />
        </h1>
        <div className="intro">I'm a Web developer making the web an
          <span className="words"> 
            {word}
          </span>
          place to browse, enhancing user experience through effective design and pleasant experiences. Let me take you on a trip.</div>
        <div className="info">
          <img src={me} className="me" alt="picture of me" />
          <p>Navida Saman</p>
          <p>Web developer</p>
          <p>Greater Gothenburg Metropolitan Area</p>
        </div>

      </div>
      <div className="coderContainer">
        {showCoder &&
          <img src={coder} className={`coder`} alt="svg of a coder from undraw" />
        }

      </div>

    </div>
  )
}
