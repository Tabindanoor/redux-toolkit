import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from './cartSlice'

const ProductsList = () => {

    const [products,setProducts] = useState([])
    const dispatch = useDispatch();



    useEffect(() => {
      
  fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data=>(setProducts(data.products)))
    .catch(error =>console.log(error,"error fetching data"))

     
    }, [])
    

  return (
    <div>
        {
           products && products?.map((product)=>(
                <div key={product.id}>
                    <h2>{product.title} </h2>
                    <button onClick={()=>dispatch(addItem(product))}>Add to cart </button>
                </div>
            ))
        }


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