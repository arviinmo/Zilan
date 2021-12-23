import React from 'react';
import TextField from '@mui/material/TextField';

export default function TextInput(){
    return (
        <TextField
            id="outlined-multiline-static"
            label="paste whole text"
            multiline
            rows={5}
            defaultValue=""
            sx={{ width: 500 }}
        />
    )
}

