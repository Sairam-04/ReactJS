import React, { useEffect, useState } from 'react'

const FetchExampleApp = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos").then(
            response => response.json()
        ).then(
            json => setData(json)
        )
    },[])
    return (
        <div>
            {data.map(value => <li key={value.userId}>{value.title}</li>)} 
        </div>
    )
}

export default FetchExampleApp
