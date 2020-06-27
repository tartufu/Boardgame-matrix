import React, { Component } from 'react';
import meeple from '../images/meeple.png';
import stopwatch from '../images/stopwatch.png';
import chart from '../images/chart.png';

class Testbox extends Component {
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
    render() {
        return(
        <React.Fragment>
            <div className="testbox row">   
                <div className="col-md-3 testbox-card">
                    <div>
                        <img src="https://cf.geekdo-images.com/original/img/qmIKAcdaUMX4skrH8pX0qBMxijg=/0x0/pic3370214.jpg" alt="picccyyyy lorrrr"/>
                    </div>
                    <h2> 5 Min Dungeon</h2>
                    <p>LOREM IPSUM YOUR LANN PPAAA PAAA LANNNNNN KNNN CBBB CHHOAWWWW</p>
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
                    <p>LOREM IPSUM YOUR LANN PPAAA PAAA LANNNNNN KNNN CBBB CHHOAWWWW</p>
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
            </div>

        </React.Fragment>
        )
    }
  }



export default Testbox;
