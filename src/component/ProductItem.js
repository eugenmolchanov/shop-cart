import React from "react";
import Counter from "./Counter";
import '../css/product-item.css'
import { Link } from "react-router-dom";

class ProductItem extends React.Component {

    render() {
        return (
            <div className="product-item">
                <div className="product-name">{this.props.name}</div>
                <div className="product-actions">
                    <button onClick={this.props.onRemoveItem}>Remove</button>
                    <button><Link onClick={this.props.onShowProductProfile} to="/profile">Show</Link></button>
                </div>
                <Counter onIncrease={this.props.onIncreaseCounter} onDecrease={this.props.onDecreaseCounter}
                         count={this.props.count}/>
                <div>Total: {this.props.count * this.props.price} $</div>
            </div>
        )
    }
}

export default ProductItem;