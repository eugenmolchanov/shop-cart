import React from "react";
import Input from "./Input";
import Counter from "./Counter";
import "../css/product-form.css";
import BucketImage from "../image/bucket.svg";
import ImageSelector from "./ImageSelector";
import FormIcon from "./FormIcon";

class ProductForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: 0,
            count: 1,
            icon: BucketImage,
            imageSelectorOpen: false
        }
    }

    onNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    };

    onPriceChange = (event) => {
        this.setState({
            price: event.target.value
        })
    };

    onIncreaseCounter = () => {
        this.setState(state => ({
            count: state.count + 1
        }))
    };

    onDecreaseCounter = () => {
        if (this.state.count > 1) {
            this.setState(state => ({
                count: state.count - 1
            }))
        }
    };

    onAddProduct = () => {
        const product = Object.assign({}, this.state);
        this.setState({
            name: '',
            price: 0,
            count: 1,
            icon: BucketImage
        }, this.props.onAddProduct(product));
    };

    openImageSelector = () => {
        this.setState(state => ({
            imageSelectorOpen: !state.imageSelectorOpen
        }));
    };

    onImageSelect = (icon) => {
        this.setState(state => ({
            icon: icon,
            imageSelectorOpen: !state.imageSelectorOpen
        }));
    };

    render() {
        return (
            <div className="product-form-content">
                <h2>Add product to your cart list</h2>
                <Input value={this.state.name} onChange={this.onNameChange} placeHolder="Product name"/>
                <Input value={this.state.price ? this.state.price : ''} onChange={this.onPriceChange}
                       placeHolder="Product price"/>
                <Counter onDecrease={this.onDecreaseCounter} onIncrease={this.onIncreaseCounter}
                         count={this.state.count}/>
                <FormIcon icon={this.state.icon} onClick={this.openImageSelector}/>
                <div>
                    <ImageSelector open={this.state.imageSelectorOpen} onClick={this.onImageSelect}/>
                </div>
                <div>
                    <button onClick={this.onAddProduct}
                            disabled={!this.state.name || !this.state.price || isNaN(this.state.price)}>Add to list
                    </button>
                </div>
            </div>
        )
    }
}

export default ProductForm;