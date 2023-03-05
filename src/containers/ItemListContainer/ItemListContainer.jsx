import React, { useEffect, useState } from 'react'
import "./ItemListContainer.css";
import { ItemList } from '../../components/ItemList/ItemList';
import { useParams } from 'react-router-dom';

 export const ItemListContainer = () => {
  const {tipe} = useParams();
  const [arrayList, setArrayList] = useState([]);
  

  useEffect(() => {
    fetch('http://localhost:3000/products.json')
    .then(response => {
      return response.json();
    }).then(data => {
      const productFilter = data.filter((products) => tipe ? products.tipo === tipe : products);
      setArrayList(productFilter)
    }).catch((e) => {
      
    });
  } , [tipe]);

  return (
    <div className='listContainer'>
        <ItemList products={arrayList}/>       
    </div>
  )
}

export default ItemListContainer;