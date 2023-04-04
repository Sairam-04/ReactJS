import React, {Component} from 'react'

export default class Props extends Component{
    // Props : These are used to pass the data from one componenet to other
    render(){
        return(
            <div>
                <h2>I am from display Component</h2>
                <h2>{this.props.data}</h2>
            </div>
        )
    }
}