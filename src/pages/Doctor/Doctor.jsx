  import React, { useEffect, useState } from 'react'
  // import './src/component/table/table.css'
  import Table from "@mui/material/Table";
  import TableBody from "@mui/material/TableBody";
  import TableCell from "@mui/material/TableCell";
  import TableContainer from "@mui/material/TableContainer";
  import TableHead from "@mui/material/TableHead";
  import TableRow from "@mui/material/TableRow";
  import Paper from "@mui/material/Paper";
  import { Link } from 'react-router-dom';
  
  
  export default function Doctor() {
  
    
    let [user, setUser] = useState([]);
  
    useEffect(()=>{getAllUsers()}, []);
  
    function getAllUsers() {
      fetch('http://medicalbrain-001-site1.etempurl.com/api/admin/doctor')
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
        });
    }
  

    function deleteUser(user) {

          fetch(`http://medicalbrain-001-site1.etempurl.com/api/admin/doctor/delete/${user.id}`, {
            method: 'DELETE'
          })
            .then((res) => res.json())
            .then(() => {
              getAllUsers();
            });
    }

  
    return (
      <>
        <h1>Doctor</h1>
        <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Doctor ID</TableCell>
            <TableCell className="tableCell">name</TableCell>
            <TableCell className="tableCell">email</TableCell>
            <TableCell className="tableCell">phone</TableCell>
            {/* <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {user.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="tableCell">{user.id}</TableCell>
              {/* <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={admin.img} alt="" className="image" />
                  {admin.product}
                </div>
              </TableCell> */}
              <TableCell className="tableCell">{user.name}</TableCell>
              <TableCell className="tableCell">{user.email}</TableCell>
              <TableCell className="tableCell">{user.phone}</TableCell>
              <TableCell className="tableCell">
                <button className='btn btn-danger btn-sm'
                onClick={()=> deleteUser(user)}>Delete</button>
                    <Link to={`/view/${user.id}`} className='btn btn-info btn-sm'>View</Link>
                    <Link to={`/edit/${user.id}`} className='btn btn-primary btn-sm'>Edit</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <div className='container col-2'>
    <Link to={'/add'} className='btn btn-success mt-4'>Add New Admin</Link>
    </div>
      </>
    )
  }
