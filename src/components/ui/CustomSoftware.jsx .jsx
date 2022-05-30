import React from "react";

import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@mui/styles";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

import backArrow from "../../assets/backArrow.svg";
import forwardArrow from "../../assets/forwardArrow.svg";
import lightbulb from "../../assets/bulb.svg";
import cash from "../../assets/cash.svg";
import stopwatch from "../../assets/stopwatch.svg";

const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: "40em !important",
  },
  arrowContainer: {
    marginTop: "0.5em !important",
  },
  mainContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    paddingTop: "2em",
    paddingBottom: "10em",
  },
}));

function CustomSoftware(props) {
  const classes = useStyles();

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item container direction="row">
        <Grid item className={classes.arrowContainer} style={{ marginRight: "1em", marginLeft: "-3.5em" }}>
          {/* <IconButton style={{ backgroundColor: "transparent" }}>
            <img src={backArrow} alt="back to service page" />
          </IconButton> */}
          <IconButton
            style={{ backgroundColor: "transparent" }}
            component={Link}
            to="/services"
            onClick={() => props.selectedIndex(0)}
          >
            <img src={backArrow} alt="Back to Services Page" />
          </IconButton>
        </Grid>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography variant="h2">Custom Software Development</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque distinctio, magnam mollitia, ex deleniti
              doloremque voluptas unde praesentium voluptates ab veniam iure dolorum aperiam cum quasi fugit
              perferendis, consequuntur maiores qui obcaecati? Doloremque, nihil reprehenderit animi et incidunt illum?
              Culpa!
            </Typography>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores doloribus necessitatibus iure, aliquam
              fugit modi quis? Assumenda laudantium voluptas molestiae eos odit quisquam eum? Voluptatum corrupti soluta
              labore et officia totam illo harum, tempore, facilis, voluptatem inventore rem. Totam tempore sapiente
              sunt harum corporis ea iusto nisi inventore explicabo veniam.
            </Typography>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi cupiditate vel non iste! Eligendi autem
              eum inventore unde delectus cumque cupiditate enim neque, dignissimos assumenda veritatis. Necessitatibus,
              perferendis. Corrupti, nihil.
            </Typography>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, illum!
            </Typography>
          </Grid>
        </Grid>
        <Grid item className={classes.arrowContainer}>
          <IconButton
            style={{ backgroundColor: "transparent" }}
            component={Link}
            to="/mobileapps"
            onClick={() => props.selectedIndex(2)}
          >
            <img src={forwardArrow} alt="Forward to Ios/Android" />
          </IconButton>
        </Grid>
      </Grid>
      <Grid item container direction="row" justifyContent="center" style={{ marginTop: "15em", marginBottom: "20em" }}>
        <Grid item container direction="column" md alignItems="center" style={{ maxWidth: "40em" }}>
          <Grid item>
            <Typography variant="h4">Save Entergy</Typography>
          </Grid>
          <Grid item>
            <img src={lightbulb} alt="lightbulb" />
          </Grid>
        </Grid>
        <Grid item container direction="column" md alignItems="center" style={{ maxWidth: "40em" }}>
          <Grid item>
            <Typography variant="h4">Save Time</Typography>
          </Grid>
          <Grid item>
            <img src={stopwatch} alt="stopwatch" />
          </Grid>
        </Grid>
        <Grid item container direction="column" md alignItems="center" style={{ maxWidth: "40em" }}>
          <Grid item>
            <Typography variant="h4">Save Mony</Typography>
          </Grid>
          <Grid item>
            <img src={cash} alt="cash" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item container direction="row">
        <Grid item container>
          <Grid item container direction="column">
            <Grid item>
              <Typography variant="h4">Digital Document</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">Lorem ipsum dolor sit amet.</Typography>
              <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipisicing.</Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, molestiae.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CustomSoftware;
