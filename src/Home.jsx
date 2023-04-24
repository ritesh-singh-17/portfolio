import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
import profilepic from "./images/profilePic.jpg"
import SocialButtons from './SocialButtons';

const Home = () => {
  return (
    <>
      <div className="homeDiv row">
        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12 greetintro">
          <div className="greetintro1">
            <div className="text-1">Hi there,</div>
            <div className="text-2">This is <span> Ritesh Singh </span></div>
            <div className="text-3"> And I'm a <span>
              <Typewriter
                words={['Student', 'Web Developer', 'Frontend Developer']}
                loop={true}
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={30}
              />
            </span></div>
            <div className="aboutmebtn">
              <a href="mailto:singh.riteshkumar0633@gmail.com"> Hire Me </a>
            </div>
            <div className='homeSocialIcons'>
              <SocialButtons />
            </div>
          </div>
        </div>
        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-11 col-12 profilepicdiv">
          <div className="profilePic1">
            <img src={profilepic} alt="myPic" className='dp img-fluid' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
