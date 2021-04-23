import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(2),
    },
    [theme.breakpoints.down("sm")]: {
      "& > *": {
        margin: theme.spacing(2),
      },
    },
  },
  numberAvatar: {
    color: '#4051B5',
    boxShadow: "2px 2px 2px 2px lightgrey",
    [theme.breakpoints.down("sm")]: {
      width: "38px",
      height: "38px",
      margin: "1.5px",
    },
    width: "55px",
    height: "55px",
    margin: "3.5px",
    fontFamily: "Delius Unicase, cursive",
    background: "#fff",
    fontWeight: '700'
  },
  toggleButton: {
    padding: 0,
    border: "none",
    margin: 0,
    "&:hover": {
      background: "transparent",
    },
  },
}));
export default useStyles;
