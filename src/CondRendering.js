import React, { useState } from 'react'

const CondRendering = () => {
  const [login, setLogin] = useState(false)

  const handleOnClick = () => {
    if (!login) {
      alert("welcome back,Mark")
    }else {
      alert("youve been logged out")
    }
    setLogin(prev => !prev)
  }

  return (
    <div>
      <h5>THis is lesson 4: conditional rendering</h5>
      <button onClick={handleOnClick}>{login ? "Logout" : "Login"}</button>
    </div>
  )
}

export default CondRendering