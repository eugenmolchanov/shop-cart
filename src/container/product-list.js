import {connect} from 'react-redux';
import ImageSelector from '../component/ImageSelector';

function mapStateToProps(state) {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps) (ImageSelector)