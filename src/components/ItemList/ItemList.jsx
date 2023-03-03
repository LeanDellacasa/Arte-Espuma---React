import React from 'react'
import { Item } from '../Item/Item'

export const ItemList = ({products}) => {
    console.log(products)
  return (
    <>
        {products.map((product) => <Item key={product.id} product={product} />)}
    </>
  )
}

export default ItemList