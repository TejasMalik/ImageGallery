import React from 'react'
import { Link } from 'react-router-dom'
import './ImageView.css'

const ImageView = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="imageView__container">
                        <img src={props.location.state.image.largeImageURL} alt={props.location.state.image.tags} className="imageView__img img-responsive"></img>
                        <div className="imageView__text">
                            <button className="active-recipe__button"><Link to="/">Home</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageView