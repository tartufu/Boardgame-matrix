import React from 'react';
import Masonry from 'react-masonry-css';
import GameImg from './GameImg';
import GameTitle from './GameTitle';
import GameDescription from './GameDescription';
import GameIcons from './GameIcons';

function GameCard(props) {

    const breakpointColumnsObj = {
        default: 5,
        1100: 3,
        700: 2,
        500: 1
      };

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
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            {
                props.listings && props.listings.filter(
                    listing => (listing.maxPlayers <= props.playersRequired[1] && listing.minPlayers >= props.playersRequired[0]) && (listing.playingTime <= props.timeRequired[1] && listing.playingTime >= props.timeRequired[0]))
                    .map(
                        listing => {
                            return (
                                <React.Fragment>
                                    <div className="gamename-container col" key={listing.gameId}>
                                        <div className="gamename-container2 ">
                                            <GameImg image={listing.image} />
                                            <GameTitle title={listing.name} className="game-title" />
                                            <GameDescription description={listing.description} gameId={listing.gameId} />
                                            <GameIcons
                                                rating={listing.averageRating}
                                                maxPlayers={listing.maxPlayers}
                                                minPlayers={listing.minPlayers}
                                                playingTime={listing.playingTime} />
                                        </div>
                                    </div>
                                </React.Fragment>
                            );
                        })
            }
            </Masonry>
        </div>
        
    );
}

export default GameCard;

//props.listings && props.listings.map(listing => ( <p>{listing.id}</p>)) => only loads if data has been fully loaded 



