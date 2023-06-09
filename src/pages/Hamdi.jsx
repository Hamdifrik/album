import React from 'react';
import { Typography, Card, CardMedia, CardActions, CssBaseline, CardContent, Grid, Button, Toolbar, Container, AppBar } from '@mui/material';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { makeStyles } from '@mui/styles';

const cards=[1,2,3,4,5,6,7,8,9];

const useStyles = makeStyles({
  container: {
    background: "paper",
    padding: "10px",
    margin: "10px"
  },

  icon:{
    marginRight:"20px",
  },
  button:{
    margin:"25px",
  },

  cardGrid: {
  
    padding: "30px 0px",
   
  },
  card: {
height:"100%",display:"flex",flexDirection:"column",padding:"30px 15px"
  },
  
  cardMedia: {
paddingTop:"56.25%"  
  }, 
  
  cardContent: {

  }
});

export default function Hamdi() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <AddAPhotoIcon />
          <Typography variant='h6'>Best Album</Typography>
        </Toolbar>
      </AppBar>

      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography variant='h2' align='center' color="textPrimary" gutterBottom>Hamdi photo</Typography>
            <Typography variant='h4' align='center' color="textSecondary" paragraph>hello word my name is hamdi iam 24 years old my from is</Typography>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button variant='contained' color='primary' sx={{ m: 2 }}>SEE HAMDI PHOTO</Button>
                <Button variant='contained' color='secondary'>DO WHATEVER U WANT</Button>
              </Grid>
            </Grid>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth='md'>
          <Grid container spacing={4}> 
          {cards.map((card)=>(
          
          <Grid item key={card} xs={12} sm={6} md={3}>

<Card className={classes.card}>
  <CardMedia className={classes.cardMedia} image="http://source.unsplash.com/random" title="image title" />
  <CardContent className={classes.cardContent}>
  <Typography gutterBottom variant='h5'> Heading</Typography>
    <Typography gutterBottom variant='h6'> this is description</Typography>
    <CardActions>
      <Button size='small' color='success' > Views </Button> 
      <Button size='small' color='success' > Downlod </Button>
    </CardActions>
  </CardContent>
</Card>

</Grid>))}
            

          </Grid>
        </Container>

      </main>
    </>
  );
}
