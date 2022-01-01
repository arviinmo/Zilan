import React from 'react';
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';



export default function SubmitButton() {
  return (
    <div>
    <Button
    variant="contained"
    endIcon={<PlayArrowIcon />}
    sx={{mt: 12, bgcolor: '#6639A6', height: 40, width: 120, borderRadius: 3}}
    >
    Calculate
    </Button>
    </div>
  );
}