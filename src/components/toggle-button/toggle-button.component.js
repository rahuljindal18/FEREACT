/* eslint-disable react/prop-types */
import React from 'react';
import './toggle-button.styles.css';

const ToggleButton = ({handleToggleChange}) => {
    return(
            <div data-test="component-toggle" className="toggle">
                <div>Toggle Theme</div>
                <label className="switch"> 
                    <input type="checkbox" onChange={handleToggleChange}/>
                    <span className="slider round"></span>
                </label>
            </div>
    )
}

export default ToggleButton;