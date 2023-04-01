import axios from "axios";
import React, {useState, useEffect} from "react";
import { useParams, Link } from 'react-router-dom'

export default function ViewDoctor() {

    let {ID} = useParams();

    
    const [user, setUser] = useState({
        id:'',
        name:'',
        phone:'',
        email:''
      });

      const {id, name, phone, email} = user;


      useEffect(() =>{
        loadUser()
      },[]);
  
      async function loadUser(){
        const res =  await axios.get(`http://medicalbrain-001-site1.etempurl.com/api/admin/doctor/show/${ID}`)
        setUser(res.data.data)
        console.log(res.data.data);
     }


  return (
    <>
    <h1>name : {name}</h1>
      <div className='container'>
         <div className='row'>
          <div className='col-md-6 offset-md-3 border ruond p-4 mt-2 shadow'>
           <h2 className='text-center m-4'> View Admin </h2>
          
           <div className='card'>
            <div className='card-header'>
              Details of Admin id :
              <ul className='list-group list-group-flush list-unstyled'>
                <li className='list-groug-item'>
                  <b>Name : </b>
                  <h1>{name}</h1>
                </li>

                <li className='list-groug-item'>
                  <b>Phone : </b>
                  {phone}
                </li>

                <li className='list-groug-item'>
                  <b>E-mail : </b>
                  {email}
                </li>
              </ul>
            </div>
          </div>
          <Link className='btn btn-primary my-2' to={'/doctor'}>Back to Home</Link>
            
          </div>
         </div>
        </div>      
    </>
  )
}
