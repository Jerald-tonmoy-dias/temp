import { combineReducers } from "redux";
import globalReducer from "../redux/global/reducer";
import productReducer from "../redux/product/reducer";

const rootReducer = combineReducers({
    global: globalReducer,
    products: productReducer
});

export default rootReducer;
