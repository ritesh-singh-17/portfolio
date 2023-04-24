import React from 'react'

const SkillsBox = (props) => {
  return (
    <>
      <div className='col-lg-4 col-md-6 col-sm-6 col-12 skillsmallbox'>
        <div className="skillsmallbox1">
          <img src={props.imgsrc} alt={props.name} className='icon' />
          <div className="iconName">
            <h3 >{props.name}</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default SkillsBox
