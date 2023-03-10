import React from 'react'


export const ItemDetail = (item) => {
  return (
    <>
     <div className='container'>
        <div className='row my-5'>
            <div className='col d-flex align-items-center justify-content-end'>
                <img src={item.item.image} alt={item.item.title}/>
            </div>
            <div className='col d-flex align-items-center'>
                <div>
                    <h1>{item.item.title}</h1>
                    <p>{item.item.description}</p>
                    <p><b>${item.item.price}</b></p>
                </div>
            </div>

        </div>

     </div>
    </>
  )
  
}

export default ItemDetail;