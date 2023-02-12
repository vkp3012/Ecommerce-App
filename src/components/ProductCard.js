import React from 'react'
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component"
const ProductCard = () => {
  return (
    <>
      <div className='col-3'>
        <div className='product-card position-relative'>
          <div className='product-image'>
            <img  src='images/watch.jpg' alt="watch"/>
          </div>
          <div className='product-details'>
              <h6 className='brand'>Havels</h6>
              <h5 className='product-title'>
                kids headphone bulk 10 pack multi colored for student
              </h5>
              <ReactStars 
                count = { 5}
                size = {24}
                value = {4}
                edit = {false}
                activeColor = "#ffd700"
              />
              <p className='price'> $100.00</p>
          </div>
          <div className='action-bar position-absolute'>
            <div className='d-flex flex-column gap-15'>
              <Link>
                <img src='images/prodcompare.svg' alt='compare'/>
              </Link>
              <Link>
                <img src='images/view.svg' alt='view'/>
              </Link>
              <Link>
                <img src='images/add-cart.svg' alt='addcart'/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard
