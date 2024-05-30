import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  Toolbar,
  Slide,
  Stack,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import CloseIcon from "@mui/icons-material/Close";
import Notice from "../../assets/Notice.jpg"

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function InfoDialog(props) {
  const quota = props.quota;
  const values = props.values;
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      fullScreen
      TransitionComponent={Transition}
      className="text-center"
    >
      <Toolbar>
        <IconButton edge="end" color="inherit" onClick={props.onClose}>
          <CloseIcon />
        </IconButton>
      </Toolbar>
      <DialogTitle>
        <InfoIcon color="yellow" style={{ fontSize: 48, color: "orange" }} />
        <Typography variant="h4" color={"error"} >Important Notice</Typography>
      </DialogTitle>
      {/***********************  Community Quota Section      ************************/}

      {quota === "community" ? (
        <DialogContent className="flex justify-center">
          <Stack
            spacing={2}
            className="w-11/12 sm:w-8/12 text-left  font-semibold "
          >
            <Typography variant="">
              1. കമ്മ്യൂണിറ്റി quota യിലേക്കും മാനേജ്മെന്റ് കോട്ടയിലേക്കും
              വെവ്വേറെ അപേക്ഷകൾ സമർപ്പിക്കേണ്ടതാണ്.
            </Typography>

            <Typography variant="">
              2. കമ്മ്യൂണിറ്റി സീറ്റിലേക് അപേക്ഷ സബ്‌മിറ്റ് ചെയ്ത് അപേക്ഷ ഫീസ്
              Rs.25. 9447552750 Sham K എന്ന നമ്പറിലേക് Google Pay ചെയ്യേണ്ടതാണ്.
              അപേക്ഷ ഫീസ് അടച്ച screenshot വാട്സ്ആപ്പ് ൽ 9447552750 എന്ന നമ്പറിൽ
              അയക്കേണ്ടതാണ്.
            </Typography>
            <Typography variant="">
              3. അപേക്ഷ ഫീസ് ലഭ്യമായ അപേക്ഷകളെ അഡ്മിഷൻ പരിഗണിക്കുകയുള്ളു.{" "}
            </Typography>
            <FormControlLabel
              control={
                <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
              }
              label="I agree that I read all the instructions written above"
            />
          </Stack>
        </DialogContent>
      ) : quota === "management" ? (
        <DialogContent className="flex justify-center">
          <Stack
            spacing={2}
            className="w-full sm:w-6/12 text-left  font-semibold "
          >
            <img className="" src={Notice} alt="logo"></img>
            <FormControlLabel
              control={
                <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
              }
              label="I agree that I read all the instructions written above"
            />
          </Stack>
        </DialogContent>
      ) : (
        <DialogContent>
          <Typography
            variant="h6"
            style={{ textAlign: "start", padding: "5px", marginTop: "2px" }}
          >
            {props.message}
          </Typography>
          <FormControlLabel
            control={
              <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
            }
            label="I agree that I read all the instructions written above"
          />
        </DialogContent>
      )}
      <DialogActions className="p-10">
        <Button
          variant="contained"
          disabled={!isChecked}
          color="success"
          size="large"
          fullWidth
          onClick={() => {
            props.finalSubmit(values);
          }}
        >
          Final Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default InfoDialog;
