import React from "react";
import { useState } from "react";

const Form_Submission = () =>{

    const [data, setData] = useState({
        username:"",
        password:"",
    })

    const {username, password} = data;

    const onChange = e =>{
        setData({...data, [e.target.name]:[e.target.value]});
    }

    const submitHandler = e =>{
        e.preventDefault()
        console.log("Submitted..")
    }
 

    return(
        <div>
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={username}
                    onChange={onChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={onChange}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form_Submission;