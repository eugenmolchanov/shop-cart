import React from "react";
import '../css/counter.css'

class Counter extends React.Component {

    render() {
        return (
            <table className="table-center">
                <thead>
                <tr>
                    <th className="mutator" onClick={this.props.onDecrease}>-</th>
                    <th>{this.props.count}</th>
                    <th className="mutator" onClick={this.props.onIncrease}>+</th>
                </tr>
                </thead>
            </table>
        )
    }
}

export default Counter;