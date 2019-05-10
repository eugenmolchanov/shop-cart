import React from 'react';
import './App.css';
import ProductForm from './component/ProductForm'

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

    render() {
        return (
            <div>
                <ProductForm onAddProduct={this.onAddNewProduct}/>
            </div>)
    }
}

export default App;
