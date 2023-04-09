import React from 'react';

const Cart = ({ cart, handleRemoveFromCart }) => {
    let message;
    if(cart.length === 0){
        message = <p> Buy some products</p>
    }
    else{
        message = <div><h3>Thanks for select</h3></div>
    }
    
    return (
        <div>
            <h3>The is cart: {cart.length}</h3>
            {message}
            {
                cart.map(tshirt => <p key={tshirt._id}>
                    {tshirt.name}
                    <button onClick={() => handleRemoveFromCart(tshirt._id)}
                    >x</button>

                </p>)
            }
        </div>
    );
};

export default Cart;