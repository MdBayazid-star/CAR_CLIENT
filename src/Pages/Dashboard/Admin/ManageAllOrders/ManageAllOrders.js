import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const ManageAllOrders = () => {
  const [userOrders, setUserOrders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/userOrder")
      .then((res) => res.json())
      .then((data) => setUserOrders(data));
  }, []);
  const handleDeleteUserService = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?", id);
    if (proceed) {
      const url = `http://localhost:5000/userOrder/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remainingUsers = userOrders.filter(
              (userService) => userService._id !== id
            );
            setUserOrders(remainingUsers);
          }
        });
    }
  };
  return (
    <div>
      <TableContainer
        sx={{ maxHeight: 800, overflow: "scroll" }}
        component={Paper}
      >
        <Table sx={{ minWidth: 200 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Order Name</TableCell>
              <TableCell align="center">Order Price</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userOrders.map((userOrder) => (
              <TableRow
                key={userOrder.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {userOrder.patientName}
                </TableCell>
                <TableCell align="center">{userOrder.email}</TableCell>
                <TableCell align="center">{userOrder.serviceName}</TableCell>
                <TableCell align="center">${userOrder.servicePrice}</TableCell>
                <TableCell align="center">
                  <button className="btn-Car me-3">Shipped</button>
                  <button
                    onClick={() => handleDeleteUserService(userOrder._id)}
                    className="btn-Car"
                  >
                    <i class="fas fa-times"></i>
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ManageAllOrders;
