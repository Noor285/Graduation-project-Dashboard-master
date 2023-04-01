import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext'

function EditProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [user, setUser] = useState('');

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   // const updatedProfile = { name, email };
  //   // axios.post('http://medicalbrain-001-site1.etempurl.com/api/admin/update/profile', updatedProfile).then(() => {
  //   axios.post('http://medicalbrain-001-site1.etempurl.com/api/admin/update/profile', user).then((res) => {
  //     setUser(res.data.data)    
  //     console.log(res.data.data);
  //   })}

  function handleSubmit(event) {
    event.preventDefault();
    // console.log(user);
    // const updatedProfile = { name, email };
    // axios.post('http://medicalbrain-001-site1.etempurl.com/api/admin/update/profile', updatedProfile).then(() => {
    axios.post('http://medicalbrain-001-site1.etempurl.com/api/admin/update/profile',{
      email,name
    },{
      headers:{
        Authorization: `Bearer ${token}`
      },
    }
    ).then(() => {
      getprofile();
    })}

    
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const updatedProfile = { name, email };
  //   axios.post('http://medicalbrain-001-site1.etempurl.com/api/admin/update/profile', updatedProfile)
  //     .then((response) => {
  //       setUser(response.data.data); 
  //       console.log(response.data.data);
  //     })
  // };


  const { token} = useAuth()


  async function getprofile(){
    await axios.get('http://medicalbrain-001-site1.etempurl.com/api/admin/profile' , {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => {
      setUser(res.data.data); 
      console.log(res.data.data);
    })

 }

  return (
    <>
    <div className='container'>
    <div className='row'>
    <div className='col-md-6 offset-md-3 border ruond p-4 mt-2 shadow'>
    <h2 className='text-center m-4'> Edit Admin </h2>

    <form onSubmit={handleSubmit}>
      <div className='mb-3'>
      <label htmlFor="name"className="form-label">Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        className="form-control"
      />
      </div>

      <div className='mb-3'>
      <label htmlFor="email" className="form-label">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        className="form-control"
      />
      </div>


      <button type="submit" className="btn btn-success">Save Changes</button>

      <Link to='/profile' className="btn btn-primary">Cancel</Link>

    </form>
    </div>
    </div>
    </div>      
    </>
  );
}

export default EditProfile;