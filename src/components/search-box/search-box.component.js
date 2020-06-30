/* eslint-disable react/prop-types */
import React from 'react';
import './search-box.styles.css';

const SearchBox = ({value, handleChange}) => {
    return(
            <input 
                data-test="component-searchbox"
                type="search" 
                placeholder="Enter 3 digit fifa code to display match results"
                className="search"
                value={value}
                onChange={handleChange}
            />    
    )
}

export default SearchBox;