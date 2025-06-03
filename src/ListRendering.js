import React from 'react'

const ListRendering = () => {
    const Fruitlist = ['mango', 'banana', 'orange', 'apple']
    return (
        <>
            <h5>Lesson 5: list rendering </h5>
            <ul>
                {Fruitlist.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
            <p>Total FRuits{Fruitlist.length}</p>
        </>
    )
}

export default ListRendering