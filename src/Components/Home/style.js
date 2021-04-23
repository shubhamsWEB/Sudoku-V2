import {makeStyles} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    shadow3 :{
        backgroundImage: `url("http://www.commixturesoft.com/img/shadow3.png")`,
        backgroundRepeat: "no-repeat",
        height: '100vh',
        marginTop: '20px !important',
    },
    playButtons: {
        margin: theme.spacing(1),
    },
    marginTop: {
        marginTop: theme.spacing(3),
    },
    appName: {
        marginTop: '20px',
        fontFamily: 'Concert One, cursive'
    }
}))
export default useStyles;