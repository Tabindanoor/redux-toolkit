// import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { removeItem } from './cartSlice'
// const Cart = () => {

//     const items = useSelector(state=>state.mycart.items)
//     const dispatch = useDispatch()
//   return (
//     <div>
//         <h1>Cart</h1>
//         {
//             items && items?.map((data)=>(
//                 <div>
//                     <li>
//                         <h2>{data.title}</h2>
//                         <h2>{data.quantity}</h2>
//                         <button onClick={()=>dispatch(removeItem(data.id))} >remove</button>
//                     </li>
//                 </div>
//             ))
//         }
//     </div>
//   )
// }

// export default Cart


// src/features/cart/Cart.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeItem } from './cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.mycart.items);

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <div>
              <button onClick={() => handleDecrement(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => handleIncrement(item.id)}>+</button>
            </div>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
