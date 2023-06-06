import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Typography, Button, Checkbox, FormControlLabel } from '@mui/material';
import CheckCircle from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";

function SuccessDialog(props) {
  const quota = props.quota
  const registered = props.registered
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      fullWidth
      className='text-center'
    >
      <DialogTitle>
        <CheckCircle color="primary" style={{ fontSize: 48 }} />
        <Typography variant='h6'>{props.message}</Typography>
      </DialogTitle>
      {/***********************  Community Quota Section      ************************/}

      {quota === "community" && registered?
        <DialogContent>
          <Typography variant='h6' style={{ textAlign: 'start', padding: '5px', marginTop: '2px' }}>1. കമ്മ്യൂണിറ്റി quota യിലേക്കും മാനേജ്മെന്റ് കോട്ടയിലേക്കും വെവ്വേറെ അപേക്ഷകൾ സമർപ്പിക്കേണ്ടതാണ്.
          </Typography>
          <Typography variant='h6' style={{ textAlign: 'start', padding: '5px', marginTop: '2px' }}>2. കമ്മ്യൂണിറ്റി സീറ്റിലേക് അപേക്ഷ സബ്‌മിറ്റ് ചെയ്ത് അപേക്ഷ ഫീസ് Rs.25. 9447552750 Sham K എന്ന നമ്പറിലേക് Google Pay ചെയ്യേണ്ടതാണ്. അപേക്ഷ ഫീസ് അടച്ച screenshot വാട്സ്ആപ്പ് ൽ 9447552750 എന്ന നമ്പറിൽ അയക്കേണ്ടതാണ്.
          </Typography>
          <Typography variant='h6' style={{ textAlign: 'start', padding: '5px', marginTop: '2px' }}>3. അപേക്ഷ ഫീസ് ലഭ്യമായ അപേക്ഷകളെ അഡ്മിഷൻ പരിഗണിക്കുകയുള്ളു.    </Typography>
          <FormControlLabel
            control={
              <Checkbox
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
            }
            label="I agree that I read all the instructions written above"
          />
          <Typography variant="subtitle2">Please Download the PDF.</Typography>
        </DialogContent> :

        quota === "management" && registered ?
          <DialogContent>
            <Typography variant='h6' style={{ textAlign: 'start', padding: '5px', marginTop: '2px' }}>1. കമ്മ്യൂണിറ്റി quota യിലേക്കും മാനേജ്മെന്റ് കോട്ടയിലേക്കും വെവ്വേറെ അപേക്ഷകൾ സമർപ്പിക്കേണ്ടതാണ്.
            </Typography>
            <Typography variant='h6' style={{ textAlign: 'start', padding: '5px', marginTop: '2px' }}>2. മാനേജ്മെന്റ് അഡ്മിഷൻ റാങ്കലിസ്റ്റ് അടിസ്ഥാനത്തിലായിരുക്കും.
            </Typography>   
            <Typography variant='h6' style={{ textAlign: 'start', padding: '5px', marginTop: '2px' }}>3. മാനേജ്മെന്റ് കമ്മിറ്റി അംഗം ഒപ്പ് വെച് അപേക്ഷ സ്കൂളിൽ നേരിട്ട് സമർപ്പിക്കുന്നത് മാത്രമേ റാങ്ക് ലിസ്റ്റിൽ ഉൾപെടുത്തുകയുള്ളു.    </Typography>
            <FormControlLabel
              control={
                <Checkbox
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
              }
              label="I agree that I read all the instructions written above"
            />
            <Typography variant="subtitle2">Please Download the PDF.</Typography>
          </DialogContent> :

          <DialogContent>
            <Typography variant='h6' style={{ textAlign: 'start', padding: '5px', marginTop: '2px' }}>{props.message}
            </Typography>
            <Typography variant="subtitle2">Please Download the PDF.</Typography>
            <FormControlLabel
              control={
                <Checkbox
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
              }
              label="I agree that I read all the instructions written above"
            />
          </DialogContent>
      }
      <DialogActions>
        <Button disabled={!isChecked}><Link to={props.link}>Download</Link></Button>
      </DialogActions>
    </Dialog>
  );
}

export default SuccessDialog;

