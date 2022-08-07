import React, {Component} from "react";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector('#modal')

class Modal extends Component {

    componentDidMount () {
        window.addEventListener('keydown', this.hundleEscBtn)
    }
    
    componentWillUnmount() {
        window.removeEventListener('keydown', this.hundleEscBtn )
    }

    hundleEscBtn = (e) => {
        if(e.code === 'Escape') {
            this.props.onClose()
        }
    }

    hundleClickOverlay = (e) => {
        if(e.currentTarget === e.target) {
            this.props.onClose()
        }
    }

    render () {
        return  createPortal(
            <div className="Overlay" onClick={this.hundleClickOverlay}>
                <div className="Modal">
                    <img src={this.props.url} alt="" />
                </div>
            </div>, modalRoot
            ) 
    }
    
    
    
        
    
} 

export default Modal;