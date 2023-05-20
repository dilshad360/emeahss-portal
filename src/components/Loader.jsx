import React from "react";
import { Backdrop, CircularProgress } from "@mui/material";

function Loader(props) {
  return (
    <Backdrop
      sx={{ color: "#FFFF", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={props.open}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

export default Loader;
