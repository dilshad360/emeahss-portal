import { Button, Typography, Paper, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from '../assets/schoolbg.jpg';
import logo from '../assets/emea_logo.jpeg';

function Home() {
  return (
    <div className="flex justify-center items-center h-screen" style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
     <Box>
    <Paper  elevation={3} className="flex justify-center items-center flex-col gap-4 px-6 py-12">
      <img className="w-20" src={logo} alt="logo"></img>
      <Typography
        variant="h4"
        style={{
          fontWeight: "bold",
          color: "darkgreen"
        }}
      >
        EMEAHSS - Portal
      </Typography>
      <Button variant="contained">
        <Link to="/management-form">Management</Link>
      </Button>
      <Button variant="contained">
        <Link to="/community-form">Community</Link>
      </Button>
      <Button variant="contained">
        <Link to="/application">Download Application</Link>
      </Button>
      </Paper >
    </Box>
    </div>
  );
}

export default Home;
