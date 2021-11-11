import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Paper from "@mui/material/Paper";
import useAuth from "../../../../Hooks/useAuth";
const MyOrders = () => {
  const { user, token } = useAuth();
  const [userOrders, setUserOrders] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/usersOrder?email=${user.email}`;
    fetch(url, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUserOrders(data));
  }, [user.email, token]);

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
      <h2>Appointments: {userOrders.length}</h2>
      <TableContainer component={Paper}>
        <Table sx={{}} aria-label="Appointments table">
          <TableHead>
            <TableRow>
              <TableCell align="canter">Service </TableCell>
              <TableCell align="canter">Money</TableCell>
              <TableCell align="canter">Name</TableCell>
              <TableCell align="canter">My Email</TableCell>
              <TableCell align="canter">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userOrders.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.serviceName}
                </TableCell>
                <TableCell align="canter">{row.servicePrice}</TableCell>
                <TableCell align="canter">{row.clientsName}</TableCell>
                <TableCell align="canter">{row.email}</TableCell>
                <TableCell align="canter">
                  <button
                    onClick={() => handleDeleteUserService(row._id)}
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

export default MyOrders;
