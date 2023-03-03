import React from 'react'
import Button from '../Button/Button'
import "./Item.css";


export const Item = ({ product }) => {
  return (
    <>
    <div className='card'>
        <img src={product.image} alt="Card image cap" />
        <div className='card-body'>
            <h5 className='card-title'> {product.title}</h5>
            <p className='card-text'> { product.description}</p>
            <h6 className='card-price'>$ {product.price}</h6>
            <Button />
        </div>
    </div>
    </>
  )
}