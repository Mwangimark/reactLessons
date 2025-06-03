import React, { useState } from 'react'
import ToogleBUttonChild from './ToogleBUttonChild'

const ToogleButton = () => {
    const [showChild,setShowChild] = useState(true)

  return (
    <div>
        <button onClick={()=> setShowChild(prev => !prev)}>{showChild? 'Hide':'Show'}</button>
        {showChild && <ToogleBUttonChild/>}
    </div>
  )
}

export default ToogleButton