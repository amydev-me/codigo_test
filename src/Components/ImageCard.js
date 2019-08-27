import React from 'react';

class ImageCard extends React.Component{

    constructor(props){
        super(props);

        this.state = { spans: 0 };
    }
    render(){            
        const { space_description, space_thumb_image } = this.props.image;
        return (
                <div className="col-12 col-sm-6 col-md-4 col-xl-2 mb-2">                    
                    <div className="list_item-image" style={{height: "300px"}}>
                        <img src={ space_thumb_image }
                            alt={ space_description }  />
                        </div>
                        <div className="list_item">
                            <div className="list_item-title">
                                <span>space_thumb_image </span>
                            </div>
                            <div className="list_item-txt">
                                <span>Standee</span>
                            </div>
                            <div className="list_item-price">
                                <span style={{fontWeight: "bold"}}>$10</span> / <span>day</span>
                        </div>
                    </div>
                </div>
        );
    } 
}

export default ImageCard;