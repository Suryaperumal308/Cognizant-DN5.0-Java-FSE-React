import React, { Component } from "react";

const validEmailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateForm = (errors) => {
    let valid = true;

    Object.values(errors).forEach((val) => {
        if (val.length > 0) {
            valid = false;
        }
    });

    return valid;
};

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fullName: "",
            email: "",
            password: "",

            errors: {
                fullName: "",
                email: "",
                password: "",
            },
        };
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        let errors = this.state.errors;

        switch (name) {
            case "fullName":
                errors.fullName =
                    value.length < 5
                        ? "Name must be at least 5 characters long!"
                        : "";
                break;

            case "email":
                errors.email = validEmailRegex.test(value)
                    ? ""
                    : "Email is not valid!";
                break;

            case "password":
                errors.password =
                    value.length < 8
                        ? "Password must be at least 8 characters long!"
                        : "";
                break;

            default:
                break;
        }

        this.setState({
            errors,
            [name]: value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        if (validateForm(this.state.errors)) {
            alert("Valid Form");
        } else {
            if (this.state.errors.fullName !== "") {
                alert(this.state.errors.fullName);
            }

            if (this.state.errors.email !== "") {
                alert(this.state.errors.email);
            }

            if (this.state.errors.password !== "") {
                alert(this.state.errors.password);
            }
        }
    };

    render() {
        return (
            <div className="container">

                <h2>Mail Registration Form</h2>

                <form onSubmit={this.handleSubmit}>

                    <label>Name</label>

                    <input
                        type="text"
                        name="fullName"
                        value={this.state.fullName}
                        onChange={this.handleChange}
                    />

                    <label>Email</label>

                    <input
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />

                    <label>Password</label>

                    <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />

                    <div className="button-container">
                        <button type="submit">Register</button>
                    </div>

                </form>

            </div>
        );
    }
}

export default Register;