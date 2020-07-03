import React from 'react';
import Masonry from 'react-masonry-css';
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
            <Masonry
            breakpointCols={5}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            {
                props.listings && props.listings.filter(
                    listing => listing.maxPlayers >= props.playersRequired && listing.playingTime <= props.timeRequired)
                    .map(
                        listing => ( 
                    <React.Fragment>
                        <div className="gamename-container" key={listing.gameId}>
                            <div className="gamename-container2 ">
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
            </Masonry>
        </div>
        
    );
}

export default GameCard;

//props.listings && props.listings.map(listing => ( <p>{listing.id}</p>)) => only loads if data has been fully loaded 



