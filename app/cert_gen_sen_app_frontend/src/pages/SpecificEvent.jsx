import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Sidebar from "../components/base_components/Sidebar";
import axios from "axios";
import { useState, useEffect } from "react";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import { Button, Typography } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import CreateParticipant from "../components/participant_components/CreateParticipant";
import UpdateParticipant from "../components/participant_components/UpdateParticipant";
import DeleteParticipant from "../components/participant_components/DeleteParticipant";
import Gold from "../medals_images/gold-medal.png";
import Silver from "../medals_images/silver-medal.png";
import Bronze from "../medals_images/bronze-medal.png";
import BackdropSpinner from "../components/base_components/Backdrop";
import AlertSnackbar from "../components/base_components/AlertSnackbar";

const createBtns = {
  marginBottom: "10px",
  marginRight: "10px",
};

export default function SpecificEvent() {
  const [openSnack, setOpenSnack] = useState(false);
  const [message, setMessage] = useState("");
  const [alertType, setAlertType] = useState("");
  const [openSpinner, setOpenSpinner] = useState(false);

  const [eventsData, setEventsData] = useState([]);
  const [participantDetails] = useState({
    event: "",
    student_name: "",
    student_id: "",
    email: "",
    certificate_status: "",
    certificate_id: "",
    certificate_sent_status: "",
  });

  const [eventDetail, setEventDetail] = useState({
    eventDate: "",
    eventDepartment: "",
  });

  const event_url = window.location.href;
  let attendance = 0;

  useEffect(() => {
    const event_url = window.location.href;
    const new_event_url = event_url.replace("3000", "8000");
    axios
      .get(new_event_url, {
        headers: { Authorization: "Token " + localStorage.getItem("token") },
      })
      .then((res) =>
        handleResponse(
          res.data.participants_data,
          res.data.event_date,
          res.data.event_department
        )
      );
  }, []);

  let event_slug = "";

  for (let i = event_url.length - 1; i > 0; i--) {
    event_slug += event_url[i];
    if (event_url[i] === "/") {
      break;
    }
  }

  const ReverseString = (event_slug) => [...event_slug].reverse().join("");
  event_slug = ReverseString(event_slug.replace("/", ""));

  function generateCertificate() {
    setOpenSpinner(true);
    setTimeout(() => {
      setOpenSpinner(false);
    }, 5000);
    const url = "http://127.0.0.1:8000/api/generate-certificate/" + event_slug;
    axios
      .get(url, {
        headers: { Authorization: "Token " + localStorage.getItem("token") },
      })
      .then(
        setTimeout(() => {
          setOpenSnack(true);
        }, 10000)
      )
      .then((res) => setMessage(res.data))
      .then(
        message === "Certificate generated and sended successfully"
          ? setAlertType("error")
          : setAlertType("success")
      )
      .catch((err) => console.log(err));
  }

  function generateCertificateById(id) {
    setOpenSpinner(true);
    setTimeout(() => {
      setOpenSpinner(false);
    }, 5000);
    const url =
      "http://127.0.0.1:8000/api/generate-certificate/" + event_slug + "/" + id;
    axios
      .get(url, {
        headers: { Authorization: "Token " + localStorage.getItem("token") },
      })
      .then(
        setTimeout(() => {
          setOpenSnack(true);
        }, 10000)
      )
      .then((res) => setMessage(res.data))
      .then(
        message === "Certificate generated and sended successfully"
          ? setAlertType("error")
          : setAlertType("success")
      )
      .catch((err) => console.log(err));
  }

  const [form, setForm] = React.useState(false);
  const [updateForm, setUpdateForm] = useState(false);
  const [deleteForm, setDeleteForm] = useState(false);

  const handleResponse = (participant, date, department) => {
    setEventsData(participant);
    setEventDetail({
      eventDate: date.replace(/-/g, ""),
      eventDepartment: department,
    });
  };

  const handleForm = () => {
    setForm(true);
  };

  const handleFormClose = () => {
    setForm(false);
  };

  const handleUpdateForm = (
    id,
    student_name,
    student_id,
    email,
    certificate_status,
    certificate_id,
    certificate_sent_status
  ) => {
    setUpdateForm(true);
    participantDetails.event = id;
    participantDetails.student_name = student_name;
    participantDetails.student_id = student_id;
    participantDetails.email = email;
    participantDetails.certificate_status = certificate_status;
    participantDetails.certificate_id = certificate_id;
    participantDetails.certificate_sent_status = certificate_sent_status;
  };

  const handleUpdateFormClose = () => {
    setUpdateForm(false);
  };

  const handleDeleteForm = (id) => {
    setDeleteForm(true);
    participantDetails.event = id;
  };

  const handleDeleteFormClose = () => {
    setDeleteForm(false);
  };

  function handleCloseSnackbar() {
    setOpenSnack(false);
  }

  return (
    <div className="flex justify-center items-center">
      <Sidebar />
      <div className="w-3/5 mt-24">
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            fontSize: "30px",
            borderBottom: "1px solid gray",
          }}
        >
          {event_slug.toUpperCase()}
        </Typography>
        {eventsData.forEach((event) => {
          return event.certificate_status === "T" ||
            event.certificate_status === "1" ||
            event.certificate_status === "2" ||
            event.certificate_status === "3"
            ? attendance++
            : "";
        })}
        <div className="flex justify-between mt-3">
          <small className="text-blue-600">
            Total Participants : {eventsData.length}
          </small>
          <small className="text-green-600">
            Attended Participants : {attendance}
          </small>
          <small className="text-red-600">
            Absent Participants : {eventsData.length - attendance}
          </small>
        </div>
        <div className="gap-10 mt-5">
          <Button variant="contained" sx={createBtns} onClick={handleForm}>
            Create Participant
          </Button>
          <Button
            variant="contained"
            sx={createBtns}
            onClick={generateCertificate}
          >
            Issue and Send Certificate
          </Button>
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 450 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">
                  <b>Student Name</b>
                </TableCell>
                <TableCell align="center">
                  <b>Student Id</b>
                </TableCell>
                <TableCell align="center">
                  <b>Student Email</b>
                </TableCell>
                <TableCell align="center">
                  <b>Eligible</b>
                </TableCell>
                <TableCell align="center">
                  <b>Actions</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {eventsData !== "0" ? (
                Object.values(eventsData).map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center">{row.student_name}</TableCell>
                    <TableCell align="center">{row.student_id}</TableCell>
                    <TableCell align="center">{row.email}</TableCell>
                    {row.certificate_status === "1" ? (
                      <TableCell
                        align="center"
                        sx={{ display: "flex", justifyContent: "center" }}
                      >
                        <img src={Gold} className="w-10" alt="gold medal png" />
                      </TableCell>
                    ) : row.certificate_status === "2" ? (
                      <TableCell
                        align="center"
                        sx={{ display: "flex", justifyContent: "center" }}
                      >
                        <img
                          src={Silver}
                          className="w-10"
                          alt="silver medal png"
                        />
                      </TableCell>
                    ) : row.certificate_status === "3" ? (
                      <TableCell
                        align="center"
                        sx={{ display: "flex", justifyContent: "center" }}
                      >
                        <img
                          src={Bronze}
                          className="w-10"
                          alt="bronze medal png"
                        />
                      </TableCell>
                    ) : row.certificate_status === "T" ? (
                      <TableCell align="center">
                        <Tooltip
                          className="cursor-pointer"
                          title={
                            row.certificate_sent_status === true
                              ? `Certificate sended to ${row.student_name}`
                              : `${row.student_name} is eligible for certificate`
                          }
                        >
                          <DoneIcon sx={{ color: "green" }} />
                        </Tooltip>
                      </TableCell>
                    ) : (
                      <TableCell align="center">
                        <Tooltip
                          className="cursor-pointer"
                          title={`${row.student_name} is not eligible for certificate`}
                        >
                          <CloseIcon sx={{ color: "red" }} />
                        </Tooltip>
                      </TableCell>
                    )}
                    {row.certificate_sent_status === false ? (
                      <TableCell align="center">
                        <Tooltip title={`Edit : ${row.student_name}`}>
                          <Button
                            onClick={() =>
                              handleUpdateForm(
                                row.id,
                                row.student_name,
                                row.student_id,
                                row.email,
                                row.certificate_status,
                                row.certificate_id,
                                row.certificate_sent_status
                              )
                            }
                            key={row.id}
                          >
                            <EditIcon sx={{ color: "blue" }} />
                          </Button>
                        </Tooltip>
                        <Tooltip title={`Delete : ${row.student_name}`}>
                          <Button onClick={() => handleDeleteForm(row.id)}>
                            <DeleteIcon sx={{ color: "red" }} />
                          </Button>
                        </Tooltip>
                        <Tooltip title={`Send Certificate : ${row.email}`}>
                          <Button
                            onClick={() => generateCertificateById(row.id)}
                          >
                            <SendIcon sx={{ color: "grey" }} />
                          </Button>
                        </Tooltip>
                      </TableCell>
                    ) : (
                      <TableCell align="center"></TableCell>
                    )}
                  </TableRow>
                ))
              ) : (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">No Data</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <CreateParticipant open={form} onClose={handleFormClose} />
        <UpdateParticipant
          open={updateForm}
          onClose={handleUpdateFormClose}
          participant={participantDetails}
          event_slug={event_slug.toUpperCase()}
          event_detail={eventDetail}
        />
        <DeleteParticipant
          open={deleteForm}
          onClose={handleDeleteFormClose}
          participant={participantDetails}
        />
        <BackdropSpinner open={openSpinner} />
        <AlertSnackbar
          open={openSnack}
          message={message}
          severity={alertType}
          onClose={handleCloseSnackbar}
          autoHideDuration={6000}
        />
      </div>
    </div>
  );
}
