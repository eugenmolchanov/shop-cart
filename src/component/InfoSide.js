import React from "react";
import ProductList from "../container/products-container";
import ProductProfile from "./ProductProfile";
import {BrowserRouter as Router, Route} from "react-router-dom";

class InfoSide extends React.Component {

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
                <div className="product-info-content">
                    <Route exact path="/" render={() => (
                        <ProductList onShowProductProfile={this.onShowProductProfile}/>
                    )}/>

                    <Route path="/profile" render={() =>
                        <ProductProfile product={this.state.product}/>
                    }/>
                </div>
            </Router>
        )
    }
}

export default InfoSide;