import { ActionTypes } from "../contants/action-types";

const initialState = {
    products: [
        {
            id: 1,
            title: 'EPL',
            category: 'Jersey',
        },
    ],
}

export const productReducer = (state, action) => {
    switch (action.type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
        default:
            return state;
    }
}