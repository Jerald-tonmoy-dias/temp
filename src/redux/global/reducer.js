import { TOGGLEPAGE } from './actionTypes';

const initialState = {
    value: true
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLEPAGE:
            return {
                ...state,
                value: !state.value
            };

        default:
            return state;
    }
}

export default reducer;