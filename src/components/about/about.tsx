import "./about.scss"
import me from "./linkedinbw.png"
import coder from "./undraw_proud_coder_re_exuy.svg"
import Typewriter from "typewriter-effect";
import {useState, useEffect} from 'react'
import { Helmet } from "react-helmet-async";

export default function About() {

  const [showCoder, setShowCoder] = useState(window.innerWidth < 900 ? false : true);

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


  return (
    <div className="aboutContainer">
      <Helmet>
        <title>Navida Saman Web Portfolio</title>
        <meta name="description" content="Hi, I'm Saman! I'm a Web developer making the web an interesting and harmonius place to browse, enhancing user experience through effective design and pleasant experiences."/>
        <link rel='canonical' href='/' />
      </Helmet>
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
        <div className="intro">I'm a Web developer making the web an interesting and harmonius place to browse, enhancing user experience through effective design and pleasant experiences. Let me take you on a trip.</div>
        <div className="info">
          <img src={me} className="me" alt="picture of me" />
          <p>Navida Saman</p>
          <p>Web developer</p>
          <p>Greater Gothenburg Metropolitan Area</p>
        </div>

      </div>
      <div className="coderContainer">
        {showCoder && 
          <img src={coder} className={`coder`} alt="svg of a coder from undraw"/>
        }

      </div>
      
    </div>
  )
}
