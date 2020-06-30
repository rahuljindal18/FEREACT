import React from 'react';
import './color-picker.styles.css';

const ColorPicker = ({hexVal, handleColorChange}) => {
    return(
        <div data-test="component-colorpicker" className="color-picker">
            <label>Color Picker</label>
            <input 
                data-test="component-colorpicker-input"
                type="color" 
                value={hexVal} 
                onChange={handleColorChange}
            />
        </div>
    )
}

export default ColorPicker;