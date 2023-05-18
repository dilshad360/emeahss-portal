import { Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex justify-center items-center flex-col h-screen gap-4">
      <img className="w-20" src="/EMEAHSSlogo.png" alt="logo"></img>
      <Typography
        variant="h4"
        style={{
          fontWeight: "bold",
        }}
      >
        EMEAHSS - Portal
      </Typography>
      <Button variant="contained">
        <Link to="/register">Register</Link>
      </Button>
      <Button variant="contained">
        <Link to="/application">Download Application</Link>
      </Button>
    </div>
  );
}

export default Home;
