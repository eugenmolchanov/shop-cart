import React from "react";
import Icon from "./Icon";
import "../css/form-icon.css";

class FormIcon extends React.Component {

     render() {
         return (
             <div className="form-icon">
                 <Icon image={this.props.icon} height="30px" width="30px" onClick={this.props.onClick}/>
             </div>
         )
     }
}

export default FormIcon;