import React, { useContext, useState } from 'react'
import { store } from '../../App'

const Display = () => {
  const [cartData, setCartData] = useContext(store)
  const [name, setName] = useState("")
  const submitHandler = (e) =>{
    e.preventDefault()
    setCartData([...cartData, {brandname: name}])
    setName("")
  }
  return (
    <div className='card'>
      <div className='card-body'>
        {cartData.map((item, index)=> <h3 key={index} className='card-title'>{item.brandname}</h3>)}
        <form onSubmit={submitHandler}>
          <input 
              type='text'
              placeholder='Brand Name'
              onChange={(e) => setName(e.target.value)}
          />
          <input 
              type='submit'
              value="Add"
          />
        </form>
      </div>
      
    </div>
  )
}

export default Display
