import React from "react";

class TotalPrice extends React.Component {

    render() {
        const totalPrice = this.props.products.map((product) => product.count * product.price)
            .reduce((previousValue, currentValue) => previousValue + currentValue, 0);

        return totalPrice ? <div className="total-price">Total: {totalPrice} $</div> : null;
    }
}

export default TotalPrice;