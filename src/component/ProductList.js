import React from "react";
import ProductItem from '../container/product-item-container';
import '../css/product-list.css';
import TotalPrice from "./TotalPrice";
import {BounceLoader} from "react-spinners";

class ProductList extends React.Component {

    render() {
        const productListTitle = <h2>Product list</h2>;
        if (this.props.isFetching) {
            return (
                <div>
                    {productListTitle}
                    <div className="spinner">
                        <BounceLoader loading={this.props.isFetching}
                                      color={'#376f59'}
                                      size={75}
                                      size-unit={'px'}
                        />
                    </div>
                </div>
            );
        } else {
            const products = this.props.products.map(product => {
                return <ProductItem key={product.id}
                                    onShowProductProfile={this.props.onShowProductProfile.bind(this, product)}
                                    product={product}/>
            });

            return (
                <div>
                    {productListTitle}
                    {products}
                    <TotalPrice products={this.props.products}/>
                </div>
            )
        }
    }
}

export default ProductList;