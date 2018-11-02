import React from 'react';

export default function Product(props) {
// There's an issue with how Im sending the images as well as how there being passed from dashboard to product

// Figured it out, Not cool guys

    return (

        <div className="product">        

        <img className="product-img" src={props.imgurl}/>
            <h2>{props.name}</h2>
            <p>${props.price}</p>
            <button className='product-button' onClick={() => {props.delete(props.id) }}>
                Delete
            </button>
            <button className='product-button' onClick=''>
                Edit
            </button>
        </div>
    )
}