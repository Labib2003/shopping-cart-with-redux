import { useShoppingCart } from '../contexts/ShoppingCartContext';
import { CartItem } from '../types';
import products from "../data/products.json"

const CartItemComponent = ({ id, quantity }: CartItem) => {
    const { deleteItem } = useShoppingCart();
    const item = products.find(item => item.id === id);
    if (item == null) return null;
    const { image, title } = item;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure className="w-1/3"><img src={image} alt={title} /></figure>
            <div className="card-body">
                <h2 className="font-medium">{title}</h2>
                <div className='flex justify-between'>
                    <p className='text-xl'>{quantity}<span className='text-sm'>x</span></p>
                    <div className="card-actions">
                        <button className="btn btn-sm btn-error rounded" onClick={() => deleteItem(id)}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItemComponent;