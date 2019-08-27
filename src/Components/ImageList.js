
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = props => {
    const images = props.images.map( image => {
       
        return  <ImageCard key={ image.disp_order } image={ image }/>;
    });
    
    return <div>{images}</div>
}

export default ImageList;