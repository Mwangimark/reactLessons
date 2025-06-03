import React, { useState } from 'react'

const ContactForm = () => {
    const [formData, setformData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setformData(prevData => ({
            ...prevData, [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (formData.email == '' || formData.message =='' || formData.name == ''){
           alert("all fields should be filled up")
        }
        else{
            alert(`THank you, ${formData.name}! we have received your message`)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Full name</label>
            <input type='text' name='name' value={formData.name} onChange={handleChange} />
            <label>Email</label>
            <input type='email' name='email' value={formData.email} onChange={handleChange} />
            <label>Message</label>
            <textarea type='textarea' name='message' value={formData.message} onChange={handleChange} />
            <button type='submit' >Submit</button>
        </form>
    )
}

export default ContactForm