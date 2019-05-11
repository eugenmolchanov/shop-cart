import React from "react";
import '../css/input.css';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    render() {
        return <div>
            <input value={this.props.value} onChange={this.props.onChange} className="input"
                   placeholder={this.props.placeHolder}/>
        </div>
    }
}

export default Input;