import React, { useEffect, useState } from 'react';

import employeeServices from "../../services/Employee"

import { Link } from "react-router-dom";

function List(){

  const [ listEmployee, setListEmployee ] = useState([]);

  useEffect(()=>{

    async function fetchDataEmployee(){
      const res = await employeeServices.listEmployee();
      console.log(res.data);
      setListEmployee(res.data)
    }

    fetchDataEmployee();

  },[])

  return (
    <section>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Phone</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>

        {
          listEmployee.map((item)=>{
            return(
              <tr>
                <th scope="row">{item.id}</th>
                <td>{item.name_lastname}</td>
                <td>{item.email}</td>
                <td>{item.direction}</td>
                <td>{item.phone}</td>
                <td>
                  <Link class="btn btn-outline-info" to={"/employee/edit/"+item.id}>Edit</Link>
                  <a href="#" class="btn btn-danger"> Delete </a>
                </td>
              </tr>
            )
          })
        }
        
        </tbody>
      </table>
    </section>
  )
}

export default List;