import React from 'react'
import { FaGraduationCap } from 'react-icons/fa';
import InstituteDetailsData from './InstituteDetailsData';
import EducationDetails from './EducationDetails';
const Education = () => {
    return (
        <>
            <div className="eduSection" id='Education'>
                <div className="eduTitle">
                    <h1><span className='icon'> <FaGraduationCap /> </span> My <span className='education'> Education </span></h1>
                </div>
                <div className="eduDetails">
                    <div className="eduDetails1">
                        {InstituteDetailsData.map((val) => {
                            return (
                                <EducationDetails
                                    key={val.id}
                                    imgsrc={val.imgsrc}
                                    degree={val.degree}
                                    inst={val.inst}
                                    yearStatus={val.yearStatus}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Education
