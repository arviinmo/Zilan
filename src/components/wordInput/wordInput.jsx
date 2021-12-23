import React, { Component } from 'react'
import TextField from '@mui/material/TextField';


export default class Input extends Component {
    render() {
        return (
            <div>
            <TextField
                id="outlined-number"
                type="number"
                label="Number of words"
                placeholder="e.g. 1385"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            </div>
        )
    }
}
