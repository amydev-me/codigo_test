import React from 'react';

const ImageCard = (props) =>{
    const { space_name, space_description, space_thumb_image, type_name, base_price } = props.image;
    return (
            <div className="col-12 col-sm-6 col-md-4 col-xl-2 mb-2">                    
                <div className="list_item-image" style={{height: "300px"}}>
                    <img src={ space_thumb_image }
                        alt={ space_description }  />
                    </div>
                    <div className="list_item">
                        <div className="list_item-title">
                            <span>{space_name} </span>
                        </div>
                        <div className="list_item-txt">
                            <span>{type_name}</span>
                        </div>
                        <div className="list_item-price">
                            <span style={{fontWeight: "bold"}}>${base_price}</span> / <span>day</span>
                    </div>
                </div>
            </div>
    );
    
}

export default ImageCard;