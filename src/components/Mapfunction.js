import React from 'react'

function Mapfunction() {
    const arr = ["React Js", "Node Js", "Express Js","Angular Js"]
    const arr_obj = [
        {
            id:1,
            title:"React Js",
        },
        {
            id:2,
            title:"Node Js",
        },
        {
            id:3,
            title:"Express Js",
        },
        {
            id:4,
            title:"Angular Js",
        }
    ]
    return(
        <div>
            {
                // arr.map(
                //     (value, index) => <li key={index}>{value}</li>
                // )
                arr_obj.map(
                    (value) => <li key={value.id}>{value.title}</li>
                )
            }
        </div>
    )
}

export default Mapfunction;