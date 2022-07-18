import { ReactNode } from "react"

export type StoreItemProps = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string
}

export type StoreItem = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string
}

export type CartItem = {
    id: number
    quantity: number
}

export type ShoppingCartProviderProps = {
    children: ReactNode
}

export type ShoppingCartContextType = {
    getItemQuantity: (id: number) => number
    increaseQuantity: (id: number) => void
    decreaseQuantity: (id: number) => void
    deleteItem: (id: number) => void
    cartQuantity: number
    cartItems: CartItem[];
    changeCategory: (type: string) => void
    storeItems: StoreItem[]
}

export type CartItemAction = {
    type: "increaseQuantity" | "decreaseQuantity" | "deleteItem",
    payload: number
}

export type FilterAction = {
    type: string,
}