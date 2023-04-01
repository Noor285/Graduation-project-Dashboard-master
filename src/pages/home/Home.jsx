import React, { useEffect } from 'react'
import Sidebar from '../../component/sidebar/Sidebar'
import Navbar from '../../component/navbar/Navabar'
import './home.css'
import Widget from '../../component/widget/Widget'
import Featured from '../../component/featured/Featured'
import Chart from '../../component/chart/Chart'
import List from '../../component/table/Table'
import { useAuth } from '../../contexts/AuthContext'

const Home = () => {

  const { logout } = useAuth()

  // const getToken = () => {
  //   const tokenString = localStorage.getItem('token');
  //   const userToken = JSON.parse(tokenString);
  //   return userToken
  // };
//   const logout = async ()=>{
//     const request = await fetch(`http://magdy123-001-site1.dtempurl.com/api/admin/logout`,{
//         method:'GET',
//         headers:{
//             'Content-Type': 'application/json',
//             'Authorization':`Bearer ${getToken()}`
//         }
//     })
//     const responce = await request.json()
    
//     if(responce.status === true)
//     {
//         localStorage.clear();
//         // window.location.href = '/'
//     }
// }

  return (
    <div className='home'>
        <Sidebar logout={logout}/>
        <div className="homeContainer">
          <Navbar/>
          <div className="widgets">
            <Widget type="user"/>
            <Widget type="order"/>
            <Widget type="earning"/>
            <Widget type="balance"/>
          </div>
          <div className="charts">
            <Featured/>
            <Chart title="Last 6 Months (Revenue)" aspect={2 / 1}/>
          </div>
          <div className="listContainer">
            <div className="listTitle">
              Latest Transactions
            </div>
            <List/>
          </div>
        </div>
    </div>
  )
}

export default Home
