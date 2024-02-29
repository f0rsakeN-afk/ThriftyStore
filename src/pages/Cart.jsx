import React from 'react'
import { useSelector } from 'react-redux'
import { getCart } from '../features/cart/CartSlice'

function Cart() {
  const cart = useSelector(getCart)
 
  console.log(cart.singleProduct)
  return (
    <div>
      {cart.map((product) => {
        <div className="" key={product.singleProduct.id}>
          <h1 className="">{product.title}</h1>
       </div>
     })}
    </div>
  )
}

export default Cart