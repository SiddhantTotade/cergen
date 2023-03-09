import React from "react";
import { TextField, Button, DialogActions, Grid, Paper } from "@mui/material";
import { useState } from "react";

export const UploadTemplate = () => {
  const [file, setFile] = useState(null);

  const uploadFile = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  let linkToPPTFile =
    "/home/siddhanttotade/Documents/Docs/Programming/GIT/certificate-generator-and-sender/app/cert_gen_sen_app_backend/certificate_data/certificate-template/certificate_of_completion.pptx";
  return (
    <>
      <Grid
        sx={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{ display: "flex", justifyContent: "center", gap: "100px" }}
        >
          <Grid
            item
            xs={4}
            height={350}
            sx={{ overflow: "auto", display: "flex" }}
          >
            <Grid
              container
              spacing={2}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <TextField
                autoFocus
                margin="dense"
                id="upload_file"
                label="Upload File"
                type="file"
                fullWidth
                variant="standard"
                onChange={uploadFile}
              />
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Paper
              elevation={12}
              style={{
                width: "100%",
                height: "100%",
                // background: selectedImage
                //   ? `url(${selectedImage}) no-repeat center center / cover`
                //   : "white",
              }}
            >
              {file && (
                <iframe
                  src={`https://view.officeapps.live.com/op/embed.aspx?src=${linkToPPTFile}`}
                  width="100%"
                  height="600px"
                  title="ppt"
                ></iframe>
              )}
            </Paper>
          </Grid>
        </Grid>
        <DialogActions sx={{ marginTop: "20px" }}>
          <Button variant="contained">Cancel</Button>
          <Button variant="contained">Upload</Button>
        </DialogActions>
      </Grid>
    </>
  );
};
