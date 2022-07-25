import React from 'react';

const Product = ({title,price,rating,image}) => {
    
    return (
        <div className='product'>
            <div className='product_info'>
                {title}
            </div>
            <div className='product_price'>
                <p><small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product_rating'>
                    {Array(rating).fill().map((_,i) => <p>⭐</p>)}
                </div>
            </div>
            <img src={image}/>
           <button >Add To Basket</button> 
        </div>
    )
}

export default Product;