import React, { Component } from 'react'
import {useState} from 'react'
// import Display from './Display';
// Importing css file
// import './App.css';
/*
// Class Component
export default class App extends Component{
  state = {
    name : "Sairam",
  }
  
  render() {
    return(
      <div>
        <h2>Welcome {this.state.name}!</h2>
      </div>
    )
  }
}*/

/* //Functional Component
const App = () =>{
  // To store the variables in function components we need to use hooks
  // Use the method useState
  const [name,setName] = useState("Sai");
  return(
    <div>
      <h2>Welcome {name}</h2>
    </div>
  )

}
export default App;*/
/*
// Props : These are used to pass the data from one componenet to other
const App = () =>{
  // To store the variables in function components we need to use hooks
  // Use the method useState
  const [name, setName] = useState("Sairam");
  return(
    <div>
      <Display name = {name}/>
    </div>
  )

}
export default App;
*/
/* 
//CSS Styling
const App = () =>{
  const styling = {
    color:"skyblue",
    backgroundColor:"black",
    padding:"50px",
    textAlign:"center"
  }
  return(
    <div className="container">
    <h1 style={styling}>Welcome</h1>
      <h1>Welcome Sairam</h1>
    </div>
  )
}
export default App;
*/

/*
// Event Listeners

const App = () =>{
  const styling = {
    width: "300px",
    height : "200px",
    padding : "20px"
  }
  return(
    <button
      style={styling}
      onClick={()=>{
      console.log("Clicked1");
      console.log("Clicked2");
    }}>
    Click Here
    </button>
  )

}*/

/*Use State */
const App = () =>{
  const [count, setCount] = useState(0)
  return(
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count+1)}>Increment</button>
      <button onClick={() => setCount(count-1)}>Decrement</button>
    </div>
  )
}
export default App;