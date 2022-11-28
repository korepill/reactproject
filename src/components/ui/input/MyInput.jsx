import React from "react";
import './MyInput.css'

const MyInput = (props) => 
{
    return (
        <input className='myInp' {...props}/>
    )
}

export default MyInput