import React from 'react'
import SubmitButton from "../SubmitButton/SubmitButton";
import WPM from "../WordPerMinute/WPM";
import Grid from '@mui/material/Grid';


export default function BottomContainer() {
    return (
        <Grid sx={{display: 'flex', float: 'right', justifyContent: 'space-between'}}>      
            <WPM/>
            <SubmitButton />
        </Grid>
    )
}
