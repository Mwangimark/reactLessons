import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
    const [inputcolor, inputsetcolor] = useState('')
    const [color, setColor] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'color') {
            inputsetcolor(value);
        };
    }


        const handleSubmit = (e) => {
            e.preventDefault()
            setSubmitted(true)
            let selColor = inputcolor.trim().toLowerCase()
            setColor(selColor)
        }

        return (
            <>
                <form onSubmit={handleSubmit}>
                    <label>Enter your color</label>
                    <input type='text' name='color' value={inputcolor} onChange={handleChange} placeholder='color' />
                    <button type='submit' >Submit</button>
                </form>
                {submitted && <Child name={color} />}
            </>

        );
    };


export default Parent