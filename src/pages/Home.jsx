import { Button, Typography, Paper, Box, Divider, ButtonGroup } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import backgroundImage from "../assets/schoolbg.jpg";
import logo from "../assets/emea_logo.jpeg";

function Home() {

  const navigate = useNavigate();

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
          <Divider className="font-semibold">Registration</Divider>
          <ButtonGroup
        orientation="vertical"
        variant="outlined"
      >
            <Button onClick={()=>{navigate('/management-form')}}>Management</Button>
            <Button onClick={()=>{navigate('/community-form')}}>Community</Button>
        </ButtonGroup>
          <Divider className="font-semibold">Download Application</Divider>
          <Link to="/application">
            <Button variant="outlined">Download Application</Button>
          </Link>
        </Paper>
      </Box>
    </div>
  );
}

export default Home;
