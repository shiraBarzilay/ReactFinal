import { useNavigate } from 'react-router-dom'
import React from 'react'
import Button from '@mui/material/Button';

/*helloooooooooooooooooooo */
export default function Home() {
    const navigate = useNavigate();
    return (
        <div className='home'>
            <div id='addLogo'></div>
            {/* <div id='image'>
                <img src={'/public/finalogo.png'} alt="Logo" />
            </div> */}
            <div id='btns'>
            <div id='buttons'>
            <Button id='btn' variant="outlined" size="large" onClick={() => navigate('/saveTask')}>משימות שמורות</Button>
            </div>
            <div id='buttons'>
            <Button id='btn1' variant="outlined" size="large" onClick={() => navigate('/newTask')}>משימה חדשה</Button>
            </div>
            </div>
        </div>
    )
}
