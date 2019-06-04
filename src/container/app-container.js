import {connect} from "react-redux";
import App from "../App";

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchProducts: () => dispatch(ownProps.fetchProducts())
    }
};

export default connect(null, mapDispatchToProps)(App)