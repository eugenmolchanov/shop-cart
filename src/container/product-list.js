import {connect} from 'react-redux';
import App from '../App';

function mapStateToProps(state) {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps) (App)