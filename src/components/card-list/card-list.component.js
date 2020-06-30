import React from 'react';
import Card from '../card/card.component';
import './card-list.styles.css';

const CardList = ({data}) => {
    return(
        <>
            {
                data.map(cardObj => 
                    <Card 
                        data-test="component-card"
                        key={cardObj.fifa_id} 
                        cardObj={cardObj} 
                    />
                )
            }
        </>
    )
}

export default CardList;