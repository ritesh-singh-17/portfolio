import React from 'react'

const AboutContent = () => {
  return (
    <>
      <div>

        <div className="title">
          <h3> I'm Ritesh </h3>
        </div>
        <div className="subTitle">
          <h5> Full Stack Developer </h5>
        </div>
        <div className="content">
          <p>
            I am a Full Stack Web Developer.
            I am an Electronics Engineering Undergraduate from REC Sonbhadra.
            I am very passionate about improving my coding skills & developing websites.
            I build full stack websites using React.JS, Node.JS, Express.JS and work on databases like MySQL, MongoDB.
            Working for myself to improve my skills.
          </p>
        </div>
        <div className="phoneEmail">
          <p><span> Phone : </span> +91 63955-62965</p>
          <p><span> Email : </span><a href="mailto:singh.riteshkumar0633@gmail.com"> singh.riteshkumar0633@gmail.com </a></p>
        </div>
        <div className="resumebtn">
          <a href="https://drive.google.com/file/d/1mjpRhsC0FJ6RWk9K-gbMBt0I7ez6VvmR/view?usp=sharing" target='_blank' rel='noreferrer'> Resume </a>
        </div>
      </div>
    </>
  )
}

export default AboutContent
