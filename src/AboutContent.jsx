import React from 'react'

const AboutContent = () => {
  return (
    <>
      <div>

        <div className="title">
          <h3> I'm Ritesh </h3>
        </div>
        <div className="subTitle">
          <h5> Full Stack MERN Developer </h5>
        </div>
        <div className="content">
          <p>
            Currently, an undergraduate in Electronics Engineering from REC Sonbhadra,
            I am a proficient <b>Full Stack Developer</b> with expertise in <b>MERN Development</b>.
            I am very passionate about <b>problem solving</b> & adept at developing websites using technologies such as
            React.JS, Node.JS, Express.JS, along with databases like MySQL and MongoDB.
            Working for myself to improve my skills.
          </p>
        </div>
        <div className="phoneEmail">
          <p><span> Phone : </span> +91 63955-62965</p>
          <p><span> Email : </span><a href="mailto:singh.riteshkumar0633@gmail.com"> singh.riteshkumar0633@gmail.com </a></p>
        </div>
        <div className="resumebtn">
          <a href="https://drive.google.com/file/d/1xO6sFutvTL1Z_fl7KoKNwlxmnDHyqdVw/view?usp=sharing" target='_blank' rel='noreferrer'> Resume </a>
        </div>
      </div>
    </>
  )
}

export default AboutContent
