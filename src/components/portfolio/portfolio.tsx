import "./portfolio.scss"
import { BsGithub } from 'react-icons/bs'
import cpp from './img/Cpp.png'
import restapi from './img/REST.png'
import postman from './img/Postman.png'
import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react"
import Gallery from '../gallery/gallery';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';

function Portfolio() {
  const Root = styled('div')(() => ({
    width: '100%',
  }));

  useEffect(() => {
    AOS.init({ duration: 1000, delay: "100" });
  }, []);

  const handleGithubLink = () => {
    window.open("https://github.com/navidasaman", "_blank", "noopener noreferrer");
  };

  const skills = [
    { title: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg", alt: "HTML5 SVG icon" },
    { title: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg", alt: "CSS SVG icon" },
    { title: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg", alt: "JavaScript SVG icon" },
    { title: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg", alt: "TypeSCript SVG icon" },
    { title: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg", alt: "React SVG icon" },
    { title: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg", alt: "MySQL SVG icon" },
    { title: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg", alt: "Node.js SVG icon" },
    { title: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg", alt: "Java SVG icon" },
    { title: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg", alt: "PHP SVG icon" },
    { title: "C++", icon: cpp, alt: "C++ icon" },
    { title: "SASS/SCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg", alt: "SASS SVG icon" },
    { title: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg", alt: "Bootstrap SVG icon" },
    { title: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg", alt: "TailwindCSS SVG icon" },
    { title: "D3.JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/d3js/d3js-original.svg", alt: "D3,js SVG icon" },
    { title: "Git", icon: "ttps://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg", alt: "Git SVG icon" },
    { title: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg", alt: "GitHub SVG icon" },
    { title: "FileZilla", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/filezilla/filezilla-plain.svg", alt: "FileZilla SVG icon" },
    { title: "Markdown", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg", alt: "Markdown SVG icon" },
    { title: "InkScape", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/inkscape/inkscape-plain-wordmark.svg", alt: "InkScape SVG icon" },
    { title: "Visual Studio Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-plain-wordmark.svg", alt: "Visual Studio Code SVG icon" },
    { title: "ExpressJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg", alt: "ExpressJS SVG icon" },
    { title: "Android Studio", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original-wordmark.svg", alt: "Android Studio SVG icon" },
    { title: "Postman", icon: postman, alt: "Postman SVG icon" },
    { title: "RESTful API", icon: restapi, alt: "REST API SVG icon" },
  ];

  return (
    <div className='portfolioContainer'>
      {/*Intro*/}
      <svg className="heading">
        <text x="50%" y="50%" dy=".5em">
          Portfolio
        </text>
      </svg>
      <p className="portfolioParagraph" data-aos="fade-up"> I am driven by my passion for creating exceptional online experiences.
        With a genuine interest in understanding technology and people.
        I strive to deliver innovative and user-friendly websites that leave a lasting impact.
        I believe in the power of technology to connect people and enhance their lives, and I am dedicated to bringing that vision to life through my coding skills and attention to detail.
        With every project, I approach it with excitement and a commitment to excellence, ensuring that the final product exceeds expectations. </p>

      {/*Projects*/}
      <div className="gallery" data-aos="fade-up">
        < Gallery />
      </div>
      <p className="portfolioParagraphB">Here are some of the projects I've worked on. Feel free to scroll through them. To see more visit my:</p>
      <button onClick={handleGithubLink} className="button">
        <span className="text">GitHub |</span> <span className="icon"> <BsGithub /></span>
      </button>
      {/* <hr style={{ backgroundColor: 'aqua', marginTop: '5%', borderRadius: '50%', opacity: '0.1' }} /> */}
      {/*Language/Frameworks/Libraries/Softwares Experience*/}
      <div className="experienceInContainer">
        <Root>
          <Divider sx={{
            "&::before, &::after": {
              borderColor: "#fff",
              opacity: '0.15',
              borderRadius: '40%',
              height: 2,
            },
          }}>
            <h3 className="experienceIn" data-text="Experience in:">Experience in:</h3>
          </Divider>
        </Root>
      </div>
      <div className="skills" data-aos="fade-up">
        {skills.map((skill, index) => (
          <Tooltip key={index} title={skill.title} arrow>
            <img src={skill.icon} alt={skill.alt} />
          </Tooltip>
        ))}
      </div>

    </div>
  )
}

export default Portfolio
