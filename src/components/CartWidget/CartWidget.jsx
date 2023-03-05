import React from 'react'

const CartWidget = () => {
  return (
    <button type="button" className="btn btn-outline-light position-relative btn-lg" ><i className="bi bi-cart4"></i>            
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              0
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
  )
}

export default CartWidget