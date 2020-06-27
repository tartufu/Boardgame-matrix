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
        <div>   
            <h2 className="username-game-list"> {this.props.username} Game's List</h2>
                <div className="username-main-form">
                <form onSubmit={this.handleSubmit} >
                    <div className="form-row">
                        <input type="text" onChange={this.props.findUsername} placeholder="John" required/>
                        <input type="number" min="1"  onChange={this.props.submitPlayers} placeholder="Players" />
                        <input type="number" min="1"  onChange={this.props.submitPlayTime} placeholder="Game Time" />
                        <input type="submit" className="btn btn-primary" />
                        {
                            this.props.randomButtonShow && 
                        <input type="submit" className="btn btn-success" value="Random Game" onClick={this.props.randomPicker}/>
                        }
                    </div>
                </form>
                </div>
            <br />
        </div>
        )
    }
  }

export default Username;
