import React from "react";
import { Link } from "react-router-dom";

class ProductProfile extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.product.name}</h2>
                <div>Count: {this.props.product.count}</div>
                <div>Price: {this.props.product.price} $</div>
                <div>Total: {this.props.product.price * this.props.product.count} $</div>
                <button><Link to="/">Back to list</Link></button>
            </div>
        )
    }
}

export default ProductProfile;