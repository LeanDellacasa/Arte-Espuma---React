import React from 'react'

const CartWidget = () => {
  return (
    <button type="button" class="btn btn-outline-light position-relative btn-lg" ><i class="bi bi-cart4"></i>            
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              0
              <span class="visually-hidden">unread messages</span>
            </span>
          </button>
  )
}

export default CartWidget