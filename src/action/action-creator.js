const ADD_PRODUCT = 'ADD_PRODUCT';
const INCREASE_COUNT = 'INCREASE_COUNT';
const DECREASE_COUNT = 'DECREASE_COUNT';
const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

export function addProduct(product) {
    return action(ADD_PRODUCT, product)
}

export function increaseCounter(product) {
    return action(INCREASE_COUNT, product);
}

export function decreaseCount(product) {
    return action(DECREASE_COUNT, product);
}

export function removeProduct(product) {
    return action(REMOVE_PRODUCT, product);
}

function action(type, product) {
    return {
        type: type,
        product
    }
}