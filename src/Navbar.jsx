import React, { useState } from 'react'

const Navbar = () => {
    const [nav,setNav]=useState(false);
    const changeNav = () =>{
        if(window.scrollY>60){
            setNav(true);
        }else{
            setNav(false);
        }
    }
    window.addEventListener('scroll', changeNav);
    return (
        <div>
            <div className={nav ? "nav-bg fixed-top sticky container-fluid" : "nav-bg container-fluid"}>
                <div className="row">
                    <div className=" col-11 mx-auto p-0">
                        <nav className="navbar navbar-expand-lg ">
                            <div className="container-fluid">
                                <a className={nav ? "navbar-brand nav-heading sticky" : "navbar-brand nav-heading"} href="#">Portfolio.</a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav_lists">
                                        <li className="nav-item">
                                            <a className={nav ? "nav-link sticky" : "nav-link"} href="#">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className={nav ? "nav-link sticky" : "nav-link"} href="#About">About</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className={nav ? "nav-link sticky" : "nav-link"} href="#Skills">Skills</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className={nav ? "nav-link sticky" : "nav-link"} href="#Education">Education</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className={nav ? "nav-link sticky" : "nav-link"} href="#Work">Work</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className={nav ? "nav-link sticky" : "nav-link"} href="#Contacts">Contacts</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
