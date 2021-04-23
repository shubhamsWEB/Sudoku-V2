import {  Paper } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
import TimerIcon from '@material-ui/icons/Timer';
function MyStopwatch({
  seconds,
  minutes,
  hours,
  days,
  isRunning,
  start,
  pause,
  reset,
}) {
  const classes = useStyles();
  return (
    <div className={classes.timerContainer}>
      <center>
      <div className={classes.timerFont}>
        <Paper className={classes.time} elevation={1}>
        <span> <TimerIcon/> {("0" + minutes).slice(-2)}</span>:
        <span>{("0" + seconds).slice(-2)}</span>
      </Paper>
      </div>
    </center>
    </div>
  );
}
export default MyStopwatch;
