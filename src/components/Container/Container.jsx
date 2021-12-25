import React from 'react';
import Container from '@mui/material/Container';
import LeftContainer from '../LeftContainer/LeftContainer';
import RightContainer from '../RightContainer/RightContainer';
import BottomContainer from '../BottomContainer/BottomContainer';



export default function MainContainer() {
  return (
    <div  sx={{bgcolor: '#1FAB89'}}>
      <Container sx={{width: 2/3, borderRadius: 5, height: '80vh', bgcolor: '#DFF4F3', color: '#252A34', p: 5, mt: 3 }}>
        <LeftContainer/>
        <RightContainer />
        <BottomContainer />
      </Container>
    </div>
  );
}