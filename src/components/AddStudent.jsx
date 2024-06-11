import React, { useState } from 'react'

import axios from 'axios'
import NavBar from './NavBar'

const AddStudent = () => {
    const [data, setData] = useState({
        name: "",
        admNo: "",
        rollNo: "",
        college: ""
    })

    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    }
    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8081/add",data).then(
            (Response)=>{
                console.log(Response.data)
                if (Response.data.status == "success") {
                    alert("Successfully Added")
                } else {
                    alert("error")
                }
            }
        ).catch(
            (error)=>{
                alert.apply(error.message)
              }
        )

    }
    
    return (
        <div>
          <NavBar/>
            <h1><center>Student Application</center></h1>
            
            <div className="container">
                <div className="row">
                    <div className="col col-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6">
                                <label htmlFor="fname" className="form-label">NAME</label>
                                <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6">
                                <label htmlFor="lname" className="form-label">ADMISSION NO</label>
                                <input type="text" className="form-control" name='admNo' value={data.admNo} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6">
                                <label htmlFor="college" className="form-label">ROLL NO</label>
                                <input type="text" className="form-control" name='rollNo' value={data.rollNo} onChange={inputHandler} />
                            </div>
                            
                            
                            <div className="col col-12 col-sm-6">
                                <label htmlFor="mob" className="form-label">COLLEGE</label>
                                <input type="text" className="form-control" name='college' value={data.college} onChange={inputHandler} />
                            </div>
                           
                            <div className="col col-12 col-sm-6">
                                <button className="btn btn-success" onClick={readValue}>SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddStudent