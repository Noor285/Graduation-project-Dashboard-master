import React, { useState } from 'react'
import './login.module.css'
import Alert from '@mui/material/Alert';
import { useAuth } from '../../contexts/AuthContext';


const Login = () => {
  const {login} = useAuth()
  const [email, setEmail] = useState();
  const [password , setPassword] = useState()
  const [error, setError] = useState('');
  


  const handleSubmit = async (e)=>{
    e.preventDefault();
    // const res = await fetch(`http://magdy123-001-site1.dtempurl.com/api/admin/login`,{
    //   method:'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body:JSON.stringify({email,password})
    // })
    // const user = await res.json()

    // if(user.status === true)
    // {
    //     // console.log(user.data)
    //     localStorage.setItem('token', JSON.stringify(user.data.token));
    //     localStorage.setItem('auth', JSON.stringify(user.data));
    //     localStorage.setItem('IsLogin', JSON.stringify(user.status));

    //     navigate('/')
    // }
    // else{
    //   navigate('/login')
    //   setError(user.error);
    // }
    // const token = await loginAuth({email,password});
    
    const err = await login(email , password)
    if(err) return setError(err)

  }


  return (
    <div className="container">
        <div className="box">
            <h1>Admin Panel</h1>
            <h4>Login</h4>
            <div className="error-content" >
                {error ?  <Alert variant="filled" severity="error">{error}</Alert> : ''}
            </div>
            <form onSubmit={handleSubmit}>
                <div className="text">
                    <input type="email" placeholder="Username" onChange={(e)=>setEmail(e.target.value)} name="email"/>
                </div>
                <div className="text">
                    <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} name="password"/>
                </div>
                <div className="check">
                    <input type="checkbox" name="checkbox"/>
                    <label> Remember Me</label>
                </div>
                <input type="submit" value="Login" />
            </form>
        </div>
    </div>
  )
}

export default Login
