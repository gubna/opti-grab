import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import poster from '../images/poster_Optigrab.jpg'

export default function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Typography component="div" /> <img width="100%" src={poster} />
      </Container>
    </React.Fragment>
  );
}