import React, { useState } from 'react'
import Navbar from './Navbar'

const ViewStudent = () => {
    const [data,changeData] = useState(
        [
            { "name": "adithya", "admNo": "101", "rollNo": 11},
            { "name": "ahalya", "admNo": "102", "rollNo": 12},
            { "name": "anjaly", "admNo": "103", "rollNo": 13}
        ]
    )
    return (
        <div>
        <Navbar/>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                       <div className="row g-3">
                        {data.map(
                            (value,index) => {
                               return <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <div className="card">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPcTq0J6xmN6yxeLTydfedH_dKv7tgur6VBg&s" height="300px" class="card-img-top" alt="..."></img>
                                        <div className="card-body">
                                           
                                            <p className="card-text">name :{value.name}</p>
                                            
                                        </div>
                                </div>
                            </div>  
                            }
                        )}
                            
                        
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewStudent