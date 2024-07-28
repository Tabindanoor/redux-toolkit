import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeItem } from './cartSlice'
const Cart = () => {

    const items = useSelector(state=>state.cart.items)
    const dispatch = useDispatch()
  return (
    <div>
        <h1>Cart</h1>
        {
            items && items?.map((data)=>(
                <div>
                    <li>
                        <h2>{data.title}</h2>
                        <h2>{data.quantity}</h2>
                        <button onClick={()=>dispatch(removeItem(data.id))} >remove</button>
                    </li>
                </div>
            ))
        }
    </div>
  )
}

export default Cart