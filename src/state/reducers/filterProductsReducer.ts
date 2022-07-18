import products from "../../data/products.json"
import { FilterAction, StoreItem } from "../../types";

const initialValue = products;

const reducer = (state: StoreItem[] = initialValue, action: FilterAction = { type: "all" }) => {
    switch(action.type){
        case "electronics":
            return initialValue.filter(item => item.category === action.type);
        case "jewelery":
            return initialValue.filter(item => item.category === action.type);
        case "men's clothing":
            return initialValue.filter(item => item.category === action.type);
        case "women's clothing":
            return initialValue.filter(item => item.category === action.type);
        default:
            return initialValue;
    }
}

export default reducer;