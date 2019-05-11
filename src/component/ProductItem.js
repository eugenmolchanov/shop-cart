import React from "react";
import Counter from "./Counter";
import '../css/product-item.css'

class ProductItem extends React.Component {

    render() {
        return (
            <div className="product-item">
                <div>{this.props.name}</div>
                <Counter onIncrease={this.props.onIncreaseCounter} onDecrease={this.props.onDecreaseCounter}
                         count={this.props.count}/>
                <div>Total: {this.props.count * this.props.price} $</div>
            </div>
        )
    }
}

export default ProductItem;