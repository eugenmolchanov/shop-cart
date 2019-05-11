import React from "react";
import ProductItem from './ProductItem';
import '../css/product-list.css';

class ProductList extends React.Component {
    render() {
        const products = this.props.products.map((product, index) => {
            return <ProductItem key={index} name={product.name} count={product.count} price={product.price}
                                onIncreaseCounter={this.props.onIncreaseCounter.bind(this, index)}
                                onDecreaseCounter={this.props.onDecreaseCounter.bind(this, index)}/>
        });

        const totalPrice = this.props.products.map((product) => product.count * product.price)
            .reduce((previousValue, currentValue) => previousValue + currentValue, 0);

        return (
            <div>
                <div>Product list</div>
                {products}
                <div className="total-price">Total: {totalPrice} $</div>
            </div>
        )
    }
}

export default ProductList;