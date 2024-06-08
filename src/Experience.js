import React from 'react'
import { FaBriefcase } from 'react-icons/fa'

const Experience = () => {
    return (
        <>
            <div className="experienceSection experience" id='Work'>
                <div className="experienceTitle">
                    <h1><span className='icon'> <FaBriefcase /> </span> My <span className="exp">Experience</span></h1>
                </div>
                <div className="timeline">
                    <div className="cont left">
                        <div className="content">
                            <div className="tag">
                                <h4>GITS India Solutions Pvt. Ltd.</h4>
                            </div>
                            <div className="desc">
                                <h5>Full Stack Developer</h5>
                                <p>February 2023 - October 2023</p>
                                <p>ReactJS, NodeJS, MongoDB, PHP, MySQL</p>
                            </div>
                        </div>
                    </div>
                    <div className="cont right">
                        <div className="content">
                            <div className="tag">
                                <h4>HealMeRight</h4>
                            </div>
                            <div className="desc">
                                <h5>Software Developer</h5>
                                <p>October 2023 - February 2024</p>
                                <p>Node.js, MongoDB, EJS, Passport.js</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience
