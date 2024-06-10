import React from "react";
import { Component } from "react";
import './Sidebar.css';

class Sidebar extends Component {
    render() {
        return (
            <div class="sidebar">
                <a class="active" href="#home">Home</a>
                <a href="#about us">About Us</a>
                <a href="#product">Product</a>
                <a href="#contact">Contact</a>
                <a href="#services">Services</a>
                <button>Know More</button>
                <button>Cancel</button>
            </div>

        );
    }
}
export default Sidebar;