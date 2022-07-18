import { Dispatch } from "react"
import { CartItemAction, FilterAction } from "../../types"

export const increaseQuantity = (id: number) => {
    return (dispatch: Dispatch<CartItemAction>) => {
        dispatch({
            type: "increaseQuantity",
            payload: id
        });
    };
};

export const decreaseQuantity = (id: number) => {
    return (dispatch: Dispatch<CartItemAction>) => {
        return (dispatch({
            type: "decreaseQuantity",
            payload: id
        }));
    };
};

export const deleteItem = (id: number) => {
    return (dispatch: Dispatch<CartItemAction>) => {
        return (dispatch({
            type: "deleteItem",
            payload: id
        }));
    };
};

export const changeCategory = (type: string) => {
    return (dispatch: Dispatch<FilterAction>) => {
        return (dispatch({
            type: type
        }));
    }
}