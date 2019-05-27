import React from 'react';
import './App.css';
import ProductForm from './component/ProductForm'
import {BrowserRouter as Router} from "react-router-dom";
import InfoSide from "./component/InfoSide";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: null
        }
    }

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
                        <ProductForm/>
                    </div>
                    <InfoSide products={this.props.products.products}
                              product={this.state.product}
                              onShowProductProfile={this.onShowProductProfile}/>
                </div>
            </Router>
        )
    }
}

export default App;
