import React from 'react';
import './match-general-info.styles.css';

const MatchGeneralInfo = ({generalInfo}) => {
    const {stage_name,venue, location, status, attendance} = generalInfo;
    return(
        <>
            <div data-test="component-matchinfo-stage-location"
                 className="general-info">{stage_name}, {location}, {venue}</div>
            <div data-test="component-matchinfo-status"
                 className="general-info">{status}</div>
            <div data-test="component-matchinfo-attendance"
                 className="general-info">Spectators: {attendance}</div>
        </>
    )
}

export default MatchGeneralInfo;
