import { createContext, useContext } from "react";
import { useSelector } from "react-redux";
import { CartItem, ShoppingCartContextType, ShoppingCartProviderProps } from "../types";
import { State } from "../state/reducers/index"
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

const ShoppingCartContext = createContext({} as ShoppingCartContextType);

export const useShoppingCart = () => {
    return useContext(ShoppingCartContext);
}

export const ShoppingCartProvider = ({ children }: ShoppingCartProviderProps) => {
    const dispatch = useDispatch();
    const cartItems: CartItem[] = useSelector((state: State) => state.cartItems) || [];
    const { increaseQuantity, decreaseQuantity, deleteItem } = bindActionCreators(actionCreators, dispatch);

    const cartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

    const getItemQuantity = (id: number): number => {
        return cartItems.find(item => item.id === id)?.quantity || 0;
    }

    return <ShoppingCartContext.Provider value={{ cartQuantity, increaseQuantity, decreaseQuantity, deleteItem, cartItems, getItemQuantity }}>
        {children}
    </ShoppingCartContext.Provider>
}