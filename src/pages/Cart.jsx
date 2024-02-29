import React from 'react'
import { useSelector } from 'react-redux'
import { getCart } from '../features/cart/CartSlice'

function Cart() {
  const cart = useSelector(getCart)
  console.log(cart)
  return (
    <div>Cart</div>
  )
}

export default Cart