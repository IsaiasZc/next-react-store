import React from 'react'
import '@styles/ShoppingCartItem.scss'

const ShoppingCartItem = () => {
  return (
    <div className='ShoppingCartItem'>
      <figure>
        <Bike />
        </figure>
        <p>Bike</p>
        <p>$30,00</p>
    </div>
  )
}

export default ShoppingCartItem