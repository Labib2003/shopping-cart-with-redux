import { StoreItemProps } from "../types";

const StoreItem = ({ id, title, price, description, category, image }: StoreItemProps) => {
    return (
        <div className="card bg-base-100 shadow-2xl">
            <figure className="h-1/2">
                <img src={image} alt={title} className="rounded-xl p-10 h-4/5 object-contain" />
            </figure>
            <div className="card-body">
                <div>
                    <h2 className="card-title mb-3">{title}</h2>
                    <p className="badge badge-outline badge-lg mb-3">{category}</p>
                    <p className="text-xl font-medium mb-5">${price}</p>
                </div>
                <p>{description}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default StoreItem;