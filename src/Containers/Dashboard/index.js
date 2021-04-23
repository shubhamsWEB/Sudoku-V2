import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useStyles from "./style";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import { Link } from "react-router-dom";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

export default function Dashboard() {
  const classes = useStyles();

  return (
    <Container>
      <Typography
        variant="h3"
        component="h3"
        align="center"
        color="primary"
        className={classes.heading}
      >
        DIFFICULTY
      </Typography>
      <Grid container spacing={3}>
        {[{level: 'EASY',path:'/board/easy',icon: '★'},{level: 'MEDIUM',path:'/board/medium',icon: '★★'}, {level: 'HARD',path:'/board/hard',icon: '★★★'}].map((row) => {
          return (
            <Grid item xs={12} sm={6} lg={4}>
              <Card className={classes.root}>
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                    align="center"
                  >
                    <span style={{fontSize: '40px',color: "#d4af36"}}>{row.icon}</span>
                  </Typography>
                  <Typography
                    variant="h5"
                    align="center"
                    component="h5"
                    color="textSecondary"
                  >
                   {row.level}
                  </Typography>
                  <center>
                  <Link to={row.path} style={{textDecoration: 'none'}}>
                    <Button startIcon={<PlayCircleOutlineIcon/>} variant="outlined" color="primary" style={{marginTop: '15px'}}>
                      Play
                    </Button>
                  </Link>
                  </center>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
