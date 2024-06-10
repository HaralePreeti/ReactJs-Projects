import React from "react";
import { useState } from "react";
import './FormFunction.css';

function FormFunction() {
    const [email, formEmail] = useState('')
    const [name, formName] = useState('')
    const [contact, formContact] = useState('')
    const [batch, formBatch] = useState('')
    const [temail, formTemail] = useState('')
    const [tname, formTname] = useState('')
    const [topic, formTopic] = useState('')
    const [issues, formIssues] = useState('')
    const [sugg, formSugg] = useState('')
    const [rate, formRate] = useState('')


    const onLogin = (e) =>{
        e.preventDefault();
    console.log(email)
    console.log(name)
    console.log(contact)
    console.log(batch)
    console.log(temail)
    console.log(tname)
    console.log(topic)
    console.log(issues)
    console.log(sugg)
    console.log(rate)
}
    return (
        <div className="background">
            <div className="form">
                <div className="title-field">
                    <h2>Session Feedback Form</h2>
                    <br></br>
                    <h5>Feedback Form of LeadSoft Placement Academy For FullStack Batch(B2)</h5>
                    <p>preetimalleshmane@gmail.com <span><u><i>Switch accounts</i></u></span></p>
                    <h6>* Indicates required question</h6>
                </div>
                <form onSubmit={onLogin}>
                    <div className="label">
                        <label>Email Id<span>*</span></label>
                        <input type="email" placeholder="Email"
                            onChange={(e) => formEmail(e.target.value)} value={email}></input>
                    </div>

                    <div className="label">
                        <label>Student name<span>*</span></label>
                        <input type="text" placeholder="Enter full name"
                            onChange={(e) => formName(e.target.value)} value={name}></input>
                    </div>

                    <div className="label">
                        <label className="label">Contact Number<span>*</span></label>
                        <input type="number" placeholder="ex. 8946537892"
                            onChange={(e) => formContact(e.target.value)} value={contact}></input>
                    </div>

                    <div className="label">
                        <label>Batch<span>*</span>
                            <select name="selectedFruit"
                                onChange={(e) => formBatch(e.target.value)} value={batch}>
                                <option value="select">Select</option>
                                <option value="batch-1">Batch-1</option>
                                <option value="batch-2">Batch-2</option>
                                <option value="batch-3">Batch-3</option>
                            </select>
                        </label>
                    </div>

                    <div className="label">


                        <label className="label">Trainer email<span>*</span>
                            <select name="selectedFruit"
                                onChange={(e) => formTemail(e.target.value)} value={temail}>
                                <option value="select">Select</option>
                                <option>surajpawar@gmail.com</option>
                            </select>
                        </label>
                        {/* <input type="text" placeholder="Your answer"></input> */}
                    </div>
                    <div className="label">
                        <label>Trainer name<span>*</span>
                            <select name="selectedFruit"
                                onChange={(e) => formTname(e.target.value)} value={tname}>
                                <option value="select">Select</option>
                                <option>Suraj Pawar</option>
                            </select></label>
                        {/* <input type="text" placeholder="Your answer"></input> */}
                    </div>
                    <div className="label">
                        <label>Topic taught<span>*</span></label>
                        <input type="text" placeholder="Your answer"
                            onChange={(e) => formTopic(e.target.value)} value={topic}></input>
                    </div>
                    <div className="label">
                        <label>Are you facing any issues in the class?<span>*</span></label>
                        <input type="text" placeholder="Your answer"
                            onChange={(e) => formIssues(e.target.value)} value={issues}></input>
                    </div>
                    <div className="label">
                        <label>Suggestions for improvement (if any)</label>
                        <input type="text" placeholder="Your answer"
                            onChange={(e) => formSugg(e.target.value)} value={sugg}></input>
                    </div>
                    <div className="label">
                        <label>Rate the session out of 3<span>*</span></label>
                        <h6> 1 lowest... 3 highest</h6>
                        <label onChange={(e) => formRate(e.target.value)} value={rate}>
                            <input type="radio" value='Option 1'></input>
                            Option 1
                        </label>
                        <label onChange={(e) => formRate(e.target.value)} value={rate}>
                            <input type="radio" value='Option 2'></input>
                            Option 2
                        </label>
                        <label onChange={(e) => formRate(e.target.value)} value={rate}>
                            <input type="radio" value='Option 3'></input>
                            Option 3
                        </label>
                    </div>
                    <button>Submit</button>
                    {/* <input type="submit" value='Submit'></input> */}
                    <h6>Never submit passwords through Google Forms.</h6>
                    <p>This form was created by Preeti Harale. </p>
                    <h2>Google Forms</h2>
                </form>
            </div>
        </div>
    );
}

export default FormFunction;