import React from "react";
import Grid from "@material-ui/core/Grid";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import useStyles from "./style";
import Avatar from '@material-ui/core/Avatar';

export default function ToggleButtonSizes({handleChange,inputNum}) {
    const classes = useStyles();
  
  return (
    <Grid  container spacing={2} direction="column" alignItems="center">
      <Grid item className={classes.root}>
        <ToggleButtonGroup
        size="small"
          value={inputNum}
          exclusive
          onChange={handleChange}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => {
            return (
              <ToggleButton disableRipple value={num} className={classes.toggleButton}>
               <Avatar className={classes.numberAvatar}>{num}</Avatar>
              </ToggleButton>
            );
          })}
        </ToggleButtonGroup>
      </Grid>
    </Grid>
  );
}
