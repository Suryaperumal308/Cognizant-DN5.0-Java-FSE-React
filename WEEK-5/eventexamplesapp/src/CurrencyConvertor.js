import React, { Component } from "react";

class CurrencyConvertor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            amount: "",
            currency: ""
        };
    }

    handleAmountChange = (event) => {
        this.setState({
            amount: event.target.value
        });
    };

    handleCurrencyChange = (event) => {
        this.setState({
            currency: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const euro = this.state.amount * 80;

        alert("Converting to Euro Amount is " + euro);
    };

    render() {
        return (
            <div>
                <h1 className="title">Currency Convertor!!!</h1>

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Amount:</label>
                        <input
                            type="number"
                            value={this.state.amount}
                            onChange={this.handleAmountChange}
                        />
                    </div>

                    <div>
                        <label>Currency:</label>
                        <input
                            type="text"
                            value={this.state.currency}
                            onChange={this.handleCurrencyChange}
                        />
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default CurrencyConvertor;