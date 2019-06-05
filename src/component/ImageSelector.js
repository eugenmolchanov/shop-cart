import React from "react";
import "../css/image-selector.css";
import FormIcon from "./FormIcon";

class ImageSelector extends React.Component {

    components = () => {
        return this.props.productsIcons.map(icon => {
            return <FormIcon key={icon}
                             icon={icon}
                             onClick={this.props.onClick.bind(this, icon)}/>
        })
    };

    render() {
        if (this.props.open) {
            return (
                <div className="image-selector">
                    {this.components()}
                </div>
            )
        } else {
            return null;
        }
    }
}

export default ImageSelector;