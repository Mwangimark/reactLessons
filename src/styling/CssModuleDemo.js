import React, { useState } from 'react'
import './Samplestyle.css';

const CssModuleDemo = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setForm(prevData => ({
            ...prevData, [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Hellow ${form.name}!, you have successfully submitted your form`)
    }


    return (
        <form className='form-container' onSubmit={handleSubmit}>
            <label>Full name </label>
            <input type='text' name='name' value={form.name} onChange={handleChange} required />

            <label>Email</label>
            <input type='email' name='email' value={form.email} onChange={handleChange} required />

            <label>Message </label>
            <textarea type='text-area' name="message" value={form.message} onChange={handleChange} required />

            <button type='submit'>Submit</button>
        </form>
    )
}

export default CssModuleDemo