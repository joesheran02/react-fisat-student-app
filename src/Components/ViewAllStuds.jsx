import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const ViewAllStuds = () => {
  const [data, changeData] = useState(
    []
  )
  const fetchData = () => {
    axios.get("https://courseapplogix.onrender.com/getdata").then(
      (response) => {
        changeData(response.data)
      }
    ).catch(alert("Network Error")).finally()
  }
  useEffect(() => fetchData(), [])
  return (
    <div>
      <Navbar/>
      <div className="container">
        {data.map(
          (value, index) => {
            return <div className="row">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div class="card">
                  <img src="..." class="card-img-top" alt="student image"/>
                  <div class="card-body">
                    <h5 class="card-title">First Name :{value.firstname}</h5>
                    <h5 class="card-title">Last Name :{value.lastname}</h5>
                    <p class="card-text">College: {value.college}</p>
                    <p class="card-text">Course: {value.course}</p>
                    <a href="#" class="btn btn-primary">See More Details</a>
                  </div>
                </div>
              </div>
            </div>
          }
        )}
      </div>
      </div>
  )
}

export default ViewAllStuds
