import React from 'react';
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';



export default function SubmitButton() {
  return (
    <div>
    <Button
    variant="contained"
    endIcon={<PlayArrowIcon />}
    sx={{bgcolor: 'purple', mt: 12, mr: 1, height: 40, width: 120, borderRadius: 3}}
    >
    Calculate
    </Button>
    </div>
  );
}