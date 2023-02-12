import React from 'react'
import Button from './Button/Button'
import ItemListContainer from './ItemListContainer/ItemListContainer'
import Navbar from './Navbar/Navbar'

const Landing = () => {
  return (
    <>
    <Navbar/>
    <ItemListContainer greeting="Bienvenidos!"/>
    {/* <Button/> */}
    </>
  )
}

export default Landing