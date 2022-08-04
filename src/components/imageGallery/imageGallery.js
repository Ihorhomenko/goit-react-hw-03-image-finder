import React from "react";

const ImageGallery = ({gallery}) => {
    return (
        <ul className="ImageGallery">
            {gallery.map(el =>  
            <li className="ImageGalleryItem " key={gallery.id}>
                <img className="ImageGalleryItem-image" src={el.webformatURL} alt={el.tegs}/>
            </li> )}
        </ul>
    )
}


export default ImageGallery;