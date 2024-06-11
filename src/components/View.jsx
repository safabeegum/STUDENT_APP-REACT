import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const View = () => {
    const[data,changeData]=useState([])

    const fetchData= () => {
        axios.get("http://localhost:8080/view").then((response)=>
        {
            console.log(response.data)
            changeData(response.data)
        }
    ).catch().finally()
    
}
    useEffect(() => {fetchData()},[])
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table table-bordered border-primary">
                <thead>
    <tr>
      <th scope="col">NAME</th>
      <th scope="col">ROLL NO</th>
      <th scope="col">ADMN NO</th>
      <th scope="col">COLLEGE</th>
    </tr>
  </thead>
    {
        data.map(
            (value,index) => {
                return <tbody>
                <tr>
                  <td>{value.name}</td>
                  <td>{value.rollno}</td>
                  <td>{value.admnno}</td>
                  <td>{value.college}</td>
                </tr>
              </tbody>
            }
        )
    }
</table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default View