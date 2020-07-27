import React from 'react';

function Instructions(props) {

    console.log("instructions", props);

    if (!props.dataLoaded) {
        return(
            <div className="header-title-text">
                <h2> Instructions </h2>
                <p> To use this web app, key in your BGG username and click submit or press enter.</p>
                <p> Filter your gamelist according to your required players and game time by the sliders above.</p>
                <p> Shuffle your current/filtered gamelist by clicking on the shuffle game button.</p> 
                <p> For 3 players, please set filter at 4P unless you are looking for games that specifically plays only 3P.</p>
            </div>
        )
    } else {
        return(
            <React.Fragment></React.Fragment>
        )
    }
}

export default Instructions;