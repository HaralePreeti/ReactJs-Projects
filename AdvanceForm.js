import React from "react";

import './AdvanceForm.css';
import { useState } from "react";

function AdvanceForm() {
    const [contacts, setContacts] = useState([])
    const [formData, setFormData] = useState(
        {
            fullname: '',
            rollno: '',
            mobile: '',
            email: '',
            category: '',
            branch: '',
            gender: ''
        })
    const categories = ['CSE', 'IT', 'ENTC', 'EE']
    const gender = ['Male', 'Female', 'Other']
    const onContactFormClick = (e) => {
        e.preventDefault()
        console.log(formData)
        setContacts([...contacts, formData])
        console.log(contacts)
        setFormData({
            fullname: '',
            mobile: '',
            category: '',
            email: '',
            branch: '',
            gender: ''
        })
        alert('Data Saved successfully !!!')
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData, [name]: value
        })
    }
    return (
        <div className="container">
            <div className="box">
                <div className="tableData">
                    <table>
                        <thead>
                            <tr>
                                <th>SrNo</th>
                                <th>Student Name</th>
                                <th>Mobile No</th>
                                <th>Email Id</th>
                                <th>Branch</th>
                                <th>Gender</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                contacts.map((contact, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{contact.fullname}</td>
                                        <td>{contact.mobile}</td>
                                        <td>{contact.email}</td>
                                        <td>{contact.category}</td>
                                        <td>{contact.gender}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <div className="formData">
                    <form onSubmit={onContactFormClick}>
                        <div className="title">
                            <h2>Students Information</h2>
                        </div>
                        <input type="text" name="fullname" value={formData.fullname}
                            onChange={handleChange} placeholder="Student name" required></input>

                        <input type="number" name="mobile" value={formData.mobile}
                            onChange={handleChange} placeholder="Mobile Number" required></input>

                        <input type="email" name="email" value={formData.email}
                            onChange={handleChange} placeholder="Email Id" required></input>


                        <select name='category' value={formData.category}
                            onChange={handleChange}>
                            <option value=''>Select Branch</option>
                            {
                                categories.map((category, index) => (
                                    <option key={index} value={category}>{category}</option>
                                ))
                            }
                        </select>

                        <select name='gender' value={formData.gender}
                            onChange={handleChange}>
                            <option value=''>Select Gender</option>
                            {
                                gender.map((gender, index) => (
                                    <option key={index} value={gender}>{gender}</option>
                                ))
                            }
                        </select>

                        <input type="submit" value="Save Data"></input>
                        <input type="reset" value="Don't save"></input>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default AdvanceForm;