import React, { Component } from "react";

class ComplaintRegister extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ename: "",
            complaint: "",
            numberHolder: Math.floor(100000 + Math.random() * 900000)
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const msg =
            "Thanks " +
            this.state.ename +
            "\nYour Complaint was Submitted.\nReference ID is: " +
            this.state.numberHolder;

        alert(msg);

        this.setState({
            ename: "",
            complaint: "",
            numberHolder: Math.floor(100000 + Math.random() * 900000)
        });
    };

    render() {
        return (
            <div className="container">
                <h2>Ticket Raising App</h2>

                <form onSubmit={this.handleSubmit}>
                    <label>Employee Name</label>
                    <br />

                    <input
                        type="text"
                        name="ename"
                        value={this.state.ename}
                        onChange={this.handleChange}
                        required
                    />

                    <br />
                    <br />

                    <label>Complaint</label>
                    <br />

                    <textarea
                        name="complaint"
                        rows="5"
                        value={this.state.complaint}
                        onChange={this.handleChange}
                        required
                    />

                    <br />
                    <br />

                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default ComplaintRegister;