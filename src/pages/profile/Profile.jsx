import axios from "axios";
import React, { useEffect} from "react";
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'


export default function Profile() {


  const { token , user } = useAuth()


  useEffect(() =>{
    getprofile()
  },[]);

  async function getprofile(){
    await axios.get('http://medicalbrain-001-site1.etempurl.com/api/admin/profile' , {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
 }

  return (
    <>  
    <div className='container'>
         <div className='row'>
          <div className='col-md-6 offset-md-3 border ruond p-4 mt-2 shadow'>
           <h2 className='text-center m-4'> My Profile </h2>

           <div className='card'>
            <div className='card-header'>

              <ul className='list-group list-group-flush list-unstyled'>
              <li className='list-groug-item'>
                  <b>id : </b>
                  {user.id}
                </li>

                <li className='list-groug-item'>
                  <b>Name : </b>
                  {user.name}
                </li>

                <li className='list-groug-item'>
                  <b>E-mail : </b>
                  {user.email}
                </li>
              </ul>
            </div>
          </div>
          <Link to={'/editProfile'} className='btn btn-info'>Edit</Link>

          <Link className='btn btn-primary my-2' to={'/home'}>Back to Home</Link>
            
          </div>
         </div>
        </div>      
    </>
  )
}

