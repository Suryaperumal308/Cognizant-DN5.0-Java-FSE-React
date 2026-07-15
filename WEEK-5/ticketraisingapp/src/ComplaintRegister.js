import React, { Component } from "react";

class ComplaintRegister extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ename: "",
            complaint: "",
            numberHolder: Math.floor(100000 + Math.random() * 900000),
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const msg =
            "Thanks " +
            this.state.ename +
            "\nYour Complaint was Submitted Successfully.\nReference ID is: " +
            this.state.numberHolder;

        alert(msg);

        this.setState({
            ename: "",
            complaint: "",
            numberHolder: Math.floor(100000 + Math.random() * 900000),
        });
    };

    render() {
        return (
            <div className="container">
                <h2>Register your complaints here!!!</h2>

                <form onSubmit={this.handleSubmit}>
                    <label><b>Employee Name:</b></label>
                    <input
                        type="text"
                        name="ename"
                        value={this.state.ename}
                        onChange={this.handleChange}
                        required
                    />

                    <label><b>Complaint:</b></label>
                    <textarea
                        name="complaint"
                        rows="5"
                        value={this.state.complaint}
                        onChange={this.handleChange}
                        required
                    ></textarea>

                    <div className="button-container">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default ComplaintRegister;