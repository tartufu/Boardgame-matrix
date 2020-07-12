import React, { Component } from 'react';

class Username extends Component {

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.submitUsername()
    }
    
    render() {
        return(
        <React.Fragment>
        <div className="username-game-div">   
            <h2 className="username-game-list"> {this.props.username} Game's List</h2>
                <div className="username-main-form">
                <form onSubmit={this.handleSubmit} >
                    <div className="form-row align-items-center">
                        <div classname="col-auto">
                                {/* <label for="username">BGG User</label> */}
                            <input classname="input-field" type="text" onChange={this.props.findUsername} placeholder="John" required/>
                        </div>

                        <div className="col-auto">
                            <input classname="input-field" type="number" min="1"  onChange={this.props.submitPlayers} placeholder="Players" />
                        </div>

                        {/* <div className="col-auto">
                            <input classname="input-field" type="number" min="1"  onChange={this.props.submitPlayTime} placeholder="Game Time" />
                        </div> */}

                        <div className="col-auto">
                            <input type="submit" className="btn submit-btn" />
                        </div>

                        <div className="col-auto">
                            {
                                this.props.randomButtonShow && 
                            <input type="submit" className="btn random-btn" value="Random Shuffle" onClick={this.props.randomPicker}/>
                            }                        
                        </div>

                    </div>
                </form>
                </div>
            <br />
        </div>
        </React.Fragment>
        )
    }
  }

export default Username;


// https://www.npmjs.com/package/react-input-range