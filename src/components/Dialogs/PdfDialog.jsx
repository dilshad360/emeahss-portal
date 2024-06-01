import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
} from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import PdfDownload from "../PDF/PdfDownload";
import CommunityPDF from "../PDF/CommunityPDF";

function PdfDialog(props) {
  let community = props.community;
  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      fullWidth
      className="text-center"
    >
      {/* <PDFViewer className="h-[600px]">
        <PdfDownload
                formValues={props.registered}
                syllabus={props.registered[0]?.Board}
              />
  </PDFViewer> */}
      <DialogTitle>
        <PictureAsPdfIcon color="success" style={{ fontSize: 48 }} />
      </DialogTitle>
      <DialogContent>
        <Typography variant="h6">
          Congratulations! Your PDF has been successfully generated and is ready
          for download.
        </Typography>
      </DialogContent>
      <DialogActions>
        <PDFDownloadLink
          document={
            community ? (
              <CommunityPDF
                formValues={props.registered}
                syllabus={props.registered[0]?.Board}
              />
            ) : (
              <PdfDownload
                formValues={props.registered}
                syllabus={props.registered[0]?.Board}
              />
            )
          }
          fileName={`EMEAHSS_Admission_Application.pdf`}
        >
          {({ blob, url, loading, error }) => {
            if (loading) {
              return (
                <>
                  <Button variant="contained" disabled>
                    Loading... 
                  </Button>
                </>
              );
            } else if (error) {
              return `Error: ${error.message}`;
            } else if (url) {
              return (
                <div>
                  <Button
                    component="a"
                    color="success"
                    fullWidth
                    variant="contained"
                    href={url}
                    download={`EMEAHSS_AppNo_${props.registered.AppNo}.pdf`}
                  >
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
  );
}

export default PdfDialog;
