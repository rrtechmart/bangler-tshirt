import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirts from '../TShirt/TShirts';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Home.css';
import Cart from '../Cart/Cart';

const Home = () => {
    const [cart, setCart] = useState([]);

    const handleAddToCart = tshirt => {
        const exist = cart.find(ts => ts._id === tshirt._id);
        if (exist) {
            toast('you have added this item already')
        }
        else {
            const newCart = [...cart, tshirt];
            setCart(newCart);
        }

    }

    const handleRemoveFromCart = id => {
        const remaining = cart.filter(tshirt => tshirt._id !== id);
        setCart(remaining);
    }

    const tshirts = useLoaderData();
    return (
        <div className='main-container'>

            <div className='tshirt-container'>

                {
                    tshirts.map(tshirt => <TShirts
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    ></TShirts>)
                }
            </div>
            <div className='cart-container'>
                <Cart
                    cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>

            </div>
        </div>
    );
};

export default Home;