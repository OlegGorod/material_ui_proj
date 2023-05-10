import {
  AppBar,
  Container,
  CssBaseline,
  Toolbar,
  Card,
  Typography,
  Grid,
  Button,
  CardMedia,
  CardContent,
  CardActions,
} from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import useStyles from "./styles";

function App() {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography>Photo album</Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.container}>
        <main>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              gutterBottom
              color="textPrimary"
            >
              Photo album
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              paragraph
            >
              This is the most long sentence in the world
            </Typography>
            <div className={classes.buttons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    See my photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary actions
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>

          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random
                      "
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5">
                        Heading
                      </Typography>
                      <Typography>
                        This is media card. You caen use section.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button color="primary">View</Button>
                      <Button color="primary">Edit</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>Footer</Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary">Something can be here</Typography>
        </footer>
      </div>
    </>
  );
}

export default App;
