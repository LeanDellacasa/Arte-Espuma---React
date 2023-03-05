import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';

export const ItemDetailContainer = () => {
    const {id} = useParams();
    const [item, setItem] = useState({});

    useEffect(()  => {
      fetch('http://localhost:3000/products.json')
      .then(response => {
        return response.json();
      }).then(data => {
        const productFilter = data.find((products) => products.id === id);
        setItem(productFilter)
      }).catch((e) => {
        console.log(e.message);
      });
    }, [id]);

  return (
    <ItemDetail item={item}/>
  )
}

export default ItemDetailContainer

