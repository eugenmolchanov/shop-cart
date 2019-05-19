import React from "react";
import "../css/icon.css";

class Icon extends React.Component {

    render() {
        return (
            <div className="bucket" onClick={this.props.onClick}>
                <img src={this.props.image} alt="image" className="bucket-image" height={this.props.height}
                     width={this.props.width}/>
            </div>
        )
    }
}

export default Icon;