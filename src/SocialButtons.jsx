import React from 'react'
import { FaLinkedinIn, FaInstagram, FaGithub, FaTwitter, FaTelegramPlane } from 'react-icons/fa';

const SocialButtons = () => {
    return (
        <div className="socialButtons">
            <a href='https://www.linkedin.com/in/ritesh-kumar-singh-a202b71ba/' target='_blank' className="btn linkedin"><FaLinkedinIn/></a>
            <a href='https://twitter.com/iamriteshsingh_' target='_blank' className="btn twitter"><FaTwitter/></a>
            <a href='https://www.instagram.com/iamriteshsingh__/' target='_blank' className="btn instagram "><FaInstagram/></a>
            <a href='https://t.me/itsriteshsingh' target='_blank' className="btn telegram"><FaTelegramPlane/></a>
            <a href='https://github.com/ritesh-singh-17' target='_blank' className="btn github"><FaGithub/></a>
        </div>
    )
}

export default SocialButtons
