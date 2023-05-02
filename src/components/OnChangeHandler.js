import React from "react";
import { useState } from "react";

const OnChangeHandler = () =>{
    const [user, setUser] = useState("")
    const handler = (e) =>{
        setUser(e.target.value)
    }

    return(
        <div>
            <input 
                type="text"
                placeholder="username"
                name="user"
                onChange={handler}
            />
            <br/><br/>
            {user}
        </div>
    )
}

export default OnChangeHandler;