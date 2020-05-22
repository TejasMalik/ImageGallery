import "./ImageList.css"
import { Link } from 'react-router-dom'

import React, { Component } from 'react';

class ImageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonVal: 2
        }
    }

    handleColThree = () => {
        this.setState({
            buttonVal: 3
        })
    }

    handleColOne = () => {
        this.setState({
            buttonVal: 1
        })
    }

    handleColtwo = () => {
        this.setState({
            buttonVal: 2
        })
    }

    render() {
        return (

            <div>
                <p>Options: </p>
                <button onClick={this.handleColOne}>1</button>
                <button onClick={this.handleColtwo}>2</button>
                <button onClick={this.handleColThree}>3</button>
                {(() => {
                    if (this.state.buttonVal === 3) {
                        return (
                            <div className="container">
                                <br></br>


                                <div className="row">
                                    {this.props.images.map((image, i) => {
                                        return (
                                            <div key={i} className="col-md-4" style={{ marginBottom: "2rem" }}>
                                                <div className="imageList__container">
                                                    <img src={image.largeImageURL} alt={image.tags} className="imageList__image"></img>
                                                </div>
                                                <div className="image__details">
                                                    <Link to={{
                                                        pathname: `/image/${image.id}`,
                                                        state: { image: image }
                                                    }}>
                                                        <button>View</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    } else if (this.state.buttonVal === 1) {
                        return (

                            <div className="container">
                                <br></br>

                                {this.props.images.map((image, i) => {
                                    return (
                                        <div key={i} className="col-md-4" style={{ marginLeft: "300px", marginBottom: "2rem" }}>
                                            <div className="imageList__container">
                                                <img src={image.largeImageURL} alt={image.tags} className="imageList__image"></img>
                                            </div>
                                            <div className="image__details">
                                                <Link to={{
                                                    pathname: `/image/${image.id}`,
                                                    state: { image: image }
                                                }}>
                                                    <button>View</button>
                                                </Link>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    } else if (this.state.buttonVal === 2){
                        return (
                            <div className="container">
                            <br></br>


                            <div className="row">
                                {this.props.images.map((image, i) => {
                                    return (
                                        <div key={i} className="col-5" style={{ marginLeft: "50px", marginBottom: "2rem" }}>
                                            <div className="imageList__container">
                                                <img src={image.largeImageURL} alt={image.tags} className="imageList__image"></img>
                                            </div>
                                            <div className="image__details">
                                                <Link to={{
                                                    pathname: `/image/${image.id}`,
                                                    state: { image: image }
                                                }}>
                                                    <button>View</button>
                                                </Link>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        )
                    }
                })()}
            </div >
        );
    }
}

export default ImageList;