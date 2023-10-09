import React from 'react';
import { CircleLoader } from 'react-spinners';
import './loader.scss'
import Typewriter from "typewriter-effect";

const Loader: React.FC = () => {
  return (
    <div className="sweet-loading">
    <div className='loadingContainer'>
      <CircleLoader size={53} color={'aqua'} loading={true} />
      <div className='infoContainer'>
        <div className='name'>Navida Saman</div>
        <div className='workTitle'>Web Developer
          <span className='loadingDots'>
              <Typewriter
              options={{
                  autoStart: true,
                  loop: true,
              }}
              onInit={(typewriter) => {
              typewriter
                  .typeString("...")
                  .deleteAll()
                  .start();
              }}
              />
          </span>
        </div> 
        </div>        
      </div>
    </div>
  );
};

export default Loader;