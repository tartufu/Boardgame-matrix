import React from 'react';

function GameImg(props) {

    return(
        <div>
            <img src={props.image} alt="boardgame-cover"></img>
        </div>
        
    );
}

export default GameImg;

//props.listings && props.listings.map(listing => ( <p>{listing.id}</p>)) => only loads if data has been fully loaded 



