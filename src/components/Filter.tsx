import React from 'react';
import { useShoppingCart } from '../contexts/ShoppingCartContext';

const Filter = () => {
    const { changeCategory } = useShoppingCart();
    return (
        <div className='flex justify-center'>
            <h5 className='my-auto text-xl font-medium mr-3'>Filter By: </h5>
            <select onChange={event => {
                changeCategory(event.target.value);
                console.log(event.target.value)
            }} className="select select-bordered w-full max-w-xs">
                <option value="all" selected>All</option>
                <option value="electronics">electronics</option>
                <option value="jewelery">jewelery</option>
                <option value="men's clothing">men's clothing</option>
                <option value="women's clothing">women's clothing</option>
            </select>
        </div>
    );
};

export default Filter;