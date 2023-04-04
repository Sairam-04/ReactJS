import React, { Component } from 'react'

export default class Class_component extends Component{
    //Storing data in class Component
    state = {
        name:"Sairam",
        id:123,
    }
    render(){
        return(
            <div>
                <p>Hello</p>
                <h1>Welcome {this.state.name}!!!</h1>
                <h1>Your Id is {this.state.id}</h1>
            </div>
        )
    }
}
// const Class_component = () =>{
//     return(
//         <div>
//             <p> Hello </p>
//         </div>
//     )
// }
// export default Class_component;

