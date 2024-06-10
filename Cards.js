import React from "react";
import { Component } from "react";
import './Cards.css';

class Cards extends Component {
    constructor(props) {
        super(props)
        this.data = props
    }
    card1() {
        console.log("Hired")
    }
    card2() {
        console.log("Resume Download Done")
    }
    render() {
        return (
            <div className="parent">
                <div className="child">
                <button>{this.data.card1}</button>
                <button>{this.data.card2}</button>
                </div>
                    {/* <div onClick={() => this.card1()} className="child">
                        <button>{this.data.card1}</button>
                    </div>
                    <div onClick={() => this.card2()} className="child">
                        <button>{this.data.card2}</button>
                    </div>
                 */}
            </div>
    
        );
    }
}
export default Cards