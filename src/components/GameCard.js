import React from 'react';
import GameImg from './GameImg'

function GameCard(props) {

    return(
        <div className="row">
            <div className="col-12">
                <h2>
                    {
                        props.randomizedGame && props.randomizedGame.name
                    }
                </h2>
            </div>
            {
                props.listings && props.listings.filter(
                    listing => listing.maxPlayers >= props.playersRequired && listing.playingTime <= props.timeRequired)
                    .map(
                        listing => ( 
                    <React.Fragment>
                        <div className="col-md-3 gamename-container" key={listing.gameId}>
                            <div className="gamename-container2">
                                <GameImg image={listing.thumbnail}/>
                                <img src ={listing.thumbnail}  alt="bg-thumbnail" />
                                <p>{listing.name}   </p>
                                <p>{listing.averageRating}</p>
                                <p> {listing.maxPlayers} Players Max</p>
                                <p> {listing.playingTime} Min Play Time</p>
                            </div>
                        </div>
                    </React.Fragment>
                ))
            }
        </div>
        
    );
}

export default GameCard;

//props.listings && props.listings.map(listing => ( <p>{listing.id}</p>)) => only loads if data has been fully loaded 



