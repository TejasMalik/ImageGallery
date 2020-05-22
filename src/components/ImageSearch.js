import React from 'react';
import './ImageSearch.css'

const ImageSearch = (props) => {

    return (
        <div className="imageSearch">
            <form onSubmit={props.handleGetRequest} className="imageSearch__form">
                <input type="text" autoComplete="off" name="searchValue" placeholder="Search Images"></input>
                <button>Search</button>
            </form>
        </div>
    );
}

export default ImageSearch;