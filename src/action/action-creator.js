import {
    ADD_PRODUCT,
    DECREASE_COUNT,
    INCREASE_COUNT,
    RECEIVE_PRODUCTS,
    REMOVE_PRODUCT,
    REQUEST_PRODUCTS,
    URL
} from "../util/constants";

export const addProduct = product => action(ADD_PRODUCT, product);

export const increaseCounter = product => action(INCREASE_COUNT, product);

export const decreaseCount = product => action(DECREASE_COUNT, product);

export const removeProduct = product => action(REMOVE_PRODUCT, product);


const action = (type, product) => {
    return {
        type,
        product
    }
};

export const fetchProducts = () => {
    return dispatch => {
        dispatch({
            type: REQUEST_PRODUCTS,
            state: {}
        });

        return fetch(URL)
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: RECEIVE_PRODUCTS,
                    state: json
                })
            })
    }
};