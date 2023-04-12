import React from 'react'
import { FaCode } from 'react-icons/fa';
import SkillsData from './SkillsData';
import SkillsBox from './SkillsBox';


const Skills = () => {
    return (
        <>
            <div className="skillSection" id='Skills'>
                <div className="skillsTitle">
                    <h1><span className='icon'> <FaCode /> </span> Skills & <span className='me'> Abilities </span></h1>
                </div>
                <div className="d-flex flex-wrap skillscontdiv">
                    {SkillsData.map((val) => {
                        return (
                            <SkillsBox
                                key={val.id}
                                imgsrc={val.imgsrc}
                                name={val.name}
                            />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Skills
