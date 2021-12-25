import React from 'react';
import Container from '@mui/material/Container';
import LeftContainer from '../LeftContainer/LeftContainer';
import RightContainer from '../RightContainer/RightContainer';
import BottomContainer from '../BottomContainer/BottomContainer';



export default function MainContainer() {
  return (
    <div>
      <Container sx={{width: 2/3, borderRadius: 5, height: '80vh', bgcolor: 'white', color: '#303841', p: 5, mt: 3, opacity: 0.9}}>
        <LeftContainer/>
        <RightContainer />
        <BottomContainer />
      </Container>
    </div>
  );
}