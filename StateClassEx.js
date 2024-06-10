import React from "react";
import { Component } from "react";
import './StateClassEx.css';

class StateClassEx extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 10
        }
    }
    onSubClick() {
        this.setState({ count: this.state.count + 1 })
    }
    render() {
        return (
            <div className="parent">
                <div className="youtube">
                    <img src="https://m.media-amazon.com/images/I/71mLN3A7c3L._UX250_.jpg"></img>
                    <p>In The Power of One Thought: Master Your Mind, Master Your Life, Sister Shivani eloquently explains the impact of every thought - each 'one' thought that gives rise to our feelings, attitudes, actions, habits and personality, and influences our destiny.
                        In the process, she awakens us to the truth: What we think about is what we bring about.
                        With clarity and compassion, and through powerful storytelling, Sister Shivani demonstrates simple methods to harness the power of effective thinking, thus giving us the key to perpetual happiness, health, strong relationships and a successful career.
                    </p>
                    <div className="child">
                        <img src=" https://static.wixstatic.com/media/8cc233_567f74dd668b478580d183c8d4d0d264~mv2.jpg/v1/fill/w_296,h_300,al_c,q_80/bk%20shivani%20white%20bg.jpg"></img>
                        <h1>BKShivani</h1>
                        <p></p>
                        <h5>@bkshivani   <u><i>{this.state.count}M</i> </u>   Subscribers 1.4K Vidoes</h5>
                        <h5>Spiritual Guide and Mentor...</h5>
                        <span>Know more</span>
                        <br></br>
                        <br></br>
                        <button onClick={() => this.onSubClick() }>Subscribe</button>

                        <div className="image">
                            {/* <img src='https://www.scrolldroll.com/wp-content/uploads/2020/12/quotes-from-bk-shivani-2.jpg'></img>
                            <img src=" https://www.scrolldroll.com/wp-content/uploads/2020/12/quotes-from-bk-shivani-15.jpg"></img> */}
                            <img src='https://www.scrolldroll.com/wp-content/uploads/2020/12/quotes-from-bk-shivani-3.jpg'></img>
                            <img src="https://www.scrolldroll.com/wp-content/uploads/2020/12/quotes-from-bk-shivani-9.jpg"></img>
                            <img src="https://www.scrolldroll.com/wp-content/uploads/2020/12/quotes-from-bk-shivani-6.jpg"></img>
                        </div>

                    </div>
                </div>
            </div>
        );

    }
}
export default StateClassEx;