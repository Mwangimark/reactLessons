import React, { useEffect } from 'react'

const ToogleBUttonChild = () => {
    useEffect(() => {
        console.log("Child mounted")
        return () => {
            console.log("Child unmounted")
        }
    }, [])

    return (
        <div>I am the child component</div>
    )
}

export default ToogleBUttonChild