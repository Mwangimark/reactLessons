import React, { useState } from 'react'

const ConditionalRendering = () => {
    const [isLogged, setisLogged] = useState(true)

    const handleClick = () => {
        setisLogged(prev => !prev)
    }


    return (
        <div>
            <button onClick={handleClick}>
                {isLogged ? 'Hide Details' : 'Show Details'} </button>
            {isLogged && <p>Here are some awesome details!</p>}
        </div>
    )
}
 
export default ConditionalRendering