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