import React from "react";
import { useState, useEffect } from "react";

// useEffect :  useEffect is triggered after the return statement
// It takes two parameters useEffect(function, dependencies)

function Use_Effect(){
    const [count, setCount] = useState(0)
    useEffect(()=>{
        console.log("Clicked")
        console.log(count)
    },[count])
    // Whenever count value changes the useEffect function is triggered
    return(
        <div>
            <h1>Your Count is {count} ...</h1>
            <button onClick={() => {setCount(count+1)}}> Click me</button>
        </div>
    )
}

export default Use_Effect;