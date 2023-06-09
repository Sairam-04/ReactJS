import React, {useContext} from 'react'
import { store } from '../../App'

const Count = () => {
  const [cartData, setCartData] = useContext(store)
  return (
    <div className='card'>
      <div className='card-body'>
        <h1>Count: {cartData.length}</h1> 

      </div>
      
    </div>
  )
}

export default Count
