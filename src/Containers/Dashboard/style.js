import {makeStyles} from '@material-ui/core';
const useStyles = makeStyles({
    root: {
      minWidth: 275,
    borderRadius: "10px",
    boxShadow: "6px 6px 16px #fff ,6px 6px 16px #d1cdc7"
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    heading : {
        margin: '50px'
    }
  });
  export default useStyles;