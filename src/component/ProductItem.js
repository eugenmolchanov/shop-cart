import React from "react";
import Counter from "./Counter";
import '../css/product-item.css'
import {Link} from "react-router-dom";
import TrashImage from "../image/trash.svg";
import AttachImage from "../image/attach.svg";

class ProductItem extends React.Component {

    render() {
        return (
            <div className="product-item">
                <div className="product-name">{this.props.product.name}</div>
                <div className="product-actions">
                    <div className="product-action">
                        <img src={TrashImage} onClick={this.props.onRemoveItem} alt="trash"
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
                <Counter onIncrease={this.props.onIncreaseCounter} onDecrease={this.props.onDecreaseCounter}
                         count={this.props.product.count}/>
                <div className="item-total-price">Total: {this.props.product.count * this.props.product.price} $</div>
            </div>
        )
    }
}

export default ProductItem;