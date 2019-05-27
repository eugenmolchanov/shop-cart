import React from "react";
import ProductItem from './ProductItem';
import '../css/product-list.css';
import TotalPrice from "./TotalPrice";

class ProductList extends React.Component {
    render() {
        const products = this.props.products.map(product => {
            return <ProductItem key={product.id}
                                onShowProductProfile={this.props.onShowProductProfile.bind(this, product)}
                                product={product}/>
        });

        return (
            <div>
                <h2>Product list</h2>
                {products}
                <TotalPrice products={this.props.products}/>
            </div>
        )
    }
}

export default ProductList;