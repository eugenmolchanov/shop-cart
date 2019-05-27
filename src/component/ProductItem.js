import React from "react";
import Counter from "./Counter";
import '../css/product-item.css'
import {Link} from "react-router-dom";
import TrashImage from "../image/trash.svg";
import AttachImage from "../image/attach.svg";
import {store} from '../index';
import {removeProduct, increaseCounter, decreaseCount} from '../action/action-creator';

class ProductItem extends React.Component {

    onRemoveItem = () => {
        store.dispatch(removeProduct(this.props.product));
    };

    onIncreaseCounter = () => {
        store.dispatch(increaseCounter(this.props.product));
    };

    onDecreaseCounter = () => {
        store.dispatch(decreaseCount(this.props.product));
    };

    render() {
        return (
            <div className="product-item">
                <div className="product-name">{this.props.product.name}</div>
                <div className="product-actions">
                    <div className="product-action">
                        <img src={TrashImage} onClick={this.onRemoveItem} alt="trash"
                             className="action-image"/>
                    </div>
                    <div className="product-action">
                        <Link onClick={this.props.onShowProductProfile} to="/profile">
                            <img src={AttachImage} onClick={this.props.onShowProductProfile} alt="trash"
                                 className="action-image"/>
                        </Link>
                    </div>
                </div>
                <div className="product-icon">
                    <img src={this.props.product.icon} alt="" className="item-image"/>
                </div>
                <Counter onIncrease={this.onIncreaseCounter} onDecrease={this.onDecreaseCounter}
                         count={this.props.product.count}/>
                <div className="item-total-price">Total: {this.props.product.count * this.props.product.price} $</div>
            </div>
        )
    }
}

export default ProductItem;