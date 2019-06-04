import {connect} from 'react-redux';
import ProductList from '../component/ProductList';

const mapStateToProps = state => {
    return {
        products: state.products.products,
        isFetching: state.products.isFetching
    }
};

export default connect(mapStateToProps) (ProductList)