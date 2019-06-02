import {decreaseCount, increaseCounter, removeProduct} from "../action/action-creator";
import {connect} from "react-redux";
import ProductItem from "../component/ProductItem";

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onRemoveItem: () => dispatch(removeProduct(ownProps.product)),
        onIncreaseCounter: () => dispatch(increaseCounter(ownProps.product)),
        onDecreaseCounter: () => dispatch(decreaseCount(ownProps.product))
    }
};

export default connect(null, mapDispatchToProps) (ProductItem);