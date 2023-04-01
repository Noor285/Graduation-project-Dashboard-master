import React from 'react'
import './widget.css'
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widget = ({type}) => {
    const amount = 100
    const diff = 20
    let data
    switch(type){
        case "user":
            data ={
                title:"USER",
                isMoney:false,
                link:"See all users",
                icon:(
                    <PersonOutlinedIcon className='icon' style={{
                        backgroundColor: "rgba(128, 0, 128, 0.2)",
                        color: "purple",
                      }}/>
                )
            }
        break;
        case 'order':
            data ={
                title:"Orders",
                isMoney:false,
                link:"See all Orders",
                icon:(
                    <ShoppingCartOutlinedIcon className='icon'  style={{
                        color: "crimson",
                        backgroundColor: "rgba(255, 0, 0, 0.2)",
                      }}/>
                )
            }
        break;
        case 'earning':
            data ={
                title:"Earning",
                isMoney:true,
                link:"See all Earning",
                icon:(
                    <MonetizationOnOutlinedIcon className='icon'   style={{
                        backgroundColor: "rgba(218, 165, 32, 0.2)",
                        color: "goldenrod",
                      }}/>
                )
            }
        break;

        case 'balance':
            data ={
                title:"Balance",
                isMoney:true,
                link:"See details",
                icon:(
                    <AccountBalanceWalletOutlinedIcon className='icon' style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}/>
                )
            }
        break;

    }
  return (
    <div className='widget'>
        <div className="left">
            <div className="title">{data.title}</div>
            <div className="counter">{data.isMoney && "$"}{amount}</div>
            <div className="link">{data.link}</div>
        </div>
        <div className="right">
            <div className="persentage positive">
                <KeyboardArrowUpIcon/>
                {diff} %
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget
