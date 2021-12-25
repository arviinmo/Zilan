import React from 'react';
import TextField from '@mui/material/TextField';

export default function TextInput(){
    return (
        <TextField
            id="outlined-multiline-static"
            type="text"
            label="paste whole text"
            multiline
            rows={5}
            placeholder='add the whole text here and we calculate it for you :)'
            sx={{ width: 400 }}
            InputLabelProps={{
                shrink: true,
            }}
        />
    )
}

