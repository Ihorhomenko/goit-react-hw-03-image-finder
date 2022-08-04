import React from "react";

const ImageGallery = ({gallery, onClick}) => {
    return (
        <ul className="ImageGallery">
            {gallery.map(el =>  
            <li className="ImageGalleryItem " key={el.id} onClick={() => onClick(el.largeImageURL)}>
                <img className="ImageGalleryItem-image" src={el.webformatURL} alt={el.tegs}/>
            </li> )}
        </ul>
    )
}


export default ImageGallery;