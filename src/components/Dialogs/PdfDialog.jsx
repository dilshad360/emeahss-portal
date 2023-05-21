import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Typography , Button } from '@mui/material'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { PDFDownloadLink } from "@react-pdf/renderer";
import PdfDownload from "../PdfDownload";


function PdfDialog(props) {
  return (
    <Dialog
            open={props.open}
            onClose={props.onClose}
            fullWidth
            className='text-center'
          >
            <DialogTitle>
              <PictureAsPdfIcon color="success" style={{ fontSize: 48 }} />
            </DialogTitle>
            <DialogContent>
              <Typography variant='h6'>Congratulations! Your PDF has been successfully generated and is ready for download.</Typography>
            </DialogContent>
            <DialogActions>
            <PDFDownloadLink
              document={
                <PdfDownload
                  formValues={props.registered}
                  syllabus={props.registered[0]?.Board}
                />
              }
              fileName="EMEAHSS_Admission_Application.pdf"
            >
              {({ blob, url, loading, error }) => {
                if (loading) {
                  return "Loading document...";
                } else if (error) {
                  return `Error: ${error.message}`;
                } else if (url) {
                  return (
                    <div>
                      <Button component="a" color='success' fullWidth variant='contained' href={url} download="EMEAHSS_Admission_Application.pdf">
                        Download
                      </Button>
                    </div>
                  );
                } else {
                  return null;
                }
              }}
            </PDFDownloadLink>
            </DialogActions>
          </Dialog>
  )
}

export default PdfDialog