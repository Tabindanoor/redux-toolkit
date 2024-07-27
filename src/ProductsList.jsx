import React, { useEffect, useState } from 'react'

const ProductsList = () => {

    const [products,setProducts] = useState([])
    // const data = fetch('https://dummyjson.com/products')
    // .then(res => res.json())
   

    useEffect(() => {
      
  fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data=>(setProducts(data.products)))
    .catch(error =>console.log("error fetching data"))

     
    }, [])
    

  return (
    <div>
        {/* {
           products && products?.map((product)=>(
                <li key={product.id}>
                    <h2>{product.title} </h2>
                </li>
            ))
        } */}


        {
          products.filter((product)=>product.title.toLowerCase().startsWith('a')).map((product)=>(
            <li key={product.id}>
            <h2>{product.title} </h2>
        </li>
          ))
        }

    </div>
  )
}

export default ProductsList