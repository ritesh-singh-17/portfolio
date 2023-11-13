import React from "react";
import { useNavigate } from "react-router-dom";
const Error = (props) => {
    const navigate= useNavigate();
    
    return (
        <>
            <h1> 404 Error Page </h1>
            <p> Sorry! Page Not Found</p>
            <button onClick={()=> {navigate(-1)}}> Go Back </button>
        </>
    )
}
export default Error;