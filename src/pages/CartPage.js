import React, { useEffect, useState } from 'react';
import { BsCart3 } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CartPage = () => {
    const cart = useSelector((state) => state?.getCart?.cartData)
    return (
        <>
            <Link className="quantity-wrap" to='/cart'>
                <i className="cart-icon"><BsCart3 /></i>
                {
                    cart.length>0? <><span className='quant'>{cart.length}</span> </>:<></>
                }
            </Link>
        </>
    );
};

export default CartPage;
