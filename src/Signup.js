import React, { Component } from "react";
const regExp = RegExp(
    /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
)
const formValid = ({ isError, ...rest }) => {
    let isValid = false;

    Object.values(isError).forEach(val => {
        if (val.length > 0) {
            isValid = false
        } else {
            isValid = true
        }
    });

    Object.values(rest).forEach(val => {
        if (val === null) {
            isValid = false
        } else {
            isValid = true
        }
    });

    return isValid;
};
export default class SignUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            password: '',
            isError: {
                name: '',
                email: '',
                password: ''
            }
        }
    }
    onSubmit = e => {
        e.preventDefault();
    };

    formValChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let isError = { ...this.state.isError };

        switch (name) {
            case "name":
                isError.name =
                    value.length < 4 ? "Atleast 4 characaters required" : "";
                break;
            case "email":
                isError.email = regExp.test(value)
                    ? ""
                    : "Email address is invalid";
                break;
            case "password":
                isError.password =
                    value.length < 6 ? "Atleast 6 characaters required" : "";
                break;
            default:
                break;
        }

        this.setState({
            isError,
            [name]: value
        })
    };

    render() {
        const { isError } = this.state;
            return (
                <form onSubmit={this.onSubmit} noValidate>
                    <h3>Sign Up</h3>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input
                            type="text"
                            className={isError.name.length > 0 ? "is-invalid form-control" : "form-control"}
                            placeholder="Enter Full Name"
                            name="name"
                            onChange={this.formValChange}
                        />
                        {isError.name.length > 0 && (
                            <span className="invalid-feedback">{isError.name}</span>
                        )}
                    </div>
    
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            className={isError.email.length > 0 ? "is-invalid form-control" : "form-control"}
                            placeholder="Enter email"
                            name="email"
                            onChange={this.formValChange}
                        />
                        {isError.email.length > 0 && (
                            <span className="invalid-feedback">{isError.email}</span>
                        )}
                    </div>
    
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            className={isError.password.length > 0 ? "is-invalid form-control" : "form-control"}
                            placeholder="Enter password"
                            name="password"
                            onChange={this.formValChange}
                        />
                        {isError.password.length > 0 && (
                            <span className="invalid-feedback">{isError.password}</span>
                        )}
                    </div>
    
                    <button type="submit" className="btn btn-block btn-danger">Create User</button>
                <p className="forgot-password text-right">
                    Already registered <a href="./Signin.js">sign in?</a>
                </p>
            </form>
        );
    }
}