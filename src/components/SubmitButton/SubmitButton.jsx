import React from 'react';
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import { createTheme } from '@mui/material/styles';
import { deepPurple } from '@mui/material/colors';

const outerTheme = createTheme({
  palette: {
    primary: {
      main: deepPurple[500],
    },
  },
});


export default function SubmitButton() {
  return (
    <Button
        variant="contained"
        endIcon={<PlayArrowIcon />}
        theme={outerTheme}
    >
        Calculate
    </Button>
  );
}