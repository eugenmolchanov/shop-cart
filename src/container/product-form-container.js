import {addProduct as addProductAction} from "../action/action-creator";
import {connect} from "react-redux";
import ProductForm from "../component/ProductForm";

const mapDispatchToProps = dispatch => {
    return {
        onAddProduct: product => dispatch(addProductAction(product))
    }
};

export default connect(null, mapDispatchToProps) (ProductForm);