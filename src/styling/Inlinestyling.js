import React from 'react'

const Inlinestyling = () => {
    const headingSTyle ={
        color:"green",
        fontSize:"20px",
        textAlign:"center"
    }
    const p_style = {
        color:"blue",
        fontSize:"10px"
    }
    return (
        <>
            <h3 style={headingSTyle}>Styling lessons</h3>
            <p style={p_style}>THis is a class of styling , we are styling using inline method</p>

        </>
    )
}

export default Inlinestyling