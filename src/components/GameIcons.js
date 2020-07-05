import React from 'react';
import meeple from '../images/meeple.png';
import stopwatch from '../images/stopwatch.png';
import chart from '../images/chart.png';

function GameIcons(props) {

    return(
        <div className="row game-icons-box">
            <div className="col-4">
                <p>{props.rating}</p>
                <div className="text-center">
                  <img src={chart} className="game-icons"></img>
                </div>
            </div>

            <div className="col-4">
                <p> {props.minPlayers} - {props.maxPlayers}</p>
                <div className="text-center">
                  <img src={meeple} className="game-icons"></img>
                </div>

            </div >
            <div className="col-4">
                <p>{props.playingTime}min</p>
                <div className="text-center">
                  <img src={stopwatch} className="game-icons"></img>
                </div>

            </div>
        </div>
    );
}

export default GameIcons;

//props.listings && props.listings.map(listing => ( <p>{listing.id}</p>)) => only loads if data has been fully loaded 



