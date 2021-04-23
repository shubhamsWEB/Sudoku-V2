import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import useStyles from "./style";
import clsx from "clsx";
import ButtonGroup from "../ButtonGroup";
import StopWatch from "../StopWatch";
import { Typography, Button } from "@material-ui/core";
import RestoreIcon from "@material-ui/icons/Restore";
import PauseIcon from "@material-ui/icons/Pause";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseCircleOutlineOutlinedIcon from "@material-ui/icons/PauseCircleOutlineOutlined";
export default function BasicTable({
  board,
  puzzle,
  seconds,
  minutes,
  hours,
  days,
  isRunning,
  start,
  pause,
  reset,
  handelOnEdit,
  handleButtonValueChange,
  inputNum,
  activeIndex,
  OnUndo,
}) {
  const classes = useStyles();
  return (
    <div className={classes.board}>
      <StopWatch
        seconds={seconds}
        minutes={minutes}
        hours={hours}
        days={days}
        isRunning={isRunning}
        start={start}
        pause={pause}
        reset={reset}
      />
      <TableContainer component={Paper} elevation={5} className={classes.table}>
        {!isRunning ? (
          <div className={classes.overlay}>
            <div className={classes.pausebtn}>
              <PauseCircleOutlineOutlinedIcon fontSize="large" />
            </div>
          </div>
        ) : null}
        <Table className={classes.table} aria-label="simple table">
          <TableBody>
            {puzzle.map((row, r) => (
              <TableRow key={r}>
                {row.map((num, c) => {
                  let acvtiveRowColClass = `${
                    r === activeIndex.row || c === activeIndex.col
                      ? `${classes.activeRowColCell}`
                      : ""
                  }`;
                  let acvtiveCellClass = `${
                    r === activeIndex.row && c === activeIndex.col
                      ? `${classes.activeCell}`
                      : ""
                  }`;
                  return (
                    <>
                      <TableCell
                        id={`pos-${r}${c}`}
                        key={c}
                        onClick={
                          num.value === 0
                            ? () => handelOnEdit(num.value, r, c)
                            : null
                        }
                        align="center"
                        className={clsx(
                          classes.cellBorder,
                          classes.bgDark,
                          acvtiveRowColClass,
                          acvtiveCellClass,
                          c === 2 || c === 5 ? classes.borderRight : "",
                          r === 2 || r === 5 ? classes.borderBottom : ""
                        )}
                      >
                        <Typography
                          variant="subtitle2"
                          component="span"
                          className={
                            !num.isPrefilled
                              ? puzzle[r][c].value === board[r][c].value
                                ? `${classes.greenText}`
                                : `${classes.redText}`
                              : ""
                          }
                        >
                          <span className={classes.boardNum}>
                            {num.value === 0 ? "" : num.value}
                          </span>
                        </Typography>
                      </TableCell>
                    </>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ButtonGroup handleChange={handleButtonValueChange} inputNum={inputNum} />
      <center>
        <Button
          variant="contained"
          color="primary"
          onClick={() => OnUndo()}
          className={classes.marginTop}
        >
          <RestoreIcon /> Undo
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={isRunning ? pause : start}
          className={classes.marginTop}
        >
          {isRunning ? <PauseIcon /> : <PlayArrowIcon />}{" "}
          {isRunning ? "Pause" : "Start"}
        </Button>
      </center>
    </div>
  );
}
