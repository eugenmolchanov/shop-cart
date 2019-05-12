import React from 'react';
import './App.css';
import ProductForm from './component/ProductForm'
import {BrowserRouter as Router} from "react-router-dom";
import InfoSide from "./component/InfoSide";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 1,
            products: [],
            product: null
        }
    }

    onAddNewProduct = (product) => {
        this.setState(state => {
            product.id = state.id;
            return {
                id: state.id + 1,
                products: [...state.products, product]
            }
        })
    };

    onIncreaseCounter = (product) => {
        this.setState(state => {
                let productsCopy = [...state.products];
                let index = productsCopy.indexOf(product);
                productsCopy[index].count = productsCopy[index].count + 1;
                return {
                    products: productsCopy
                };
            }
        )
    };

    onDecreaseCounter = (product) => {
        if (product.count > 1) {
            this.setState(state => {
                    let productsCopy = [...state.products];
                    let index = productsCopy.indexOf(product);
                    productsCopy[index].count = productsCopy[index].count - 1;
                    return {
                        products: productsCopy
                    };
                }
            )
        }
    };

    onRemoveItem = (product) => {
        this.setState(state => {
            let productsCopy = [...state.products];
            let index = productsCopy.indexOf(product);
            productsCopy.splice(index, 1);
            return {
                products: productsCopy
            }
        })
    };

    onShowProductProfile = (product) => {
        this.setState({
            product
        });
    };

    render() {
        return (
            <Router>
                <div>
                    <div className="product-form">
                        <ProductForm onAddProduct={this.onAddNewProduct}/>
                    </div>
                    <InfoSide products={this.state.products}
                              product={this.state.product}
                              onIncreaseCounter={this.onIncreaseCounter}
                              onDecreaseCounter={this.onDecreaseCounter}
                              onRemoveItem={this.onRemoveItem}
                              onShowProductProfile={this.onShowProductProfile}/>
                </div>
            </Router>
        )
    }
}

export default App;
