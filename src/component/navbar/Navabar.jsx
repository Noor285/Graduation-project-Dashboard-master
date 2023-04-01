import React from 'react'
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import "./navbar.css";
import { Link } from 'react-router-dom';
import {NavDropdown} from 'react-bootstrap';

const Navabar = () => {
    return (
        <div className="navbar">
          <div className="wrapper">
            <div className="search">
              <input type="text" placeholder="Search..." />
              <SearchOutlinedIcon />
            </div>
            <div className="items">
              <div className="item">
                <LanguageOutlinedIcon className="icon" />
                English
              </div>
              <div className="item">
                <DarkModeOutlinedIcon
                  className="icon"
                 
                />
              </div>
              <div className="item">
                <FullscreenExitOutlinedIcon className="icon" />
              </div>
              <div className="item">
                <NotificationsNoneOutlinedIcon className="icon" />
                <div className="counter">1</div>
              </div>
              <div className="item">
                <ChatBubbleOutlineOutlinedIcon className="icon" />
                <div className="counter">2</div>
              </div>
              <div className="item">
                <ListOutlinedIcon className="icon" />
              </div>
              <div className="item">
                <NavDropdown>
                <NavDropdown.Item href='/profile'>Profile</NavDropdown.Item>
                {/* <NavDropdown.Item to={'/logout'}>Logout</NavDropdown.Item> */}
                </NavDropdown>
                <img
                  src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                  className="avatar"
                />
                {/* <Link to={'/profile'}> */}
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
      );
}

export default Navabar
