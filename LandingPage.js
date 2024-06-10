import React from "react";
import './LandingPage.css';

function LandingPage(props) {
    return (
        <div className="background">
            <img src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zMDktYWV3LTAxM18xXzEuanBn.jpg"></img>
            <img src="https://miro.medium.com/v2/resize:fit:1358/1*13rtYQ93GxYkIjC9RIj58A.jpeg"></img>


            <div className="details">
                <h4>{props.greeting}</h4>
                <h1>{props.name}</h1>
                <h3>{props.title}</h3>
                <p>{props.content}</p>

            </div>
        </div>
    );
}
export default LandingPage