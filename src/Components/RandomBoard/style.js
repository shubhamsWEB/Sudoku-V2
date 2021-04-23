import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  table: {
    position: "relative",
    [theme.breakpoints.up("sm")]: {
      width: 550,
      margin: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      margin: 0,
      transform: "scale(.95)",
    },
  },
  board: {
    marginTop: "15px",
  },
  cellBorder: {
    border: "1px solid #000",
  },
  bgDark: {
    background: "#fff",
  },
  activeRowColCell: {
    background: "#B2E6FB",
    transition: "background .3s linear",
  },
  activeCell: {
    background: "#47baf5",
    transition: "background .3s linear",
  },
  redText: {
    color: "#b22222 !important",
    fontWeight: "bold",
  },
  greenText: {
    color: "green !important",
    fontWeight: "bold",
  },
  borderRight: {
    borderRight: "2px solid #000 !important",
  },
  borderBottom: {
    borderBottom: "2px solid #000 !important",
  },
  marginTop: {
    margin: theme.spacing(2),
  },
  boardNum: {
    fontFamily: "Delius Unicase, cursive",
    fontSize: "18px",
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    background: "rgba( 255, 255, 255, 0.25 )",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur( 4px )",
    zIndex: "11",
  },
  pausebtn: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
}));
export default useStyles;
