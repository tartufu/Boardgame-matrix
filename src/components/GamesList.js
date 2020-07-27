import React, { Component } from 'react';
import GameCard from './GameCard';
import Username from './Username';
import Instructions from './Instructions';
import ReactSlider from 'react-slider';


class GamesList extends Component {
    state = {
        username: '',
        playersRequired: [1, 10],
        timeRequired: [0, 999],
        randomButtonShow: false,
        dataLoaded: false,
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

    submitPlayersTest = (e) => {
        console.log("SUCECESSSS");
        console.log(e);
        this.setState({
            playersRequired: e
        })
    }

    // submitPlayTime = (e) => {
    //     e.preventDefault();
    //     this.setState({
    //         timeRequired: e.target.value
    //     })
    // }

    submitPlayTime = (e) => {
        this.setState({
            timeRequired: e
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
        .then((data) => {
            let ownedGamesArray = [];
            console.log(Array.isArray(data));
            console.log(data.length)
            console.log(data);
            for(let i = 0; i < data.length; i++) {
                if (data[i].owned) {
                    console.log("yay")
                    ownedGamesArray.push(data[i])
                }
            }
            console.log("GAMESESSS", ownedGamesArray);
            this.setState({ 
                listings: ownedGamesArray,
                randomButtonShow: true,
                dataLoaded: true
            });
        })
        .then(console.log("aweaweawe"))     
    }

    // data => function() {
    //     console.log(data);

    // }

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
            <div className="react-slider-section">
                <div className="row">
                <div className="col-md-6">
                <h3> Number of Players </h3>
                <ReactSlider
                    className="horizontal-slider"
                    thumbClassName="slider-thumb"
                    trackClassName="slider-track"
                    defaultValue={[1, 10]}
                    ariaLabel={['Lower thumb', 'Upper thumb']}
                    ariaValuetext={state => `Thumb value ${state.valueNow}`}
                    renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                    pearling
                    minDistance={1}
                    min={1}
                    max={10}
                    // onBeforeChange={val => console.log('onBeforeChange value:', val)}
                    // onChange={val => console.log('onChange value:', val)}
                    // onAfterChange={val => console.log('onAfterChange value:', val)}
                    onAfterChange={val => this.submitPlayersTest(val)}

                />
                </div>

                <div className="col-md-6">
                <h3>Game Time</h3> 
                    <ReactSlider
                        className="horizontal-slider"
                        thumbClassName="slider-thumb"
                        trackClassName="slider-track"
                        ariaValuetext={state => `Thumb value ${state.valueNow}`}
                        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                        pearling
                        minDistance={15}
                        min={15}
                        max={300}
                        step={15}
                        defaultValue={[15, 300]}
                        // onBeforeChange={val => console.log('onBeforeChange value:', val)}
                        // onChange={val => console.log('onChange value:', val)}
                        // onAfterChange={val => console.log('onAfterChange value:', val)}
                        onAfterChange={val => this.submitPlayTime(val)}

                    />    
                </div>
                </div>
            </div>
            <Instructions 
                dataLoaded={this.state.dataLoaded}
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