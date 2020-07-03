import React, { Component } from 'react';

class GameDescription extends Component {
    state = {
        desText: this.props.description
        // username: '',
        // playersRequired: 1,
        // timeRequired: 999,
        // randomButtonShow: false,
        // desText: "5-&shy;Minute Dungeon is a chaotic, co-&shy;operative, real-&shy;time card game in which players have only five minutes to escape the randomized dungeon. Communication and teamwork are critical to survival because there's no time to form a carefully considered plan &mdash; and no predicting what dangers lie ahead.&#10;&#10;In more detail, players assume the role of one of ten heroes, each with special cards and abilities. Once the five-minute timer starts, the race is on to defeat all the monsters inside the dungeon. In order to defeat a monster, players must match symbols from their hand with ones on the monster's card. At the end of each dungeon is a powerful dungeon boss &mdash; and after the first boss is defeated, the campaign continues to the second boss. Each boss, and each randomized dungeon, gets harder until players reach the fifth and final boss.&#10;&#10;",
        // desTextShow: false
    };

    componentDidMount() {

        

        // console.log(this.state.desText)
        // console.log(this.state.desText.length)  
    }

    componentDidUpdate() {

    }

    showExtended = (e) => {
        this.setState({
            desTextShow: !this.state.desTextShow
        })
    }


    render() {
        return(
        <React.Fragment>
            <p> <a href={"https://boardgamegeek.com/boardgame/" + this.props.gameId} target="_blank">  Find out More at BGG</a></p>    
        </React.Fragment>
        )
    }
  }


export default GameDescription;

//props.listings && props.listings.map(listing => ( <p>{listing.id}</p>)) => only loads if data has been fully loaded 



