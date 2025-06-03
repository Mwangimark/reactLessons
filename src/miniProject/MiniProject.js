import React, { useEffect, useState } from 'react'
import './MiniProject.css'

const MiniProject = () => {
    const [quote, setQuote] = useState('Click the button to get a quote')
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [fetchTrigger, setFetchtrigger] = useState(false)
    const [time, setTime] = useState(new Date())

    const handleClick = (e) => {
        fetchQuote()
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');

    const fetchQuote = () => {
        fetch("https://api.adviceslip.com/advice")
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                setQuote(data.slip.advice);
                setLoading(false)

            })
            .catch((err) => {
                setError(err.message);
                setLoading(false)

            });
    }


    useEffect(() => {
        fetchQuote()
    }, []);

    return (
        <>
            <div className='container'>
                <div className='time' >
                    <div>{hours}</div>
                    <div>{minutes}</div>
                    <div>{seconds}</div>
                </div>

                <div className='quote' >

                    {loading && <p>Loading users...</p>}
                    {error && <p>Error: {error}</p>}

                    <h4>{quote}</h4>
                </div>
                <button onClick={handleClick}> Qet Quote</button>

            </div>
        </>
    )
}

export default MiniProject