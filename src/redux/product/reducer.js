import { ADDPRODUCT, ADDTOCART, INCREASE, DECREASE, DElETE } from './actionTypes';

const initialState = {
    total: 0,
    cartQty: 0,
    cartProducts: [],
    products: [],
};

// helper function
const getTotalAmount = (cartProducts) => {
    return cartProducts.reduce((total, product) => {
        return total + product.price * product.qty;
    }, 0);
}
const nextproductId = (products) => {
    const maxId = products.reduce((maxId, product) => Math.max(product.id, maxId), -1);
    return maxId + 1;
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDPRODUCT:
            return {
                ...state,
                products: [...state.products, { ...action.payload, id: nextproductId(state.products) }]
            };
        case ADDTOCART:
            const { id } = action.payload;
            const updateproduct = state.products.map((product) => {
                if (product.id === id) {
                    return { ...product, qty: product.qty - 1 }
                }
                return product
            });
            return {
                ...state,
                total: getTotalAmount([...state.cartProducts, action.payload]),
                cartQty: state.cartProducts.length,
                cartProducts: [...state.cartProducts, action.payload],
                products: updateproduct,
            };
        case INCREASE:
            return {
                ...state,
                total: getTotalAmount([...state.cartProducts, action.payload]),
                cartProducts: state.cartProducts.map((product) => {
                    if (product.id === action.payload.id) {
                        return {
                            ...product,
                            qty: product.qty + action.payload.qty,
                            price: product.price * product.qty
                        }
                    }
                    return product
                })
            }
        case DECREASE:
            return {
                ...state,
                total: getTotalAmount([...state.cartProducts, action.payload]),
                cartProducts: state.cartProducts.map((product) => {
                    if (product.id === action.payload.id) {
                        return {
                            ...product,
                            qty: product.qty - action.payload.qty,
                            price: product.price * product.qty
                        }
                    }
                    return product
                })
            }
        case DElETE:
            return {
                ...state,
                total: getTotalAmount([...state.cartProducts, action.payload]),
                cartQty: state.cartProducts.length,
                cartProducts: state.cartProducts.filter((product) => product.id !== action.payload)
            }


        default:
            return state;
    }
}

export default reducer;