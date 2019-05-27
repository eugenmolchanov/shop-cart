const initialState = {
    id: 1,
    products: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return {
                id: state.id + 1,
                products: [...state.products, action.product]
            };
        case 'INCREASE_COUNT': {
            let productsCopy = [...state.products];
            let index = productsCopy.indexOf(action.product);
            productsCopy[index].count = productsCopy[index].count + 1;
            return {
                id: state.id,
                products: productsCopy
            };
        }
        case 'DECREASE_COUNT': {
            let productsCopy = [...state.products];
            let index = productsCopy.indexOf(action.product);
            productsCopy[index].count = productsCopy[index].count - 1;
            return {
                id: state.id,
                products: productsCopy
            };
        }
        case 'REMOVE_PRODUCT': {
            let productsCopy = [...state.products];
            let index = productsCopy.indexOf(action.product);
            productsCopy.splice(index, 1);
            return {
                id: state.id,
                products: productsCopy
            }
        }
        default:
            return state;
    }
}