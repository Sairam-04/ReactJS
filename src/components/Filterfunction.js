import React from "react";

function Filterfunction(){
    const arr = ["sairam", "sai", "ram", "xyz"]
    const filteredarr = arr.filter(name=> name.includes("a"))
    return(
        <div>
            {
                filteredarr.map(value => <li>{value}</li>)
            }
        </div>        
    )
}

export default Filterfunction;