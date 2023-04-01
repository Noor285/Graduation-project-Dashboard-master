import axios from "axios";
import React, {useState, useEffect} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditDoctor() {
    
    const {ID} = useParams();

    let navigate = useNavigate();

    const [admin, setAdmin] = useState({
        id:'',
        name:'',
        phone:'',
        email:''
    });
    

    const {id, name, phone, email} = admin;


    const onInputChange = (e) =>{
        setAdmin({...admin, [e.target.name]: e.target.value});
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post(`http://medicalbrain-001-site1.etempurl.com/api/admin/doctor/edit/${id}`,{name, phone, email});
        navigate('/doctor');
    }

    const loadAdmin = async () =>{
        const res =  await axios.get(`http://medicalbrain-001-site1.etempurl.com/api/admin/doctor/show/${ID}`);
        setAdmin(res.data.data)
      }

      useEffect(() =>{
        loadAdmin();
      },[]);


  return (
    <>
        <div className='container'>
         <div className='row'>
          <div className='col-md-6 offset-md-3 border ruond p-4 mt-2 shadow'>
           <h2 className='text-center m-4'> Edit Doctor </h2>

            <form onSubmit={onSubmit}>
                <div className="mb-3">
                <label htmlFor="AdminName" className="form-label">Name</label>
                <input type="text" className="form-control" name="name"
                id="AdminName" aria-describedby="Admin Name" 
                placeholder='Admin Name' value={name}
                onChange={onInputChange}/>
                </div>
                <div className="mb-3">
                <label htmlFor="AdminPhone" className="form-label">Phone</label>
                <input type="number" className="form-control" name="phone"
                id="AdminPhone" aria-describedby="Admin Phone"
                placeholder='Admin Phone' value={phone}
                onChange={onInputChange}/>
                </div>
                <div className="mb-3">
                <label htmlFor="AdminEmail" className="form-label">E-mail</label>
                <input type="email" className="form-control" name="email"
                id="AdminEmail" aria-describedby="Admin Email" 
                placeholder='Admin Email' value={email}
                onChange={onInputChange}/>
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to='/doctor' className="btn btn-primary">Cancel</Link>
            </form>
          </div>
         </div>
        </div>      
    </>
  )
}
