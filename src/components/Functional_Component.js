import React, { useState } from 'react'

const Functional_Component = () =>{
    // To store the variables in function components we need to use hooks
    // Use the method useState
    const [name,setName] = useState("Sai");
    return(
      <div>
        <h2>Welcome {name}</h2>
      </div>
    )
  
}

export default Functional_Component;