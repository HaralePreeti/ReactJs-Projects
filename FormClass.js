import React, { Component } from "react";
import './FormClass.css';

class FormClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'email': '',
            'pwd': '',
            'fname':''
        }
    }
    onLogin = (e) => {
        e.preventDefault();
        console.log(this.state.email)
        console.log(this.state.pwd)
        console.log(this.state.fname)

    }
    changeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        const { email, pwd ,fname} = this.state
        return (
            <div className="background">
                <div className="login">
                    <div className="title-filed">
                        <h2>Login</h2>
                    </div>
                    <form onSubmit={this.onLogin}>

                        <input type="email" placeholder="Full name" name="fname"
                            value={fname} onChange={this.changeInput}></input>
                        <input type="email" placeholder="Email Id" name="email"
                            value={email} onChange={this.changeInput}></input>

                        <input type="password" placeholder="password" name="pwd"
                            value={pwd} onChange={this.changeInput}></input>
                        <input type="submit" value="Login"></input>
                    </form>
                </div>
            </div>
        );
    }

}
export default FormClass;
