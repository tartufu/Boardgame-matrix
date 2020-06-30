import React from 'react';

function GameTitle(props) {

    return(
    <h3>{props.title}</h3>        
    );
}

export default GameTitle;

//props.listings && props.listings.map(listing => ( <p>{listing.id}</p>)) => only loads if data has been fully loaded 



