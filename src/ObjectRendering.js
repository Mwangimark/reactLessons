import React from 'react'

const ObjectRendering = () => {
    const books = [
        { id: 1, title: "Atomic Habits", author: "James Clear" },
        { id: 2, title: "Deep Work", author: "Cal Newport" },
        { id: 3, title: "The 48 Laws of Power", author: "Robert Greene" },
        { id: 4, title: "Can't Hurt Me", author: "David Goggins" },
        { id: 5, title: "Start With Why", author: "Simon Sinek" }
    ];

    return (
        <>
            <h5>Lesson 6: rendering Objects</h5>
            <ul>
                {books.map((book) => (
                    <>
                        <li key={book.id}>
                            <strong>{book.title}</strong> by <em>{book.author}</em>
                        </li>
                    </>
                ))}
            </ul>
        </>
    )
}

export default ObjectRendering