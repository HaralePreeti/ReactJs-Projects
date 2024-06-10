import React from "react";
import './Portfolio.css';

function Portfolio() {
  const button1 = () => {
    alert('B-Tech Computer Science And Engineering From SSWCOE, Solapur Diploma Electrical Engineering From BMIT, Solapur.')
  }
  const button2 = () =>{
    alert('1.Website of Akkalkot      2.Website of Hotel Management      3.Website of price comparision of Cloths')
    
  }
  const button3 = () =>{
    alert('C, Python, Java, Html, CSS, JavaScript, Bootstrap, Angular, React')
  }
  const button4 = () =>{
    alert('Communication, Time Management,Quick Learner')
  }
  const button5 = () =>{
    alert('I am Self Motivated Person')
  } 
  const button6 = () =>{
    alert('Marathi, Hindi, English')
  }
  return (
    <div class="flex-box">
      <div className="logo">
        <h2> Personal Portfolio</h2>
      </div>
      <button onClick={button6}>Language Known</button>
      <button onClick={button5}>Strength</button>
      <button onClick={button4}>Skills</button>
      <button onClick={button3}>Technical Skills</button>
      <button onClick={button2}>Projects</button>
      <button onClick={button1}>Education</button>
    </div>
  );
}
export default Portfolio