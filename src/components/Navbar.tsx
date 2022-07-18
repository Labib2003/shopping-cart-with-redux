import { useShoppingCart } from "../contexts/ShoppingCartContext";

const Navbar = () => {
    const { cartQuantity } = useShoppingCart();

    return (
        <div className="navbar bg-base-100">
            <div className="w-3/4 mx-auto">
                <div className="flex-1">
                    <p className='text-lg font-medium'>Awesome Store</p>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <label htmlFor="my-drawer-4" tabIndex={0} className="btn btn-ghost btn-circle btn-lg">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-md indicator-item">{cartQuantity}</span>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;