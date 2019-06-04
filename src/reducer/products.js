import {
    ADD_PRODUCT,
    DECREASE_COUNT,
    INCREASE_COUNT,
    RECEIVE_PRODUCTS,
    REMOVE_PRODUCT,
    REQUEST_PRODUCTS
} from "../util/constants";

const initialState = {
    id: 0,
    products: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_PRODUCT:
            return stateAfterAddingProduct(state, action);
        case INCREASE_COUNT:
            return stateAfterIncreasingCount(state, action);
        case DECREASE_COUNT:
            return stateAfterDecreasingCount(state, action);
        case REMOVE_PRODUCT:
            return stateAfterRemovingProduct(state, action);
        case RECEIVE_PRODUCTS:
            return stateAfterReceivingProducts(action.state);
        case REQUEST_PRODUCTS:
            return stateDuringFetchingProducts(action.state);
        default:
            return state;
    }
}

const stateAfterAddingProduct = (state, action) => {
    action.product.id = state.id + 1;
    return {
        id: state.id + 1,
        products: [...state.products, action.product]
    };
};

const stateAfterIncreasingCount = (state, action) => {
    let productsCopy = [...state.products];
    let index = productsCopy.indexOf(action.product);
    productsCopy[index].count = productsCopy[index].count + 1;
    return {
        id: state.id,
        products: productsCopy
    };
};

const stateAfterDecreasingCount = (state, action) => {
    if (action.product.count > 1) {
        let productsCopy = [...state.products];
        let index = productsCopy.indexOf(action.product);
        productsCopy[index].count = productsCopy[index].count - 1;
        return {
            id: state.id,
            products: productsCopy
        };
    } else {
        return state;
    }
};

const stateAfterRemovingProduct = (state, action) => {
    let productsCopy = [...state.products];
    let index = productsCopy.indexOf(action.product);
    productsCopy.splice(index, 1);
    return {
        id: state.id,
        products: productsCopy
    }
};

const stateAfterReceivingProducts = state => {
    return Object.assign(state, {
        isFetching: false
    });
};

const stateDuringFetchingProducts = state => {
    return Object.assign(state, {
        isFetching: true
    });
};