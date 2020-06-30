import React from 'react';
import MatchGeneralinfo from '../match-general-info/match-general-info.component';
import MatchStatistics from '../match-statistics/match-statistics.component';
import './card.styles.css';

const Card = ({cardObj}) => {
    
    return(
        <div data-test="component-singlecard" className="card">
            <MatchGeneralinfo data-test="component-matchgeneralinfo" generalInfo={cardObj}/>
            <MatchStatistics data-test="component-card-matchstats" statistics={cardObj}/>
        </div>
    )
}

export default Card;