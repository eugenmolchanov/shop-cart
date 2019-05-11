import React from 'react';
import './App.css';
import ProductForm from './component/ProductForm'
import ProductList from "./component/ProductList";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    onAddNewProduct = (product) => {
        this.setState(state => ({
            products: [...state.products, product]
        }))
    };

    onIncreaseCounter = (index) => {
        this.setState(state => {
                let productsCopy = [...state.products];
                productsCopy[index].count = productsCopy[index].count + 1;
                return productsCopy;
            }
        )
    };

    onDecreaseCounter = (index) => {
        if (this.state.products[index].count > 1) {
            this.setState(state => {
                    let productsCopy = [...state.products];
                    productsCopy[index].count = productsCopy[index].count - 1;
                    return productsCopy;
                }
            )
        }
    };

    render() {
        return (
            <div>
                <div className="product-form">
                    <ProductForm onAddProduct={this.onAddNewProduct}/>
                </div>
                <div className="product-list">
                    <ProductList products={this.state.products} onIncreaseCounter={this.onIncreaseCounter}
                                 onDecreaseCounter={this.onDecreaseCounter}/>
                </div>
            </div>
        )
    }
}

export default App;
