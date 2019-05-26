import React from "react";
import { Link } from "react-router-dom";
import "../css/product-profile.css";

class ProductProfile extends React.Component {
    render() {
        if (this.props.product === null) {
            return (
                <div>
                    <h2>No item is selected</h2>
                    <button><Link to="/">Back to list</Link></button>
                </div>
            );
        } else {
            return (
                <div>
                    <h2>{this.props.product.name}</h2>
                    <img src={this.props.product.icon} alt="" className="profile-image"/>
                    <div className="profile-info">Count: {this.props.product.count}</div>
                    <div className="profile-info">Price: {this.props.product.price} $</div>
                    <div className="profile-info">Total: {this.props.product.price * this.props.product.count} $</div>
                    <button><Link to="/">Back to list</Link></button>
                </div>
            )
        }
    }
}

export default ProductProfile;