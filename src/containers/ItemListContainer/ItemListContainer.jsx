import React, { useEffect, useState } from 'react'
import "./ItemListContainer.css";
import { ItemList } from '../../components/ItemList/ItemList';
import { useParams } from 'react-router-dom';

 export const ItemListContainer = () => {
  const {tipe} = useParams();
  const [arrayList, setArrayList] = useState([]);
  

  useEffect(() => {
    fetch('products.json')
      .then((response) => response.json())
      .then((data) => {
        const productFilter = data.filter((products) => products.tipo === tipe);

        setArrayList(productFilter)
      
      .catch((err) => console.error(err))
      .finally()
    })
  } , [tipe]);

  return (
    <div className='listContainer'>
        <ItemList products={arrayList}/>       
    </div>
  )
}

export default ItemListContainer;