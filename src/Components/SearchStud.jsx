import React, { useState } from 'react'
import Navbar from './Navbar'

const SearchStud = () => {
    const [data,setData] = useState(
        {
            "id":""
        }
    )
    const inputHandler = (event) => {
        setData({...data,[event.target.data]:event.target.value})
    }
    const readValue = () => {
        console.log(data)
    }
  return (
    <div>
      <Navbar/>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Student ID</label>
                <input type="text" className="form-control" name='id' value={data.id} onChange={inputHandler} />
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
               <button className="btn btn-warning" onClick={readValue} >Search</button> 
            </div>
        </div>
      </div>
    </div>
  )
}

export default SearchStud
