import "./portfolio.scss"
import { BsGithub } from 'react-icons/bs'
import cpp from './img/Cpp.png'
import plannerapp from './img/plannerapp.png'
import historyapp from './img/historyapp.png'
import todoapp from './img/todoapp.png'
import tictactoe from './img/tictactoe.png'
import parallaxeffect from './img/parallaxeffect.png'
import landingpage from './img/landingpage.png'
import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react"
import Gallery from '../gallery/gallery';

function Portfolio() {

  useEffect(() => {
    AOS.init({ duration: 1000, delay: "100" });
  }, []);

  return (
    <div className='portfolioContainer'>
      {/*Intro*/}
      <svg className="heading">
        <text x="50%" y="50%" dy=".5em">
          Portfolio 
        </text>
      </svg>
      <p className="portfolioParagraph"> I am driven by my passion for creating exceptional online experiences.
        With a genuine interest in understanding technology and people.
        I strive to deliver innovative and user-friendly websites that leave a lasting impact.
        I believe in the power of technology to connect people and enhance their lives, and I am dedicated to bringing that vision to life through my coding skills and attention to detail.
        With every project, I approach it with excitement and a commitment to excellence, ensuring that the final product exceeds expectations. </p>
      <p className="portfolioParagraph">Here are some of the projects I've worked on. Feel free to scroll through them. To see more visit my: 
        <a className='linkSocials' href="https://github.com/navidasaman/" target="_blank" rel="noopener noreferrer">
          GitHub <BsGithub />
        </a>
      </p>
      {/*Projects*/}
      <div data-aos="fade-up">
        < Gallery  />
      </div>
      {/*Language/Frameworks/Libraries/Softwares Experience*/}
      <div className="experienceInContainer">
        <h3 className="experienceIn" data-text="Experience in:">Experience in:</h3>
      </div>
      <div className="skills" data-aos="fade-up">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" alt="html5 icon svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" alt="css3 icon svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt="javascript icon svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" alt="typescript icon svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="react icon svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg" alt="mysql icon svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs icon svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" alt="bootstrap icon svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/d3js/d3js-original.svg" alt="d3.js icon svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/filezilla/filezilla-plain.svg" alt="filezilla icon svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg" alt="git icon svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt="github icon svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/inkscape/inkscape-plain-wordmark.svg" alt="inkscape icon svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" alt="java icon svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg" alt="php icon svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="sass icon svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" alt="TailwindCSS icon svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-plain-wordmark.svg" alt="visual studio code icon svg" />
        <img src={cpp} alt="C++ icon" ></img>
      </div>
    </div>
  )
}

export default Portfolio
