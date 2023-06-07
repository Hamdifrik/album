import React from 'react';
import { Typography, Card, CardActionArea, CssBaseline, CardContent, Grid, Button, Toolbar, Container, AppBar } from '@mui/material';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

export default function Hamdi() {
  return (
    <>
      <CssBaseline />

      <AppBar position='relative' >

        <Toolbar>
        <AddAPhotoIcon/>
          <Typography variant='h6'  > Best Album </Typography>
        </Toolbar>
      </AppBar>

      <main>
       <Container maxWidth="sm">
       <Typography variant='h2' align='center' color="textPrimary" gutterBottom > Hamdi photo </Typography>
       <Typography variant='h4' align='center' color="textSecondary" paragraph > hello word my name is hamdi iam 24 years old my from is </Typography>
       <Grid container spacing={2} justify="center">
<Grid item>
    <Button variant='contained' color='primary'> SEE HAMDI PHOTO</Button>
    <Button variant='contained' color='secondary'> DO WHATEVER U WANT</Button>
    
     </Grid>

       </Grid>
    
       </Container>
       


      </main>
    </>
  );
}
