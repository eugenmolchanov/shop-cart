import React from "react";
import ProductList from "./ProductList";
import ProductProfile from "./ProductProfile";
import {BrowserRouter as Router, Route} from "react-router-dom";

class InfoSide extends React.Component {

    render() {
        return (
            <Router>
                <div className="product-info">
                    <div className="product-info-content">
                        <Route exact path="/" render={() => (
                            <ProductList {...this.props}/>
                        )}/>

                        <Route path="/profile" render={() =>
                            <ProductProfile {...this.props}/>
                        }/>
                    </div>
                </div>
            </Router>
        )
    }
}

export default InfoSide;