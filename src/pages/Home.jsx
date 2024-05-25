import {
  Button,
  Typography,
  Paper,
  Box,
  Divider,
  ButtonGroup,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
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
          className="flex justify-center items-center flex-col gap-2 px-6 py-6"
        >
          <img className="w-16" src={logo} alt="logo"></img>

          <div>
            <h4 className="text-4xl font-bold text-green-800 pb-0">
              EMEAHSS - Portal
            </h4>
            <h2 className="text-2xl font-bold text-green-800">
              Admission 2024-25
            </h2>
          </div>

          <Divider className="font-semibold">Registration</Divider>

          <ButtonGroup orientation="vertical" variant="outlined">
            <Button
              onClick={() => {
                navigate("/management-form");
              }}
            >
              Management
            </Button>
            <Button
              onClick={() => {
                navigate("/community-form");
              }}
            >
              Community
            </Button>
          </ButtonGroup>

          {/* <Typography variant="" className="text-red-600 font-bold" >Sorry, Registration Closed</Typography> */}
          {/* <Typography variant="" className="text-purple-600 font-bold" >Registration will open soon. Stay tuned!</Typography> */}

          <Divider className="font-semibold">Download Application</Divider>
          <ButtonGroup orientation="vertical" variant="outlined">
            <Button
              onClick={() => {
                navigate("/management-application");
              }}
            >
              Management
            </Button>
            <Button
              onClick={() => {
                navigate("/community-application");
              }}
            >
              Community
            </Button>
          </ButtonGroup>
          <div className="w-full">
            <Divider className="text-green-700 font-semibold underline pb-3">
              Help Desk
            </Divider>
            <Typography variant="subtitle2">Sham K: 9447552750</Typography>
            <Typography variant="subtitle2">Mansoor: 9961441149</Typography>
            <Typography variant="subtitle2">Muhammed K: 9539142919</Typography>
            <Typography variant="subtitle2">KT. Abdulla: 9446636393</Typography>
            <Typography variant="subtitle2">
              Abdul Razzak: 9961888804
            </Typography>
          </div>
          <div className="w-full">
            <Divider className="text-green-700 font-semibold underline pb-2">
              For any complaints{" "}
            </Divider>
            <div className="flex flex-col">
              <Typography variant="" className="text-sm italic">
                please contact us at
              </Typography>
              <Typography variant="" className="text-sm italic">
                <a
                  href="mailto:app_hss@emeacollege.ac.in"
                  className="font-semibold text-blue-700"
                >
                  app_hss@emeacollege.ac.in
                </a>
              </Typography>
              <Typography variant="" className="text-sm italic">
                kindly provide your Application.No. or Registration.No.
              </Typography>
            </div>
          </div>
        </Paper>
      </Box>
    </div>
  );
}

export default Home;
