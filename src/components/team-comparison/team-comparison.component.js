import React from 'react';
import './team-comparison.styles.css';

const TeamComparison = ({left, middle, right}) => {
    return(
        <div data-test="component-teamcomparison" className="comparison">
            <div data-test="component-teamcomparison-left">{left}</div>
            <div data-test="component-teamcomparison-middle" className="middle">{middle}</div>
            <div data-test="component-teamcomparison-right">{right}</div>
        </div>
    )
}

export default TeamComparison;