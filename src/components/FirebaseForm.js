import React, { useEffect, useState } from 'react'
import axios from 'axios'

const FirebaseForm = () => {
    const [displaydata, setDisplayData] = useState([])
    const [data, setData] = useState({
        username:"",
        email:"",
        password:"",
        confirmPassword:"",
    })
    const {username, email, password, confirmPassword} = data
    const changeHandler = e =>{
        setData({...data, [e.target.name]:e.target.value})
    }
    const submitHandler = e =>{
        e.preventDefault()
        axios.post("https://wired-aspect-382008-default-rtdb.firebaseio.com/register.json", data).then(
            () => alert("Submitted Successfully!!!")
        )
    }
    useEffect(()=>{
        axios.get("https://wired-aspect-382008-default-rtdb.firebaseio.com/register.json").then(
            response => setDisplayData(response.data)
        )
    },[])
    return (
        <div>
            <form onSubmit={submitHandler}>
                <label for="username">UserName:</label>
                <input type='text' id='username' name='username' value={username} onChange={changeHandler}/><br/>
                <label for="email">Email:</label>
                <input type='email' id='email' name='email' value={email} onChange={changeHandler}/><br/>
                <label for="password">Password:</label>
                <input type='password' id='password' name='password' value={password} onChange={changeHandler}/><br/>
                <label for="confirmPassword">Confirm Password:</label>
                <input type='password' id='confirmPassword' name='confirmPassword' value={confirmPassword} onChange={changeHandler}/><br/>
                {password !== confirmPassword ? <p style={{"color":"red"}}>Passwords are not matching</p> : null}
                <input type='submit' value={"Submit"}/>
            </form>
            <div>
                Username : {displaydata.username}
                Email : {displaydata.email} 
            </div>
        </div>
    )
}

export default FirebaseForm
