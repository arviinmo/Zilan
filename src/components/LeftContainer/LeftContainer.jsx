import React from 'react'
import Input from "../wordInput/wordInput";
import Grid from '@mui/material/Grid';

export default function LeftContainer() {
    return (
        <Grid sx={{float: 'left', pt: 20, pl: 18, width: 9.5/20}}>
            <Input />
        </Grid>
    )
}
