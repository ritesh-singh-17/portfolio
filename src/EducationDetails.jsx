import React from 'react'

const EducationDetails = (props) => {
  return (
    <>
      <div className=" d-flex flex-wrap edDetails">
        <div className="col-lg-3 col-md-4 col-sm-4 col-12 instImage img-fluid">
            <img src={props.imgsrc} alt="" />
        </div>
        <div className="col-lg-9 col-md-8 col-sm-8 col-12 instDetails">
            <div className="instDegree">
                <h3>{props.degree}</h3>
            </div>
            <div className="instName">
                <h6>{props.inst}</h6>
            </div>
            <div className="yearAndStatus">
                <h5>{props.yearStatus}</h5>
            </div>
        </div>
      </div>
    </>
  )
}

export default EducationDetails
