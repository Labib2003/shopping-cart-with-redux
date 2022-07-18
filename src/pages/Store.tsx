import StoreItem from "../components/StoreItem";
import { useShoppingCart } from "../contexts/ShoppingCartContext";

const Store = () => {
    const { storeItems } = useShoppingCart();
    return (
        <div className="grid grid-cols-3 gap-5">
            {
                storeItems.map(product => <StoreItem key={product.id} {...product} />)
            }
        </div>
    );
};

export default Store;