import React from 'react'
import learning from "./images/learning.png"
import growing from "./images/growing.png"
import rising from "./images/rocket.png"
import { BsFillArrowRightCircleFill, BsFillHeartFill } from 'react-icons/bs'
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import SocialButtons from './SocialButtons'
const Footer = () => {
    return (
        <>
            <div className="footerSection">
                <div className="row footerContent">
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12 thankMessage">
                        <div>
                            <h3> Ritesh's Portfolio </h3>
                            <h6>Thank you for visiting my personal portfolio website. </h6>
                            <h6>Connect with me over socials.</h6>
                            <h6>Keep Learning <img src={learning} alt="" /></h6>
                            <h6>Keep Growing <img src={growing} alt="" /></h6>
                            <h6>Keep Rising <img src={rising} alt="" /></h6>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-5 col-12 quickLinks">
                        <div className="quickLinks1">
                            <h3> Quick Links </h3>
                            <div className="links">
                                <a href="#"> <span><BsFillArrowRightCircleFill /></span> Home </a>
                                <a href="#About"> <span><BsFillArrowRightCircleFill /></span> About </a>
                                <a href="#Skills"> <span><BsFillArrowRightCircleFill /></span> Skills </a>
                                <a href="#Education"> <span><BsFillArrowRightCircleFill /></span> Education </a>
                                <a href="#Work"> <span><BsFillArrowRightCircleFill /></span> Work </a>
                                <a href="#Contacts"> <span><BsFillArrowRightCircleFill /></span> Contacts </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-7 col-12 contactInfo">
                        <div className="contactInfo1">
                            <h3> Contact Info </h3>
                            <h6><span><FaPhoneAlt /></span> +91-63955-62965 </h6>
                            <h6><span><MdEmail /></span> singh.riteshlumar0633@gmail.com </h6>
                            <h6><span><MdLocationOn /></span> Sonbhadra, India </h6>
                            <div className="socialIcons">
                                <SocialButtons />
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="footerFoot">
                    <h5> Designed by <span> Ritesh Singh </span> <span className='icon' ><BsFillHeartFill /></span></h5>
                </div>
            </div>
        </>
    )
}

export default Footer
