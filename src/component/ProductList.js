import React from "react";
import ProductItem from '../container/product-item-container';
import '../css/product-list.css';
import TotalPrice from "./TotalPrice";

class ProductList extends React.Component {

    render() {
        if (this.props.isFetching) {
            return 'is fetching...';
        } else {
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
}

export default ProductList;