import React from 'react'
import ProjectsData from './ProjectsData'
import { FaProjectDiagram } from 'react-icons/fa'
import ProjectBox from './ProjectBox'

const Projects = () => {
    return (
        <>
            <div className="projectSection" id='Work'>
                <div className="projectsTitle">
                    <h1><span className='icon'> <FaProjectDiagram /> </span> Projects <span className='me'> Made </span></h1>
                </div>
                <div className="d-flex flex-wrap projectcontdiv">
                    {ProjectsData.map((val) => {
                        return (
                            <ProjectBox
                                key={val.id}
                                name={val.name}
                                imgsrc={val.imgsrc}
                            />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Projects
