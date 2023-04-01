import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddDoctor() {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let navigate = useNavigate()

  const formSubmit = (e) => {
    e.preventDefault()

    axios.post('http://medicalbrain-001-site1.etempurl.com/api/admin/doctor/store', {name, phone, email, password})
    .then(() => {
      navigate('/doctor');
    });
  };


  return (
    <>
      <h1>Add Admin</h1>

      <form onSubmit={formSubmit}>
        <div className="mb-3">
          <label htmlFor="AdminName" className="form-label">Name</label>
          <input type="text" className="form-control" 
          id="AdminName" aria-describedby="Admin name"
           placeholder='Admin name' onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="AdminPhone" className="form-label">Phone</label>
          <input type="number" className="form-control" 
          id="Adminphone" aria-describedby="Admin Phone" 
          placeholder='Admin Phone' onChange={(e) => setPhone(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="AdminEmail" className="form-label">E-mail</label>
          <input type="e-mail" className="form-control" 
          id="AdminEmail" aria-describedby="Admin email"
           placeholder='Admin Email' onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="AdminPassword" className="form-label">Password</label>
          <input type="password" className="form-control" 
          id="AdminPassword" aria-describedby="Admin Password" 
          placeholder='Admin Password' onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button type="submit" className="btn btn-primary">Add Doctor</button>
      </form>
    </>
  )
}
