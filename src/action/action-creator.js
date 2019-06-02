const ADD_PRODUCT = 'ADD_PRODUCT';
const INCREASE_COUNT = 'INCREASE_COUNT';
const DECREASE_COUNT = 'DECREASE_COUNT';
const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

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