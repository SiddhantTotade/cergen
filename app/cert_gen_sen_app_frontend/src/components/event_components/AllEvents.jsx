import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Sidebar from "../base_components/Sidebar";
import { useState, useEffect } from 'react';
import axios from 'axios'
import BackdropSpinner from '../base_components/Backdrop';
import AlertSnackbar from '../base_components/AlertSnackbar';

const card_sx = {
    maxWidth: 400,
    transition: 'all 0.25s ease-in-out',
    '&:hover': {
        background: "#fcfcfa",
        transform: 'scale(1.1)',
        transition: 'all 0.25s ease-in-out'
    }
}

export const AllEvents = () => {

    const [eventsData, setEventsData] = useState([])
    const [openSnack, setOpenSnack] = useState(false)
    const [message, setMessage] = useState("")
    const [alertType, setAlertType] = useState("")
    const [openSpinner, setOpenSpinner] = useState(false)

    useEffect(() => {
        const url = 'http://127.0.0.1:8000/api/all-events/'

        const fetchData = async () => {
            try {
                const response = await axios.get(url, { headers: { "Authorization": "Token " + localStorage.getItem("token") } })
                setEventsData(response.data)
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, [])

    function handleDelete(event) {
        setOpenSpinner(true)
        setTimeout(() => { setOpenSpinner(false) }, 2000)
        const url = 'http://127.0.0.1:8000/api/event/' + event
        axios.delete(url).then(setTimeout(() => { setOpenSnack(true) }, 2000)).then(res => setMessage(res.data)).then(message === "Event added successfully" ? setAlertType("error") : setAlertType("success")).catch(err => console.log(err))
    }

    function handleCloseSnackbar() {
        setOpenSnack(false)
    }

    return (
        <>
            <Sidebar />
            <div className='grid gap-5 justify-center col-auto grid-cols-3 p-10 w-3/5 m-auto' >
                {eventsData.map((event) => {
                    let event_url = '/api/event/' + event.slug
                    return <Card sx={card_sx}>
                        <CardContent>
                            <div className='flex items-center justify-between'>
                                <Typography gutterBottom variant="h5" component="div">
                                    {event.event_name}
                                </Typography>
                                <div>
                                    <small>{event.from_date} - {event.to_date}</small>
                                </div>
                            </div>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small"><Link sx={{ textDecoration: 'none' }} to={event_url}>View</Link></Button>
                            <Button size="small" onClick={() => handleDelete(event.slug)} >Delete</Button>
                        </CardActions>
                    </Card>
                })}
            </div>
            <BackdropSpinner open={openSpinner} />
            <AlertSnackbar open={openSnack} message={message} severity={alertType} onClose={handleCloseSnackbar} autoHideDuration={6000} />
        </>
    )
}
