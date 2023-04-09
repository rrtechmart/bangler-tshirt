import React from 'react';
import './TShirt.css';

const TShirts = ({tshirt, handleAddToCart}) => {
    const {_id, name, picture, price, gender} = tshirt;
    return (
        <div className='t-shirt'>
        
            <img src={picture} alt="" />
            <h2>Name: {name} </h2>
            <p>Price:$ <span> {price} </span> </p>
            <button onClick={()=> handleAddToCart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default TShirts;