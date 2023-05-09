import { AppBar, Container, CssBaseline, Toolbar, Typography, Grid, Button } from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import useStyles from "./styles";

function App() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icon}/>
          <Typography>Photo album</Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.container}>
        <main>
          <Container maxWidth='sm'>
            <Typography variant="h2" align="center" gutterBottom color="textPrimary">Photo album</Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>This is the most long sentence in the world</Typography>
            <div className={classes.buttons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">See my photos</Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">Secondary actions</Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </main>
      </div>
    </>
  );
}

export default App;
