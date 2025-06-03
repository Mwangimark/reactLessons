import React, { useState } from 'react'

const NameForm = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        c_password: '',
    });

    const handleChange = (e) => {
        const{name,value} = e.target;
        setForm( prevData => ({
            ...prevData,[name]:value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.password == form.c_password) {
            alert(`Welcome, ${form.name}! Your account is created successfuly`)
        } else {
            alert("Passwords does not match")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Full name</label>
            <input type='text' name='name' value={form.name} onChange={handleChange} />
            <label>Email</label>
            <input type='email' name="email" value={form.email} onChange={handleChange} />
            <label>Password</label>
            <input type='password' name="password" value={form.password} onChange={handleChange} />
            <label>Confirm Password</label>
            <input type='password' name="c_password" value={form.c_password} onChange={handleChange} />
            <button type='submit'>Great</button>
        </form>
    )
}

export default NameForm