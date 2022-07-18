import { useShoppingCart } from "../contexts/ShoppingCartContext";
import { StoreItemProps } from "../types";

const StoreItem = ({ id, title, price, description, category, image }: StoreItemProps) => {
    const { getItemQuantity, increaseQuantity, decreaseQuantity, deleteItem } = useShoppingCart();
    const quantity = getItemQuantity(id);

    return (
        <div className="card bg-base-100 shadow-2xl">
            <figure className="h-1/3">
                <img src={image} alt={title} className="rounded-xl p-10 h-full object-contain" />
            </figure>
            <div className="card-body">
                <div>
                    <h2 className="card-title mb-3">{title}</h2>
                    <p className="badge badge-outline badge-lg mb-3">{category}</p>
                    <p className="text-xl mb-5">${price}</p>
                </div>
                <p>{description}</p>
                <div className="card-actions mt-5">
                    {
                        quantity ?
                            <div className="w-2/3 mx-auto">
                                <div className="flex justify-around mb-3">
                                    <button className="btn btn-primary rounded" onClick={() => decreaseQuantity(id)}>
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
                                    </button>
                                    <p className="text-center text-xl font-medium">{quantity}</p>
                                    <button className="btn btn-primary rounded" onClick={() => increaseQuantity(id)}>
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                                    </button>
                                </div>
                                <button className="btn btn-error w-full rounded" onClick={() => deleteItem(id)}>Remove From Cart</button>
                            </div>
                            :
                            <button className="btn btn-primary rounded mx-auto" onClick={() => increaseQuantity(id)}>Add To Cart</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default StoreItem;