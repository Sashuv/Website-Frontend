import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50px",
    backgroundColor: "#333",
    color: "#fff",
    padding: "0 10px",
  },
  icon: {
    marginRight: "10px",
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FacebookIcon className={classes.icon} />
      <InstagramIcon className={classes.icon} />
      <span>Follow us on social media</span>
    </div>
  );
}

export default Footer;
