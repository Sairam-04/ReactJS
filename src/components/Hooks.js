import React, { useState } from 'react'

const Hooks = () =>{
    // To store the variables in function components we need to use hooks
    // Use the method useState
    const [msg, setMsg] = useState("You are learning Hooks") 
    return(
        <div>
            {msg}
        </div>
    )
}

export default Hooks;