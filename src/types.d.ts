import { ReactNode } from "react"

export type StoreItemProps = {
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
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    cartQuantity: number
    cartItems: CartItem[]
}

export type CartItemAction = {
    type: "increaseQuantity" | "decreaseQuantity" | "deleteItem",
    payload: number
}