import AppleImage from "../image/apple.svg";

const initialState = {
    id: 1,
    products: [{
        id: 1,
        name: 'apples',
        price: 4,
        count: 2,
        icon: AppleImage
    }]
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'ADD_PRODUCT': return stateAfterAddingProduct(state, action);
        case 'INCREASE_COUNT': return stateAfterIncreasingCount(state, action);
        case 'DECREASE_COUNT': return stateAfterDecreasingCount(state, action);
        case 'REMOVE_PRODUCT': return stateAfterRemovingProduct(state, action);
        default: return state;
    }
}

function stateAfterAddingProduct(state, action) {
    action.product.id = state.id + 1;
    return {
        id: state.id + 1,
        products: [...state.products, action.product]
    };
}

function stateAfterIncreasingCount(state, action) {
    let productsCopy = [...state.products];
    let index = productsCopy.indexOf(action.product);
    productsCopy[index].count = productsCopy[index].count + 1;
    return {
        id: state.id,
        products: productsCopy
    };
}

function stateAfterDecreasingCount(state, action) {
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
}

function stateAfterRemovingProduct(state, action) {
    let productsCopy = [...state.products];
    let index = productsCopy.indexOf(action.product);
    productsCopy.splice(index, 1);
    return {
        id: state.id,
        products: productsCopy
    }
}