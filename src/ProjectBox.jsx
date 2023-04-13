import React from 'react'
import { AiFillEye } from 'react-icons/ai';
import { BiCode } from 'react-icons/bi';
const ProjectBox = (props) => {
    return (
        <>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12 cardDiv">
                <div className="card">
                    <div className="front">
                        <img src={props.imgsrc} alt={props.name} />
                        <div className="frontTitle">
                            <h3>{props.name}</h3>
                        </div>
                    </div>
                    <div className="back">
                        <img src={props.imgsrc} alt={props.name} />
                        <h6>
                            Portfolio Website Built Using React JS. Various libraries of React have been used.
                        </h6>
                        <div className="backlinks">
                            <a href={props.url} target='_blank'> <h5> <span> <AiFillEye /> </span> View</h5> </a>
                            <a href={props.code} target='_blank'> <h5> <span> <BiCode /> </span> Code</h5> </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectBox
