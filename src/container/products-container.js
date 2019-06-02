import {connect} from 'react-redux';
import ProductList from '../component/ProductList';

const mapStateToProps = state => {
    return {
        products: state.products.products
    }
};

export default connect(mapStateToProps) (ProductList)