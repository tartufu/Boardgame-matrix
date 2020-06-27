import React, { Component } from 'react';
import meeple from '../images/meeple.png';
import stopwatch from '../images/stopwatch.png';
import chart from '../images/chart.png';

class Testbox extends Component {
    state = {
        username: '',
        playersRequired: 1,
        timeRequired: 999,
        randomButtonShow: false,
        desText: "5-&shy;Minute Dungeon is a chaotic, co-&shy;operative, real-&shy;time card game in which players have only five minutes to escape the randomized dungeon. Communication and teamwork are critical to survival because there's no time to form a carefully considered plan &mdash; and no predicting what dangers lie ahead.&#10;&#10;In more detail, players assume the role of one of ten heroes, each with special cards and abilities. Once the five-minute timer starts, the race is on to defeat all the monsters inside the dungeon. In order to defeat a monster, players must match symbols from their hand with ones on the monster's card. At the end of each dungeon is a powerful dungeon boss &mdash; and after the first boss is defeated, the campaign continues to the second boss. Each boss, and each randomized dungeon, gets harder until players reach the fifth and final boss.&#10;&#10;",
        desTextShow: false
    };

    componentDidMount() {

        console.log(this.state.desText)
        console.log(this.state.desText.length)  
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
            <div className="testbox row">   
                <div className="col-md-3 testbox-card">
                    <div>
                        <img src="https://cf.geekdo-images.com/original/img/qmIKAcdaUMX4skrH8pX0qBMxijg=/0x0/pic3370214.jpg" alt="picccyyyy lorrrr"/>
                    </div>
                    <h2> 5 Min Dungeon</h2>
                    {
                        !this.state.desTextShow && <p>{this.state.desText.substring(0, 200)}...<span onClick={this.showExtended} style={{color: "red"}} >Read More</span> </p>
                    }
                    
                    {
                       this.state.desTextShow && <p>{this.state.desText}  ...<span onClick={this.showExtended} style={{color: "red"}} >Read Less</span></p>
                    }
                    <div className="row testbox-tab">
                        <div className="col-4">
                            <p>7.6 </p>
                            <img src={chart} className="testbox-icons"></img>
                            {/* <p>Rating</p> */}
                        </div>
                        <div className="col-4">
                            <p>30 mins </p>
                            <img src={stopwatch} className="testbox-icons"></img>
                            {/* <p>Time</p> */}
                        </div>
                        <div className="col-4">
                            <p>2 - 5p </p>
                            <img src={meeple} className="testbox-icons"></img>
                            {/* <p>Player</p> */}
                        </div>
                    </div>
                </div>
                <div className="col-md-3 testbox-card">
                <div>
                    <img src="https://cf.geekdo-images.com/original/img/g5hq7BxivRi4D7JgUkmAcLksWDI=/0x0/pic4387681.jpg" alt="picccyyyy lorrrr"/>
                    </div>
                    <h2> Air Land and Sea</h2>
                    {
                        !this.state.desTextShow && <p>{this.state.desText.substring(0, 200)}...<span onClick={this.showExtended} style={{color: "red"}} >Read More</span> </p>
                    }
                    
                    {
                       this.state.desTextShow && <p>{this.state.desText}  ...<span onClick={this.showExtended} style={{color: "red"}} >Read Less</span></p>
                    }                    <div className="row testbox-tab">
                        <div className="col-4">
                            <p>7.6 </p>
                            <img src={chart} className="testbox-icons"></img>
                            {/* <p>Rating</p> */}
                        </div>
                        <div className="col-4">
                            <p>30 mins </p>
                            <img src={stopwatch} className="testbox-icons"></img>
                            {/* <p>Time</p> */}
                        </div>
                        <div className="col-4">
                            <p>2 - 5p </p>
                            <img src={meeple} className="testbox-icons"></img>
                            {/* <p>Player</p> */}
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
        )
    }
  }



export default Testbox;
