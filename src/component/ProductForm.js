import React from "react";
import FormTitle from "./FormTitle";
import Input from "./Input";
import Counter from "./Counter";

class ProductForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: 0,
            count: 1
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

    getProduct = () => {
        return Object.assign({}, this.state);
    };

    render() {
        return (
            <div>
                <FormTitle/>
                <Input value={this.state.name} onChange={this.onNameChange} placeHolder="Product name"/>
                <Input value={this.state.price ? this.state.price : ''} onChange={this.onPriceChange} placeHolder="Product price"/>
                <Counter onDecrease={this.onDecreaseCounter} onIncrease={this.onIncreaseCounter} count={this.state.count}/>
                <button onClick={this.props.onAddProduct.bind(this, this.getProduct())}>Add to list</button>
            </div>
        )
    }
}

export default ProductForm;