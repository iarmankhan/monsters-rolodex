import React from 'react';

import './search-box.styles.css'

export const SearchBox = ({value, placeholder, handleChange}) => {
    return (
        <input 
            className="search" 
            type="search" 
            placeholder={placeholder} 
            value={value} 
            onChange={handleChange} 
        />
    )
}