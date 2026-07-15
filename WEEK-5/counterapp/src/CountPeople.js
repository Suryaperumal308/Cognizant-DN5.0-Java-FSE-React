import React, { Component } from "react";

class CountPeople extends Component {
    constructor(props) {
        super(props);

        this.state = {
            entrycount: 0,
            exitcount: 0
        };
    }

    updateEntry = () => {
        this.setState((prevState) => {
            return {
                entrycount: prevState.entrycount + 1
            };
        });
    };

    updateExit = () => {
        this.setState((prevState) => {
            return {
                exitcount: prevState.exitcount + 1
            };
        });
    };

    render() {
        return (
            <div className="counter-container">
                <div>
                    <button onClick={this.updateEntry}>Login</button>
                    <span>{this.state.entrycount} People Entered!!!</span>
                </div>

                <div>
                    <button onClick={this.updateExit}>Exit</button>
                    <span>{this.state.exitcount} People Left!!!</span>
                </div>
            </div>
        );
    }
}

export default CountPeople;