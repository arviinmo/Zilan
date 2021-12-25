import React from 'react'
import TextInput from "../TextInput/TextInput";
import Grid from '@mui/material/Grid';


export default function RightContainer() {
    return (
        <Grid  sx={{float: 'right', pl: 8, pt: 15, pb: 15, width: 10.5/20, borderLeft: 3, borderColor: 'rgb(138, 138, 138)'}}>
            <TextInput />
        </Grid>
    )
}
