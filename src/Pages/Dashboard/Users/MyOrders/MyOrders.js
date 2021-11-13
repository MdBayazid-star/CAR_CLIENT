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
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const url = `https://gentle-temple-66262.herokuapp.com/usersOrder?email=${user.email}`;
    fetch(url, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUserOrders(data);
        setIsLoading(false);
      });
  }, [user.email, token]);

  const handleDeleteUserService = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?", id);
    if (proceed) {
      const url = `https://gentle-temple-66262.herokuapp.com/usersOrder/${id}`;
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
    <div className="container">
      {!isLoading && !userOrders[0] && (
        <div className="my-5">
          <h3 className="text-danger fw-bold">There Is Know Order</h3>
          <h4 className="text- fw-bold">Thank you for visiting us.</h4>
        </div>
      )}
      {userOrders[0] && (
        <div>
          <h2>My Orders: {userOrders.length}</h2>
          <TableContainer id="table" component={Paper}>
            <Table sx={{}} aria-label="Appointments table">
              <TableHead>
                <TableRow>
                  <TableCell align="canter">Service </TableCell>
                  <TableCell align="canter">Money</TableCell>
                  <TableCell align="canter">Name</TableCell>
                  <TableCell align="canter">My Email</TableCell>
                  <TableCell align="canter">Condition</TableCell>
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
                      {row.condition ? (
                        <button className="btn-Car">
                          <i class="fas fa-check"></i> {row.condition}
                        </button>
                      ) : (
                        <button className="btn-Car-outline"> pending.. </button>
                      )}
                    </TableCell>
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
      )}
    </div>
  );
};

export default MyOrders;
