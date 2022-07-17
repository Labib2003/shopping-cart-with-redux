import { createContext, useContext } from "react";
import { ShoppingCartContextType, ShoppingCartProviderProps } from "../types";

const ShoppingCartContext = createContext({} as ShoppingCartContextType);

export const useShoppingCart = () => {
    return useContext(ShoppingCartContext);
}

export const ShoppingCartProvider = ({ children }: ShoppingCartProviderProps) => {
    return <ShoppingCartContext.Provider value={{}}>
        {children}
    </ShoppingCartContext.Provider>
}