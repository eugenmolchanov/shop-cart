import React from 'react';
import './App.css';
import ProductForm from './container/product-form-container'
import InfoSide from "./component/InfoSide";

class App extends React.Component {

    render() {
        return (
            <div className="app">
                <div className="product-form">
                    <ProductForm/>
                </div>
                <div className="product-info">
                    <InfoSide/>
                </div>
            </div>
        )
    }
}

export default App;
