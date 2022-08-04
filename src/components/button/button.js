import React, {Component} from "react";
import '../../index.css'

class Button extends Component {
    render () {
        return (
            <button className="Button" type="button" onClick={this.props.onClick}>Donwload more</button>
        )
    }
  
}


export default Button