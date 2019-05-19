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
                <div className="product-name">{this.props.name}</div>
                <div className="product-actions">
                    <div className="product-action">
                        <img src={TrashImage} onClick={this.props.onRemoveItem} alt="trash" width="25px"
                             className="action-image"/>
                    </div>
                    <div className="product-action">
                        <Link onClick={this.props.onShowProductProfile} to="/profile">
                            <img src={AttachImage} onClick={this.props.onShowProductProfile} alt="trash" width="25px"
                                 className="action-image"/>
                        </Link>
                    </div>
                </div>
                <div className="product-icon">
                    <img src={this.props.icon} alt="bucket" className="item-image" height="50px" width="50px"/>
                </div>
                <Counter onIncrease={this.props.onIncreaseCounter} onDecrease={this.props.onDecreaseCounter}
                         count={this.props.count}/>
                <div className="item-total-price">Total: {this.props.count * this.props.price} $</div>
            </div>
        )
    }
}

export default ProductItem;