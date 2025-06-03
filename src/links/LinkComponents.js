import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './About'
import Contact from './Contact'

const LinkComponents = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/routers/about">About</Link></li>
                    <li><Link to="/routers/contact">Contact</Link></li>
                </ul>
            </nav>

            <Routes>
                <Route path='/about' element={<About/>} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </div>
    )
}

export default LinkComponents