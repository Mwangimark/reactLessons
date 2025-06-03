import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('component mounted')
    })

    useEffect(() => {
        console.log(`count updated to :${count}`)
    }, [count])

    useEffect(() => {
        return () => {
            console.log('component will not mount')
        }
    }, [])


    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}> Increase</button>
        </div>
    )
}

export default UseEffect