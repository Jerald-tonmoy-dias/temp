import { ADDPRODUCT, ADDTOCART, INCREASE, DECREASE, DElETE } from './actionTypes';

export const addproduct = (value) => {
    return {
        type: ADDPRODUCT,
        payload: value

    }
}

export const addtocart = (value) => {
    return {
        type: ADDTOCART,
        payload: value

    }
}

export const increaseProduct = (id, qty) => {
    return {
        type: INCREASE,
        payload: {
            id,
            qty
        }

    }
}
export const decreaseProduct = (id, qty) => {
    return {
        type: DECREASE,
        payload: {
            id,
            qty
        }

    }
}
export const deleteProduct = (id) => {
    return {
        type: DElETE,
        payload: id

    }
}