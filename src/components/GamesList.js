import React, { Component } from 'react';
import GameCard from './GameCard';
import Username from './Username';

class GamesList extends Component {
    state = {
        username: '',
        playersRequired: 1,
        timeRequired: 999,
        randomButtonShow: false
    };

    componentDidMount() {   

    }

    componentDidUpdate() {
        
    }

    findUsername = (e) => {
        e.preventDefault();
        this.setState({
            username: e.target.value
        });
    }

    submitPlayers = (e) => {
        this.setState({
            playersRequired: e.target.value
        })
    }

    submitPlayTime = (e) => {
        e.preventDefault();
        this.setState({
            timeRequired: e.target.value
        })
    }

    randomPicker = (e) => {
        // TODOS, fix unresponsiveness
        e.preventDefault();
        let gameListings = {};
        Object.assign(gameListings, this.state);
        console.log("clone", gameListings);
        let gameArray = this.shuffleArray(gameListings.listings);
        console.log("shuffle", gameArray)
        this.setState({
            listings: gameArray,
            // randomizedGame: gameArray[0]
        })
    }

    submitUsername = (e) => {
        let userBgg = 'https://bgg-json.azurewebsites.net/collection/' + this.state.username;
        fetch(userBgg)
        .then(response => response.json())
        .then(data => this.setState({ 
            listings: data,
            randomButtonShow: true
        }, function() {
            let cloneListings = [...this.state.listings];
            for (let i = 0; i < this.state.listings.length; i++ ) {
                let bggId = "https://bgg-json.azurewebsites.net/thing/" + this.state.listings[i].gameId;
                // console.log(i,cloneListings);
                // fetch(bggId)
                // .then(response => response.json())
                // .then(data => cloneListings[i].description = data.description)
            }
            // this.setState({
            //     listings: cloneListings
            // })
        }), 
        );
        
    }

    shuffleArray = (array) => {
        var currentIndex = array.length, temporaryValue, randomIndex;
  
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
        // for (let i = a.length - 1; i > 0; i--) {
        //     const j = Math.floor(Math.random() * (i + 1));
        //     [a[i], a[j]] = [a[j], a[i]];
        // }
        // return a;
    }
    
    render() {
        return(
        <div>   
            <Username 
                username={this.state.username} 
                findUsername={this.findUsername}
                submitPlayers={this.submitPlayers} 
                submitUsername={this.submitUsername}
                submitPlayTime={this.submitPlayTime}
                randomPicker={this.randomPicker}
                randomButtonShow={this.state.randomButtonShow}
            />
            <GameCard 
                loaded={this.state.loaded}
                listings={this.state.listings} 
                randomizedGame={this.state.randomizedGame}
                playersRequired={this.state.playersRequired}
                timeRequired={this.state.timeRequired}
            />
        </div>
        )
    }
  }



export default GamesList;

//TODOs retrieve user game list from boardgame api

//https://stackoverflow.com/questions/53121140/react-set-state-doesnt-update-in-fetch-success-function-on-key-up-event

// https://www.npmjs.com/package/react-masonry-css