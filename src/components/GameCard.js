import React from 'react';
import GameImg from './GameImg';
import GameTitle from './GameTitle';
import GameDescription from './GameDescription';
import GameIcons from './GameIcons';

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
                                <GameImg image={listing.image}/>
                                <GameTitle title={listing.name} className="game-title"/>
                                <GameDescription />
                                <GameIcons 
                                    rating={listing.averageRating}
                                    maxPlayers={listing.maxPlayers}
                                    playingTime={listing.playingTime}
                                />
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



