import React, { useState } from 'react'
import { BsPersonFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { RiMessageFill } from 'react-icons/ri';
import { FaHandPointRight } from 'react-icons/fa';


const ContactForm = () => {
    const [name, setName] = useState(true);
    const [email, setEmail] = useState(true);
    const [phone, setPhone] = useState(true);
    const [message, setMessage] = useState(true);

    return (
        <>
            <form action='https://formspree.io/f/xnqyljdg' method='POST' >
                <div className="form-group">
                    <div className="formInput inputName">
                        <i className={name ? "icon" : "icon2"}><BsPersonFill /></i>
                        <input className="input-field" type="text" required placeholder="Name" name='Name' onFocus={() => { return (setName(!name)) }} onBlur={() => { return (setName(!name)) }} />
                    </div>
                    <div className="formInput inputEmail">
                        <i className={email ? "icon" : "icon2"}><MdEmail /></i>
                        <input className="input-field" type="email" required placeholder="Email" name='Email' onFocus={() => { return (setEmail(!email)) }} onBlur={() => { return (setEmail(!email)) }} />
                    </div>
                    <div className="formInput inputPhone">
                        <i className={phone ? "icon" : "icon2"}><FaPhoneAlt /></i>
                        <input className="input-field" type="phone" required placeholder="Phone" name='Phone' onFocus={() => { return (setPhone(!phone)) }} onBlur={() => { return (setPhone(!phone)) }} />
                    </div>
                    <div className="formInput inputMessage">
                        <i className={message ? "icon" : "icon2"}><RiMessageFill /></i>
                        <textarea className="input-field" rows="04" cols="50" name="message" required placeholder='Message..' onFocus={() => { return (setMessage(!message)) }} onBlur={() => { return (setMessage(!message)) }}></textarea>
                    </div>
                    <div className="formInput inputSubmit">
                        <div className="inputSubmit1">
                            <i className="icon"><FaHandPointRight /></i>
                            <button class="btn btn-outline-primary" type="submit">SUBMIT</button>
                        </div>
                    </div>

                </div>
            </form>
        </>
    )
}

export default ContactForm
