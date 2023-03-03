import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';

export const ItemDetailContainer = () => {
    const {tipe} = useParams();
    const [item, setItem] = useState({});
    
    useEffect(()  => {
        fetch("products.json")
        .then((response) => response.json())
        .then((data) => {
            const productFilter = data.filter((products) => products.tipo === tipe);

            setItem(productFilter)

        .catch((err) => console.error(err))
        .finally()
        })

    }, [tipe]);

  return (
    <ItemDetail item={item}/>
  )
}

export default ItemDetailContainer

