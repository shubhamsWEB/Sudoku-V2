import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    timerFont: {
        fontSize: '1.8rem',
        textAlign: "center",
        fontFamily: 'Delius Unicase, cursive',
        width: "150px",
    },
    timerContainer: {
        textAlign: 'center',
        alignItems:'center'
    },
    time: {
        margin: '10px 0px 5px 0px',

    }
  }));
export default useStyles; 
