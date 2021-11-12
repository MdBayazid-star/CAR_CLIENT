import { Alert, TextField } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../../../Hooks/useAuth";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const { token } = useAuth();

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("http://localhost:5000/users/admin", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
          setSuccess(true);
        }
      });

    e.preventDefault();
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 ">
          <div className=" br-5 bs-red p-5">
            <h2>Make An Admin</h2>
            <form className="d-flex flex-column" onSubmit={handleAdminSubmit}>
              <TextField
                label="Name"
                type="Text"
                variant="standard"
                sx={{ mb: 2 }}
              />
              <TextField
                label="Email"
                type="email"
                sx={{ mb: 2 }}
                variant="standard"
                onBlur={handleOnBlur}
              />

              <button type="submit" className="btn-Car  mt-3">
                Make Admin
              </button>
            </form>
            {success && (
              <Alert severity="success">Made Admin successfully!</Alert>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
