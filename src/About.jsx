import React from 'react'
import { IoPersonSharp } from 'react-icons/io5';
import aboutimage from "./images/aboutPic.jpg"
import AboutContent from './AboutContent';

const About = () => {
  return (
    <>
      <div className="aboutSection" id='About'>
        <div className="aboutTitle">
          <h1><span className='icon'> <IoPersonSharp /> </span> About  <span className='me'> Me </span></h1>
        </div>
        <div className="aboutPicContent m-0 row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 aboutPic">
            <div className="aboutPic1">
              <img src={aboutimage} alt="" className='img-fluid'/>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 col-sm-12 col-12 aboutContent">
            <div className="aboutContent1">
              <AboutContent />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
