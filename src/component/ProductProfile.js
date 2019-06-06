import React from "react";
import {Link} from "react-router-dom";
import "../css/product-profile.css";

class ProductProfile extends React.Component {

    render() {
        if (this.props.product === null) {
            return (
                <div>
                    <h2>No item is selected</h2>
                    <BackToListButton/>
                </div>
            );
        } else {
            return (
                <div>
                    <h2>{this.props.product.name}</h2>
                    <img src={require('../image/' + this.props.product.icon)} alt="" className="profile-image"/>
                    <div className="profile-info">Count: {this.props.product.count}</div>
                    <div className="profile-info">Price: {this.props.product.price} $</div>
                    <div className="profile-info">Total: {this.props.product.price * this.props.product.count} $</div>
                    <BackToListButton/>
                </div>
            )
        }
    }
}

function BackToListButton() {
    return (
        <Link to="/">
            <button>Back to list</button>
        </Link>
    )
}

export default ProductProfile;