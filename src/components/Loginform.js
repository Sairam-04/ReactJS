import React,{useState} from 'react'

const Loginform = () => {
  const [data, setData] = useState({
    username:"",
    password:"",
  })
  const {username, password} = data;
  const changeHandler = e =>{
    setData({...data,[e.target.name]:[e.target.value]})
  }
  const submitHandler = e =>{
    e.preventDefault()
    console.log(data)
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type='text' name='username' value={username} onChange={changeHandler} /><br/>
        <input type='password' name='password' value={password} onChange={changeHandler} /><br/>
        <button type='submit' name='submit'>Login</button>
      </form>
    </div>
  )
}

export default Loginform
