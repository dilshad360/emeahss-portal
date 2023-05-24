import { Button, Typography, Paper, Box, Divider } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/schoolbg.jpg";
import logo from "../assets/emea_logo.jpeg";

function Home() {
  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box>
        <Paper
          elevation={3}
          className="flex justify-center items-center flex-col gap-4 px-6 py-12"
        >
          <img className="w-20" src={logo} alt="logo"></img>
          <Typography
            variant="h4"
            style={{
              fontWeight: "bold",
              color: "darkgreen",
            }}
          >
            EMEAHSS - Portal
          </Typography>
          <Divider>Registration</Divider>
          <Link to="/management-form">
            <Button variant="contained">Management</Button>
          </Link>
          <Link to="/community-form">
            <Button variant="contained">Community</Button>
          </Link>
          <Divider>Download Application</Divider>
          <Link to="/application">
            <Button variant="contained">Download Application</Button>
          </Link>
        </Paper>
      </Box>
    </div>
  );
}

export default Home;
