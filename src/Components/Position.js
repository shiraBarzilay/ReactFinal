import {useNavigate} from 'react-router-dom'
import React from 'react'
import Button from '@mui/material/Button';
import Nav from '../nav.js'
export default function Position(){
    const navigate=useNavigate();
    return(
        <div>
            <Nav/>
        <div className="position">
            <Button variant="outlined" onClick={() => navigate('/editPosition')}>מיקום חדש</Button>
        </div>
        </div>
    )
}