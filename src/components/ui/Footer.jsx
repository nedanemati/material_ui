import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

import footerAdornment from "../../assets/Footer Adornment.svg";

import Grid from "@mui/material/Grid";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    zIndex: 1302,
    position: "relative",
  },
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: { width: "21em" },
    [theme.breakpoints.down("xs")]: { width: "15em" },
  },
  mainContainer: {
    position: "absolute",
  },
  link: {
    color: "white",
    fontSize: "0.75rem",
    fontFamily: "Arial",
    fontWeight: "bold",
    textDecoration: "none",
  },
  gridItem: { margin: "3em !important" },
}));
const Footer = (props) => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Grid container justifyContent="center" className={classes.mainContainer}>
        {/* Home */}
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item onClick={() => props.setValue(0)} component={Link} to="/" className={classes.link}>
              Home
            </Grid>
          </Grid>
        </Grid>

        {/* services */}

        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(0);
              }}
              component={Link}
              to="/services"
              className={classes.link}
            >
              Services
            </Grid>

            <Grid
              item
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(1);
              }}
              component={Link}
              to="/customsoftware"
              className={classes.link}
            >
              Custom software development
            </Grid>
            <Grid
              item
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(2);
              }}
              component={Link}
              to="/mobileapps"
              className={classes.link}
            >
              ios/ Android App development
            </Grid>
            <Grid
              item
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(3);
              }}
              component={Link}
              to="/websites"
              className={classes.link}
            >
              Website Development
            </Grid>
          </Grid>
        </Grid>

        {/*  Revolortion*/}
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item onClick={() => props.setValue(2)} component={Link} to="/revolotion" className={classes.link}>
              The Recolotion
            </Grid>
            <Grid item onClick={() => props.setValue(2)} component={Link} to="/revolotion" className={classes.link}>
              Vision
            </Grid>
            <Grid item onClick={() => props.setValue(2)} component={Link} to="/revolotion" className={classes.link}>
              Technology
            </Grid>
            <Grid item onClick={() => props.setValue(2)} component={Link} to="/revolotion" className={classes.link}>
              Process
            </Grid>
          </Grid>
        </Grid>
        {/*  About As  */}
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item onClick={() => props.setValue(3)} component={Link} to="/about" className={classes.link}>
              About As
            </Grid>
            <Grid item onClick={() => props.setValue(3)} component={Link} to="/about" className={classes.link}>
              History
            </Grid>
            <Grid item onClick={() => props.setValue(3)} component={Link} to="/about" className={classes.link}>
              Team
            </Grid>
          </Grid>
        </Grid>
        {/* {/Contact Us/} */}
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item onClick={() => props.setValue(4)} component={Link} to="/contact" className={classes.link}>
              Contact Us
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <img alt="black decorative slash" src={footerAdornment} className={classes.adornment} />
    </footer>
  );
};

export default Footer;
