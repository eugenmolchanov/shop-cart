import React from "react";
import AppleImage from "../image/apple.svg";
import IceCreamImage from "../image/ice-cream.svg";
import BreadImage from "../image/bread.svg";
import MilkImage from "../image/milk.svg";
import "../css/image-selector.css";
import FormIcon from "./FormIcon";

class ImageSelector extends React.Component {

    render() {
        if (this.props.open) {
            return (
                <div className="image-selector">
                    <FormIcon icon={BreadImage} onClick={this.props.onClick.bind(this, BreadImage)}/>
                    <FormIcon icon={MilkImage} onClick={this.props.onClick.bind(this, MilkImage)}/>
                    <FormIcon icon={AppleImage} onClick={this.props.onClick.bind(this, AppleImage)}/>
                    <FormIcon icon={IceCreamImage} onClick={this.props.onClick.bind(this, IceCreamImage)}/>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default ImageSelector;