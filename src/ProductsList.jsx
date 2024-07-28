import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, decrementQuantity, incrementQuantity, removeItem } from './cartSlice'

const ProductsList = () => {

    const [products,setProducts] = useState([])
    const dispatch = useDispatch();
    const cartItems = useSelector(state=>state.mycart.items)


    useEffect(() => {
      
  fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data=>(setProducts(data.products)))
    .catch(error =>console.log(error,"error fetching data"))

     
    }, [])
    
    const handleAddToCart=(product)=>{
      dispatch(addItem(product))
    }
    const handleIncrement=(product)=>{
      dispatch(incrementQuantity(product))
    }

    const handleDecrement=(product)=>{
      dispatch(decrementQuantity(product))
    }


    const getCartItem =(id)=>{
        return cartItems.find(item=>item.id === id )
    }

  return (
    <div>
        {/* {
           products && products?.map((product)=>(
                <div key={product.id}>
                    <h2>{product.title} </h2>
                    <button onClick={()=>dispatch(addItem(product))}>Add to cart </button>
                </div>
            ))
        } */}


<ul>
        {products.map(product => {
          const cartItem = getCartItem(product.id);
          return (
            <li key={product.id}>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              {cartItem ? (
                <div>
                  <button onClick={() => handleDecrement(product.id)}>-</button>
                  <span>{cartItem.quantity}</span>
                  <button onClick={() => handleIncrement(product.id)}>+</button>
                </div>
              ) : (
                <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
              )}
            </li>
          );
        })}
      </ul>

        {/* {
          products.filter((product)=>product.title.toLowerCase().startsWith('a')).map((product)=>(
            <li key={product.id}>
            <h2>{product.title} </h2>
        </li>
          ))
        } */}

    </div>
  )
}

export default ProductsList


