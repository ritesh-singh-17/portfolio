import React from 'react'
import { FaHeadphonesAlt } from 'react-icons/fa';
import contimg from "./images/contact3.png"
import ContactForm from './ContactForm';
const Contacts = () => {
    return (
        <>
            <div className="contactSection" id='Contacts'>
                <div className="contactTitle">
                    <h1><span className='icon'> <FaHeadphonesAlt /> </span> Get In  <span className='me'> Touch </span></h1>
                </div>
                <div className="contactContent">
                    <div className="contactContent1 row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12 contactform">
                            <ContactForm />
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12 contactimg">
                            <div className="contactimg1">
                                <img src={contimg} alt="" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contacts
