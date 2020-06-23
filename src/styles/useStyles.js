import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  nav: {
    height: "100px",
    textAlign: "center",
  },
  typo: {
    fontSize: "48px",
    userSelect: "none",
  },
  middle: {
    width: "100%",
    minHeight: "50px",
    display: "flex",
    flexDirection: "column",
  },
  first: {
    padding: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  writer: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: "400px",
    height: "220px",
    padding: "20px",
    borderRadius: "16px",
    transition: ".2s",
    justifyContent: "space-around",
    boxShadow: "0 0 10px -1px rgba(0,0,0,0.35)",
    "&:hover": {
      boxShadow: "0 0 16px -1px rgba(0,0,0,0.35)",
    },
  },
  input: {
    width: "70%",
    margin: "0 auto",
    border: "none",
  },
  button: {
    position: "absolute",
    bottom: "-25px",
    right: "10%",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: "blue",
    padding: "8px",
    color: "white",
    fontSize: "16px",
    outline: "none",
    border: "0",
    boxShadow: "0 0 10px -1px rgba(0,0,0,0.35)",
    transition: ".3s",
    userSelect: "none",
    "&:hover": {
      transform: "scale(1.005) rotate( 180deg )",
      fontSize: "32px",
      color: "blue",
      backgroundColor: "rgb( 255 , 255 , 255 )",
    },
    "&:active": {
      backgroundColor: "blue",
      color: "white",
    },
  },
  deleteButton: {
    position: "absolute",
    bottom: "-15px",
    right: "5%",
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    backgroundColor: "red",
    padding: "6px",
    color: "white",
    fontSize: "10px",
    outline: "none",
    border: "0",
    boxShadow: "0 0 10px -1px rgba(0,0,0,0.35)",
    transition: ".3s",
    userSelect: "none",
    "&:hover": {
      transform: "scale(1.005)",
      fontSize: "8px",
      color: "red",
      backgroundColor: "rgb( 255 , 255 , 255 )",
    },
    "&:active": {
      backgroundColor: "red",
      color: "white",
    },
  },
  second: {
    display: "flex",
    width: "100%",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  simpleCover: {
    display: "inline-block",
    height: "220px",
    padding: "15px",
  },
  simpleCard: {
    position:"relative",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    margin: "0",
    padding: "15px",
    width: "350px",
    height: "100%",
    borderRadius: "8px",
    boxShadow: "0 0 10px -1px rgba(0,0,0,0.35)",
  },
  readyTitle: {
    width: "100%",
    height: "40%",
    fontSize: "1.3em",
    fontWeight: "600",
    zIndex: "-1",
    overflow: "hidden",
  },
  readyNote: {
    overflow: "auto",
    width: "100%",
    height: "60%",
  },
});
