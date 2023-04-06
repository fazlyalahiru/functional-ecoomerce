import React from 'react';
import './ReviewItem.css'
import { TrashIcon } from '@heroicons/react/24/solid'


const ReviewItem = ({ product, handleDeleteCart }) => {
console.log(product);
    const { id, img, price, name,quantity } = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className="review-details">
                <p>{name}</p>
                <p>Price: <span className='orange-text'>{price}</span></p>
                <p>Order Quantity: <span className='orange-text'>{quantity}</span></p>
                
            </div>
            <button className='btn-delete' onClick={()=>handleDeleteCart(id)}><TrashIcon className='trash-icon'></TrashIcon></button>
        </div>
    );
};

export default ReviewItem;