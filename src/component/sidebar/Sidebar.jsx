import React from 'react'
import './sidebar.css'
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from 'react-router-dom';
const Sidebar = (prop) => {


  return (
    <div className='sidebar'>
        <div className="top">
            <span className='logo'>Admin Panel</span>
        </div>
          <hr />
            <div className="center">
                <ul>
                  <div className="title">Main</div>
                    <li>
                      <DashboardIcon className="icon"/>

                      <span>Dashboard</span></li>
                   <div className="title">List</div>
                    <li>
                    <PersonOutlineIcon className="icon" />
                      <Link to={'/doctor'}>
                      <span>Doctors</span></Link></li>
                    <li>
                    <StoreIcon className="icon" />
                      
                      <span>Products</span></li>
                    <li>
                    <CreditCardIcon className="icon" />
                      
                      <span>Orders</span></li>
                  
                    <li>
                    <LocalShippingIcon className="icon" />
                      
                      <span>Deleviery</span></li>
                  <div className="title">USEFUL Links</div>
                    <li>
                    <InsertChartIcon className="icon" />
                      
                      <span>Stats</span></li>
                    <li>
                    <NotificationsNoneIcon className="icon" />
                      
                      <span>Notifiaction</span></li>
                    <div className="title">SERVICE</div>
                    <li>
                    <SettingsSystemDaydreamOutlinedIcon className="icon" />
                      
                      <span>System Health</span></li>
                    <li>
                    <PsychologyOutlinedIcon className="icon" />
                      
                      <span>Logs</span></li>
                    <li>
                    <SettingsApplicationsIcon className="icon" />
                      
                      <span>Settings</span></li>
                  <div className="title">USER</div>
                    <li>
                    <AccountCircleOutlinedIcon className="icon" />
                      
                      <span>Profile</span></li>
                    <li>
                    <ExitToAppIcon className="icon" />
                    <Link to={'/login'}>
                        <span onClick={prop.logout}>Log out</span>
                    </Link>
                    </li>

                </ul>
            </div>
        <div className="bottom">
          <div className="colorOption"></div>
          <div className="colorOption"></div>
        </div>
    </div>
  )
}

export default Sidebar
