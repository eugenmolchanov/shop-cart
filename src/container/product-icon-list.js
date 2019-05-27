import {connect} from 'react-redux';
import ImageSelector from '../component/ImageSelector';

function mapStateToProps(state) {
    return {
        productsIcons: state.productsIcons
    }
}

export default connect(mapStateToProps) (ImageSelector)