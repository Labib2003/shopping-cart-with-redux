import StoreItem from "../components/StoreItem";
import products from "../data/products.json";

const Store = () => {
    return (
        <div className="grid grid-cols-3 gap-5">
            {
                products.map(product => <StoreItem key={product.id} {...product} />)
            }
        </div>
    );
};

export default Store;