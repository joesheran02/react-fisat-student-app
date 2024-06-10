import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const AddStud = () => {
    const [data, setData] = useState(
        {
            "id": "",
            "firstname": "",
            "lastname": "",
            "address": "",
            "course": "",
            "dob": ""
        }
    )
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(data)
        axios.post("https://courseapplogix.onrender.com/addstudents",data).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("success")
                } else {
                    alert("Error")
                }
                
            }
        ).catch()
    }
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row g-5">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Student ID</label>
                                <input type="text" className="form-control" name='id' value={data.id} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                <label htmlFor="" className="form-label">First Name</label>
                                <input type="text" className="form-control" name='firstname' value={data.firstname} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                <label htmlFor="" className="form-label">Last Name</label>
                                <input type="text" className="form-control" name='lastname' value={data.lastname} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Student Address</label>
                                <textarea name="address" value={data.address} onChange={inputHandler} id="" className="form-control"></textarea>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                <label htmlFor="" className="form-label">Course</label>
                                <input type="text" className="form-control" name='course' value={data.course} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                <label htmlFor="" className="form-label">Date of Birth</label>
                                <input type="date" name="dob" value={data.dob} onChange={inputHandler} id="" className="form-control" />
                            </div>
                            <br /><br /><br />
                            <br /><br />
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                               <center><button className="btn btn-success" onClick={readValue}>Submit</button></center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddStud
