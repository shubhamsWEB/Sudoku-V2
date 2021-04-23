import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import SudokuGif from "../../Assets/images/sudoku.gif";
import { APP_NAME, APP_VERSION } from "../../Constants/homeConstants";
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom';
import useStyles from "./style";
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
function Index() {
  const classes = useStyles();
  return (
    <div className={classes.shadow3}>
      <CssBaseline />
      <Container align="center">
        <img src={SudokuGif} />
        <Typography variant="h3" component="h1" className={classes.appName}>
          {APP_NAME} <span style={{ color: "#16db08" }}>{APP_VERSION}</span>
        </Typography>
        <Container className={classes.marginTop}>
          <Link to='/dashboard' style={{textDecoration: 'none'}}>
        <Button size="large" variant="contained" color="primary" startIcon={<PlayCircleOutlineIcon/>} className={classes.playButtons}>
          Play
        </Button>
        </Link>
        <Button size="large" variant="contained" color="secondary" startIcon={<CalendarTodayIcon />}>
          Challenge
        </Button>
        </Container>
      </Container>
    </div>
  );
}

export default Index;
