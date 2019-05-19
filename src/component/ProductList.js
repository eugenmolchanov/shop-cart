import React from "react";
import ProductItem from './ProductItem';
import '../css/product-list.css';
import TotalPrice from "./TotalPrice";

class ProductList extends React.Component {
    render() {
        const products = this.props.products.map(product => {
            return <ProductItem key={product.id} name={product.name} count={product.count} price={product.price}
                                icon={product.icon}
                                onIncreaseCounter={this.props.onIncreaseCounter.bind(this, product)}
                                onDecreaseCounter={this.props.onDecreaseCounter.bind(this, product)}
                                onRemoveItem={this.props.onRemoveItem.bind(this, product)}
                                onShowProductProfile={this.props.onShowProductProfile.bind(this, product)}/>
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