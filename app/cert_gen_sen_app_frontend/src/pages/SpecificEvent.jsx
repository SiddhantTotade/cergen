import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Sidebar from "../components/base_components/Sidebar";
import { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import SendIcon from "@mui/icons-material/Send";
import { Button, Typography, Box } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import CreateParticipant from "../components/participant_components/CreateParticipant";
import UpdateParticipant from "../components/participant_components/UpdateParticipant";
import DeleteParticipant from "../components/participant_components/DeleteParticipant";
import CertificateTemplate from "../components/template_components/CertificateTemplate";
import Gold from "../medals_images/gold-medal.png";
import Silver from "../medals_images/silver-medal.png";
import Bronze from "../medals_images/bronze-medal.png";
import ParticipantImage from "../components/participant_components/ParticipantImage";
import AlbumForm from "../components/image_components/AlbumForm";
import { getToken } from "../services/LocalStorageService";
import { useGetParticipantsQuery } from "../services/participantsAPI";
import LoaderSkeleton from "../components/base_components/LoaderSkeleton";
import { useSpecificEventDetailQuery } from "../services/eventsAPI";
import { useGetCompletionCertificateQuery } from "../services/certificateGeneratorAPI";

const createBtns = {
  marginBottom: "10px",
  marginRight: "10px",
};

const tableRow = 6

const tableSkeleton = [...Array(tableRow)].map((e, i) =>
  <TableBody key={i}>
    <TableRow>
      <TableCell><LoaderSkeleton barWidth={150} barPadding={2} /></TableCell>
      <TableCell><LoaderSkeleton barWidth={150} barPadding={2} /></TableCell>
      <TableCell><LoaderSkeleton barWidth={150} barPadding={2} /></TableCell>
      <TableCell><LoaderSkeleton barWidth={150} barPadding={2} /></TableCell>
      <TableCell><LoaderSkeleton barWidth={50} barPadding={2} /></TableCell>
      <TableCell><LoaderSkeleton barWidth={50} barPadding={2} /></TableCell>
      <TableCell><LoaderSkeleton barWidth={70} barPadding={2} /></TableCell>
    </TableRow>
  </TableBody>
)

export default function SpecificEvent() {

  const event_url = window.location.href;
  let event_slug = "";

  for (let i = event_url.length - 1; i > 0; i--) {
    event_slug += event_url[i];
    if (event_url[i] === "/") {
      break;
    }
  }

  const ReverseString = (event_slug) => [...event_slug].reverse().join("");
  event_slug = ReverseString(event_slug.replace("/", ""));

  const { access_token } = getToken()

  const { data = [], isLoading } = useGetParticipantsQuery({ access_token: access_token, event_slug: event_slug })

  const eventData = useSpecificEventDetailQuery({ access_token: access_token, event_slug: event_slug })

  const [specificEventDetails, setSpecificEventDetails] = useState({})

  React.useEffect(() => {
    if (!eventData.isLoading) {
      setSpecificEventDetails(eventData.data[0])
    }
  }, [eventData.data, eventData.isLoading])

  let completionImagePath = localStorage.getItem("CompletionCertificatePath")
  let meritImagePath = localStorage.getItem("MeritCertificatePath");

  const [participantDetails, setParticipantsDetails] = useState({
    id: "",
    event: "",
    participant_name: "",
    participant_id: "",
    email: "",
    phone: "",
    certificate_status: "",
    certificate_id: "",
    certificate_sent_status: "",
    student_img: "",
  });

  let attendance = 0;

  function generateCertificate() {
    // if (completionImagePath === "null" || meritImagePath === "null") {
    //   return console.log("Please select a template to generate certificate");
    // }

    // setOpenSpinner(true);
    // setTimeout(() => {
    //   setOpenSpinner(false);
    // }, 5000);

    // const url = "http://127.0.0.1:8000/api/generate-certificate/" + event_slug;

    // const formData = new FormData();
    // formData.append("completion", completionImagePath.replace('jpg', 'pptx'));
    // formData.append("merit", meritImagePath.replace('jpg', 'pptx'));

    // axios
    //   .post(url, formData, {
    //     headers: { Authorization: "Token " + localStorage.getItem("token") },
    //   })
    //   .then(
    //     setTimeout(() => {
    //       setOpenSnack(true);
    //     }, 10000)
    //   )
    //   .then((res) => setMessage(res.data))
    //   .then(
    //     message === "Certificate generated and sended successfully"
    //       ? setAlertType("error")
    //       : setAlertType("success")
    //   )
    //   .catch((err) => console.log(err));
  }

  function generateCertificateById(id) {
    // setOpenSpinner(true);
    // setTimeout(() => {
    //   setOpenSpinner(false);
    // }, 5000);
    // const url =
    //   "http://127.0.0.1:8000/api/generate-certificate/" + event_slug + "/" + id;
    // axios
    //   .get(url, {
    //     headers: { Authorization: "Token " + localStorage.getItem("token") },
    //   })
    //   .then(
    //     setTimeout(() => {
    //       setOpenSnack(true);
    //     }, 10000)
    //   )
    //   .then((res) => setMessage(res.data))
    //   .then(
    //     message === "Certificate generated and sended successfully"
    //       ? setAlertType("error")
    //       : setAlertType("success")
    //   )
    //   .catch((err) => console.log(err));
  }

  const [createParticiapantForm, setCreateParticiapantForm] =
    React.useState(false);
  const [uploadTemplateForm, setUploadTemplateForm] = React.useState(false);
  const [updateForm, setUpdateForm] = useState(false);
  const [deleteForm, setDeleteForm] = useState(false);
  const [album, setAlbum] = useState(false)
  const [camera, setCamera] = useState(false)

  const handleAlbumForm = () => {
    setAlbum(true)
  }

  const handleAlbumFormClose = () => {
    setAlbum(false)
  }

  const handleCameraForm = (id, img) => {
    setCamera(true)
    setParticipantsDetails({ student_img: img, event: id })
  }

  const handleImageForm = (id, img) => {
    setCamera(true)
    setParticipantsDetails({ student_img: img, event: id })
  }

  const handleCameraFormClose = () => {
    setCamera(false);
    setParticipantsDetails("")
  };

  const handleUploadTemplateForm = () => {
    setUploadTemplateForm(true);
  };

  const handleUploadTemplateFormClose = () => {
    setUploadTemplateForm(false);
  };

  const handleForm = () => {
    setCreateParticiapantForm(true);
  };

  const handleFormClose = () => {
    setCreateParticiapantForm(false);
  };

  const handleUpdateForm = (
    id,
    event,
    participant_name,
    participant_id,
    email,
    phone,
    certificate_status,
    certificate_id,
    certificate_sent_status,
    student_img
  ) => {
    setUpdateForm(true);
    participantDetails.id = id;
    participantDetails.event = event;
    participantDetails.participant_name = participant_name;
    participantDetails.participant_id = participant_id;
    participantDetails.email = email;
    participantDetails.phone = phone;
    participantDetails.certificate_status = certificate_status;
    participantDetails.certificate_id = certificate_id;
    participantDetails.certificate_sent_status = certificate_sent_status;
    participantDetails.student_img = student_img;
  };

  const handleUpdateFormClose = () => {
    setUpdateForm(false);
  };

  const handleDeleteForm = (id, participant_name) => {
    setDeleteForm(true);
    participantDetails.id = id;
    participantDetails.participant_name = participant_name
  };

  const handleDeleteFormClose = () => {
    setDeleteForm(false);
  };

  return (
    <div className="flex justify-center items-center">
      <Sidebar />
      <div className="w-3/4 mt-24">
        <Box sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: 'center',
          borderBottom: "1px solid gray",
        }}>
          {
            eventData.isLoading ? <><LoaderSkeleton barWidth={500} barPadding={3} /><LoaderSkeleton barWidth={500} barPadding={3} /></> : <>
              <Typography sx={{ fontSize: "40px", }}>{specificEventDetails.event_name}</Typography>
              <Typography sx={{ fontSize: '15px' }}>{specificEventDetails.subject}</Typography>
            </>
          }
        </Box>
        {data.forEach((event) => {
          return event.certificate_status === "T" ||
            event.certificate_status === "1" ||
            event.certificate_status === "2" ||
            event.certificate_status === "3"
            ? attendance++
            : "";
        })}
        <div className="flex justify-between mt-3">
          <small className="text-blue-600">
            Total Participants : {data.length}
          </small>
          <small className="text-green-600">
            Attended Participants : {attendance}
          </small>
          <small className="text-red-600">
            Absent Participants : {data.length - attendance}
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
          <Button
            variant="contained"
            sx={createBtns}
            onClick={handleUploadTemplateForm}
          >
            Templates
          </Button>
          <Button
            variant="contained"
            sx={createBtns}
            onClick={handleAlbumForm}
          >
            View Album
          </Button>
        </div>
        <TableContainer sx={{ height: '65vh', position: 'relative', overflow: 'auto', '::-webkit-scrollbar-thumb': { 'background': '#1976d2', borderRadius: '50px' }, '::-webkit-scrollbar-track': { background: '#f1f1f1' }, '::-webkit-scrollbar': { width: '3px', background: 'transparent' } }} component={Paper}>
          <Table stickyHeader sx={{ minWidth: 450, position: 'sticky' }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">
                  <b>Participant Name</b>
                </TableCell>
                <TableCell align="center">
                  <b>Participant Id</b>
                </TableCell>
                <TableCell align="center">
                  <b>Participant Email</b>
                </TableCell>
                <TableCell align="center">
                  <b>Participant Phone</b>
                </TableCell>
                <TableCell align="center">
                  <b>Eligible</b>
                </TableCell>
                <TableCell align="center">
                  <b>Photos</b>
                </TableCell>
                <TableCell align="center">
                  <b>Actions</b>
                </TableCell>
              </TableRow>
            </TableHead>
            {
              isLoading ? tableSkeleton :
                <TableBody>
                  {data !== "0" ? (
                    data.map((row) => (
                      <TableRow
                        key={row.id}
                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      >
                        <TableCell align="center">{row.participant_name}</TableCell>
                        <TableCell align="center">{row.participant_id}</TableCell>
                        <TableCell align="center">{row.email}</TableCell>
                        <TableCell align="center">{row.phone}</TableCell>
                        {row.certificate_status === "1" ? (
                          <TableCell
                            align="center"
                            sx={{ display: "flex", justifyContent: "center" }}
                          >
                            <Tooltip
                              className="cursor-pointer"
                              title={
                                row.certificate_sent_status === true
                                  ? `Certificate sended to ${row.participant_name}`
                                  : `${row.participant_name} is eligible for certificate`
                              }
                            >
                              <img src={Gold} className="w-10" alt="gold medal png" />
                            </Tooltip>
                          </TableCell>
                        ) : row.certificate_status === "2" ? (
                          <TableCell
                            align="center"
                            sx={{ display: "flex", justifyContent: "center" }}
                          >
                            <Tooltip
                              className="cursor-pointer"
                              title={
                                row.certificate_sent_status === true
                                  ? `Certificate sended to ${row.participant_name}`
                                  : `${row.participant_name} is eligible for certificate`
                              }
                            >
                              <img
                                src={Silver}
                                className="w-10"
                                alt="silver medal png"
                              />
                            </Tooltip>
                          </TableCell>
                        ) : row.certificate_status === "3" ? (
                          <TableCell
                            align="center"
                            sx={{ display: "flex", justifyContent: "center" }}
                          >
                            <Tooltip
                              className="cursor-pointer"
                              title={
                                row.certificate_sent_status === true
                                  ? `Certificate sended to ${row.participant_name}`
                                  : `${row.participant_name} is eligible for certificate`
                              }
                            >
                              <img
                                src={Bronze}
                                className="w-10"
                                alt="bronze medal png"
                              />
                            </Tooltip>
                          </TableCell>
                        ) : row.certificate_status === "T" ? (
                          <TableCell align="center">
                            <Tooltip
                              className="cursor-pointer"
                              title={
                                row.certificate_sent_status === true
                                  ? `Certificate sended to ${row.participant_name}`
                                  : `${row.participant_name} is eligible for certificate`
                              }
                            >
                              <DoneIcon sx={{ color: "green" }} />
                            </Tooltip>
                          </TableCell>
                        ) : (
                          <TableCell align="center">
                            <Tooltip
                              className="cursor-pointer"
                              title={`${row.participant_name} is not eligible for certificate`}
                            >
                              <CloseIcon sx={{ color: "red" }} />
                            </Tooltip>
                          </TableCell>
                        )}{
                          row.student_image === "" ?
                            <TableCell align="center">
                              <Tooltip title={`Click / Upload a photo of : ${row.participant_name}`}>
                                <Button onClick={() => handleCameraForm(row.id, row.student_image)}>
                                  <CameraAltIcon sx={{ color: '#e81551' }} />
                                </Button>
                              </Tooltip>
                            </TableCell> :
                            <TableCell align="center">
                              <Tooltip title={`View / Update photo of : ${row.participant_name}`}>
                                <Button onClick={() => handleImageForm(row.id, row.student_image)}>
                                  <InsertPhotoIcon sx={{ color: '#1f0abf' }} />
                                </Button>
                              </Tooltip>
                            </TableCell>
                        }
                        {row.certificate_sent_status === false ? (
                          <TableCell align="center">
                            <Tooltip title={`Edit : ${row.participant_name}`}>
                              <Button
                                onClick={() =>
                                  handleUpdateForm(
                                    row.id,
                                    row.event,
                                    row.participant_name,
                                    row.participant_id,
                                    row.email,
                                    row.phone,
                                    row.certificate_status,
                                    row.certificate_id,
                                    row.certificate_sent_status,
                                    row.student_img
                                  )
                                }
                                key={row.id}
                              >
                                <EditIcon sx={{ color: "blue" }} />
                              </Button>
                            </Tooltip>
                            <Tooltip title={`Delete : ${row.participant_name}`}>
                              <Button onClick={() => handleDeleteForm(row.id, row.participant_name)}>
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
            }
          </Table>
        </TableContainer>
        <CreateParticipant
          open={createParticiapantForm}
          onClose={handleFormClose}
          participant={participantDetails}
          event_slug={event_slug.toUpperCase()}
          event_detail={specificEventDetails}
        />
        {updateForm ?
          <UpdateParticipant
            open={updateForm}
            onClose={handleUpdateFormClose}
            participant={participantDetails}
            event_slug={event_slug.toUpperCase()}
            event_detail={specificEventDetails}
          /> : ""
        }
        <DeleteParticipant
          open={deleteForm}
          onClose={handleDeleteFormClose}
          participant={participantDetails}
        />
        <CertificateTemplate
          open={uploadTemplateForm}
          onClose={handleUploadTemplateFormClose}
        />
        <ParticipantImage open={camera} onClose={handleCameraFormClose} participant={participantDetails} />
        <AlbumForm open={album} onClose={handleAlbumFormClose} participant={participantDetails} event_slug={event_slug} />
      </div>
    </div>
  );
}
