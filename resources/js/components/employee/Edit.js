import React, { useEffect, useState } from 'react';

import employeeServices from "../services/Employee"

function Edit(props){

  const [ id, setId ] = useState(null);
  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState(null);
  const [ city, setCity ] = useState(null);
  const [ address, setAddress ] = useState(null);
  const [ phone, setPhone ] = useState(null);
  const [ rol, setRol ] = useState(null);
  const [ selectedRol , setSelectRol ] = useState(null);
  const [ listRol, setListRol ] = useState([]);

  useEffect(()=>{

    async function fetchDataEmployee(){
      let id = props.match.params.id;
      const res = await employeeServices.get(id);

      if (res.success) {
        console.log(res);
        const data = res.data
        setId(data.id)
        setName(data.name_lastname)
        setEmail(data.email)
        setCity(data.city)
        setAddress(data.direction)
        setPhone(data.phone)
        setRol(data.rol)
        setSelectRol(data.role.rol_name)
      }
      else {
        alert(res.message)
      }
    }
    fetchDataEmployee();

    async function fetchDataRol(){
      const res = await employeeServices.listRole();
      setListRol(res.data)
    }
    fetchDataRol();

  },[]);


  const updateEmployee = async () => {

    const data = {
      id, name, email, city, address, phone, rol
    }

    const res = await employeeServices.update(data);

    if (res.success) {
      alert(res.message)
    }
    else {
      alert(res.message)
    }

  }


  return (
    <div>
      <h4>Edit </h4>
      <hr/>
      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="firstName">Name</label>
          <input type="text" className="form-control" defaultValue={name}
          onChange={(event)=>setName(event.target.defaultValue)} />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" placeholder="you@example.com"
          defaultValue={email} onChange={(event)=>setEmail(event.target.defaultValue)}/>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="phone">City {city}</label>
          <select id="inputState" className="form-control" defaultValue={city}
          onChange={(event)=>setCity(event.target.defaultValue)} >
             <option selected>Choose...</option>
             <option defaultValue="New York">New York</option>
             <option defaultValue="London">London</option>
             <option defaultValue="Madrid">Madrid</option>
          </select>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="address">Address</label>
          <input type="text" className="form-control" placeholder="1234 Main St"
          defaultValue={address} onChange={(event)=>setAddress(event.target.defaultValue)}/>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="address">Phone </label>
          <input type="text" className="form-control" placeholder="123467890"  defaultValue={phone}
          onChange={(event)=>setPhone(event.target.defaultValue)}/>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="phone">Rol</label>
          <select id="inputState" className="form-control" defaultValue={rol}
          onChange={(event)=>setRol(event.target.defaultValue)}>
             {
               listRol.map((itemselect)=>{
                 return(
                   <option key={itemselect.rol_id} defaultValue={itemselect.rol_id}>{itemselect.rol_name}</option>
                 )
               })
             }
          </select>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <button onClick={()=>updateEmployee()}
          className="btn btn-primary btn-block" type="submit">Save</button>
        </div>
      </div>
    </div>
  )

}

export default Edit;